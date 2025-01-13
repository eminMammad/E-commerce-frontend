import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur culpa omnis praesentium repellendus quibusdam ipsa,
            distinctio perferendis dolore maiores dolores. Ducimus magnam id
            iusto, voluptatibus maxime quasi quidem velit esse!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-1">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <div className="m-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </div>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Phone: +123 456 789</li>
            <li>Email: info@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-left text-gray-600">
          &copy; 2024 | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
