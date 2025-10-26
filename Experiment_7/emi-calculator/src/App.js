import React, { useState } from 'react';

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEMI = () => {
    // Input validation
    if (!loanAmount || !annualRate || !loanTenure) {
      alert('Please fill in all fields.');
      return;
    }

    const P = parseFloat(loanAmount);
    const annualInterest = parseFloat(annualRate);
    const N = parseInt(loanTenure);

    if (P <= 0 || annualInterest <= 0 || N <= 0) {
      alert('Please enter positive values for all fields.');
      return;
    }

    const R = annualInterest / 12 / 100; // Monthly interest rate

    // EMI formula
    const emiValue =
      (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    const totalPayment = emiValue * N;
    const interestPayable = totalPayment - P;

    setEmi(emiValue.toFixed(2));
    setTotalInterest(interestPayable.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>EMI Calculator</h1>
      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Loan Amount (₹): </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Annual Interest Rate (%): </label>
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            placeholder="Enter annual rate"
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Loan Tenure (months): </label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            placeholder="Enter tenure in months"
          />
        </div>

        <button onClick={calculateEMI} style={styles.button}>
          Calculate EMI
        </button>
      </div>

      {emi && (
        <div style={styles.result}>
          <h2>Results</h2>
          <p><strong>Loan Amount:</strong> ₹{loanAmount}</p>
          <p><strong>Monthly EMI:</strong> ₹{emi}</p>
          <p><strong>Total Interest:</strong> ₹{totalInterest}</p>
        </div>
      )}
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: 'auto',
    backgroundColor: '#f7f8fa',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
  },
  header: {
    color: '#2c3e50',
  },
  form: {
    marginTop: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '25px',
    backgroundColor: '#ecf0f1',
    padding: '15px',
    borderRadius: '8px',
  },
};

export default EMICalculator;
