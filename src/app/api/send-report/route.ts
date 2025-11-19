// src/app/api/send-report/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { ARCHETYPE_INFO, ArchetypeKey } from "@/lib/archetypes";
import {
  archetypeDescriptions,
  generateCombinedNarrative,
} from "@/lib/archetypeDescriptions";

// ---------- 基础配置 ----------

// Resend 实例
const resend = new Resend(process.env.RESEND_API_KEY);

// 发件人：优先用环境变量，没有就退回默认值
const FROM =
  process.env.REPORT_FROM_EMAIL || "ArcheVoyage <report@resend.dev>";

// 站点域名：用于拼接图片 URL
const RAW_DOMAIN =
  process.env.NEXT_PUBLIC_DOMAIN ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://psychological-archetypes.vercel.app";

// 去掉结尾多余的 /，保证后面拼接时是  https://xxx.xxx  + /archetypes/xxx.webp
const BASE_URL = RAW_DOMAIN.replace(/\/+$/, "");

// ---------- 路由处理 ----------

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const email = body.email as string | undefined;
    const archetypesRaw = Array.isArray(body.archetypes)
      ? body.archetypes
      : [];

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (archetypesRaw.length < 3) {
      return NextResponse.json(
        { error: "Not enough archetypes" },
        { status: 400 }
      );
    }

    const [a1, a2, a3] = archetypesRaw;

    const keys = [a1, a2, a3].map((a: any) =>
      String(a?.key ?? "").toLowerCase()
    ) as ArchetypeKey[];

    const combinedNarrative =
      typeof body.combinedNarrative === "string" &&
      body.combinedNarrative.trim().length > 0
        ? body.combinedNarrative
        : generateCombinedNarrative(keys[0], keys[1], keys[2]);

    // ---------- 整理每个 archetype 的信息 + 图片 URL ----------

    const safeArchetypes = keys.map((key, index) => {
      const raw = archetypesRaw[index];
      const info = ARCHETYPE_INFO[key];

      const label = raw?.label ?? info?.name ?? "Archetype";
      const role =
        raw?.role ??
        (index === 0 ? "Dominant" : index === 1 ? "Auxiliary" : "Potential");
      const strength = raw?.strength ?? info?.strength ?? "";
      const shadow = raw?.shadow ?? info?.shadow ?? "";
      const paragraph =
        raw?.paragraph ?? archetypeDescriptions[key] ?? "";

      // 图片路径：优先用传进来的 > 配置里的 > 默认 /archetypes/${key}.webp
      const rawImagePath =
        raw?.image ?? info?.image ?? `/archetypes/${key}.webp`;

      // 统一成形如：/archetypes/lover.webp
      const normalizedPath =
        "/" + String(rawImagePath).replace(/^\/+/, "");

      // 最终 URL： https://psychological-archetypes.vercel.app/archetypes/lover.webp
      const imageUrl = `${BASE_URL}${normalizedPath}`;

      return { key, label, role, strength, shadow, paragraph, imageUrl };
    });

    // ---------- 上方三张卡片 HTML（带图片） ----------

    const cardsHtml = safeArchetypes
      .map(
        (a) => `
          <td align="center" valign="top" style="padding:0 12px;">
            <table role="presentation" cellpadding="0" cellspacing="0" style="border-radius:32px;border:1px solid #edf0f5;overflow:hidden;width:210px;">
              <tr>
                <td style="background:#f8fafc;height:260px;">
                  <img
                    src="${a.imageUrl}"
                    alt="${a.label}"
                    width="210"
                    height="260"
                    style="display:block;width:100%;height:260px;object-fit:cover;border-top-left-radius:32px;border-top-right-radius:32px;"
                  />
                </td>
              </tr>
              <tr>
                <td style="background:#ffffff;padding:20px 20px 24px;text-align:left;">
                  <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px;letter-spacing:0.28em;text-transform:uppercase;color:#111827;margin-bottom:4px;">
                    ${a.label}
                  </div>
                  <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#9ca3af;margin-bottom:16px;">
                    ${a.role}
                  </div>

                  <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#9ca3af;margin-bottom:4px;">
                    Strength
                  </div>
                  <div style="font-family:Georgia,'Times New Roman',serif;font-size:13px;line-height:1.5;color:#4b5563;margin-bottom:10px;">
                    ${a.strength}
                  </div>

                  <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#9ca3af;margin-bottom:4px;">
                    Shadow
                  </div>
                  <div style="font-family:Georgia,'Times New Roman',serif;font-size:13px;line-height:1.5;color:#4b5563;">
                    ${a.shadow}
                  </div>
                </td>
              </tr>
            </table>
          </td>`
      )
      .join("");

    // ---------- 下方三段长文案 HTML ----------

    const detailsHtml = safeArchetypes
      .map(
        (a) => `
          <tr>
            <td style="padding-top:32px;">
              <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px;letter-spacing:0.2em;text-transform:uppercase;color:#6b7280;margin-bottom:10px;">
                ${a.label} · ${a.role}
              </div>
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.75;color:#111827;">
                ${a.paragraph}
              </div>
            </td>
          </tr>`
      )
      .join("");

    // ---------- 整封邮件 HTML ----------

    const html = `<!doctype html>
<html>
  <body style="margin:0;padding:32px 0;background:#ffffff;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="640" style="background:#ffffff;border-radius:32px;padding:48px 64px;">
            <tr>
              <td style="text-align:center;padding-bottom:32px;">
                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:13px;letter-spacing:0.32em;text-transform:uppercase;color:#111827;">
                  Your archetypal constellation
                </div>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding-bottom:32px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    ${cardsHtml}
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding-top:8px;">
                <div style="font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.8;color:#1f2933;font-style:italic;text-align:left;">
                  ${combinedNarrative}
                </div>
              </td>
            </tr>

            ${detailsHtml}

            <tr>
              <td style="padding-top:32px;">
                <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:12px;line-height:1.6;color:#9ca3af;text-align:left;">
                  Anything that resonates — you can always return to the site and retake the test as your story evolves.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    // ---------- 发送邮件 ----------

    const sendResult = await resend.emails.send({
      from: FROM,
      to: email,
      subject: "Your ArcheVoyage archetype constellation",
      html,
    });

    console.log("Resend send result >>>", JSON.stringify(sendResult, null, 2));

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Send report error:", err);
    return NextResponse.json(
      { error: "Failed to send report" },
      { status: 500 }
    );
  }
}
