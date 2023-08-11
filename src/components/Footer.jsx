import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
    const Year = new Date().getFullYear();
  return (
    <footer className="bg-theme  pb-5 animate__animated animate__fadeInUp">
      <div className="nike-container text-slate-200 animate__animated animate__fadeInUp">
       
        <div className='mt-5 text-center'>
            <a className='text-sm md:text-center animate__animated animate__fadeInUp' href="https://github.com/Shah-Hussain-Dev" target="_blank"> Developer by  <span className='font-semibold'>Shah Hussain </span></a>
          </div>

      </div>
    </footer>
  );
};

export default Footer;
