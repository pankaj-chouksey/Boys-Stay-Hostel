# Boys Stay Hostel - Premium Hostel Website

A modern, premium-looking website for Boys Stay Hostel built with Next.js 14, featuring full Server-Side Rendering (SSR), dark mode support, and smooth animations.

## 🚀 Features

- **Modern UI/UX**: Clean, minimal design with premium color palette
- **Full SSR**: Server-Side Rendering for optimal performance and SEO
- **Dark Mode**: Complete dark/light mode support with smooth transitions
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Meta tags, OpenGraph, and semantic HTML
- **Accessible**: ARIA roles and keyboard navigation support
- **API Routes**: Backend API for contact forms and bookings

## 🎨 Color Palette

- **Navy Blue**: `#0A1A2F`
- **Royal Blue**: `#1E3A8A`
- **White**: `#FFFFFF`
- **Gold Accent**: `#F5C542`

## 📁 Project Structure

```
boys-stay-hostel/
├── app/
│   ├── about/          # About Us page
│   ├── api/            # API routes
│   │   ├── contact/    # Contact form API
│   │   └── booking/    # Booking API
│   ├── booking/        # Booking page
│   ├── contact/        # Contact page
│   ├── facilities/      # Facilities page
│   ├── gallery/        # Gallery page
│   ├── rooms/          # Rooms listing page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Footer component
│   ├── Navbar.tsx      # Navigation bar
│   ├── ThemeProvider.tsx  # Dark mode provider
│   └── WhatsAppButton.tsx # WhatsApp quick chat
├── lib/
│   └── data.ts         # Sample data (rooms, facilities, etc.)
├── public/             # Static assets
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 2: Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Step 3: Build for Production

```bash
npm run build
# or
yarn build
```

### Step 4: Start Production Server

```bash
npm start
# or
yarn start
```

## 📄 Pages

### Home Page (`/`)
- Hero section with CTA buttons
- Hostel images showcase
- Facilities highlights
- Testimonials section
- Call-to-action section

### Rooms Page (`/rooms`)
- Room types listing (Single, Double, Triple)
- Pricing and availability
- Room amenities
- Booking links

### Facilities Page (`/facilities`)
- Complete list of facilities
- Detailed descriptions
- Icons and visual elements

### Gallery Page (`/gallery`)
- Responsive image grid
- Hostel interior/exterior photos
- Smooth hover effects

### About Us Page (`/about`)
- Vision and mission
- Why choose us section
- Owner story

### Contact Page (`/contact`)
- Contact form with validation
- Contact information
- Google Maps embed
- Form submission via API

### Booking Page (`/booking`)
- Room selection
- Personal information form
- Date selection
- Booking submission via API

## 🔧 Configuration

### Update Contact Information

Edit the contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Update WhatsApp Number

Edit the phone number in `components/WhatsAppButton.tsx`:

```typescript
const phoneNumber = 'YOUR_WHATSAPP_NUMBER'
```

### Update Google Maps Embed

Replace the Google Maps iframe URL in `app/contact/page.tsx` with your hostel's location.

### Customize Room Data

Edit `lib/data.ts` to update:
- Room types and pricing
- Facilities
- Testimonials
- Gallery images

## 🎯 API Routes

### POST `/api/contact`

Submit contact form inquiries.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "booking",
  "message": "I'm interested in booking a room"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been received..."
}
```

### POST `/api/booking`

Submit room booking requests.

**Request Body:**
```json
{
  "roomId": "1",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "checkIn": "2024-01-15",
  "checkOut": "12",
  "additionalInfo": "Special requirements"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your booking request has been received...",
  "bookingId": "BSH-1234567890"
}
```

## 🔌 Integration with Backend

Currently, the API routes log submissions to the console. To integrate with a real backend:

1. **Database Integration**: Connect to your database (PostgreSQL, MongoDB, etc.)
2. **Email Service**: Integrate with email service (SendGrid, Resend, etc.)
3. **Payment Gateway**: Add payment processing if needed
4. **Authentication**: Add admin authentication for managing bookings

Example database integration:

```typescript
// In app/api/booking/route.ts
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  // ... validation code ...
  
  // Save to database
  const booking = await db.bookings.create({
    data: {
      roomId,
      name,
      email,
      phone,
      checkIn,
      duration: checkOut,
      additionalInfo,
    }
  })
  
  // ... rest of the code ...
}
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  navy: '#YOUR_COLOR',
  royal: '#YOUR_COLOR',
  gold: '#YOUR_COLOR',
}
```

### Add New Pages

1. Create a new folder in `app/` directory
2. Add `page.tsx` file
3. Update `components/Navbar.tsx` to include the new route

### Modify Animations

Edit animation properties in components using Framer Motion:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## 📱 Features

- ✅ Sticky navbar with scroll effect
- ✅ Dark/light mode toggle
- ✅ WhatsApp quick chat button
- ✅ Smooth page transitions
- ✅ Animated scroll reveals
- ✅ Responsive image optimization
- ✅ Form validation
- ✅ SEO meta tags
- ✅ Accessible design

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 License

This project is created for Boys Stay Hostel. All rights reserved.

## 🤝 Support

For support, email info@boysstayhostel.com or contact through the website.

## 🔄 Updates

- **v1.0.0**: Initial release with all core features
- Full SSR implementation
- Dark mode support
- Complete page structure
- API routes for forms

---

Built with ❤️ using Next.js, TypeScript, TailwindCSS, and Framer Motion

