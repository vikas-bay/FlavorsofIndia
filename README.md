# Flavors of India - Restaurant Website

A completely **static HTML/CSS/JavaScript** website for Flavors of India, an authentic Indian restaurant in Houston, Texas.

## Features

✅ **No Build Tools Required** - Pure HTML, CSS, and vanilla JavaScript
✅ **No Dependencies** - Zero npm packages needed
✅ **Fully Responsive** - Works on mobile, tablet, and desktop
✅ **Three Pages** - Landing page, menu, and contact page
✅ **Working Contact Form** - Sends submissions to webhook endpoint
✅ **Webhook Integration** - Automatic form data capture via n8n

## Pages

### 1. **Home Page** (`index.html`)
- Hero section with restaurant tagline
- About section
- Featured dishes showcase
- Why choose us section
- Call-to-action buttons

### 2. **Menu Page** (`menu.html`)
- Complete restaurant menu
- Organized by categories:
  - Appetizers
  - Main Courses
  - Breads
  - Desserts
  - Beverages
- 25+ authentic Indian dishes with descriptions and prices

### 3. **Contact Page** (`contact.html`)
- Contact information
  - Address in Houston, Texas
  - Phone number
  - Email address
  - Business hours
- Working contact form
  - Name, Email, Phone, Subject, and Message fields
  - Client-side form validation
  - Webhook integration to capture form submissions
  - Success message on submission
  - Graceful error handling with fallback display
- Map placeholder for future integration

## File Structure

```
flavors-of-india/
├── index.html       # Landing page
├── menu.html        # Menu page
├── contact.html     # Contact page
├── styles.css       # All styling (responsive design)
├── .gitignore       # Git configuration
└── README.md        # This file
```

## How to Use

### Option 1: Direct File Opening
Simply open any HTML file in your browser:
```bash
# Open index.html directly in your browser
open index.html
```

### Option 2: Local Server (Recommended for testing)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Then visit http://localhost:8000 in your browser
```

### Option 3: Deploy Online
Since this is purely static HTML/CSS/JavaScript, you can deploy it anywhere:

**Netlify:**
```bash
# Drag and drop the folder onto Netlify
```

**Vercel, GitHub Pages, or any static host:**
- No build process needed
- Just upload the files and you're done!

## Customization

### Edit Contact Information
Update the footer and contact page with your actual details:
- Phone number
- Email address
- Hours of operation
- Address

### Add Restaurant Images
Replace the emoji placeholders with actual images:
- Add images to an `images/` folder
- Update the HTML to reference them

### Change Colors
Edit the CSS variables in `styles.css`:
- Primary color: `#1F3D5A` (Navy)
- Accent color: `#FF9933` (Saffron)
- Secondary color: `#C1272D` (Deep Red)

### Update Menu Items
Simply edit the menu items in `menu.html`:
- Change dish names, descriptions, and prices
- Add or remove menu sections as needed

### Webhook Integration
The contact form is already integrated with an n8n webhook endpoint to capture form submissions. When users submit the contact form:
1. Form data is collected (name, email, phone, subject, message, timestamp)
2. Data is sent via POST request to the webhook URL
3. User sees a success message
4. Form is cleared for next submission

**Current Webhook URL:** `https://vikasbayyarapu.app.n8n.cloud/webhook-test/7cd92ab5-d3d0-4240-86f0-6a5e4474362a`

To change the webhook URL, edit the `webhookUrl` variable in the `<script>` section of `contact.html`:
```javascript
const webhookUrl = 'YOUR_WEBHOOK_URL_HERE';
```

### Alternative Backend Integration
To use a different backend service instead of the webhook:
- EmailJS - For email notifications
- Formspree - For form handling
- Custom API endpoint - For custom backend logic

Replace the webhook integration in `contact.html` with your preferred service.

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- **Zero Build Time** - Site loads instantly
- **No JavaScript Framework** - Vanilla JS only
- **Small File Size** - Total size < 100KB
- **Fast Page Loads** - Can be deployed on any CDN

## License

Free to use and modify for your restaurant.

## Support

For questions or customization needs, feel free to reach out!

---

**Flavors of India** - Authentic Indian Cuisine in Houston, Texas
