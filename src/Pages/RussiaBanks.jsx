import React from 'react'
import { useParams } from 'react-router-dom';
import { russianData } from '../data/russiandata'; // Assuming this is where your data is stored
import DataTable from '../components/dataTable';

const RussiaBanks = () => {
    const { bankName } = useParams(); // Get the bank name from the URL
    const bankInfo = russianData[bankName]; // Fetch the corresponding bank data
  
    return (
      <div>
        <h1>{bankName}</h1>
        <DataTable data={bankInfo} /> {/* Pass the dynamic data to the DataTable */}
      </div>
    );
  };

export default RussiaBanks
