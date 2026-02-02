import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import ProfileImage from './ProfileImage';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <h1>Dashboard</h1>
        <button
          onClick={logout}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <h2>Selamat Datang, {user.displayName}!</h2>

        <div style={{ marginTop: '1rem' }}>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>User ID:</strong> {user.uid}
          </p>
          <p>
            <strong>Photo URL:</strong> {user.photoURL}
          </p>
          <div style={{ marginTop: '1rem' }}>
            <ProfileImage 
              photoURL={user.photoURL}
              displayName={user.displayName}
              email={user.email}
              size={80}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: '2rem',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <h3>Daftar User yang Sudah Login</h3>
        <p>
          Ini adalah dashboard sederhana. Untuk melihat semua user yang login,
          perlu backend/database untuk menyimpan data user.
        </p>

        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
          }}
        >
          <p>
            <strong>User Saat Ini:</strong>
          </p>
          <ul>
            <li>Nama: {user.displayName}</li>
            <li>Email: {user.email}</li>
            <li>Login Time: {new Date().toLocaleString('id-ID')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
