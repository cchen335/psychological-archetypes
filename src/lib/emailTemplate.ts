export function generateArchetypeEmailHTML({ items, combinedNarrative, domain }: any) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Junge 字体 -->
  <link href="https://fonts.googleapis.com/css2?family=Junge&display=swap" rel="stylesheet">

  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Junge', serif;
      background: #ffffff;
      color: #111;
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
      text-align: center;
    }

    .card img {
      width: 100%;
      border-radius: 12px;
      margin-bottom: 12px;
    }

    .label {
      letter-spacing: 0.28em;
      font-size: 12px;
      margin-bottom: 6px;
      color: #444;
    }

    .role {
      font-size: 12px;
      color: #888;
      margin-bottom: 12px;
    }

    .traits {
      font-size: 12px;
      color: #777;
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
      color: #333;
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

    <h1>Your archetypal constellation.</h1>

    <div class="cards">
      ${items
        .map(
          (i: any) => `
        <div class="card">
          <img src="${domain}/archetypes/${i.key}.webp" alt="${i.key}" />
          <div class="label">${i.label.toUpperCase()}</div>
          <div class="role">${i.role}</div>
          <div class="traits">
            <strong>strength:</strong> ${i.strength}<br/>
            <strong>shadow:</strong> ${i.shadow}
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
