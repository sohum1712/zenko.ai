# Zenko Digital - Your Digital Growth Agency

A modern, responsive website for Zenko Digital Agency built with React, TypeScript, and Tailwind CSS. Features bilingual support (English/Gujarati), professional design, and comprehensive contact functionality.

## 🚀 Features

- **Bilingual Support**: Complete English and Gujarati translations
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Professional Contact Form**: Working email integration with validation
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimized
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form handling and validation

### Backend & Services
- **EmailJS** - Contact form email service
- **Vite** - Fast build tool and development server
- **Express** - Node.js server framework

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
zenko-digital/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── common/     # Reusable components
│   │   │   └── ui/         # UI components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utility libraries
│   │   ├── locales/        # Translation files
│   │   ├── pages/          # Page components
│   │   └── types/          # TypeScript types
│   └── index.html          # HTML template
├── server/                 # Backend server
├── shared/                 # Shared types and schemas
├── public/                 # Static assets
└── dist/                   # Build output
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zenko-digital
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_CONTACT_EMAIL=your_contact_email
   ```

### Development

1. **Start the development server**
   ```bash
   npm run dev
   ```
   This starts both the client (port 5173) and server concurrently.

2. **Start only the client**
   ```bash
   npm run dev:client
   ```

3. **Start only the server**
   ```bash
   npm run dev:server
   ```

### Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Type checking**
   ```bash
   npm run check
   ```

## 🌐 Features Overview

### 1. Hero Section
- Dynamic floating tags with animations
- Bilingual headline with gradient text effects
- Call-to-action buttons with hover effects
- Trust indicators with company logos

### 2. About Section
- Feature highlights with icons
- Responsive grid layout
- Smooth scroll animations

### 3. Services Section
- Three main service categories
- Interactive cards with hover effects
- Professional imagery and descriptions

### 4. Portfolio Section
- Six featured projects
- Category-based filtering
- Project details with technology tags

### 5. Contact Section
- Professional contact form
- Real-time validation
- EmailJS integration
- Success/error notifications
- Bilingual form labels and placeholders

### 6. Language Toggle
- Seamless English/Gujarati switching
- Persistent language preference
- Complete UI translation
- Proper font handling for Gujarati text

## 🎨 Design System

### Colors
- **Primary**: #4d8af0 (Zenko Blue)
- **Secondary**: #1a1a2e (Dark Navy)
- **Accent**: #e8f4fc (Light Blue)
- **Neutral**: #6b7280 (Gray)

### Typography
- **Primary Font**: Inter (Sans-serif)
- **Accent Font**: Shrikhand (Gujarati highlights)
- **Serif Font**: Times New Roman (Headings)

### Components
- Consistent spacing and sizing
- Rounded corners (12px, 16px, 24px)
- Subtle shadows and gradients
- Smooth transitions (300ms)

## 📧 Email Configuration

The contact form uses EmailJS for email delivery. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your service ID, template ID, and public key
5. Update the `.env` file with your credentials

### Email Template Variables
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Phone number
- `{{business_type}}` - Business type
- `{{message}}` - Message content
- `{{to_email}}` - Recipient email

## 🌍 Internationalization

The application supports English and Gujarati languages:

- **Translation files**: `client/src/locales/en.json` and `client/src/locales/gu.json`
- **Language context**: `client/src/contexts/LanguageContext.tsx`
- **Translation hook**: `client/src/hooks/useTranslation.ts`
- **Components**: `TranslatedText`, `TranslatedInput`, `HighlightedTranslatedText`

### Adding New Translations
1. Add the key-value pair to both `en.json` and `gu.json`
2. Use the `t()` function in components: `{t('your.translation.key')}`
3. For form inputs, use `TranslatedInput` component

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set environment variables in Netlify dashboard

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web server
3. Configure your server to serve the `index.html` for all routes

## 🔧 Customization

### Adding New Sections
1. Create a new component in `client/src/components/`
2. Add translations to both language files
3. Import and use in `client/src/pages/Home.tsx`

### Modifying Styles
- Update Tailwind config in `tailwind.config.ts`
- Modify CSS variables in `client/src/index.css`
- Use Tailwind classes for component styling

### Adding New Languages
1. Create a new JSON file in `client/src/locales/`
2. Update the language context to include the new language
3. Add language toggle option in `LanguageToggle` component

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team

## 🔄 Version History

### v1.0.0 (Current)
- Initial release
- Bilingual support (English/Gujarati)
- Complete website with all sections
- Working contact form
- Responsive design
- Professional UI/UX

---

**Built with ❤️ by the Zenko Digital team**