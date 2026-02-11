# 🚗 Rentify

A comprehensive car rental platform built with React 18 and Vite. Experience seamless vehicle rentals with modern UI, fleet management, and booking systems.

## ✨ Features

### 🚗 Vehicle Rental Services
- **Fleet Management**: Comprehensive vehicle inventory and management
- **Online Booking**: Easy-to-use booking system with availability checks
- **Search & Filter**: Advanced filtering by type, price, and availability
- **Pricing Plans**: Flexible rental packages and pricing options
- **Real-time Availability**: Live vehicle availability updates

### 🎨 User Experience
- **Modern UI**: Clean, intuitive interface with Tailwind CSS
- **Responsive Design**: Works seamlessly on all devices
- **Smooth Navigation**: React Router for seamless page transitions
- **Interactive Elements**: Engaging components and animations

### 📱 Business Features
- **Contact Management**: Integrated contact forms and communication
- **Team Information**: Professional team showcase
- **Blog Integration**: Content management for marketing
- **Offer Management**: Special deals and promotions
- **Car Listings**: Detailed vehicle information and search

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 5
- **Routing**: React Router DOM 6
- **Styling**: Tailwind CSS 3
- **Build Tools**: PostCSS, Autoprefixer
- **Code Quality**: ESLint configuration

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/rentify.git
   cd rentify
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
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
rentify/
├── public/                 # Static assets
├── src/
│   ├── Components/         # Reusable components
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Footer.jsx         # Application footer
│   │   └── ...              # Other components
│   ├── Pages/              # Page components
│   │   ├── HomePage.jsx       # Home page
│   │   ├── AboutPage.jsx      # About us page
│   │   ├── BlogPage.jsx        # Blog page
│   │   ├── ContactPage.jsx    # Contact page
│   │   ├── OffersPage.jsx      # Special offers
│   │   ├── TeamPage.jsx        # Team page
│   │   └── CarsPage.jsx        # Car listings
│   ├── assets/             # Static assets
│   ├── App.css             # App-specific styles
│   ├── App.jsx             # Main app component
│   ├── index.css          # Global styles
│   └── main.jsx            # App entry point
├── .gitignore             # Git ignore file
├── README.md              # Project documentation
├── package.json           # Project dependencies
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind configuration
└── vite.config.js         # Vite configuration
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Rentify
VITE_STRIPE_KEY=your_stripe_api_key
VITE_EMAIL_SERVICE=your_email_service_key
VITE_MAPS_API_KEY=your_maps_api_key
```

## 🎨 Customization

### Adding New Vehicles
1. Update vehicle data in `src/Components/` or `src/Pages/CarsPage.jsx`
2. Add new vehicle types to search filters
3. Update pricing in `src/Pages/OffersPage.jsx`

### Modifying Booking System
- Customize booking flow in relevant components
- Update availability logic
- Modify confirmation emails

### UI Customization
- Modify colors in `src/index.css`
- Update Tailwind configuration in `tailwind.config.js`
- Customize component styles in `src/App.css`

### Adding New Pages
1. Create page component in `src/Pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/Components/Navbar.jsx`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Deploy to Netlify
1. Connect your repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Environment Variables for Production
Set these in your deployment platform:
- `VITE_API_URL` - Your production API endpoint
- `VITE_STRIPE_KEY` - Your Stripe API key for payments
- `VITE_EMAIL_SERVICE` - Your email service API key
- `VITE_MAPS_API_KEY` - Your maps API key

## 🎯 Features Overview

### Vehicle Management
- **Fleet Display**: Show all available vehicles
- **Search & Filter**: Find vehicles by type, price, features
- **Availability Check**: Real-time availability status
- **Booking System**: Complete booking workflow
- **Pricing Display**: Clear pricing information

### User Experience
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, professional interface
- **Smooth Navigation**: Single-page application feel
- **Interactive Elements**: Engaging user interactions

### Business Operations
- **Contact Forms**: Lead generation and customer service
- **Team Showcase**: Professional team presentation
- **Content Management**: Blog and offer management
- **Legal Compliance**: Terms and privacy pages

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Guidelines
- Follow existing code style
- Use semantic HTML5 elements
- Write clean, readable components
- Test booking functionality
- Document new features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## 📞 Support

If you have any questions or need support, please:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

## 🌟 Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

**Built with ❤️ for the car rental industry**
