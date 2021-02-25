import Link from "next/link";
import React from "react";
import footerImg from "../img/footer/footer-img.svg";

const Footer = () => {
  return (
    <div className="footer  px-0 px-lg-5 ">
      <div className="footer-column-wrapper row col-12 col-xl-6">
        <div className="footer-column col-12 col-sm-3 col-xl-4">
          <h6 className="pb-4">Home</h6>
          <Link href="#">Infrastucture</Link>
          <Link href="#">Explorer</Link>
          <Link href="#">Get starteded</Link>
          <Link href="#">API documentation</Link>
        </div>
        <div className="footer-column col-12 col-sm-3 col-xl-4">
          <h6 className="pb-4">Company</h6>
          <Link href="#">About</Link>
          <Link href="#">Team</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Blog</Link>
        </div>
        <div className="footer-column col-12 col-sm-3 col-xl-4">
          <h6 className="pb-4">Legal</h6>
          <Link href='/TermsOfUse' target="_self">Terms of Use</Link>
          <Link href='/PrivacyPolicy' target="_blank">Privacy Policy</Link>
        </div>
      </div>

      <img src={footerImg} alt="footer image" className="footer--img" />
    </div>
  );
};

export default Footer;
