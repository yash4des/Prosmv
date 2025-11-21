# Installation Guide

## System Requirements

- **Node.js** v18.0.0 or higher
- **npm** v9.0.0 or higher (comes with Node.js)
- **Operating System:** Windows, macOS, or Linux
- **RAM:** Minimum 4GB (8GB recommended)
- **Disk Space:** 500MB free space

## Step-by-Step Installation

### 1. Prerequisites Check

Check if Node.js is installed:
```bash
node --version
```

Check if npm is installed:
```bash
npm --version
```

If not installed, download from: https://nodejs.org/

### 2. Extract Project Files

**Option A: Using ZIP**
```bash
unzip dashboard-export.zip
cd project
```

**Option B: Using TAR.GZ**
```bash
tar -xzf dashboard-export.tar.gz
cd project
```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages:
- React and React DOM
- TypeScript
- Tailwind CSS
- Vite
- React Router
- amCharts5
- Shadcn UI components
- And other dependencies

**Installation Time:** Approximately 2-5 minutes depending on internet speed.

### 4. Verify Installation

Check if all packages are installed:
```bash
npm list --depth=0
```

### 5. Start Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v7.2.2  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 6. Open in Browser

Navigate to: **http://localhost:5173**

You should see the dashboard homepage.

## Common Installation Issues

### Issue 1: Port Already in Use

**Error:**
```
Port 5173 is already in use
```

**Solution:**
```bash
# Option 1: Use different port
npm run dev -- --port 3000

# Option 2: Kill process using port 5173
# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:5173 | xargs kill -9
```

### Issue 2: Module Not Found

**Error:**
```
Cannot find module 'xxx'
```

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 3: Permission Denied

**Error:**
```
EACCES: permission denied
```

**Solution:**
```bash
# On Mac/Linux (use with caution):
sudo npm install

# Better approach - fix npm permissions:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### Issue 4: Build Fails

**Error:**
```
Build failed with errors
```

**Solution:**
```bash
# Clear cache
npm cache clean --force

# Remove dist folder
rm -rf dist

# Rebuild
npm run build
```

## Alternative Package Managers

### Using Yarn

```bash
# Install Yarn
npm install -g yarn

# Install dependencies
yarn install

# Run dev server
yarn dev

# Build for production
yarn build
```

### Using pnpm

```bash
# Install pnpm
npm install -g pnpm

# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build
```

## Production Build

### Build the Project

```bash
npm run build
```

Build output will be in `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

This runs a local server to preview the production build.

## Folder Structure After Installation

```
project/
├── node_modules/        # Installed dependencies (auto-generated)
├── dist/                # Production build (after running build)
├── public/              # Static assets
├── src/                 # Source code
├── index.html           # HTML template
├── package.json         # Project configuration
├── package-lock.json    # Dependency lock file (auto-generated)
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── README.md            # Project overview
├── DEVELOPER_GUIDE.md   # Detailed documentation
└── INSTALLATION.md      # This file
```

## Environment Setup (Optional)

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api

# App Configuration
VITE_APP_NAME=Pro-SMV Dashboard
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_DARK_MODE=true
VITE_ENABLE_ANALYTICS=false
```

**Note:** All environment variables must be prefixed with `VITE_` to be exposed to the frontend.

## IDE Setup

### Visual Studio Code (Recommended)

**Install Extensions:**
1. ESLint
2. Prettier
3. Tailwind CSS IntelliSense
4. TypeScript and JavaScript Language Features

**Settings:**
Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Next Steps

1. ✅ Complete installation
2. ✅ Start dev server
3. ✅ Open dashboard in browser
4. 📖 Read **DEVELOPER_GUIDE.md** for detailed documentation
5. 🎨 Customize colors in `tailwind.config.js`
6. 🔧 Configure API endpoints in `.env`
7. 🚀 Start development!

## Getting Help

- Check **DEVELOPER_GUIDE.md** for detailed documentation
- Review inline code comments
- Check official documentation:
  - React: https://react.dev/
  - Vite: https://vitejs.dev/
  - Tailwind CSS: https://tailwindcss.com/

## Verification Checklist

- [ ] Node.js installed (v18+)
- [ ] Project files extracted
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server starts (`npm run dev`)
- [ ] Dashboard opens in browser
- [ ] No console errors
- [ ] All routes accessible

---

**Installation Complete! Happy Development! 🎉**
