# Fallin1 - Personal Portfolio Website

A modern, professional, and fully responsive personal portfolio website built with React and Vite. This portfolio showcases my skills, projects, and experience as a Junior Software Developer.

## 🚀 Features

- **Modern UI/UX Design** - Clean, professional interface with dark theme
- **Fully Responsive** - Works perfectly on all devices (desktop, tablet, mobile)
- **Smooth Animations** - Fade-in effects, hover animations, and scroll-triggered animations
- **Interactive Navigation** - Sticky navbar with active section highlighting
- **Project Showcase** - Dynamic project display with filtering capabilities
- **Contact Form** - Functional contact form with validation
- **Component-Based Architecture** - Clean, reusable React components
- **Optimized Performance** - Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS with CSS-in-JS
- **Language**: JavaScript (ES6+)
- **Icons**: Emoji Icons (for simplicity)
- **Deployment**: Ready for Netlify, Vercel, or any static hosting

## 📁 Project Structure

```
/portfolio
┣ /public
┃ ┗ favicon.ico
┣ /src
┃ ┣ /assets
┃ ┃ ┗ images/
┃ ┣ /components
┃ ┃ ┣ Navbar.jsx          # Navigation component
┃ ┃ ┣ Hero.jsx            # Hero section
┃ ┃ ┣ About.jsx           # About section
┃ ┃ ┣ Skills.jsx          # Skills section
┃ ┃ ┣ Projects.jsx        # Projects showcase
┃ ┃ ┣ Contact.jsx         # Contact form
┃ ┃ ┗ Footer.jsx          # Footer component
┃ ┣ /data
┃ ┃ ┗ projects.js         # Projects data
┃ ┣ /styles
┃ ┃ ┗ global.css          # Global styles
┃ ┣ App.jsx               # Main app component
┃ ┣ main.jsx              # App entry point
┃ ┗ index.css             # Base styles
┣ package.json
┣ vite.config.js
┗ README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fallin1/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Personal Information

Update your personal information in the following files:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Name and tagline
   - Description text
   - Button links

2. **About Section** (`src/components/About.jsx`):
   - Personal bio
   - Stats and highlights
   - Description text

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Adjust proficiency levels
   - Update skill descriptions

4. **Projects** (`src/data/projects.js`):
   - Add your projects
   - Update project details
   - Modify tech stack
   - Add GitHub/demo links

5. **Contact** (`src/components/Contact.jsx`):
   - Update contact information
   - Modify social links
   - Customize form settings

### Styling

The theme uses CSS custom properties defined in `src/styles/global.css`. You can easily customize:

- Colors (primary, secondary, accent)
- Fonts and typography
- Spacing and layout
- Animation settings

```css
:root {
  --primary-bg: #0a0a0a;
  --secondary-bg: #1a1a1a;
  --accent-color: #3b82f6;
  /* ... more variables */
}
```

## 🚀 Deployment

### Netlify Deployment

1. **Push your code to GitHub**
2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
3. **Deploy** - Netlify will automatically build and deploy your site

### Vercel Deployment

1. **Push your code to GitHub**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure build settings (usually auto-detected)
3. **Deploy** - Vercel will build and deploy your site

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting provider

### Environment Variables

If you need to add environment variables (for contact form backend, analytics, etc.):

1. Create `.env.local` file in the root directory
2. Add your variables:
   ```
   VITE_API_URL=https://your-api.com
   VITE_ANALYTICS_ID=your-analytics-id
   ```
3. Restart the development server

## 📧 Contact Form Setup

The contact form currently simulates submission. To make it functional:

### Option 1: Netlify Forms
1. Add `name="contact"` to the form element
2. Add `data-netlify="true"` attribute
3. Netlify will handle form submissions automatically

### Option 2: External Service
1. Sign up for Formspree, Getform, or similar service
2. Update the form action and add their endpoint
3. Configure the form fields as required

### Option 3: Custom Backend
1. Create a backend API endpoint
2. Update the `handleSubmit` function in `Contact.jsx`
3. Add your API endpoint and error handling

## 🤝 Contributing

This is a personal portfolio, but feel free to use it as a template or suggest improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the fast build tool
- All the open source contributors who made this possible

## 📞 Support

If you have any questions or need help with customization:

- Create an issue on GitHub
- Reach out via the contact form
- Connect on social media

---

**Built with ❤️ by Fallin1**

---

### Quick Start Checklist

- [ ] Install Node.js (v16+)
- [ ] Clone the repository
- [ ] Run `npm install`
- [ ] Update personal information in components
- [ ] Add your projects to `projects.js`
- [ ] Test with `npm run dev`
- [ ] Deploy to Netlify/Vercel
- [ ] Configure custom domain (optional)
- [ ] Set up contact form backend (optional)
