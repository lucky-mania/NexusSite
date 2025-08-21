# Arena Nexus - Landing Page

## Overview

Arena Nexus is a Brazilian e-commerce landing page specialized in anime collectibles, action figures, miniatures, keychains, and exclusive collectible products. The project is a modern, mobile-first single-page application built with vanilla HTML, CSS, and JavaScript, featuring a minimalist dark theme with the brand's custom crown logo and superior responsiveness across all devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Vanilla HTML5, CSS3, and JavaScript (ES6+)
- **Design Pattern**: Single-page application with modular JavaScript structure
- **Responsive Design**: Mobile-first approach with container max-width of 420px
- **Styling Approach**: CSS custom properties for theming, flexbox/grid layouts, and CSS transforms for animations

### UI/UX Design Decisions
- **Theme**: Minimalist dark mode with clean, flat design elements
- **Typography**: Inter font family with multiple weights and fluid typography using clamp()
- **Color Scheme**: Pure monochromatic design with white text, subtle borders, and minimal visual effects
- **Logo**: Custom crown logo in PNG format with transparent background
- **Mobile Optimization**: Fully responsive design with fluid containers, optimal touch targets, and enhanced mobile experience

### JavaScript Architecture
- **Module Pattern**: Organized into initialization functions for different components
- **Event-Driven**: DOM event listeners for user interactions
- **Component-Based**: Separate initialization functions for header, animations, product showcase, contact buttons, share functionality, and scroll effects
- **Progressive Enhancement**: Feature detection for browser capabilities (vibration API)

### Performance Optimizations
- **Resource Loading**: Preconnected Google Fonts and CDN resources
- **CSS Optimization**: CSS custom properties, efficient selectors, and minimal reflows
- **Responsive Design**: Fluid typography with clamp(), container queries, and optimized breakpoints
- **JavaScript Loading**: DOM content loaded event for proper initialization timing

## External Dependencies

### CDN Resources
- **Font Awesome 6.4.0**: Icon library for UI elements and social media icons
- **Google Fonts (Inter)**: Typography with multiple font weights (300-700)

### Browser APIs
- **Web Share API**: For native sharing functionality on supported devices
- **Vibration API**: Haptic feedback simulation for enhanced user experience
- **Scroll Events**: For header behavior and scroll-based animations

### Potential Integrations
- **Social Media**: Instagram integration implied by @arenanexus handle
- **E-commerce Platform**: Backend integration for product management and orders
- **Payment Processing**: Brazilian payment gateways for local market
- **Analytics**: Web analytics for tracking user engagement and conversions