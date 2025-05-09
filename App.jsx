// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Account from './pages/Account';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-4">
      <Link to="/">Dashboard</Link>
      <Link to="/account">Account</Link>
      <Link to="/transactions">Transactions</Link>
    </nav>
  );
}

// pages/Dashboard.jsx
import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Bank</h1>
      <p>Your trusted partner for secure and easy banking.</p>
    </div>
  );
}

// pages/Account.jsx
import React, { useState } from 'react';

export default function Account() {
  const [balance, setBalance] = useState(5000);
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    setBalance(balance + parseFloat(amount));
  };

  const handleWithdraw = () => {
    if (amount > balance) {
      alert('Insufficient funds');
    } else {
      setBalance(balance - parseFloat(amount));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Account Details</h2>
      <p className="mb-2">Balance: ₹{balance.toFixed(2)}</p>
      <input
        type="number"
        className="border p-2 mr-2"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={handleDeposit} className="bg-green-500 text-white p-2 rounded mr-2">Deposit</button>
      <button onClick={handleWithdraw} className="bg-red-500 text-white p-2 rounded">Withdraw</button>
    </div>
  );
}

// pages/Transactions.jsx
import React from 'react';

const dummyTransactions = [
  { id: 1, type: 'Deposit', amount: 1000, date: '2025-05-01' },
  { id: 2, type: 'Withdraw', amount: 500, date: '2025-05-05' },
];

export default function Transactions() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <table className="table-auto w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {dummyTransactions.map((txn) => (
            <tr key={txn.id} className="border-t">
              <td className="px-4 py-2">{txn.type}</td>
              <td className="px-4 py-2">₹{txn.amount}</td>
              <td className="px-4 py-2">{txn.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
