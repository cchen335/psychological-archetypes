// src/lib/emailTemplate.ts

type ArchetypeEmailItem = {
  key: string;
  label: string;
  role: string;
  strength: string;
  shadow: string;
};

export function generateArchetypeEmailHTML({
  items,
  combinedNarrative,
  domain,
}: {
  items: ArchetypeEmailItem[];
  combinedNarrative: string;
  domain: string;
}) {
  // 确保没有尾部斜杠，避免重复 //
  const baseUrl = (domain || "").replace(/\/+$/, "");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Junge font -->
  <link href="https://fonts.googleapis.com/css2?family=Junge&display=swap" rel="stylesheet" />

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
      padding: 40px 20px;
    }

    h1 {
      text-align: center;
      font-size: 28px;
      margin-bottom: 40px;
      letter-spacing: 0.05em;
    }

    .cards {
      display: flex;
      gap: 24px;
      justify-content: center;
      margin-bottom: 40px;
    }

    .card {
      background: #fafafa;
      border-radius: 14px;
      padding: 14px;
      width: 30%;
      min-width: 160px;
      text-align: left;
    }

    .card img {
      width: 100%;
      display: block;
      border-radius: 12px;
      margin-bottom: 12px;
    }

    .label {
      letter-spacing: 0.28em;
      font-size: 12px;
      margin-bottom: 6px;
      color: #444444;
    }

    .role {
      font-size: 12px;
      color: #888888;
      margin-bottom: 12px;
    }

    .traits {
      font-size: 12px;
      color: #777777;
      margin-bottom: 20px;
      line-height: 1.6;
    }

    h2 {
      font-size: 20px;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 30px;
    }

    .narrative {
      max-width: 780px;
      margin: 0 auto;
      font-size: 14px;
      color: #333333;
      line-height: 1.8;
    }

    @media (max-width: 600px) {
      .cards { flex-direction: column; }
      .card { width: 100%; }
    }
  </style>
</head>

<body>
  <div class="container">

    <h1>YOUR ARCHETYPAL CONSTELLATION</h1>

    <div class="cards">
      ${items
        .map(
          (i) => `
        <div class="card">
          <img src="${baseUrl}/archetypes/${i.key}.webp" alt="${i.label}" />
          <div class="label">${i.label.toUpperCase()}</div>
          <div class="role">${i.role}</div>
          <div class="traits">
            <strong>STRENGTH</strong><br />${i.strength}<br/><br/>
            <strong>SHADOW</strong><br />${i.shadow}
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
