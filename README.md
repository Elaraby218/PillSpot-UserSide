# 🏥 Pill-Spot Frontend

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-purple.svg)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/Status-Graduation%20Project-brightgreen.svg)](https://github.com/Mohamed-AbdElmawla/Pill-Spot)

> **A Location-Based Pharmacy Medicine Search Platform Frontend** - Modern React application for finding medicines in nearby pharmacies with real-time location services and comprehensive pharmacy management interface.

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Component Structure](#-component-structure)
- [State Management](#-state-management)
- [Performance Optimizations](#-performance-optimizations)
- [Testing](#-testing)
- [Project Timeline](#-project-timeline)
- [Team](#-team)

## 🎯 Overview

Pill-Spot Frontend is a modern React application designed to provide an intuitive and responsive user interface for a location-based pharmacy medicine search platform. The application enables users to find specific medicines in nearby pharmacies, view availability, and get directions to pharmacies through an elegant and user-friendly interface.

### Key Benefits

- **For Users**: Intuitive search interface with real-time results and interactive maps
- **For Pharmacies**: Comprehensive management dashboard for inventory and staff
- **For Healthcare**: Improved medicine accessibility through modern web interface

## ✨ Features

### 🔍 For End Users
- **Smart Medicine Search**: Advanced search with autocomplete and intelligent filters
- **Location-Based Results**: GPS-powered pharmacy discovery with distance calculation
- **Interactive Maps**: Visual pharmacy locations with directions using Google Maps
- **Real-Time Availability**: Live stock information display with fixed pricing
- **User Authentication**: Secure registration and login with JWT token management
- **User Profiles**: Comprehensive profile management with preferences
- **Multi-language Support**: Internationalization with i18next (English & Spanish)
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Customizable theme preferences
- **Wishlist Management**: Save favorite medicines and pharmacies
- **Order History**: Track previous orders and medications

### 🏪 For Pharmacy Owners
- **Pharmacy Registration**: Multi-step onboarding with progress tracking
- **Inventory Management**: Intuitive interface for adding, updating, and managing medicine stock
- **Staff Management**: Add employees with role-based permissions and management
- **Pharmacy Dashboard**: Comprehensive analytics and information display
- **Profile Management**: Update pharmacy details and contact information
- **Order Management**: Track and manage incoming orders
- **Analytics Dashboard**: View sales, inventory, and performance metrics

### 👨‍💼 For Administrators
- **System Management**: User and pharmacy oversight with admin controls
- **Content Management**: Categories, products, and system settings interface
- **Price Management**: Set and manage fixed medicine prices through admin panel
- **Approval Workflows**: Pharmacy and employee request processing interface
- **User Management**: Manage system users and roles with detailed controls

## 🛠 Technology Stack

### Frontend Framework
- **React 18**: Latest React with concurrent features and hooks
- **TypeScript 5.6.2**: Type-safe development with strict typing
- **Vite 5.0**: Fast build tool and development server

### State Management
- **Redux Toolkit**: Modern Redux with simplified state management
- **React Query**: Server state management and caching
- **Zustand**: Lightweight state management for local state

### UI Libraries & Styling
- **Ant Design**: Comprehensive UI component library
- **Material-UI**: Material Design components
- **Tailwind CSS**: Utility-first CSS framework
- **Styled Components**: CSS-in-JS styling
- **Framer Motion**: Advanced animations and transitions

### Maps & Location
- **Google Maps API**: Interactive maps and location services
- **Leaflet**: Alternative mapping solution
- **Geolocation API**: Browser-based location services

### Development Tools
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **React DevTools**: Development debugging
- **Vite**: Fast development and build tool

### Internationalization
- **React i18next**: Multi-language support
- **Translation Management**: JSON-based translation files

## 🏗 Architecture

### Frontend Architecture
```
Front/pill-spot/
├── src/
│   ├── components/              # Reusable UI Components
│   │   ├── animaged/           # Animated components
│   │   ├── Block/              # Content blocks
│   │   ├── ContactForm/        # Contact form components
│   │   ├── ContentBlock/       # Content display blocks
│   │   ├── ErrorMessage/       # Error handling components
│   │   ├── Footer/             # Footer components
│   │   ├── Header/             # Header and navigation
│   │   ├── LoginModal/         # Authentication modals
│   │   ├── MapModal/           # Map display components
│   │   ├── MiddelBlock/        # Middle content blocks
│   │   ├── Notification/       # Notification system
│   │   ├── Result/             # Search results display
│   │   ├── SearchMedicine/     # Medicine search components
│   │   └── SignUpModel/        # Registration components
│   ├── pages/                   # Page Components
│   │   ├── HomePage/           # Home page components
│   │   ├── Landing/            # Landing page
│   │   ├── PharmacyManagement/ # Pharmacy admin interface
│   │   ├── ProductPharmacySearch/ # Product search pages
│   │   ├── ProductsPage/       # Product listing pages
│   │   ├── RegisterPharmacy/   # Pharmacy registration
│   │   ├── ResultPage/         # Search results page
│   │   ├── SearchByDistance/   # Distance-based search
│   │   └── UserSettings/       # User settings and profile
│   ├── features/                # Feature-based Redux Slices
│   │   ├── auth/               # Authentication features
│   │   ├── HomePage/           # Home page features
│   │   ├── NotificationHubService/ # Real-time notifications
│   │   ├── Notifications/      # Notification management
│   │   ├── Pharmacy/           # Pharmacy management features
│   │   ├── Toasts/             # Toast notifications
│   │   └── User/               # User management features
│   ├── hooks/                   # Custom React Hooks
│   ├── UI/                      # UI Components Library
│   │   ├── Button/             # Button components
│   │   ├── Container/          # Layout containers
│   │   ├── Input/              # Input components
│   │   ├── Rating/             # Rating components
│   │   └── utils/              # UI utilities
│   ├── layouts/                 # Layout Components
│   ├── Router/                  # Application Routing
│   ├── content/                 # Static content and translations
│   ├── locales/                 # Internationalization files
│   └── styles/                  # Global styles
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** and npm/yarn
- **Modern web browser** with ES6+ support
- **Google Maps API Key** (for map functionality)

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohamed-AbdElmawla/Pill-Spot.git
   cd Pill-Spot/Front/pill-spot
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**
   Create `.env` file:
   ```env
   VITE_API_BASE_URL=https://your-api-url.com
   VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   VITE_APP_NAME=Pill-Spot
   VITE_APP_VERSION=1.0.0
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Frontend will be available at: `http://localhost:3000`

5. **Build for Production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🧩 Component Structure

### Core Components

#### Authentication Components
- **LoginModal**: User login interface with validation
- **SignUpModel**: User registration with multi-step form
- **ContinueWith**: Social login options

#### Search & Results Components
- **SearchMedicine**: Advanced medicine search with filters
- **Result**: Search results display with pharmacy cards
- **ProductPharmacySearch**: Product-specific pharmacy search
- **SearchByDistance**: Distance-based pharmacy discovery

#### Pharmacy Management Components
- **PharmacyManagement**: Main pharmacy dashboard
- **Inventory**: Inventory management interface
- **StaffManagement**: Staff management and permissions
- **OrdersManagement**: Order tracking and management

#### User Interface Components
- **Header**: Navigation and user menu
- **Footer**: Site footer and links
- **Notification**: Real-time notification system
- **MapModal**: Interactive map display

### Page Components

#### Public Pages
- **Landing**: Welcome page with feature overview
- **HomePage**: Main application homepage
- **ProductsPage**: Product catalog and search
- **ResultPage**: Search results display

#### User Pages
- **UserSettings**: User profile and preferences
- **UserPharmacies**: User's preferred pharmacies
- **OrdersCart**: Shopping cart and order management

#### Admin Pages
- **PharmacyManagement**: Comprehensive admin dashboard
- **RegisterPharmacy**: Pharmacy registration workflow
- **tempAdmin**: Temporary admin interface

## 🔄 State Management

### Redux Toolkit Slices

#### Authentication
- **authSlice**: User authentication state
- **authLoginSlice**: Login form state
- **authServices**: Authentication API services

#### Pharmacy Management
- **PharmacyRegisterSlice**: Pharmacy registration state
- **GetUserPharmcsSlice**: User pharmacy data
- **AddInventoryProductSlice**: Inventory management state

#### Notifications
- **notificationSlice**: Notification state management
- **toastSlice**: Toast notification state

#### User Management
- **UserSlice**: User profile and preferences
- **UserServices**: User-related API services

### Custom Hooks

- **useNotificationData**: Notification data management
- **useNotificationSignalR**: Real-time notification handling
- **useUnreadCount**: Unread notification counting
- **useProducts**: Product data management
- **GetLocation**: Geolocation services

## ⚡ Performance Optimizations

### Code Splitting & Lazy Loading
- **Dynamic Imports**: Route-based code splitting
- **Component Lazy Loading**: On-demand component loading
- **Bundle Optimization**: Vite build optimization

### State Management Optimizations
- **Selective Re-rendering**: Optimized Redux state updates
- **Memoization**: React.memo and useMemo for expensive operations
- **Debounced Search**: Optimized search input handling

### Image & Asset Optimization
- **Image Compression**: Optimized image loading
- **Lazy Loading**: Images load on demand
- **SVG Optimization**: Optimized SVG icons and graphics

### Caching Strategy
- **Browser Caching**: Static asset caching
- **API Response Caching**: React Query caching
- **Local Storage**: User preferences and session data

### Bundle Optimization
- **Tree Shaking**: Unused code elimination
- **Minification**: Code and asset compression
- **Gzip Compression**: Response compression

## 🧪 Testing

### Testing Environment
- **Browser Testing**: Cross-browser compatibility testing
- **React DevTools**: Component debugging and state inspection
- **Performance Testing**: Lighthouse and Core Web Vitals
- **User Experience Testing**: Manual testing of user workflows

### Test Coverage Areas
- **Component Rendering**: UI component functionality
- **User Interactions**: Form submissions and navigation
- **State Management**: Redux state updates and persistence
- **API Integration**: Frontend-backend communication
- **Responsive Design**: Mobile and desktop compatibility

### Testing Tools
- **React DevTools**: Component debugging and state inspection
- **Browser DevTools**: Performance analysis and debugging
- **Lighthouse**: Performance and accessibility testing
- **Manual Testing**: User experience validation

## 📅 Project Timeline

### Phase 1: Foundation (Completed)
- **Duration**: 2-3 months
- **Achievements**:
  - ✅ React project setup with TypeScript
  - ✅ Component architecture design
  - ✅ Basic routing and navigation
  - ✅ UI component library setup
  - ✅ State management foundation

### Phase 2: Core Features (Completed)
- **Duration**: 2-3 months
  - ✅ User authentication interface
  - ✅ Medicine search functionality
  - ✅ Pharmacy management dashboard
  - ✅ Interactive maps integration
  - ✅ Multi-language support
  - ✅ Responsive design implementation

### Phase 3: Advanced Features (Completed)
- **Duration**: 2-3 months
  - ✅ Real-time notifications
  - ✅ Performance optimizations
  - ✅ Advanced search filters
  - ✅ User profile management
  - ✅ Admin dashboard features

### Future Enhancements (Planned)
- **Progressive Web App**: PWA features for mobile experience
- **Advanced Animations**: Enhanced user experience with animations
- **Offline Support**: Offline functionality for critical features
- **Advanced Analytics**: User behavior tracking and analytics

## 👥 Team

### 🎓 Students
- **[Mohamed AbdElmawla](https://github.com/Mohamed-AbdElmawla)** - ACPC Finalist | Software Engineer | Codeforces Expert | Problem Solving Coach | React & TypeScript Developer
- **[Mohamed Ramadan Elaraby](https://github.com/Elaraby218)** - Software Engineering Student
- **[Khaled Ibrahem](https://github.com/uukh22)** - Computer Science Student
- **[Shahd Medhat](https://github.com/shahdmedhat35)** - Software Engineering Student

### 👨‍🏫 Teaching Assistant
- **[Omnia Bakr](https://github.com/OmniaBakr)** - Teaching Assistant

### 🏫 Academic Institution
- **Assiut University** - Faculty of Computer and Information Sciences

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the powerful frontend library
- **Vite Team** for the excellent build tool
- **Ant Design Team** for the comprehensive UI library
- **Open Source Community** for various libraries and tools
- **Assiut University** for academic support and guidance

## 📞 Support

- **Repository**: [https://github.com/Mohamed-AbdElmawla/Pill-Spot](https://github.com/Mohamed-AbdElmawla/Pill-Spot)
- **Issues**: [GitHub Issues](https://github.com/Mohamed-AbdElmawla/Pill-Spot/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Mohamed-AbdElmawla/Pill-Spot/discussions)

---

<div align="center">
  <p>Made with ❤️ for better healthcare accessibility</p>
  <p>⭐ Star this repository if you find it helpful!</p>
  <p><strong>Academic Project:</strong> Developed as part of the Software Engineering curriculum at Assiut University</p>
</div>
