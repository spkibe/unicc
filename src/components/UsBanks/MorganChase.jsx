import React from 'react';

const DataTable = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className="container mx-auto p-4">
        <div className="p-4 bg-gray-900 text-white rounded">
          <div className="flex justify-between items-center mb-4">
            <div>
              <label className="block text-gray-300">
                Results:
                <select className="ml-2 p-2 bg-gray-700 text-white rounded">
                  <option value="7">7</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </label>
            </div>
            <div className="relative">
              <input
                type="search"
                className="p-2 pl-10 bg-gray-700 text-white rounded"
                placeholder="Search..."
              />
              <svg
                className="absolute left-2 top-2 w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>

          <table className="min-w-full bg-gray-800 text-white rounded">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">Bank Log</th>
                <th className="py-2 px-4 text-left">Description</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Balance</th>
                <th className="py-2 px-4 text-center">Order</th>
              </tr>
            </thead>
            <tbody>
              {[
                { bank: 'JPMorgan Chase & Co', desc: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$386', balance: '$7378.88' },
                { bank: 'JPMorgan Chase & Co', desc: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$367', balance: '$6800.87' },
                { bank: 'JPMorgan Chase & Co', desc: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$383', balance: '$7275.60' },
                { bank: 'JPMorgan Chase & Co', desc: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$396', balance: '$7668.17' },
                { bank: 'JPMorgan Chase & Co', desc: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$341', balance: '$6028.85' },
                { bank: 'JPMorgan Chase & Co', desc: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$362', balance: '$6652.59' },
                { bank: 'JPMorgan Chase & Co', desc: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$347', balance: '$6194.94' },
              ].map((row, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-2 px-4">{row.bank}</td>
                  <td className="py-2 px-4">{row.desc}</td>
                  <td className="py-2 px-4">{row.price}</td>
                  <td className="py-2 px-4">{row.balance}</td>
                  <td className="py-2 px-4 text-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
                      BUY
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th className="py-2 px-4 text-left">Bank Log</th>
                <th className="py-2 px-4 text-left">Description</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Balance</th>
                <th className="py-2 px-4 text-center">Order</th>
              </tr>
            </tfoot>
          </table>

          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-400">
              Showing page 1 of 6
            </div>
            <div>
              <ul className="flex space-x-2">
                <li className="page-item disabled">
                  <a href="#" className="page-link text-gray-400">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link text-white bg-blue-600 py-1 px-3 rounded">1</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link text-white bg-gray-700 py-1 px-3 rounded">2</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link text-white bg-gray-700 py-1 px-3 rounded">3</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link text-white bg-gray-700 py-1 px-3 rounded">4</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link text-white bg-gray-700 py-1 px-3 rounded">5</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link text-white bg-gray-700 py-1 px-3 rounded">6</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link text-white bg-blue-600 py-1 px-3 rounded">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;