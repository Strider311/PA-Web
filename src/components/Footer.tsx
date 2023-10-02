// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center py-3 fixed-bottom"> {/* Use 'fixed-bottom' class */}
      &copy; {new Date().getFullYear()} ArgiXR
    </footer>
  );
};

export default Footer;
