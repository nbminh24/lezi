# iPhone 16 Pro Max Profile Card UI

A pixel-perfect React + Tailwind CSS implementation of a modern profile card UI displayed inside an iPhone 16 Pro Max frame.

## Features

- ✅ iPhone 16 Pro Max device frame with accurate proportions (2796 × 1290px, 19.5:9 ratio)
- ✅ Dynamic Island at the top
- ✅ Soft shadow and rounded corners matching iOS design
- ✅ Centered device display (responsive)
- ✅ Modern profile card UI with:
  - Sky/cloud gradient header
  - Follow button with iOS-style pill design
  - Avatar with white border ring
  - Rainbow experience progress bar
  - Profile info section
  - Statistics row (Likes, Posts, Views)
  - Bottom navigation with social icons

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Icons:** Lucide React

## Installation & Running

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### 3. Build for production
```bash
npm run build
```

## Project Structure

```
lezi/
├── src/
│   ├── components/
│   │   ├── PhoneFrame.jsx      # iPhone device frame
│   │   ├── ProfileCard.jsx     # Main profile card container
│   │   ├── TopCard.jsx         # Sky/cloud header card
│   │   ├── Avatar.jsx          # Circular avatar component
│   │   ├── ExpBar.jsx          # Rainbow experience bar
│   │   ├── ProfileInfo.jsx     # Name and description
│   │   ├── StatsRow.jsx        # Likes, Posts, Views
│   │   └── BottomNav.jsx       # Social media icons
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Design Details

### Colors
- **Primary Background:** White (#FFFFFF)
- **Sky Gradient:** Light blue (#a5c9e8 → #d4e7f5)
- **Text Primary:** Black (#000000)
- **Text Secondary:** Gray (#7A7A7A, #6B7280)
- **Borders:** Light Gray (#E5E5E5)

### Typography
- **Name:** 22px, Bold
- **Description:** 15px, Regular
- **Stats Numbers:** 20px, Bold
- **Stats Labels:** 13px, Medium

### Spacing
- Consistent 16px / 20px / 24px rhythm
- Avatar overlap: ~60px from top card
- Border radius: 32px (outer), 42px (device)

## Components Overview

### PhoneFrame
- Creates the iPhone 16 Pro Max device shell
- Black bezel with rounded corners
- Dynamic Island positioned at top center
- Maintains aspect ratio with CSS `aspect-ratio`
- Soft shadow for depth

### ProfileCard
- Main container composing all UI elements
- White background
- Flex column layout

### TopCard
- Sky blue gradient with cloud texture overlay
- Follow button (white pill) in top-right
- Large border radius for iOS aesthetic

### Avatar
- 140px circular avatar
- 3px white border ring
- Overlaps bottom of TopCard
- Placeholder emoji (replace with actual image)

### ExpBar
- Rainbow colored segments
- First 10 segments filled, rest grayed out
- 5px height with rounded ends

### ProfileInfo
- Name: Bold, 22px
- Description: Regular weight, gray color
- Clean spacing and line-height

### StatsRow
- 3 equal columns with vertical borders
- Bold numbers + medium labels
- Centered text alignment

### BottomNav
- 3 social icons: Instagram, X (Twitter), Threads
- Stroke-based icon style
- Equal width columns with borders

## Customization

### Change Profile Data
Edit the content in each component:
- `ProfileInfo.jsx` - Name and description
- `StatsRow.jsx` - Statistics values
- `Avatar.jsx` - Replace emoji with image

### Modify Colors
Update `TopCard.jsx` for background gradient:
```jsx
background: 'linear-gradient(180deg, #yourColor1 0%, #yourColor2 100%)'
```

### Adjust Device Size
Modify `PhoneFrame.jsx`:
```jsx
height: '85vh',  // Change this value
maxHeight: '800px',  // Or this
```

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

MIT

## Notes

- The `@tailwind` CSS warnings in the IDE are expected and won't affect functionality
- Avatar uses emoji placeholder - replace with actual 3D illustration image
- Cloud texture uses CSS blur filters for soft watercolor effect
