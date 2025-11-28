import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ARCHETYPE_INFO, generateNarrative, getArchetypeDescription } from "@/lib/archetypeDescriptions";

export async function POST(request: NextRequest) {
  try {
    const { email, archetypes, roles } = await request.json();

    if (!email || !archetypes || archetypes.length < 3) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Gmail SMTP 配置
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 获取三个原型的详细信息
    const [first, second, third] = archetypes;
    const firstInfo = ARCHETYPE_INFO[first];
    const secondInfo = ARCHETYPE_INFO[second];
    const thirdInfo = ARCHETYPE_INFO[third];
    
    // 获取角色标签
    const firstRole = roles?.[0] || "DOMINANT";
    const secondRole = roles?.[1] || "AUXILIARY";
    const thirdRole = roles?.[2] || "POTENTIAL";

    // 生成融合 Narrative
    const narrative = generateNarrative(archetypes);
    
    // 获取详细描述
    const firstDesc = getArchetypeDescription(first);
    const secondDesc = getArchetypeDescription(second);
    const thirdDesc = getArchetypeDescription(third);

    // 构建邮件 HTML
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your ArcheVoyage Results</title>
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <!-- 外层容器 -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f9fafb;padding:40px 20px;">
    <tr>
      <td align="center">
        <!-- 主内容卡片 -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.05);">
          
          <!-- 问候语 -->
          <tr>
            <td style="padding:40px 40px 32px 40px;">
              <h2 style="margin:0 0 16px 0;font-size:24px;font-weight:600;color:#111827;">Hello there 👋</h2>
              <p style="margin:0 0 16px 0;font-size:15px;line-height:1.6;color:#374151;">
                Thank you for taking the time to explore your psychological landscape with us. Your journey through the archetypes reveals something profound — the patterns and stories that shape who you are.
              </p>
              <p style="margin:0;font-size:15px;line-height:1.6;color:#374151;">
                Below, you'll find your unique archetypal constellation. We hope this brings clarity, inspiration, and a deeper understanding of yourself.
              </p>
            </td>
          </tr>

          <!-- 标题：YOUR ARCHETYPAL CONSTELLATION -->
          <tr>
            <td style="padding:0 40px 24px 40px;">
              <h3 style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;text-align:center;">
                Your Archetypal Constellation
              </h3>
            </td>
          </tr>

          <!-- 三张卡片 -->
          <tr>
            <td style="padding:0 20px 40px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <!-- 卡片 1 -->
                  <td align="center" valign="top" style="padding:0 10px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:200px;height:460px;border-radius:24px;border:1px solid #e5e7eb;overflow:hidden;">
                      <!-- 图片 - 原比例 280px (1:1.4) -->
                      <tr>
                        <td style="height:280px;padding:0;line-height:0;">
                          <img src="cid:image_${first}" width="200" height="280" alt="${firstInfo.name}" style="display:block;width:200px;height:280px;object-fit:cover;border:none;" />
                        </td>
                      </tr>
                      <!-- 文字内容 - 紧凑 180px -->
                      <tr>
                        <td style="height:180px;padding:16px;vertical-align:top;">
                          <div style="font-size:14px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#111827;margin-bottom:4px;">${firstInfo.name.toUpperCase()}</div>
                          <div style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;margin-bottom:12px;">${firstRole}</div>
                          <div style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#9ca3af;margin-bottom:4px;">STRENGTH</div>
                          <div style="font-size:12px;line-height:1.5;color:#4b5563;margin-bottom:8px;">${firstInfo.strength}</div>
                          <div style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#9ca3af;margin-bottom:4px;">SHADOW</div>
                          <div style="font-size:12px;line-height:1.5;color:#4b5563;">${firstInfo.shadow}</div>
                        </td>
                      </tr>
                    </table>
                  </td>

                  <!-- 卡片 2 -->
                  <td align="center" valign="top" style="padding:0 10px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:200px;height:460px;border-radius:24px;border:1px solid #e5e7eb;overflow:hidden;">
                      <tr>
                        <td style="height:280px;padding:0;line-height:0;">
                          <img src="cid:image_${second}" width="200" height="280" alt="${secondInfo.name}" style="display:block;width:200px;height:280px;object-fit:cover;border:none;" />
                        </td>
                      </tr>
                      <tr>
                        <td style="height:180px;padding:16px;vertical-align:top;">
                          <div style="font-size:14px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#111827;margin-bottom:4px;">${secondInfo.name.toUpperCase()}</div>
                          <div style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;margin-bottom:12px;">${secondRole}</div>
                          <div style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#9ca3af;margin-bottom:4px;">STRENGTH</div>
                          <div style="font-size:12px;line-height:1.5;color:#4b5563;margin-bottom:8px;">${secondInfo.strength}</div>
                          <div style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#9ca3af;margin-bottom:4px;">SHADOW</div>
                          <div style="font-size:12px;line-height:1.5;color:#4b5563;">${secondInfo.shadow}</div>
                        </td>
                      </tr>
                    </table>
                  </td>

                  <!-- 卡片 3 -->
                  <td align="center" valign="top" style="padding:0 10px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:200px;height:460px;border-radius:24px;border:1px solid #e5e7eb;overflow:hidden;">
                      <tr>
                        <td style="height:280px;padding:0;line-height:0;">
                          <img src="cid:image_${third}" width="200" height="280" alt="${thirdInfo.name}" style="display:block;width:200px;height:280px;object-fit:cover;border:none;" />
                        </td>
                      </tr>
                      <tr>
                        <td style="height:180px;padding:16px;vertical-align:top;">
                          <div style="font-size:14px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#111827;margin-bottom:4px;">${thirdInfo.name.toUpperCase()}</div>
                          <div style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;margin-bottom:12px;">${thirdRole}</div>
                          <div style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#9ca3af;margin-bottom:4px;">STRENGTH</div>
                          <div style="font-size:12px;line-height:1.5;color:#4b5563;margin-bottom:8px;">${thirdInfo.strength}</div>
                          <div style="font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#9ca3af;margin-bottom:4px;">SHADOW</div>
                          <div style="font-size:12px;line-height:1.5;color:#4b5563;">${thirdInfo.shadow}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 标题：YOUR UNIQUE PATTERN -->
          <tr>
            <td style="padding:32px 40px 16px 40px;">
              <h3 style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;text-align:center;">
                Your Unique Pattern
              </h3>
            </td>
          </tr>

          <!-- 融合 Narrative -->
          <tr>
            <td style="padding:0 40px 40px 40px;">
              <div style="font-size:15px;line-height:1.8;color:#374151;white-space:pre-line;">
${narrative}
              </div>
            </td>
          </tr>

          <!-- 分隔线 -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background-color:#e5e7eb;"></div>
            </td>
          </tr>

          <!-- 标题：UNDERSTANDING EACH ARCHETYPE -->
          <tr>
            <td style="padding:32px 40px 16px 40px;">
              <h3 style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#9ca3af;text-align:center;">
                Understanding Each Archetype
              </h3>
            </td>
          </tr>

          <!-- 原型 1 详细描述 -->
          <tr>
            <td style="padding:24px 40px;">
              <h4 style="margin:0 0 4px 0;font-size:16px;font-weight:600;color:#111827;">${firstInfo.name.toUpperCase()} · ${firstRole}</h4>
              <p style="margin:0;font-size:14px;line-height:1.8;color:#4b5563;">
                ${firstDesc}
              </p>
            </td>
          </tr>

          <!-- 原型 2 详细描述 -->
          <tr>
            <td style="padding:24px 40px;">
              <h4 style="margin:0 0 4px 0;font-size:16px;font-weight:600;color:#111827;">${secondInfo.name.toUpperCase()} · ${secondRole}</h4>
              <p style="margin:0;font-size:14px;line-height:1.8;color:#4b5563;">
                ${secondDesc}
              </p>
            </td>
          </tr>

          <!-- 原型 3 详细描述 -->
          <tr>
            <td style="padding:24px 40px;">
              <h4 style="margin:0 0 4px 0;font-size:16px;font-weight:600;color:#111827;">${thirdInfo.name.toUpperCase()} · ${thirdRole}</h4>
              <p style="margin:0;font-size:14px;line-height:1.8;color:#4b5563;">
                ${thirdDesc}
              </p>
            </td>
          </tr>

          <!-- 结尾语 -->
          <tr>
            <td style="padding:40px 40px 32px 40px;border-top:1px solid #e5e7eb;">
              <p style="margin:0 0 16px 0;font-size:14px;line-height:1.6;color:#6b7280;">
                We hope this resonates with your experience and offers insight into your journey. Remember, these archetypes are living patterns — they evolve as you do. Feel free to retake the assessment as your story unfolds.
              </p>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#6b7280;">
                With warmth,<br>
                <strong style="color:#111827;">The ArcheVoyage Team</strong>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // 发送邮件（带图片附件）
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Your ArcheVoyage Results — Your Archetypal Constellation ✨",
      html: htmlContent,
      attachments: [
        {
          filename: `${first}.webp`,
          path: `./public/archetypes/${first}.webp`,
          cid: `image_${first}`,
        },
        {
          filename: `${second}.webp`,
          path: `./public/archetypes/${second}.webp`,
          cid: `image_${second}`,
        },
        {
          filename: `${third}.webp`,
          path: `./public/archetypes/${third}.webp`,
          cid: `image_${third}`,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
