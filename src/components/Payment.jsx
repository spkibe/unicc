import React from 'react';
import vic_qr from '../assets/vic_address.png';

const Payment = () => {
  const address = 'bc1qtzjpu5j4uavs3m5wvegvpjkwm5wmt77d2txpvv';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    alert('Address copied to clipboard!');
  };

  return (
    <div className="container mx-auto p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-6">Payment</h2>

      {/* QR Code Image */}
      <div className="flex justify-center mb-6">
        <img 
          src={vic_qr}
          alt="QR Code" 
          className="w-64 h-64"  // Enlarged QR code size
        />
      </div>

      {/* Copiable Address */}
      <div className="text-center">
        <p className="mb-4">Send payments to this address:</p>
        <div className="border border-gray-300 rounded p-2 inline-block">
          <span className="text-sm" id="payment-address">{address}</span>
        </div>
        <button 
          onClick={copyToClipboard} 
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Copy Address
        </button>
      </div>
    </div>
  );
};

export default Payment;
