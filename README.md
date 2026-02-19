# React Google Auth & Firebase Storage

Aplikasi React modern buat upload foto pake Google Auth + Firebase Storage. Simple, cepet, dan responsive!

## 📖 Deskripsi

Aplikasi ini ngasih kamu fitur upload foto yang gampang banget dipake. Dengan Google Auth, kamu bisa login langsung tanpa perlu daftar manual. Semua foto yang diupload bakal disimpen di Firebase Storage, dan URL-nya bakal masuk ke Firestore biar bisa diakses kapan aja.

### Fitur Utama

- ✅ **Google Authentication** - Login cepet pake akun Google
- ✅ **Drag & Drop Upload** - Upload foto cuma drag aja
- ✅ **Firebase Storage** - Simpen foto di cloud
- ✅ **Firestore Database** - Nyimpen metadata foto
- ✅ **Responsive Design** - Jalan di HP, tablet, sama laptop
- ✅ **Delete Function** - Bisa hapus foto yang udah diupload
- ✅ **Real-time Updates** - Lihat perubahan langsung

### Teknologi yang Dipake

- **React 18** - Framework utama
- **TypeScript** - Type safety
- **Firebase** - Backend & storage
- **Google Auth** - Authentication
- **CSS3** - Styling modern
- **Vercel** - Deployment

## 🚀 Quick Start

### Prerequisites

- Node.js (versi 16 ke atas)
- npm atau yarn
- Akun Google
- Akun Firebase

### Installation

1. **Clone repository**

   ```bash
   git clone https://github.com/username/react-google-auth.git
   cd react-google-auth
   ```

2. **Install dependencies**

   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Setup Firebase**
   - Buka [Firebase Console](https://console.firebase.google.com/)
   - Buat project baru
   - Aktifin Authentication (Google Sign-In)
   - Aktifin Firestore Database
   - Aktifin Storage

4. **Setup Environment Variables**

   ```bash
   cp .env.example .env.local
   ```

   Isi file `.env.local` dengan konfigurasi Firebase kamu:

   ```
   REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   ```

5. **Jalankan aplikasi**

   ```bash
   npm start
   # atau
   yarn start
   ```

   Buka [http://localhost:3000](http://localhost:3000) di browser kamu.

## 📋 Cara Pake

### 1. Login Pake Google

- Klik tombol "Login with Google"
- Pilih akun Google kamu
- Selesai! Kamu udah login

### 2. Upload Foto

- **Drag & Drop**: Tarik file foto ke area upload
- **Klik Upload**: Klik area upload terus pilih file
- **Multiple Upload**: Bisa upload banyak foto sekaligus

### 3. Lihat & Kelola Foto

- Semua foto yang diupload bakal muncul di dashboard
- Klik foto buat lihat detail
- Klik tombol delete buat hapus foto

### 4. Logout

- Klik tombol "Logout" di pojok kanan atas
- Kamu bakal logout dari aplikasi

## ⚙️ Configuration

### Firebase Setup

1. **Authentication Setup**
   - Buka Firebase Console
   - Pergi ke Authentication > Sign-in method
   - Aktifin Google Sign-In
   - Tambahin domain kamu di Authorized domains

2. **Firestore Rules**

   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId}/photos/{photoId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

3. **Storage Rules**
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /photos/{userId}/{photoId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

### Environment Variables

| Variable                                 | Description                  | Required |
| ---------------------------------------- | ---------------------------- | -------- |
| `REACT_APP_GOOGLE_CLIENT_ID`             | Google OAuth Client ID       | ✅       |
| `REACT_APP_FIREBASE_API_KEY`             | Firebase API Key             | ✅       |
| `REACT_APP_FIREBASE_AUTH_DOMAIN`         | Firebase Auth Domain         | ✅       |
| `REACT_APP_FIREBASE_PROJECT_ID`          | Firebase Project ID          | ✅       |
| `REACT_APP_FIREBASE_STORAGE_BUCKET`      | Firebase Storage Bucket      | ✅       |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID | ✅       |
| `REACT_APP_FIREBASE_APP_ID`              | Firebase App ID              | ✅       |

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   vercel
   ```

4. **Setup Environment Variables di Vercel Dashboard**

   ```
   REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   ```

5. **Production URL**
   - Vercel bakal kasih kamu URL production
   - Tambahin URL itu ke Firebase Authorized domains

### Netlify

1. **Connect Repository**
   - Buka Netlify
   - Klik "New site from Git"
   - Connect ke repository kamu

2. **Build Settings**

   ```
   Build command: npm run build
   Publish directory: build
   ```

3. **Environment Variables**
   - Tambahin semua environment variables di Site settings > Environment variables

### GitHub Pages

1. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**

   ```json
   {
     "homepage": "https://username.github.io/react-google-auth",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🧪 Testing

### Unit Testing

```bash
npm test
# atau
yarn test
```

### Build Testing

```bash
npm run build
npm run serve
# atau
yarn build
yarn serve
```

### Linting

```bash
npm run lint
# atau
yarn lint
```

## 📱 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 🔧 Development

### Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx    # Main dashboard
│   ├── Login.tsx        # Login component
│   └── ProfileImage.tsx # Profile image component
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── firebase.ts         # Firebase configuration
├── App.tsx             # Main App component
└── index.tsx           # Entry point
```

### Adding New Features

1. **Create Component**

   ```bash
   mkdir src/components/NewFeature
   touch src/components/NewFeature/index.tsx
   ```

2. **Add to App.tsx**

   ```tsx
   import NewFeature from './components/NewFeature';
   ```

3. **Update Tests**
   ```bash
   npm test -- --updateSnapshot
   ```

## 🐛 Troubleshooting

### Common Issues

**Google Auth Not Working**

- Pastiin Google Client ID benar
- Cek Authorized domains di Firebase
- Cek browser block popup

**Upload Gagal**

- Pastiin Storage rules benar
- Cek ukuran file (maksimal 10MB)
- Cek koneksi internet

**Firestore Error**

- Pastiin Firestore database aktif
- Cek security rules
- Cek user authentication

### Debug Mode

```bash
# Enable debug logging
REACT_APP_DEBUG=true npm start
```

## 📄 License

MIT License - bebas dipake buat project apapun!

## 🤝 Contributing

1. Fork repository
2. Buat branch baru (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buka Pull Request

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/username/react-google-auth/issues)
- **Discussions**: [GitHub Discussions](https://github.com/username/react-google-auth/discussions)
- **Email**: support@example.com

## 🙏 Acknowledgments

- React Team
- Firebase Team
- Google Auth Team
- Komunitas Open Source

---

**Built with ❤️ using React & Firebase**
