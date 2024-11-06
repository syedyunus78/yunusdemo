import React, { useRef } from 'react'

const Newlogo = () => {
  const invoiceRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div ref={invoiceRef} style={{ border: "2px solid red", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Logo</h1>
          <h1>INVOICE BILL</h1>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Billed to:</h3>
          <p>Invoice no: 9883663</p>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Item</h3>
          <p>Quantity: 1</p>
          <p>Price: $300</p>
        </div>
      </div>
      <br />
      <button onClick={handlePrint}>Print Invoice</button>
    </div>
  );
}

export default Newlogo
