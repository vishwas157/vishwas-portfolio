# Vishwas Suthar — Interactive 3D Developer Portfolio

A premium, modern, mouse-interactive 3D creative developer portfolio built with **React**, **Vite**, **Three.js (React Three Fiber & Drei)**, **GSAP**, **Framer Motion**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 🤖 Adding Your 3D Character Model (`character.glb`)

1. Export your 3D character from Blender (or Mixamo / ReadyPlayerMe) as a `.glb` binary file.
2. Copy your `.glb` file into the `/public/models/` folder and name it `character.glb`:
   ```
   public/models/character.glb
   ```
3. Refresh your browser. Your character will render in real-time inside the 3D scene with dynamic mouse tracking and lighting!

> **Note:** If `character.glb` is not present yet, the portfolio automatically displays an interactive glowing 3D Cyber Core avatar fallback.

---

## ⚙️ Customizing Position, Scale, & Mouse Sensitivity

All 3D settings can be configured inside `src/data/portfolio.js` under the `character3d` object:

```javascript
character3d: {
  modelPath: "/models/character.glb", // Model location
  position: [1.2, -1.3, 0],            // Desktop [X, Y, Z]
  mobilePosition: [0, -1.2, 0],       // Mobile [X, Y, Z]
  scale: 1.2,                         // Desktop Scale multiplier
  mobileScale: 0.85,                  // Mobile Scale multiplier
  rotation: [0, -0.4, 0],             // Base rotation [X, Y, Z]
  maxTurnAngle: 0.45,                 // Mouse turn range
  lerpSpeed: 0.05                      // Smoothness of mouse follow
}
```

---

## ✏️ Editing Portfolio Content (Name, Projects, Skills, Contact)

Everything is centralized in a single file: `src/data/portfolio.js`.

### 1. Personal Details & Hero Text
Update name, role, intro greeting, email, phone, and GitHub links in `personal` and `hero`.

### 2. Projects
Edit `projects` array to add/modify titles, descriptions, technology tags, preview images, and links:
```javascript
{
  id: "frauddms",
  title: "FraudDMS",
  description: "A document management and fraud-related case workflow project...",
  tags: ["React", "Node.js", "MongoDB", "JavaScript"],
  image: "/images/frauddms.png",
  github: "https://github.com/vishwas157/frauddms", // Add real URL when available
  demo: "" // Leave empty to automatically hide button
}
```

### 3. Contact & Social Channels
Update contact info under `contact`. External links (Email mailto, Phone tel, WhatsApp wa.me, and GitHub) will automatically use your specified details.

---

## 🛠️ Troubleshooting Model Loading

- **Model is too large / small:** Adjust `scale` in `src/data/portfolio.js`.
- **Model faces away from camera:** Adjust `rotation: [0, -0.4, 0]` in `src/data/portfolio.js`.
- **Model texture missing:** Ensure textures are embedded inside the `.glb` file before exporting from Blender (File -> Export -> glTF 2.0 -> Format: glTF Binary (.glb)).
- **Rigged Head Movement:** The model automatically detects bones named `head`, `neck`, or `spine` to look at the cursor. If unrigged, it performs smooth whole-model rotation.

---

## 🎨 Tech Stack
- **Framework:** React 19 + Vite 8
- **3D Engine:** Three.js + React Three Fiber + @react-three/drei
- **Styling:** Tailwind CSS + Custom Glassmorphic Dark Theme
- **Animations:** Framer Motion + GSAP
- **Icons:** Lucide React
