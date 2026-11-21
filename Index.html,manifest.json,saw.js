<!DOCTYPE html>
<html lang="rn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#0f172a" />
  <title>Application Yanje</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: system-ui, -apple-system, sans-serif;
    }
    body {
      min-height: 100vh;
      background: #0f172a;
      color: #f8fafc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .card {
      width: 100%;
      max-width: 420px;
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
    }
    h1 {
      font-size: 1.5rem;
      margin-bottom: 8px;
      color: #38bdf8;
    }
    p.subtitle {
      font-size: 0.95rem;
      color: #cbd5e1;
      margin-bottom: 18px;
    }
    .row {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
    }
    input {
      flex: 1;
      padding: 12px 14px;
      border-radius: 10px;
      border: 1px solid #475569;
      background: #0f172a;
      color: #f8fafc;
      font-size: 1rem;
      outline: none;
    }
    input:focus {
      border-color: #38bdf8;
    }
    button {
      padding: 12px 16px;
      border: none;
      border-radius: 10px;
      background: #0284c7;
      color: #ffffff;
      font-weight: 600;
      cursor: pointer;
    }
    button:hover {
      background: #0369a1;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    li {
      background: #0f172a;
      padding: 10px 14px;
      border-radius: 10px;
      border: 1px solid #334155;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.95rem;
    }
    .del {
      background: #dc2626;
      padding: 6px 10px;
      font-size: 0.8rem;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Application Yanje</h1>
    <p class="subtitle">Ibi ubandanya wandika birabikwa muri telefone canke mudasobwa yawe.</p>

    <div class="row">
      <input id="itemInput" type="text" placeholder="Andika ikintu hano..." />
      <button id="addBtn" type="button">Bika</button>
    </div>

    <ul id="itemList"></ul>
  </div>

  <script>
    const STORAGE_KEY = "my_git_app_items_v1";
    const input = document.getElementById("itemInput");
    const addBtn = document.getElementById("addBtn");
    const list = document.getElementById("itemList");

    let items = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    function saveAndRender() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      list.innerHTML = "";
      items.forEach((text, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = text;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Futa";
        delBtn.className = "del";
        delBtn.onclick = () => {
          items.splice(index, 1);
          saveAndRender();
        };

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
      });
    }

    function addItem() {
      const value = input.value.trim();
      if (!value) return;
      items.unshift(value);
      input.value = "";
      saveAndRender();
    }

    addBtn.addEventListener("click", addItem);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addItem();
    });

    saveAndRender();
  </script>
</body>
</html>
  
