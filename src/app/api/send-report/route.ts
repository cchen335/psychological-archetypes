// src/app/api/send-report/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// archetypes.ts 只负责基本信息 + key 类型
import { ARCHETYPE_INFO, ArchetypeKey } from "@/lib/archetypes";

// archetypeDescriptions.ts 负责三段 narrative 文案
import {
  archetypeDescriptions,
  generateCombinedNarrative,
} from "@/lib/archetypeDescriptions";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.REPORT_FROM_EMAIL || "report@resend.dev";
const PUBLIC_DOMAIN =
  process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

export async function POST(req: NextRequest) {
  try {
    if (!FROM) {
      console.error("FROM email missing");
      return NextResponse.json(
        { error: "FROM email missing" },
        { status: 500 }
      );
    }

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
    );

    let combinedNarrative: string =
      typeof body.combinedNarrative === "string"
        ? body.combinedNarrative
        : generateCombinedNarrative(
            keys[0] as ArchetypeKey,
            keys[1] as ArchetypeKey,
            keys[2] as ArchetypeKey
          );

    // 补齐每个 archetype 的信息（label / role / strength / shadow / paragraph / image）
    const safeArchetypes = [a1, a2, a3].map((a: any, index) => {
      const key = keys[index];
      const info = ARCHETYPE_INFO[key as ArchetypeKey];

      const label =
        a?.label || info?.name || "Archetype";
      const role =
        a?.role ||
        (index === 0
          ? "Dominant"
          : index === 1
          ? "Auxiliary"
          : "Potential");
      const strength =
        a?.strength || info?.strength || "";
      const shadow =
        a?.shadow || info?.shadow || "";
      const paragraph =
        a?.paragraph ||
        archetypeDescriptions[key as ArchetypeKey] ||
        "";

      const imagePath =
        a?.image || info?.image || `/archetypes/${key}.webp`;
      const imageUrl = `${PUBLIC_DOMAIN}${
        imagePath.startsWith("/") ? "" : "/"
      }${imagePath.replace(/^\/+/, "")}`;

      return {
        key,
        label,
        role,
        strength,
        shadow,
        paragraph,
        imageUrl,
      };
    });

    const cardsHtml = safeArchetypes
      .map(
        (a) => `
        <td style="padding:0 12px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="border-radius:32px;border:1px solid #edf0f5;overflow:hidden;width:210px;">
            <tr>
              <td style="background:#f8fafc;height:260px;">
                <img
                  src="${a.imageUrl}"
                  alt="${a.label}"
                  width="210"
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

    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "Your ArcheVoyage archetype constellation",
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Send report error:", err);
    return NextResponse.json(
      { error: "Failed to send report" },
      { status: 500 }
    );
  }
}
