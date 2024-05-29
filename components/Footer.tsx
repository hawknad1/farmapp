import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <div className="text-2xl font-bold">ZoroFarms</div>
          <div>3 Beach Nook, Hovefort</div>
          <div>zorofarms@gmail.com</div>
          <div>10:00 - 18:00, Mon - Sat</div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h4 className="font-bold mb-2">Account</h4>
            <div>Login</div>
            <div>View Cart</div>
            <div>My Order</div>
            <div>New Product</div>
            <div>Contact Us</div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Company</h4>
            <div>About Us</div>
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
            <div>Help</div>
            <div>Careers</div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Payment Methods</h4>
            <div>VISA</div>
            <div>PayPal</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
