import React, { useState } from 'react';
import data from './Usbankdata'

const BankTable = ({ data }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Bank Log</th>
          <th>Description</th>
          <th>Price</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.log}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};