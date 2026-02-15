# 茶韻山房 | 台灣精品茶葉

單頁式台灣茶葉形象／銷售網站，使用 Next.js、React、Tailwind CSS 與 shadcn/ui 建置。

---

## 推送到 GitHub

專案已含 Git 與初始提交，若要存到 GitHub：

1. 前往 [github.com/new](https://github.com/new)，建立一個**新倉庫**（例如名稱：`taiwanese-tea-sales`）。
2. **不要**勾選「Add a README file」，直接按 **Create repository**。
3. 在終端機專案目錄執行（請把 `你的帳號`、`你的倉庫名稱` 換成實際值）：

```bash
git remote add origin https://github.com/你的帳號/你的倉庫名稱.git
git branch -M main
git push -u origin main
```

4. 若出現登入提示，請用 GitHub 帳密或 Personal Access Token 完成驗證，完成後程式碼就會出現在 GitHub 上。

---

## 一、本地運行（開發環境）

### 1. 安裝依賴

使用 **npm**（隨 Node.js 安裝，無需額外設定）：

```bash
npm install
```

若已安裝 pnpm，也可用：`pnpm install`

### 2. 啟動開發伺服器

```bash
npm run dev
```

（若用 pnpm：`pnpm dev`）

終端會顯示類似：

```
▲ Next.js 16.x.x
- Local:        http://localhost:3000
```

在瀏覽器開啟 **http://localhost:3000** 即可看到網站。

### 3. 圖片（可選）

若首屏或茶品區圖片無法顯示，請將對應圖片放到 `public/images/`，檔名請參考 `public/images/README.md`。未放圖片時版面仍可正常捲動，僅圖片區會顯示破圖。

---

## 二、建置與預覽正式版

```bash
pnpm build
pnpm start
```

會先編譯專案，再在 `http://localhost:3000` 以正式模式運行，適合上線前本地檢查。

---

## 三、部署到網路（讓大家都能開啟）

### 推薦：Vercel（免費、最簡單）

1. 將專案推上 **GitHub**（若尚未使用 Git）：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # 在 GitHub 建立新 repo 後：
   git remote add origin https://github.com/你的帳號/你的repo.git
   git push -u origin main
   ```

2. 前往 [vercel.com](https://vercel.com) 登入，選擇 **Import** 你的 GitHub repo。

3. 保持預設設定，點 **Deploy**。約一兩分鐘後會得到一個網址（例如 `https://xxx.vercel.app`），即為你的正式網站。

4. 之後每次 `git push` 到該 repo，Vercel 會自動重新部署。

### 其他方式

- **Netlify**：將專案連到 GitHub，Build command 設為 `pnpm build`，Publish directory 設為 `.next` 並使用 Next.js 專用外掛（或照 Netlify 的 Next 說明設定）。
- **自架主機**：在伺服器上執行 `pnpm install`、`pnpm build`、`pnpm start`，並用 Nginx 等反向代理指向該程式的 port（預設 3000）。

---

## 四、讓功能「真的能用」（進階）

目前按鈕與連結僅為版面與導向，若要實際運用可考慮：

| 功能 | 建議做法 |
|------|----------|
| **購物車** | 用 React state（如 Context 或 Zustand）存品項與數量，再實作購物車側欄／頁面與結帳流程。 |
| **聯絡我們** | 在 Footer 聯絡區加入表單，用 Formspree、Getform 等服務收信，或自建 API 寄信。 |
| **後台 / 訂單** | 接資料庫（如 Vercel Postgres、Supabase）與後台頁面，或串接現成電商／金流 API。 |

---

## 指令整理

| 指令 | 說明 |
|------|------|
| `pnpm dev` | 開發模式，支援熱更新 |
| `pnpm build` | 建置正式版 |
| `pnpm start` | 運行建置後的網站 |
| `pnpm lint` | 執行 ESLint 檢查 |

---

## 技術棧

- **框架**：Next.js 16、React 19  
- **樣式**：Tailwind CSS  
- **元件**：shadcn/ui（Radix UI）、lucide-react  
- **語言**：TypeScript  
