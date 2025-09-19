# 🚀 Render Deployment Checklist - Sanskriti Setu CMS

## ✅ Pre-Deployment Checklist (COMPLETED)
- [x] Environment variables configured
- [x] Database configuration updated for PostgreSQL
- [x] render.yaml file created
- [x] Code pushed to GitHub
- [x] Local development server tested

## 🎯 Step-by-Step Render Deployment

### Step 1: Create Render Account
1. Go to [https://render.com](https://render.com)
2. Sign up with GitHub (recommended)
3. Authorize Render to access your repositories

### Step 2: Deploy Using Blueprint (Easiest Method)
1. In Render Dashboard, click **"New +"** → **"Blueprint"**
2. Select your GitHub repository: `buildwithaman01/sanskriti-setu-cms`
3. Render will automatically detect the `render.yaml` file
4. Click **"Apply"** to deploy
5. Wait for deployment (5-10 minutes)

### Step 3: Manual Deployment (Alternative)
If Blueprint doesn't work:

1. **Create Web Service:**
   - Click **"New +"** → **"Web Service"**
   - Connect GitHub repository: `buildwithaman01/sanskriti-setu-cms`
   - Configure:
     - **Name**: `sanskriti-setu-cms`
     - **Environment**: `Node`
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm run start`
     - **Plan**: `Starter` (free)

2. **Create Database:**
   - Click **"New +"** → **"PostgreSQL"**
   - Configure:
     - **Name**: `sanskriti-setu-db`
     - **Plan**: `Starter` (free)

3. **Set Environment Variables:**
   Copy these to your web service environment variables:

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

### Step 4: Connect Database to Web Service
1. In your web service settings
2. Go to **"Environment"** tab
3. Add database connection variables:
   - `DATABASE_HOST`: Copy from database service
   - `DATABASE_PORT`: Copy from database service
   - `DATABASE_NAME`: Copy from database service
   - `DATABASE_USERNAME`: Copy from database service
   - `DATABASE_PASSWORD`: Copy from database service

### Step 5: Deploy
1. Click **"Deploy"** on your web service
2. Monitor the deployment logs
3. Wait for "Deploy successful" message

## 🔍 Post-Deployment Verification

### ✅ Test Checklist
- [ ] Web service shows "Live" status
- [ ] Admin panel loads: `https://your-app-name.onrender.com/admin`
- [ ] Can create admin user
- [ ] Can log in to admin panel
- [ ] Content manager works
- [ ] API endpoints respond

### 🚨 Troubleshooting
If deployment fails:

1. **Check Build Logs:**
   - Look for error messages in deployment logs
   - Common issues: missing dependencies, build errors

2. **Check Runtime Logs:**
   - Look for "app.keys required" errors
   - Verify environment variables are set correctly

3. **Database Connection Issues:**
   - Ensure database service is running
   - Check database credentials
   - Verify SSL settings

## 🎉 Success Indicators
- ✅ Deployment completes without errors
- ✅ Admin panel accessible at deployed URL
- ✅ Can create and manage content
- ✅ API endpoints return data

## 📞 Support
If you encounter issues:
1. Check Render documentation: [https://render.com/docs](https://render.com/docs)
2. Review deployment logs for specific error messages
3. Verify all environment variables are correctly set

---
**Your Strapi CMS is now ready for production! 🚀**
