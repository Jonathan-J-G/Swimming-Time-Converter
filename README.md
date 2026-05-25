# 🏊 Swimming Time Converter

A web-based tool to convert swimming times between different pool formats: SCY (Short Course Yards), SCM (Short Course Meters), and LCM (Long Course Meters).

## 📋 Overview

This converter helps swimmers and coaches quickly convert their swim times across different pool formats. Whether you're training in yards or competing in meters, this tool makes the conversions simple and accurate.

## 🚀 Live Demo

Visit: [Swimming Time Converter](https://jonathan-j-g.github.io/Swimming-Time-Converter/)

## ✨ Features

- **Multiple Events**: Support for Freestyle, Backstroke, Breaststroke, Butterfly, and Individual Medley (IM)
- **Three Pool Formats**:
  - **SCY**: Short Course Yards (25 yards)
  - **SCM**: Short Course Meters (25 meters)
  - **LCM**: Long Course Meters (50 meters - Olympic standard)
- **Easy-to-Use Interface**: Select event, input time, and get instant conversions
- **Accurate Conversion Factors**: Based on standard swimming conversion algorithms

## 🎯 How to Use

1. **Select Your Event** from the dropdown (50 Free, 100 Back, 200 Breast, etc.)
2. **Choose "From" Pool Format** (your current pool format)
3. **Choose "To" Pool Format** (the format you want to convert to)
4. **Enter Your Time** in seconds or minutes:seconds format
5. **Click Convert** to see your converted time

### Example
- Convert a 50 second 100 Free from SCY to LCM
- Select "100 Free" → From: SCY → To: LCM
- Enter: 50 → Convert → Result: ~58.5 seconds

## 🔧 Technical Details

- **Built with**: HTML5, CSS3, JavaScript (ES6+)
- **No Dependencies**: Pure vanilla JavaScript - works offline
- **Responsive Design**: Works on desktop and mobile devices

### Architecture

- `index.html` - Main HTML structure and UI
- `script.js` - Conversion logic and event handling
- `style.css` - Styling and responsive layout

## 📊 Conversion Factors

Conversion factors vary by event distance and stroke. The tool uses scientifically-derived multipliers to convert times accurately between pool formats. Longer distances typically show different conversion rates than shorter distances due to pacing differences.

## 💡 Tips

- Times are calculated using established swimming conversion algorithms
- Results are displayed with 2 decimal precision
- All conversions are approximate and based on average swimmer performance data

## 🤝 Contributing

Feel free to submit issues or pull requests to improve the converter!

## 📝 License

This project is open source and available under the MIT License.

---

**Quick Links**: [User Guide](docs/USER_GUIDE.md) | [Technical Docs](docs/TECHNICAL.md)
