

# Link All Buttons & WhatsApp Integration

## Summary
Connect all CTA buttons to their proper destinations. "Contact Us" and "Get a Quote" buttons will open WhatsApp with the phone number `+263783420554`. Navigation links and "Our Services" will scroll to the correct sections.

## WhatsApp URL
Use `https://wa.me/263783420554` (stripped of spaces/plus) with an optional pre-filled message like "Hi, I'd like to get a quote."

## Changes

### 1. `src/components/Hero.tsx`
- **"Our Services"** button: wrap in `<a href="#services">` to scroll to services section
- **"Contact Us"** button: wrap in `<a href="https://wa.me/263783420554?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20services" target="_blank" rel="noopener noreferrer">` to open WhatsApp

### 2. `src/components/Navbar.tsx`
- **"Get a Quote"** button (desktop + mobile): wrap in `<a href="https://wa.me/263783420554?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote" target="_blank" rel="noopener noreferrer">`

### 3. `src/components/Contact.tsx`
- **Phone number** display: wrap in `<a href="https://wa.me/263783420554">` so it's clickable
- **Email** display: wrap in `<a href="mailto:info@natiousline.co.zw">`
- **"Send Message"** button on form: change form `onSubmit` to open WhatsApp with the form content (name + message) as a pre-filled WhatsApp message, since there's no backend

All changes are minimal -- just adding `<a>` wrappers or `onClick` handlers with `window.open()`.

