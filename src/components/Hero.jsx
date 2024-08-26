import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [userName, setUserName] = useState('Anonymous User');
  const [accountBalance, setAccountBalance] = useState('Hidden');

  // Fetch user details from local storage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.username || 'Anonymous User');
      setAccountBalance(user.accountBalance || 'Hidden');
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between w-full max-w-screen-xl p-6">
        {/* Profile Section */}
        <div className="lg:w-1/4 w-full mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="/path-to-your-image/profile-3.jpeg" alt="avatar" className="w-24 h-24 rounded-full mx-auto"/>
            <h2 className="text-xl font-semibold mt-4">{userName}</h2>
            <ul className="mt-4 text-gray-300">
              <li className="mb-2">Account Balance: $0</li>
              <li className="mb-2">{userName === 'Anonymous User' ? 'Anonymous User' : 'Registered User'}</li>
              <li className="mb-2">Hidden</li>
            </ul>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-3/4 w-full flex flex-col">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">FAQ</h3>
            <p className="mt-4">Welcome to the private shop UNICC!</p>
            <p>For our customers' security, UNICC blocks IP addresses for all anonymous users to prevent them from being tracked.</p>
            <p>Our store boasts a self-written engine, anti-DDoS system, and a robust server. We do not keep any logs!</p>
            <p>Attention! New return format. After buying the goods, you will have a countdown on the return time, which is currently 2 hours, enough to check your account. Please specify the correct details and always attach screenshots; otherwise, the return will be denied!</p>
            <p>Clients' personal data is stored in a database with non-standard encryption and guaranteed security.</p>
            <p>It is forbidden to transfer accounts and links to the shop to third parties.</p>
            <p>For all questions, please contact the chat directly in the shop or text <a href="https://t.me/Wefamily11" className="text-blue-500 underline">@Wefamily11</a> on Telegram.</p>
            <p>Replacement of invalid accounts results in a return of the cost to your personal account.</p>
            <p>Inactive accounts for a month will be deleted.</p>
            <p>Balance from the store is not displayed.</p>
            <p>Non-compliance with the rules will result in account deletion without the right of restoration.</p>
            <p>ACCORDING TO THE RULES OF REFUND, WRITE AND SPECIFY IN THE DETAILS BEFORE YOU BUY!</p>
          </div>

          <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">TRANSACTIONS</h3>
            <div className="mt-4">
              <div className="flex justify-between">
                <div className="text-gray-300">Last transaction: <b className="last-tx">...</b></div>
              </div>
              <p className="mt-4 text-gray-300">This section shows all live transactions from our customers buying logs with Bitcoin.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full bg-gray-800 py-4 text-center text-gray-400">
        <p>Copyright © 2024 <a href="" className="text-white">UNICC</a>, All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Hero;
