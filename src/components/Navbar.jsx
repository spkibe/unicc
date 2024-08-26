// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { bankData } from './UsBanks/Usbankdata'; // Adjust the path if necessary
import { ukbankdata } from '../data/Ukdata';
import { canadaBankdata } from '../data/canadadata';
import { russianData } from '../data/russiandata';

const Navbar = () => {
  // Separate states for each dropdown
  const [usBanksDropdownVisible, setUsBanksDropdownVisible] = useState(false);
  const [ukBanksDropdownVisible, setUkBanksDropdownVisible] = useState(false);
  const [canadaBanksDropdownVisible, setCanadaBanksDropdownVisible] = useState(false);
  const [russiaBanksDropdownVisible, setRussiaBanksDropdownVisible] = useState(false);

  const [username, setUsername] = useState(''); // State for storing username

  // Effect to get the username from local storage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username) {
      setUsername(storedUser.username); // Set the username if it exists
    }
  }, []);

  // Handlers for dropdowns
  const toggleDropdown = (setDropdownVisible) => setDropdownVisible((prev) => !prev);

  // Click handler to hide dropdown on click
  const hideDropdown = () => {
    setUsBanksDropdownVisible(false);
    setUkBanksDropdownVisible(false);
    setCanadaBanksDropdownVisible(false);
    setRussiaBanksDropdownVisible(false);
  };

  return (
    <div className="header-container">
      <header className="header navbar navbar-expand-sm bg-gray-800 text-white">
        <div className="flex justify-between items-center w-full py-2 px-4 relative">
          <div className="nav-logo align-self-center">
            <a className="navbar-brand text-lg font-semibold" href="/">ICOCLIQ</a>
          </div>

          <ul className="navbar-item flex-row nav-dropdowns">
            <li className="nav-item dropdown user-profile-dropdown order-lg-0 order-1 relative">
              <a href="javascript:void(0);" className="nav-link dropdown-toggle user flex items-center">
                <div className="media flex items-center">
                  <div className="media-body align-self-center">
                    <h6 className="text-sm font-medium"><span>Hi,</span> {username || 'Guest'}</h6>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-gray-700 py-2 px-4">
          <div className="flex justify-center">
            <div className="flex space-x-4 ml-4">
              <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
              
              {/* US Banks */}
              <div 
                className="relative space-x-4 ml-4"
                onMouseEnter={() => setUsBanksDropdownVisible(true)}
                onMouseLeave={() => setUsBanksDropdownVisible(false)}
              >
                <NavLink to="#" className="hover:text-gray-400">
                  UsBanks
                </NavLink>

                {usBanksDropdownVisible && (
                  <div className="dropdown-menu absolute mt-2 bg-gray-800 text-white shadow-lg rounded-lg z-50 w-full">
                    {Object.keys(bankData).map((bankKey) => (
                      <NavLink
                        key={bankKey}
                        to={`/UsBanks/${bankKey}`}
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={hideDropdown}
                      >
                        {bankKey.replace(/([A-Z])/g, ' $1').trim()}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
              
              {/* UK Banks */}
              <div 
                className="relative space-x-4 ml-4"
                onMouseEnter={() => setUkBanksDropdownVisible(true)}
                onMouseLeave={() => setUkBanksDropdownVisible(false)}
              >
                <NavLink to="#" className="hover:text-gray-400">
                  UkBanks
                </NavLink>

                {ukBanksDropdownVisible && (
                  <div className="dropdown-menu absolute mt-2 bg-gray-800 text-white shadow-lg rounded-lg z-50">
                    {Object.keys(ukbankdata).map((bankKey) => (
                      <NavLink
                        key={bankKey}
                        to={`/UkBanks/${bankKey}`}
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={hideDropdown}
                      >
                        {bankKey.replace(/([A-Z])/g, ' $1').trim()}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Canada Banks */}
              <div 
                className="relative space-x-4 ml-4"
                onMouseEnter={() => setCanadaBanksDropdownVisible(true)}
                onMouseLeave={() => setCanadaBanksDropdownVisible(false)}
              >
                <NavLink to="#" className="hover:text-gray-400">
                  Canada Banks
                </NavLink>

                {canadaBanksDropdownVisible && (
                  <div className="dropdown-menu absolute mt-2 bg-gray-800 text-white shadow-lg rounded-lg z-50">
                    {Object.keys(canadaBankdata).map((bankKey) => (
                      <NavLink
                        key={bankKey}
                        to={`/CanadaBanks/${bankKey}`}
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={hideDropdown}
                      >
                        {bankKey.replace(/([A-Z])/g, ' $1').trim()}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Russia Banks */}
              <div 
                className="relative space-x-4 ml-4"
                onMouseEnter={() => setRussiaBanksDropdownVisible(true)}
                onMouseLeave={() => setRussiaBanksDropdownVisible(false)}
              >
                <NavLink to="#" className="hover:text-gray-400">
                  Russia Banks
                </NavLink>

                {russiaBanksDropdownVisible && (
                  <div className="dropdown-menu absolute mt-2 bg-gray-800 text-white shadow-lg rounded-lg z-50">
                    {Object.keys(russianData).map((bankKey) => (
                      <NavLink
                        key={bankKey}
                        to={`/RussiaBanks/${bankKey}`}
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={hideDropdown}
                      >
                        {bankKey.replace(/([A-Z])/g, ' $1').trim()}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to="/payment" className="hover:text-gray-400">Add Balances</NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
