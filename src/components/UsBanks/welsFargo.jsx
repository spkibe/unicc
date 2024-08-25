import React, { useState } from 'react';

const WellsFargoTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const data = [
    { bankLog: 'Wells Fargo & Co', description: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$389', balance: '$7454.60' },
    { bankLog: 'Wells Fargo & Co', description: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$395', balance: '$7634.76' },
    { bankLog: 'Wells Fargo & Co', description: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$383', balance: '$7270.14' },
    { bankLog: 'Wells Fargo & Co', description: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$383', balance: '$7262.18' },
    { bankLog: 'Wells Fargo & Co', description: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$364', balance: '$6696.48' },
    { bankLog: 'Wells Fargo & Co', description: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$375', balance: '$7030.10' },
    { bankLog: 'Wells Fargo & Co', description: 'SAVINGS + CHECKINGS + INFO + EMAIL LOGIN PASS', price: '$403', balance: '$7873.30' }
  ];

  const filteredData = data.filter(item =>
    item.bankLog.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-between">
        <div className="flex items-center">
          <label className="mr-2">Results:</label>
          <select className="form-select" onChange={(e) => setItemsPerPage(parseInt(e.target.value, 10))}>
            <option value="7">7</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="relative">
          <input
            type="search"
            className="form-input pl-8"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-2 top-2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2">Bank Log</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Balance</th>
            <th className="px-4 py-2 text-center">Order</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.bankLog}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">{item.price}</td>
              <td className="border px-4 py-2">{item.balance}</td>
              <td className="border px-4 py-2 text-center">
                <a href="/Payment">
                  <button className="btn btn-outline-primary">BUY</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Bank Log</th>
            <th>Description</th>
            <th>Price</th>
            <th>Balance</th>
            <th className="text-center">Order</th>
          </tr>
        </tfoot>
      </table>
      <div className="mt-4 flex justify-between">
        <div className="text-sm">
          Showing page {currentPage} of {totalPages}
        </div>
        <div>
          <button
            className={`btn ${currentPage === 1 ? 'btn-disabled' : 'btn-primary'}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`btn ${currentPage === i + 1 ? 'btn-active' : 'btn-outline-primary'}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`btn ${currentPage === totalPages ? 'btn-disabled' : 'btn-primary'}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WellsFargoTable;
