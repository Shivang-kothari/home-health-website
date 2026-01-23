# HRMS Suite & Home Health Website

A comprehensive solution for managing home health agency operations and a professional public-facing website.

## Features

### Public Website
- **Professional Design**: Clean, modern UI for showcasing services, coverage areas, and company information.
- **Service Listings**: Detailed descriptions of skilled nursing, therapy, and other services.
- **Coverage Map**: Interactive coverage area information with theme support.
- **Contact Integration**: Functional contact form with email notifications (supports SMTP and Ethereal for testing).
- **Responsive**: Fully optimized for mobile, tablet, and desktop.

### HR Portal (Internal)
- **Dashboard**: Overview of active employees, expiring credentials, and compliance status.
- **Employee Management**: CRUD operations for staff members (RNs, PTs, HHAs, etc.).
- **Credential Tracking**: Track licenses, certifications, and expirations.
- **Document Management**: Placeholder for document uploads and verification.
- **Authentication**: Secure login flow (currently mock implementation for demonstration).

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Icons**: SVG Icons

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd home-health-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    (auth)/       # Authentication pages (Login)
    (portal)/     # HR Management Portal (Dashboard, Employees)
    (site)/       # Public Website Pages (Home, About, Services)
    api/          # API Routes
    components/   # Reusable UI Components
    lib/          # Utilities and Configuration
```

## Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configuration:

```env
# SMTP Configuration (Optional - defaults to Ethereal for dev)
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=user@example.com
SMTP_PASS=password
CONTACT_TO_EMAIL=admin@example.com
```

## License

Private / Proprietary
