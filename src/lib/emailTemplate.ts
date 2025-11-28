// src/lib/emailTemplate.ts

/**
 * 生成 Archetype 报告的 HTML 邮件
 * items: [{ key, label, role, strength, shadow }]
 * combinedNarrative: 综合长文案
 */
export function generateArchetypeEmailHTML({
  items,
  combinedNarrative,
}: any) {
  // 直接写死站点域名，最省心的做法
  const baseUrl = "https://psychological-archetypes.vercel.app";

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <!-- Junge 字体 -->
    <link
      href="https://fonts.googleapis.com/css2?family=Junge&display=swap"
      rel="stylesheet"
    />

    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: 'Junge', serif;
        background: #ffffff;
        color: #111111;
        line-height: 1.7;
      }

      .container {
        max-width: 860px;
        margin: 0 auto;
        padding: 40px 20px 48px;
      }

      h1 {
        text-align: center;
        font-size: 24px;
        letter-spacing: 0.18em;
        margin: 0 0 36px;
      }

      /* 用 inline-block + text-align，兼容邮件客户端 */
      .cards {
        text-align: center;
        font-size: 0; /* 去掉 inline-block 之间的空隙 */
        margin: 0 0 40px;
      }

      .card {
        display: inline-block;
        vertical-align: top;
        width: 30%;
        min-width: 160px;
        max-width: 220px;
        margin: 0 8px;
        background: #fafafa;
        border-radius: 16px;
        overflow: hidden;
        font-size: 13px; /* 恢复文字大小 */
      }

      .card-inner {
        padding: 14px 16px 18px;
        /* 给文字区域一个最小高度，让底部更齐 */
        min-height: 170px;
      }

      /* 固定图片高度，保证三张卡片顶部对齐 */
      .card-image {
        width: 100%;
        height: 180px;
        border-radius: 16px 16px 0 0;
        background: #f4f4f4;
        overflow: hidden;
      }

      .card-image img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 16px 16px 0 0;
        object-fit: cover;
      }

      .label {
        letter-spacing: 0.26em;
        font-size: 11px;
        margin-top: 14px;
        margin-bottom: 4px;
        color: #444444;
      }

      .role {
        font-size: 11px;
        color: #888888;
        margin-bottom: 12px;
      }

      .traits {
        font-size: 11px;
        color: #666666;
        line-height: 1.6;
      }

      .traits strong {
        text-transform: uppercase;
      }

      h2 {
        font-size: 18px;
        text-align: center;
        margin: 0 0 26px;
        letter-spacing: 0.08em;
      }

      .narrative {
        max-width: 780px;
        margin: 0 auto;
        font-size: 14px;
        color: #333333;
        line-height: 1.8;
      }

      @media (max-width: 600px) {
        .card {
          width: 90%;
          max-width: none;
          margin: 0 0 16px;
        }

        .cards {
          text-align: center;
        }
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1>YOUR ARCHETYPAL CONSTELLATION</h1>

      <div class="cards">
        ${items
          .map(
            (i: any) => `
          <div class="card">
            <div class="card-image">
              <img
                src="${baseUrl}/archetypes/${i.key}.webp?v=2"
                alt="${i.label}"
              />
            </div>
            <div class="card-inner">
              <div class="label">${i.label.toUpperCase()}</div>
              <div class="role">${i.role}</div>
              <div class="traits">
                <strong>strength</strong>: ${i.strength}<br/>
                <strong>shadow</strong>: ${i.shadow}
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>

      <h2>${items[0].label} × ${items[1].label} × ${items[2].label}</h2>

      <div class="narrative">
        ${combinedNarrative}
      </div>
    </div>
  </body>
</html>
`;
}
