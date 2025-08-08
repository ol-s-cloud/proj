# 🚀 RWA.defi Deployment Guide

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fol-s-cloud%2Fproj&env=NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID&envDescription=Get%20your%20WalletConnect%20Project%20ID%20from%20https%3A%2F%2Fcloud.walletconnect.com%2F&demo-title=RWA.defi&demo-description=Real%20World%20Assets%20DeFi%20Platform&demo-url=https%3A%2F%2Frwa-defi.vercel.app)

## Manual Deployment Steps

### 1. Fork This Repository
- Click the "Fork" button on GitHub
- Clone your forked repository locally

### 2. Set Up WalletConnect
1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Create a new project
3. Copy the Project ID
4. You'll need this for the environment variables

### 3. Deploy to Vercel

#### Option A: One-Click Deploy
1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Add your `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
4. Deploy!

#### Option B: Manual Vercel Deploy
1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your forked repository
4. Add environment variables:
   ```
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
   ```
5. Click "Deploy"

### 4. Optional: Custom Domain
1. In Vercel dashboard, go to your project
2. Go to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

### Required
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`: Get from WalletConnect Cloud

### Optional (for Web3 functionality)
- Contract addresses (see `.env.example`)
- Token addresses for different chains
- Debug mode settings

## Alternative Deployment Platforms

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Railway
1. Connect GitHub repository
2. Railway will auto-detect Next.js
3. Add environment variables
4. Deploy automatically

### DigitalOcean App Platform
1. Create new app
2. Connect GitHub repository
3. Configure build settings
4. Add environment variables

## Testing Your Deployment

After deployment, your RWA.defi platform should be live! You can:

1. **Connect Wallets**: Test MetaMask, WalletConnect integration
2. **Browse Assets**: View tokenized renewable energy assets
3. **Staking Interface**: Interact with staking modals (demo mode without contracts)
4. **Responsive Design**: Test on mobile and desktop
5. **Theme Switching**: Try light, dark, and green themes

## Production Readiness

### For Full Web3 Functionality:
1. Deploy smart contracts to your chosen networks
2. Update contract addresses in environment variables
3. Configure token addresses
4. Test on testnets first
5. Set up monitoring and analytics

### Security Checklist:
- ✅ Environment variables properly configured
- ✅ No private keys in code
- ✅ HTTPS enabled (automatic with Vercel)
- ✅ CSP headers configured
- ✅ Regular dependency updates

## Live Demo

Once deployed, your app will be similar to: https://your-app.vercel.app

## Support

- **Documentation**: See README.md and WEB3_SETUP.md
- **Issues**: Create GitHub issues for bug reports
- **Web3 Setup**: Follow WEB3_SETUP.md for blockchain integration

---

Built with ❤️ using Next.js 14, RainbowKit, and Tailwind CSS