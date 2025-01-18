# Hex Code Visualizer

Hex Code Visualizer is a simple, intuitive tool designed to help developers and creatives easily compare, customize, and organize color palettes. Built with **Next.js**, **TypeScript**, and **TailwindCSS**, it offers a live preview to visualize how selected colors would look on a page.

## Features
- **Add Colors to Palette**: Users can add up to **6 colors** to their palette.
- **Drag and Reorder**: Rearrange colors by dragging and dropping.
- **Copy Hex Codes**: Easily copy hex codes directly from the palette.
- **Live Preview**: Visualize how colors would look when applied to common web components, including:
  - Navbar
  - Header
  - Subheading
  - Body Text
  - Buttons
  - Input Fields
- **Dynamic Fallbacks**: Automatically assign fallback colors if the palette has fewer than 6 colors.
- **Compare Color Palettes**: Users can compare 2 color palettes at a time.

## Technologies Used
- **Frontend:** Next.js, CSS (Tailwind CSS), TypeScript, Lucide-React icons

## How to Use
1. Replace existing colors from starter palette with the colors you want to use
2. Drag and drop the colors to reorder them
3. Click the hex codes of the colors to copy them to your clipboard
4. Click the Compare Palettes button to get access to a second palette to compare

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sabrinapowell/hex-color-visualizer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd hex-color-visualizer
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

## Future Enhancements
- Add light/dark mode toggle for live preview.
- Allow users to save and share palettes.
- Allow users to customize which colors are used for each component in the live preview.
- Generate accessibility contrast reports.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## Acknowledgments
- Icons by [Lucide React](https://lucide.dev/)
- Styling by [Tailwind CSS](https://tailwindcss.com/)

---

Thank you for using **Hex Code Visualizer**! If you enjoy the project, please consider giving it a ⭐ on GitHub. 😊
