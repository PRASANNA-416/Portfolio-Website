import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    '**/*.JPG',  // Support uppercase .JPG files
    '**/*.jpg',  // Support lowercase .jpg files
    '**/*.PNG',  // Support uppercase .PNG files
    '**/*.png',  // Support lowercase .png files
    '**/*.avif',  // Support .avif files
  ],
});
