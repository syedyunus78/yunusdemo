import React from 'react'

const Newlogo = () => {
  const invoiceDetails = {
    logo: "Logo",
    title: "INVOICE BILL",
    billedTo: "Billed to:",
    invoiceNo: "9883663",
    item: "Item",
    quantity: "1",
    price: "300"
  };

  const handleWhatsAppShare = () => {
    const message = `*${invoiceDetails.title}*\n\n` +
      `${invoiceDetails.billedTo}\n` +
      `Invoice No: ${invoiceDetails.invoiceNo}\n\n` +
      `${invoiceDetails.item}: ${invoiceDetails.quantity}\n` +
      `Price: $${invoiceDetails.price}\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{invoiceDetails.logo}</h1>
        <h1>{invoiceDetails.title}</h1>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{invoiceDetails.billedTo}</h3>
        <p>Invoice No: {invoiceDetails.invoiceNo}</p>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{invoiceDetails.item}</h3>
        <p>Quantity: {invoiceDetails.quantity}</p>
        <p>Price: ${invoiceDetails.price}</p>
      </div>
      <br />
      <button onClick={handleWhatsAppShare}>Share to WhatsApp</button>
    </div>
  );
}

export default Newlogo
