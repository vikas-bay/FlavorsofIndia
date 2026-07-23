# Flavors of India - Restaurant Website

A completely **static HTML/CSS/JavaScript** website for Flavors of India, an authentic Indian restaurant in Houston, Texas.

## Features

✅ **No Build Tools Required** - Pure HTML, CSS, and vanilla JavaScript
✅ **No Dependencies** - Zero npm packages needed
✅ **Fully Responsive** - Works on mobile, tablet, and desktop
✅ **Three Pages** - Landing page, menu, and contact page
✅ **Working Contact Form** - Client-side form with success message

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
  - Success message on submission
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

### Add Backend Integration
The contact form can be connected to a backend service:
- EmailJS
- Formspree
- Custom backend endpoint

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
