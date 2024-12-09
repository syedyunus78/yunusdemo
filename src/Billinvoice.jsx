import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Billinvoice = (props) => {
  const [formData, setFormData] = useState({
    customer: "",
    customerNo: "",
    invoiceNo: "",
    address: "",
  });

  const [tableData, setTableData] = useState([]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]); // Add current form data to tableData
    setFormData({ customer: "", customerNo: "", invoiceNo: "", address: "" }); // Clear form
  };

  // Share to WhatsApp
  const shareToWhatsApp = () => {
    const message = `Customer Details:
Customer: ${formData.customer}
Customer No: ${formData.customerNo}
Invoice No: ${formData.invoiceNo}
Address: ${formData.address}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <label>Customer</label>
                  <input
                    name="customer"
                    value={formData.customer}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label>Customer No:</label>
                  <input
                    name="customerNo"
                    value={formData.customerNo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label>Invoice No:</label>
                  <input
                    name="invoiceNo"
                    value={formData.invoiceNo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
                  <label>Address:</label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <button type="submit">Submit</button>
                <button type="button" onClick={shareToWhatsApp} style={{ marginLeft: "10px" }}>
                  Share to WhatsApp
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Billinvoice;
