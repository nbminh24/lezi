# 🐻 Lezi - English Learning App

Lezi là ứng dụng học tiếng Anh tương tác với giao diện hiện đại, được xây dựng bằng React + TailwindCSS và hiển thị trong iPhone 16 Pro Max frame.



## ✨ Features

### 🎓 Learning Screens
- **10+ Question Types:** Image Select, Text Choice, Sentence Build, Pair Match, Listening, Fill Blank, Dialogue, True/False, Roleplay, Vocab Speaking, Real World
- **Lesson Complete Screen:** XP counting animation, accuracy stats, streak calendar, achievement unlock celebration
- **Map Screen:** Learning path with unit nodes

### 🏆 Gamification
- **Leaderboard:** XP & Streak tabs with podium, rank list, and highlighted user rank
- **Achievements:** Trophy collection with locked/unlocked states, progress tracking
- **Streak System:** Daily streak tracking with calendar visualization

### 💬 AI Companion
- **Chat Screen:** Conversational UI with Lezi AI, grammar correction badges, suggestion chips
- **History Sidebar:** ChatGPT-style thread management with grouped conversations

### 👤 Profile & Settings
- **Profile Screen:** Stats display (Streak, XP, League), achievements, settings access
- **Edit Profile:** Soft form design with avatar upload, name/username/bio editing
- **Settings Screen:** Tactile toggle switches, account management
- **Achievements Screen:** Badge collection gallery with grayscale locked states

### 📱 UI/UX
- **iPhone 16 Pro Max Frame:** Accurate proportions with Dynamic Island
- **Bottom Navigation:** Map, Chat, Home, Rank, Profile tabs
- **Dev Tab:** Quick screen switching for development
- **Smooth Animations:** Count-up effects, pop-ins, 3D buttons

## 🛠 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Icons:** Phosphor React
- **State Management:** React Hooks (useState, useEffect)

## 🚀 Getting Started

### 1. Clone Repository
```bash
git clone https://github.com/nbminh24/lezi.git
cd lezi
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Ứng dụng sẽ mở tại: `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
lezi/
├── src/
│   ├── screens/
│   │   ├── auth/                    # Login, Signup
│   │   ├── onboarding/              # Interest, Goal, Level selection
│   │   ├── home/                    # Dashboard
│   │   ├── map/                     # Learning path map
│   │   ├── learning/
│   │   │   ├── types/               # 11 question type screens
│   │   │   └── LessonCompleteScreen.jsx
│   │   ├── leaderboard/             # XP & Streak rankings
│   │   ├── companion/               # ChatScreen, ChatSidebar
│   │   └── profile/                 # Profile, Achievements, Settings, Edit
│   ├── components/
│   │   ├── layout/                  # BottomNavBar
│   │   ├── dev/                     # DevTab for testing
│   │   └── PhoneFrame.jsx           # iPhone 16 Pro Max frame
│   ├── App.jsx                      # Main routing
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Tailwind imports
├── public/
│   └── avatar.png                   # User avatar image
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🗺️ Screen Navigation

### Authentication Flow
```
Login → Signup → Interest → Goal → Level → Dashboard
```

### Main Navigation (Bottom Bar)
- **Map:** Learning path with units
- **Chat:** AI companion conversation
- **Home:** Dashboard with daily goals
- **Rank:** Leaderboard (XP & Streak)
- **Profile:** User stats, achievements, settings

### Question Types (11 screens)
1. Image Select
2. Text Choice
3. Sentence Build
4. Pair Match
5. Listening
6. Image to Text
7. Fill Blank
8. Listening Type
9. Dialogue
10. True/False
11. Roleplay
12. Vocab Speaking
13. Real World

### Profile Submenu
```
Profile → Edit Profile
       → Achievements → Badge Details
       → Settings → Edit Personal Info
```

## 🎨 Design System

### Colors
- **Primary Blue:** #3E73F9
- **Success Green:** #22C55E
- **Warning Orange:** #F97316
- **Danger Red:** #EF4444
- **Gray Scale:** 50-900

### Typography
- **Font Family:** System UI (Inter-like)
- **Headings:** Bold, Black weights
- **Body:** Regular, Medium weights

### Components
- **Buttons:** 3D effect with border-b depth
- **Cards:** Rounded-2xl with soft shadows
- **Inputs:** Soft gray backgrounds with blue focus
- **Toggles:** Tactile switches with smooth transitions

## 🧪 Development Tools

### DevTab
Click "DEV MODE" button in bottom-right để truy cập DevTab:
- Quick navigation giữa các screens
- Grouped theo categories (Auth, Onboarding, Learning, etc.)
- Không cần đăng nhập để test

### Testing Screens
```jsx
// In DevTab, click any screen button to navigate
authScreens: Login, Signup, Home, Chat, Rank, Profile
onboardingScreens: Step 1-3
learningScreens: All 13 question types + Complete
```

## 🎯 Key Features Implementation

### Achievement System
- **Badge Display:** Locked (grayscale) vs Unlocked (full color)
- **Progress Tracking:** Shows completion percentage
- **Unlock Animation:** Pop-in with sparkles and confetti

### Chat System
- **Message Types:** Bot (white) vs User (blue) bubbles
- **Correction UI:** Orange badges showing grammar fixes
- **Thread History:** Grouped by Today, Yesterday, Previous 7 Days

### Streak Calendar
- **Visual:** 7-day grid with fire icons
- **States:** Past (filled), Today (highlighted), Future (gray)
- **Animation:** Pop-in effect on current day

### 3D Buttons
- **Effect:** border-b for depth
- **Interaction:** translate-y on active
- **Colors:** Contextual (green success, blue primary, red danger)

## 🔧 Customization

### Mock Data
Tất cả screens đều sử dụng mock data. Update trong từng component:
- `ProfileScreen.jsx` - User stats
- `LeaderboardScreen.jsx` - Rankings
- `ChatScreen.jsx` - Conversations
- `AchievementsScreen.jsx` - Badges

### Styling
Colors và spacing được định nghĩa trong Tailwind config:
```js
// tailwind.config.js
theme: {
  extend: {
    colors: { /* custom colors */ },
    spacing: { /* custom spacing */ }
  }
}
```

### Animations
Custom animations trong `index.css` và inline styles:
- `animate-bounce-slow`
- `animate-pop`
- `animate-badge-pop`
- `animate-spin-slow`

## 📱 Browser Compatibility

- **Chrome/Edge:** 90+
- **Firefox:** 88+
- **Safari:** 14+
- **Mobile:** iOS 14+, Android Chrome 90+

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

MIT

## 👨‍💻 Author

**nbminh24**
- GitHub: [@nbminh24](https://github.com/nbminh24)

## 🙏 Acknowledgments

- **Phosphor Icons** - Beautiful icon library
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool

---

Made with ❤️ for English learners worldwide 🌍
