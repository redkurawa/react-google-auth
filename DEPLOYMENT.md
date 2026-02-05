# React Google Auth - Production Deployment Guide

## 🚀 Upload ke GitHub & Vercel - Checklist

### ✅ Sudah Siap:

- [x] Aplikasi React dengan Google Auth
- [x] Environment variables di `.env.local`
- [x] Vercel configuration (`vercel.json`)
- [x] `.gitignore` sudah benar

### 📋 Upload ke GitHub:

```bash
cd react-google-auth
git add .
git commit -m "feat: add Google authentication with Firebase"
git branch -M main
git remote add origin https://github.com/username/react-google-auth.git
git push -u origin main
```

### 🔧 yang PERLU diubah untuk Vercel:

#### 1. **Environment Variables** di Vercel Dashboard:

```
REACT_APP_GOOGLE_CLIENT_ID=xxxxxxx.apps.googleusercontent.com
REACT_APP_FIREBASE_API_KEY=xxxxxx-RaBEuwqP2hg
REACT_APP_FIREBASE_AUTH_DOMAIN=react--xxxxx.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=react--xxxxx
REACT_APP_FIREBASE_STORAGE_BUCKET=react--xxxxxx.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxxxx376323
REACT_APP_FIREBASE_APP_ID=1:1087821376323:web:xxxxxxx
```

#### 2. **Update Google OAuth** di Google Cloud Console:

- Tambahkan URL Vercel: `https://your-app.vercel.app`
- Authorized JavaScript origins: `https://your-app.vercel.app`

#### 3. **Update Firebase** di Firebase Console:

- Authorized domains: `your-app.vercel.app`

### ⚠️ TIDAK PERLU diubah:

- [x] Source code (semua)
- [x] Component logic
- [x] Styling
- [x] `vercel.json`
- [x] `.gitignore`

### 🚫 JANGAN di-upload:

- `node_modules/`
- `.env.local`
- `/build`

### 🔍 Testing setelah deploy:

1. **Test login** di production URL
2. **Test Google OAuth callback**
3. **Test console error** (F12)
4. **Test mobile responsiveness**

### 🛠️ Jika ada error:

1. **Cek Vercel build logs**
2. **Verify environment variables**
3. **Check Firebase/Google OAuth domains**
4. **Clear browser cache**

---

## 📝 Link penting:

- Vercel Dashboard: https://vercel.com/dashboard
- Google Cloud Console: https://console.cloud.google.com/
- Firebase Console: https://console.firebase.google.com/
