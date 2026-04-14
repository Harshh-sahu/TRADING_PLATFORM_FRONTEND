// Toast.js
import React, { useEffect, useState } from 'react';

const CustomeToast = ({ message, show, onClose, type = "error" }) => {
    const [showToast, setShowToast] = useState(false);

    const handleCloseToast = () => {
        setShowToast(false);
        if (onClose) onClose();
      };

      
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        handleCloseToast();
      }, 2000); // Auto close after 1 second

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [showToast, onClose]);

  useEffect(()=>{
    setShowToast(show)
  },[show])

  if (!showToast) return null;

  const bgColor = type === "success" ? "bg-green-600" : "bg-red-600";

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-4 py-2 rounded shadow-lg z-[100]`}>
      {message}
    </div>
  );
};

export default CustomeToast;
