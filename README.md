# Pixupid - Creative Design Studio

A professional portfolio website for Pixupid, showcasing branding, presentation design, and custom doodles.

## 🚀 Setup Instructions

### Local Development

1. Simply open `index.html` in your browser to view the site locally
2. No build process or dependencies required - it's pure HTML, CSS, and JavaScript

### Deploying to GitHub Pages

#### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name it `pixupid` (or `yourusername.github.io` for a user site)
4. Make it **Public**
5. Don't initialize with README (we already have files)
6. Click "Create repository"

#### Step 2: Push Your Code

Open Command Prompt or PowerShell in this directory and run:

```bash
git init
git add .
git commit -m "Initial commit: Pixupid website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pixupid.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

#### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Click "Pages" (left sidebar)
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

Your site will be live at: `https://YOUR_USERNAME.github.io/pixupid/`

#### Step 4: Set Up Custom Domain (Optional)

To use `pixupid.com`:

1. In GitHub Pages settings, enter `pixupid.com` in the "Custom domain" field
2. Click "Save"
3. Update your domain's DNS settings (wherever you bought pixupid.com):
   - Add these **A records**:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a **CNAME record**: `www` → `YOUR_USERNAME.github.io`
4. Wait 24-48 hours for DNS propagation
5. Enable "Enforce HTTPS" in GitHub Pages settings once the domain is verified

## 📁 Project Structure

```
pixupid/
├── index.html          # Main homepage
├── faq.html           # FAQ page
├── contact.html       # Contact form page
├── css/
│   └── style.css      # All styles
├── js/
│   └── main.js        # Interactive features
├── assets/
│   ├── fonts/         # Custom fonts (Armata, Didact Gothic)
│   └── images/        # All images
│       ├── Branding/
│       ├── Portfolio/
│       ├── Doodles/
│       ├── Icons/
│       └── Testimonials/
└── README.md          # This file
```

## 🎨 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Portfolio Galleries**: Showcases branding, presentations, and doodles
- **Smooth Animations**: Fade-in effects and hover interactions
- **Custom Fonts**: Uses Armata and Didact Gothic for unique typography
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized images and minimal dependencies

## 🔧 Customization

### Update Contact Form

The contact form in `contact.html` uses Formspree. To set it up:

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Replace `YOUR_FORM_ID` in contact.html with your actual form ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Change Colors

Edit `css/style.css` and modify the CSS variables:

```css
:root {
    --primary-blue: #4A90E2;
    --dark-blue: #2C5AA0;
    --light-blue: #E8F4FF;
    /* ... other colors ... */
}
```

## 📝 Updating Content

- **Portfolio Items**: Add images to appropriate folders in `assets/images/`
- **Testimonials**: Add images to `assets/images/Testimonials/`
- **Text Content**: Edit the HTML files directly

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This is a private portfolio website for Pixupid. All rights reserved.

## 📧 Contact

For questions or support, email: design@pixupid.com
