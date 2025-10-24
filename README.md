
# 🔗 MERN URL Shortener

A production-ready **URL Shortener** built with the **MERN Stack (MongoDB, Express, React, Node.js)** using **TypeScript**, **Drizzle ORM**, and **Next.js**.
It provides a seamless way to shorten long URLs, track analytics, and manage links — all through a modern, responsive UI.

---
## PHOTO 📸

<img width="2992" height="1644" alt="image" src="https://github.com/user-attachments/assets/e6959dc3-729b-4bc8-9094-6d8effae4cc4" />

<img width="3018" height="1692" alt="image" src="https://github.com/user-attachments/assets/dca83604-78b1-4739-8e42-cb275fa807ca" />

<img width="3022" height="1688" alt="image" src="https://github.com/user-attachments/assets/c8fa41c2-f947-403d-8e25-5d93a6e160bc" />


---

## 🌐 Live Demo

🚀 **Deployed App:** [https://3000-2c61595a-a212-46b1-a7e6-aad01c58e986.orchids.page/](https://3000-2c61595a-a212-46b1-a7e6-aad01c58e986.orchids.page/)

---

## 🖼️ Preview

*(Add screenshots or demo GIFs here)*
Example:

```markdown
![App Screenshot](https://your-screenshot-link.png)
```

---

## ✨ Features

✅ **Shorten URLs instantly** – Generate short, clean, shareable links
📊 **Track analytics** – Count and monitor URL visits
🧩 **Type-safe backend** – Built entirely with TypeScript
⚙️ **Drizzle ORM** – Lightweight, modern database layer
🌍 **Responsive UI** – Optimized for desktop and mobile
🚀 **Fast build & runtime** – Powered by Bun + Next.js
☁️ **Deployed on Orchids** – Cloud-ready and production optimized

---

## 🛠️ Tech Stack

| Layer          | Technologies                            |
| -------------- | --------------------------------------- |
| **Frontend**   | Next.js, React, TypeScript, TailwindCSS |
| **Backend**    | Node.js, Express.js, Drizzle ORM        |
| **Database**   | MongoDB                                 |
| **Build Tool** | Bun                                     |
| **Deployment** | Orchids Platform                        |

---

## 📂 Project Structure

```
📦 URL_shortner
├── drizzle/              # Database ORM setup (Drizzle)
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # React UI components
│   ├── pages/            # Next.js pages
│   ├── lib/              # Utility and helper functions
│   └── server/           # Express backend logic
├── middleware.ts         # Next.js middleware for redirects
├── drizzle.config.ts     # Drizzle ORM configuration
├── next.config.ts        # Next.js configuration
├── .env                  # Environment variables
├── README.md
└── bun.lock / package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/RAJVEER42/URL_shortner.git
cd URL_shortner
```

### 2️⃣ Install dependencies

```bash
bun install   # or npm install
```

### 3️⃣ Environment configuration

Create a `.env` file in the root directory:

```bash
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000
```

### 4️⃣ Run the development server

```bash
bun run dev   # or npm run dev
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

---

## 🧠 How It Works

1. The user enters a **long URL** in the frontend form.
2. The frontend sends a request to the **Express backend API**.
3. The backend:

   * Validates the URL.
   * Generates a unique short code.
   * Saves the mapping to **MongoDB** via **Drizzle ORM**.
4. When a user visits the short link, they are **redirected** to the original URL.
5. Analytics are optionally logged for each visit.

---

## 🧩 API Endpoints

| Method | Endpoint        | Description                  |
| ------ | --------------- | ---------------------------- |
| `POST` | `/api/shorten`  | Create a new shortened URL   |
| `GET`  | `/api/:shortId` | Redirect to the original URL |
| `GET`  | `/api/urls`     | Fetch all shortened URLs     |

Example:

```bash
POST /api/shorten
Content-Type: application/json
{
  "url": "https://example.com"
}
```

Response:

```json
{
  "shortUrl": "https://short.ly/abc123"
}
```

---

## 🧰 Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `bun run dev`   | Run the development server |
| `bun run build` | Build for production       |
| `bun run start` | Start production server    |
| `bun run lint`  | Lint the codebase          |

---

## 🧑‍💻 Development Notes

* Built using **TypeScript** for end-to-end type safety
* **Drizzle ORM** used for schema management and migrations
* Uses **Next.js Middleware** for dynamic redirects
* Frontend styling powered by **TailwindCSS**
* Environment variables managed via `.env`

---

## 🚀 Deployment

This project is deployed on **Orchids Cloud** using Bun for fast builds and startup times.

**Live Deployment:**
👉 [https://3000-2c61595a-a212-46b1-a7e6-aad01c58e986.orchids.page/](https://3000-2c61595a-a212-46b1-a7e6-aad01c58e986.orchids.page/)

To deploy your own instance:

```bash
bun run build
bun run start
```

---

## 📈 Future Enhancements

* [ ] Add user authentication (login to manage links)
* [ ] Add analytics dashboard with charts
* [ ] Support custom short URLs
* [ ] QR code generation
* [ ] API key–based usage limits

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch (`feature/awesome-feature`)
3. Commit your changes
4. Push to your branch and open a PR

---

## 🪪 License

This project is open-source under the **MIT License**.

---

## 🧡 Acknowledgements

* [Next.js](https://nextjs.org/)
* [Drizzle ORM](https://orm.drizzle.team/)
* [MongoDB](https://www.mongodb.com/)
* [TailwindCSS](https://tailwindcss.com/)
* [Bun](https://bun.sh/)

---

~ Rajveer Bishnoi ✨
10404
