# Birthday Poster Creator

A beautiful, interactive web application for creating personalized birthday posters ready for printing and display.

## Features

- ✨ **Large Format Design**: Eye-catching poster layout (8.5" x 11")
- 🎨 **Multiple Themes**: Choose from Purple, Pink, Blue, and Gold color schemes
- 📝 **Full Customization**: Personalize name, age, and celebratory message
- 📥 **Download & Print**: Save as image or print directly from browser
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎉 **Beautiful Animations**: Pulsing age circle and bouncing decorations

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Styling, animations, and print styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── .github/
    └── copilot-instructions.md  # VS Code Copilot configuration
```

## Getting Started

1. Open `index.html` in a web browser
2. Fill in the birthday person's name, age, and celebratory message
3. Select a color theme
4. Preview your poster in real-time
5. Click "Download Poster" to save as image or use Ctrl+P to print

## Technologies Used

- HTML5
- CSS3 (Flexbox, Gradients, Animations, Print Styles)
- Vanilla JavaScript
- No external dependencies required

## Customization

### Adding New Themes

Add new theme classes in `styles.css`:

```css
.poster.custom-theme {
    background: linear-gradient(135deg, #color1 0%, #color2 100%);
}

.poster.custom-theme .poster-name,
.poster.custom-theme .poster-label,
.poster.custom-theme .poster-message {
    color: #titleColor;
}

.poster.custom-theme .poster-age-circle {
    background: linear-gradient(135deg, #accentColor1 0%, #accentColor2 100%);
}
```

### Modifying Poster Dimensions

Edit the aspect ratio in `.poster` class in `styles.css` to change poster size.

## Browser Support

- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers

## Print Options

- **High-Quality PNG**: Click "Download Poster" for digital use
- **Direct Print**: Use Ctrl+P (or Cmd+P on Mac) to print directly from browser
- **Supported Paper Sizes**: Letter (8.5" x 11"), A4, and custom sizes

## Features in Detail

### Live Preview
Watch your poster update in real-time as you customize the text and select themes.

### Professional Themes
Four expertly-designed color schemes:
- **Purple Elegance**: Sophisticated and regal
- **Pink Celebration**: Fun and festive
- **Blue Ocean**: Calm and serene
- **Gold Luxury**: Elegant and premium

### Print-Optimized
Full print styling ensures your poster looks perfect whether displayed digitally or in print.

## Future Enhancements

- Image/photo support
- Custom font options
- Sticker and emoji picker
- Social media optimization (Instagram Stories, TikTok sizes)
- QR code generation
- Batch poster creation

## License

Open source - feel free to use and modify for your needs.

## Author

Birthday Poster Creator | May 2026
