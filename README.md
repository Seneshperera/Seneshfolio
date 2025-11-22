# Vite React Portfolio

## Deployment

### Deploy to Vercel

1. Install Vercel CLI if not installed:
   ```
   npm i -g vercel
   ```
2. Run the deploy command:
   ```
   npm run deploy:vercel
   ```
3. Follow prompts to deploy your app.

### Deploy to GitHub

1. Build the project:
   ```
   npm run build
   ```
2. Commit and push the `dist` folder to your `main` branch (or appropriate branch):
   ```
   git add dist
   git commit -m "Deploy built files"
   git push origin main
   ```
3. Set GitHub Pages to serve files from the `dist` folder via your repository settings.

### Notes

- The Vite base path is set to "/" for root deployments like Vercel. If using GitHub Pages project page, you may need to adjust the base path accordingly in `vite.config.js`.
- This setup simplifies deployment and hosting on modern platforms.

## Running Locally

- Install dependencies:
  ```
  npm install
  ```
- Start development server:
  ```
  npm run dev
  ```
- Build for production:
  ```
  npm run build
  ```
- Preview production build:
  ```
  npm run preview
  ```
