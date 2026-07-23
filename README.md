# Anvoy Transportation & Express

Anvoy is a high-performance, premium logistics and global forwarding platform built with Laravel 12, React 19 (Inertia.js), and Tailwind CSS 4.

## Features

- **Express Global Delivery:** High-speed international shipping solutions.
- **Cargo Shipping:** Specialized Air, Road, Ocean, and Rail freight services.
- **Real-time Visibility:** Full shipment tracking and status updates.
- **Premium UI/UX:** Responsive design with glassmorphism, motion animations (Motion), and high-fidelity AI-generated assets.
- **Dynamic 404 Page:** Custom-branded error handling with interactive elements.

## Tech Stack

- **Backend:** Laravel 12 (PHP 8.2+)
- **Frontend:** React 19, Inertia.js, Vite
- **Styling:** Tailwind CSS 4, Motion (framer-motion)
- **Icons:** Hugeicons React

## Getting Started

### Prerequisites

- PHP 8.2+
- Node.js 22+ & npm 10+
- Composer
- XAMPP / Local PHP Environment

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd Anvoy
   ```

2. **Install dependencies:**
   ```bash
   composer install
   npm install
   ```

3. **Environment Setup:**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Start the development servers:**

   Run the Laravel backend:
   ```bash
   php artisan serve
   ```

   Run the Vite development server (with HMR):
   ```bash
   npm run dev
   ```

5. **Access the site:**
   Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.

## Project Structure

- `resources/js/Pages`: Inertia.js page components (Home, NotFound).
- `resources/js/components/ui`: Reusable UI primitives and complex features (Carousel).
- `public/images`: Local asset storage (including AI-generated freight images).
- `bootstrap/app.php`: Exception handling and middleware configuration.
