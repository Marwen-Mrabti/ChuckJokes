import React from 'react';
import './Footer.css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
const Footer = () => {
  return (
    <footer>
      <h2>
        Got jokes ? Get paid <br /> for submitting
      </h2>
      <button className="btn">
        <span className="btn-title">SUBMIT JOKE</span>
        <span className="btn-icon">
          <HiOutlineArrowNarrowRight />
        </span>
      </button>
    </footer>
  );
};

export default Footer;
