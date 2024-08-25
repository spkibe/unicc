import React from 'react'
import { useParams } from 'react-router-dom';
import { ukbankdata } from '../data/Ukdata'; // Assuming this is where your data is stored
import DataTable from '../components/dataTable';

const Ukbanks = () => {
    const { bankName } = useParams(); // Get the bank name from the URL
    const bankInfo = ukbankdata[bankName]; // Fetch the corresponding bank data
  
    return (
      <div>
        <h1>{bankName}</h1>
        <DataTable data={bankInfo} /> {/* Pass the dynamic data to the DataTable */}
      </div>
    );
  };

export default Ukbanks
