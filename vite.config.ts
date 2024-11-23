import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    cleanupOutdatedCaches: true,
  },
  includeAssets: [
    'favicon.ico',
    'apple-touch-icon.png',
    'masked-icon.svg',
  ],
  manifest: {
    name: 'Career Search Agency',
    short_name: 'CSA App',
    description: 'CSA-Career Search Agency',
    icons: [
      {
        src: './src/assets/img/dong.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      }
    ],
    theme_color: '#141e27',
    background_color: '#141e27',
    orientation: 'portrait',
  },
  devOptions: {
    enabled: true,
    type: 'module',
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});