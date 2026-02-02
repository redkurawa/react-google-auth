import React from 'react';

interface ProfileImageProps {
  photoURL?: string | null;
  displayName?: string | null;
  email?: string | null;
  size?: number;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ 
  photoURL, 
  displayName, 
  email, 
  size = 80 
}) => {
  const [imageError, setImageError] = React.useState(false);
  
  const fallbackImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    displayName || email?.split('@')[0] || 'User'
  )}&background=4285f4&color=fff&size=${size}`;

  const handleImageError = () => {
    console.log('Google image failed, using fallback');
    setImageError(true);
  };

  return (
    <img
      src={imageError || !photoURL ? fallbackImage : photoURL}
      alt='Profile'
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        border: '2px solid #ddd',
        objectFit: 'cover'
      }}
      onError={handleImageError}
      referrerPolicy="no-referrer"
    />
  );
};

export default ProfileImage;