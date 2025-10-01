# Zenko Digital - Digital Agency Website

A modern, responsive website for Zenko Digital, a digital agency specializing in web development, design, and digital marketing services.

## 🚀 Features

- **Modern React Frontend** - Built with React 18, TypeScript, and Vite
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Components** - Framer Motion animations and smooth transitions
- **Contact Form** - Functional contact form with email notifications
- **Professional UI** - Clean, modern design with custom color scheme
- **Type Safety** - Full TypeScript implementation
- **Fast Development** - Hot module replacement with Vite

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Nodemailer** - Email service
- **TypeScript** - Type-safe server code

### Development Tools
- **ESBuild** - Fast bundler
- **Cross-env** - Environment variables
- **TSX** - TypeScript execution

## 📁 Project Structure

```
zenko-digital/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/         # Reusable UI components
│   │   │   ├── Header.tsx  # Navigation header
│   │   │   ├── Hero.tsx    # Hero section
│   │   │   ├── Services.tsx # Services section
│   │   │   ├── About.tsx   # About section
│   │   │   ├── Portfolio.tsx # Portfolio section
│   │   │   ├── Testimonials.tsx # Client testimonials
│   │   │   ├── Contact.tsx # Contact form
│   │   │   └── Footer.tsx  # Footer
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility libraries
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── vite.ts            # Vite integration
│   ├── emailService.ts    # Email functionality
│   └── storage.ts         # Data storage
├── shared/                # Shared types and schemas
├── dist/                  # Build output
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)

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

3. **Set up environment variables (Optional)**
   Create a `.env` file in the root directory:
   ```env
   EMAIL_PASSWORD=your_gmail_app_password
   PORT=8080
   ```

### Development

1. **Start the full-stack development server**
   ```bash
   npm run dev
   ```
   This will start:
   - Express backend server on `http://localhost:8080`
   - React frontend with hot module replacement
   - Automatically open your browser

2. **Alternative: Run client-only development**
   ```bash
   npm run dev:client
   ```
   This will start only the React frontend on `http://localhost:5173`

### Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📝 Available Scripts

- `npm run dev` - Start full-stack development server (backend on 8080, frontend integrated)
- `npm run dev:client` - Start client-only development server (frontend on 5173)
- `npm run build` - Build frontend for production
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0066FF`
- **Neon Green**: `#00FF88`
- **Dark Gray**: `#1A1A1A`
- **Black**: `#000000`
- **White**: `#FFFFFF`
- **Orange**: `#FF6B35`
- **Yellow**: `#FFD700`

### Typography
- **Display Font**: Space Grotesk
- **Body Font**: Inter
- **Serif Font**: Georgia
- **Mono Font**: Menlo

## 📧 Contact Form

The contact form includes:
- Name and email validation
- Business type selection
- Budget range selection
- Project details textarea
- Email notifications via Nodemailer

### Email Configuration

To enable email notifications:
1. Set up a Gmail app password
2. Add it to your `.env` file as `EMAIL_PASSWORD`
3. The form will send notifications to the configured email address

## 🔧 Configuration

### Vite Configuration
- Path aliases: `@` for `client/src`, `@shared` for shared code
- React plugin for JSX transformation
- Development server on port 5173

### TypeScript Configuration
- Strict mode enabled
- Path mapping for clean imports
- ES modules support

### Tailwind Configuration
- Custom color palette
- Custom animations
- Typography plugin
- Responsive design utilities

## 🚀 Deployment

### Build Process
1. Frontend is built with Vite
2. Backend is bundled with ESBuild
3. Static files are served from `dist/public`

### Environment Variables
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 5173)
- `EMAIL_PASSWORD` - Gmail app password for email service

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - The server will automatically try the next available port
   - Check the console output for the actual port being used

2. **Import path errors**
   - Ensure all imports use the `@/` alias for client code
   - Check that `vite.config.ts` has correct path resolution

3. **Email service not working**
   - Verify `EMAIL_PASSWORD` is set in `.env`
   - Ensure Gmail app password is correctly configured

4. **TypeScript errors**
   - Run `npm run check` to see all type errors
   - Ensure all components have proper type annotations

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run type checking: `npm run check`
5. Test your changes
6. Submit a pull request

## 📞 Support

For support and questions:
- Email: hello@zenko.com
- Phone: +91 98765 43210

---

**Zenko Digital** - Empowering businesses with innovative digital solutions.
