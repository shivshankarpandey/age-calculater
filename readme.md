# 🌟 Age Calculator - Modern & Interactive

A sleek and modern age calculator built with HTML, CSS, and JavaScript that not only calculates your age but presents it with style and animations!

![Age Calculator Preview](preview.gif)

## ✨ Features

- 🎯 Precise age calculation
- 🎨 Modern glass effect design
- 🌈 Smooth animations and transitions
- 📱 Fully responsive layout
- ⚡ Real-time input validation
- 🔢 Detailed age breakdown (years, months, days, hours, minutes, seconds)
- 🎉 Interactive UI elements

## 🛠️ Technical Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎯 Implementation Details

### HTML Structure
```html
<!-- Core Components -->
- Calculator Container
  - Header with Icon
  - Date Input Section
  - Calculate Button
- Result Popup
  - Age Display
  - Age Details (years, months, days, hours, minutes, seconds)
  - Close Button
```

### CSS Features
```css
/* Key Styling Elements */
- Glass-morphism effect using backdrop-filter
+ Glass effect using backdrop-filter
- Gradient backgrounds and borders
- Custom input styling
- Smooth transitions and animations
- Responsive design
- Icon integrations
- Modern typography with Google Fonts
```

### JavaScript Functionality
```javascript
/* Core Features */
- Date validation and formatting
- Age calculation logic
- Real-time updates
- Interactive animations
- Error handling
- Input masking
```

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/shivshankarpandey/age-calculater.git
```

2. **Navigate to project**
```bash
cd age-calculator
```

3. **Open in browser**
- Open `index.html` in your preferred browser
- Start calculating ages!

## 💡 Usage

1. Enter your date of birth in MM/DD/YYYY format
2. Click the "Calculate Age" button
3. View your age breakdown in the stylish popup
4. Close using the 'X' button when done

## 🎨 Design Features

- **Colours Scheme**:
  - Primary: Gold (#FFD700)
  - Secondary: Orange (#FFA500)
  - Background: Dark with blur effect
  - Text: White with subtle shadows

- **Animations**:
  - Smooth transitions
  - Hover effects
  - Popup animations
  - Button interactions

- **Typography**:
  - Montserrat for headings
  - Quicksand for body text

## 🔧 Technical Details

### Age Calculation Logic
```javascript
// Core calculation
ageYears = today.getFullYear() - birthDate.getFullYear();
ageMonths = today.getMonth() - birthDate.getMonth();
ageDays = today.getDate() - birthDate.getDate();

// Adjustments for accurate calculations
if (ageDays < 0) {
    ageMonths--;
    ageDays += daysInMonth;
}
if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
}
```

### CSS Glass Effect
```css
.container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
}
```

## 📱 Responsive Design

- Mobile-first approach
- Flexible layouts
- Adaptive typography
- Touch-friendly interface

## 🤝 Contributing

Feel free to contribute to this project:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Background image from [source]

---
Made with ❤️ by [Shivshankar pandey]: https://github.com/shivshankarpandey/age-calculater.git
