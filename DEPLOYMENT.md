# Sanskriti Setu CMS - Deployment Guide

## 🚀 Quick Deployment to Render

### Prerequisites
- GitHub repository with your code
- Render account (free tier available)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 2: Deploy on Render

#### Option A: Using render.yaml (Recommended)
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Click "Apply" to deploy

#### Option B: Manual Setup
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `sanskriti-setu-cms`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Plan**: `Starter` (free)

### Step 3: Set Environment Variables
In your Render service settings, add these environment variables:

```
NODE_ENV=production
HOST=0.0.0.0
PORT=10000
APP_KEYS=ehhEak43C+3SOPomw/fUD2XU26mFaIAg1xB43D9VXsE=,fZQku86mxifYPQEB8jXKLgdAAE/fBe6m3bagJosGSm0=,vPKZqFhtnw+U0oHW+d2GYzruPTnTPXlsCQkcQPoJDPU=,upcLZMUMdcXkAUEtrxp0C/Ej/wPi322Ldw3wvcuXXms=
API_TOKEN_SALT=1EmcdGF3cXzguUhWjDqrAA==
ADMIN_JWT_SECRET=egw+p/b/GQyZweVntKJTDyBS/rczaU1pQ612bwNsB1c=
JWT_SECRET=mXu+w2ajHii9qAO7yCPlAlSxcY2eT7EpITXhGznPIW4=
TRANSFER_TOKEN_SALT=e4czAPxSLjzKCV4U+QbjBA==
ENCRYPTION_KEY=OhlQWMCAvQXcOwNv9rxn5feRH6HQ0rDKSZ9Nn/4v+gg=
DATABASE_CLIENT=postgres
DATABASE_HOST=[from database service]
DATABASE_PORT=[from database service]
DATABASE_NAME=[from database service]
DATABASE_USERNAME=[from database service]
DATABASE_PASSWORD=[from database service]
DATABASE_SSL=true
```

### Step 4: Create Database
1. In Render Dashboard, click "New +" → "PostgreSQL"
2. Configure:
   - **Name**: `sanskriti-setu-db`
   - **Plan**: `Starter` (free)
3. Copy the database connection details to your web service environment variables

### Step 5: Deploy
1. Click "Deploy" on your web service
2. Wait for deployment to complete (5-10 minutes)
3. Your Strapi CMS will be available at: `https://your-app-name.onrender.com`

## 🔧 Post-Deployment Setup

### 1. Access Admin Panel
- Go to `https://your-app-name.onrender.com/admin`
- Create your first admin user
- Set up your content types

### 2. Test Functionality
- ✅ Admin panel loads
- ✅ Can create admin user
- ✅ Can log in/out
- ✅ Content manager works
- ✅ API endpoints respond

## 🛠️ Troubleshooting

### Common Issues:
1. **"app.keys required" error**: Ensure APP_KEYS environment variable is set
2. **Database connection failed**: Check database credentials and SSL settings
3. **Build fails**: Ensure Node.js version is 18+ and all dependencies are in package.json

### Logs:
- Check Render service logs for detailed error messages
- Monitor deployment logs during build process

## 📝 Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `APP_KEYS` | Comma-separated encryption keys | ✅ |
| `API_TOKEN_SALT` | Salt for API tokens | ✅ |
| `ADMIN_JWT_SECRET` | Secret for admin JWT | ✅ |
| `JWT_SECRET` | Secret for user JWT | ✅ |
| `TRANSFER_TOKEN_SALT` | Salt for transfer tokens | ✅ |
| `ENCRYPTION_KEY` | General encryption key | ✅ |
| `DATABASE_CLIENT` | Database type (postgres/sqlite) | ✅ |
| `DATABASE_HOST` | Database host | ✅ |
| `DATABASE_PORT` | Database port | ✅ |
| `DATABASE_NAME` | Database name | ✅ |
| `DATABASE_USERNAME` | Database username | ✅ |
| `DATABASE_PASSWORD` | Database password | ✅ |
| `DATABASE_SSL` | Enable SSL for database | ✅ |

## 🎉 Success!
Your Strapi CMS is now deployed and ready to use!
