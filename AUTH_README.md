# Lezi - Authentication Implementation

## iOS 26 Soft 3D Design Language

This authentication flow implements the "iOS 26 Soft 3D" design aesthetic with reusable components.

## 📁 File Structure

```
src/
├── screens/
│   └── auth/
│       ├── LoginScreen.jsx      # Login page with email/password
│       └── SignupScreen.jsx     # Signup page with full name, email, password
├── components/
│   ├── ui/
│   │   ├── SoftInput.jsx        # Reusable pill-shaped input component
│   │   └── SoftButton.jsx       # Reusable soft button with variants
│   └── dev/
│       └── DevTab.jsx           # Developer navigation tool (bottom-right)
└── App.jsx                      # Main app with screen routing
```

## 🎨 Design Specifications

### Color Palette
- **Background**: `#F9FAFB` (Soft off-white)
- **Cards**: `#FFFFFF` (Pure white)
- **Primary Text**: `#1a1a1a` (Near black)
- **Secondary Text**: `#666666` (Medium gray)
- **Tertiary Text**: `#9CA3AF` (Light gray)
- **Borders**: `#E5E5E5` (Hairline gray)
- **Primary Action**: `#1a1a1a` (Black)
- **Accent**: Blue-600 (Links)

### Typography (Geist Font)
- **Title**: Bold, 28px, tracking-tight
- **Body**: Normal, 15px
- **Subtitle**: Normal, 14px
- **Caption**: Medium, 13px
- **Micro**: Medium, 12px

### Shadows
- **Card Shadow**: `0_30px_60px_-10px_rgba(0,0,0,0.08)` (Diffuse)
- **Mascot Shadow**: `0_12px_32px_rgba(0,0,0,0.12)` (Elevated)
- **Button Shadow**: `0_4px_12px_rgba(0,0,0,0.15)` (Soft)
- **DevTab Shadow**: `0_8px_32px_rgba(0,0,0,0.12)` (Floating)

### Border Radius
- **Cards**: `40px` (Super rounded)
- **Inputs**: `9999px` (Full pill shape)
- **Buttons**: `9999px` (Full pill shape)
- **DevTab**: `24px`
- **Mascot**: Full circle with 6px white border

## 🧩 Component Usage

### SoftInput
```jsx
import SoftInput from './components/ui/SoftInput';
import { Mail } from 'lucide-react';

<SoftInput
  type="email"
  placeholder="Email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  icon={Mail}
/>
```

**Props:**
- `type`: Input type (text, email, password)
- `placeholder`: Placeholder text
- `value`: Controlled value
- `onChange`: Change handler
- `icon`: Lucide React icon component (optional)

**Features:**
- Pill-shaped design with rounded-full
- Light gray background (#F3F4F6)
- Focus state with blue ring
- Icon support on the left side
- Smooth transitions

### SoftButton
```jsx
import SoftButton from './components/ui/SoftButton';

<SoftButton onClick={handleLogin} variant="primary">
  Log In
</SoftButton>
```

**Props:**
- `onClick`: Click handler
- `variant`: 'primary' | 'secondary' | 'google'
- `icon`: Lucide React icon component (optional)
- `fullWidth`: Boolean (default: true)
- `disabled`: Boolean (default: false)

**Variants:**
- **primary**: Black background, white text, elevated shadow
- **secondary**: White background, black text, border, soft shadow
- **google**: White background with Google branding

**Features:**
- Active scale animation (scale-95)
- Smooth transitions
- Icon + text support
- Disabled state handling

## 🛠️ DevTab Component

The DevTab is a floating glassmorphism dock fixed at the bottom-right corner.

**Features:**
- Screen navigation: [Login] [Signup] [Profile]
- Active state highlighting
- Backdrop blur effect
- Responsive design (hides labels on mobile)

**Usage in App.jsx:**
```jsx
const [currentScreen, setCurrentScreen] = useState('login');

<DevTab 
  currentScreen={currentScreen} 
  onScreenChange={setCurrentScreen} 
/>
```

## 📱 Screens

### LoginScreen
**Elements:**
- 3D Mascot image (120x120px, /avatar.png)
- Title: "Welcome back!"
- Subtitle: "Continue your English learning journey"
- Email input
- Password input
- "Forgot password?" link
- "Log In" button
- Divider with "OR"
- "Continue with Google" button
- "Sign up" link

### SignupScreen
**Elements:**
- 3D Mascot image (120x120px, /avatar.png)
- Title: "Join Lezi"
- Subtitle: "Start your English learning adventure today"
- Full name input
- Email input
- Password input
- Terms & Privacy links
- "Create Account" button
- Divider with "OR"
- "Continue with Google" button
- "Log in" link

## 🎯 Key Features

1. **iOS 26 Aesthetic**: Soft shadows, rounded corners, clean spacing
2. **Glassmorphism**: DevTab uses backdrop-blur for modern feel
3. **Smooth Animations**: Active states, hover effects, transitions
4. **Accessible**: Proper contrast ratios, focus states
5. **Responsive**: Mobile-first design
6. **Reusable**: Component-based architecture

## 🚀 Running the App

The app automatically loads the LoginScreen on startup.

Use the **DevTab** (bottom-right) to navigate between:
- **Login**: Authentication screen
- **Signup**: Registration screen
- **Profile**: Original profile card demo

## 🔄 State Management

Currently using React useState in App.jsx:
```jsx
const [currentScreen, setCurrentScreen] = useState('login');
```

Navigation functions passed as props to child components:
- `onNavigateToSignup`: Switch to signup
- `onNavigateToLogin`: Switch to login

## 📝 Next Steps

To complete the authentication implementation:

1. **Backend Integration**
   - Connect to authentication API
   - Implement actual login/signup logic
   - Handle JWT tokens

2. **Form Validation**
   - Add client-side validation
   - Display error messages
   - Disable button during submission

3. **Loading States**
   - Add spinner/loading indicator
   - Disable inputs during API calls

4. **Google OAuth**
   - Implement OAuth 2.0 flow
   - Handle redirect callbacks

5. **Error Handling**
   - Display API error messages
   - Implement retry logic

6. **Password Reset**
   - Create forgot password screen
   - Implement reset flow

7. **Persistence**
   - Store auth tokens
   - Auto-login on app start
   - Remember me functionality

## 🎨 Design System Notes

This implementation follows the iOS 26 Soft 3D design language:
- **Soft**: Diffuse shadows create depth without harsh edges
- **Airy**: Generous white space, clean layouts
- **3D**: Layered shadows give elevation
- **Modern**: Pill shapes, glassmorphism, smooth animations
- **Accessible**: High contrast, focus indicators, semantic HTML

The mascot image uses the existing avatar.png with:
- Thick 6px white border for "cutout" effect
- Elevated shadow for prominence
- Circular crop for consistency
