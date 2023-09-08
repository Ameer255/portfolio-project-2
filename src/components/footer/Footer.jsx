import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee,} from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (

    <footer className="text-center text-lg-start ">

      <section className="">
        <div className="container text-start">

          <div className="row mt-5 py-4">

            <div className="col-md-2 col-lg-2 col-xl-2 col-6 mx-auto mb-4">

              <h6 className="fw-bold mb-4">
                About Us
              </h6>
              <p>
                <Link to='#' className="text-reset">The House</Link>
              </p>
              <p>
                <Link to='#' className="text-reset">Contact Us</Link>
              </p>
              <p>
                <Link to='#' className="text-reset">Store Locater</Link>
              </p>
              <p>
                <Link to='#' className="text-reset">Careers</Link>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 col-6 mx-auto mb-4">

              <h6 className="fw-bold mb-4">
                Legal
              </h6>
              <p>
                <Link to='#' className="text-reset">Terms of Service</Link>
              </p>
              <p>
                <Link to='#' className="text-reset">Refund Policy</Link>
              </p>
              <p>
                <Link to='#' className="text-reset">Shipping Policy</Link>
              </p>
              <p>
                <Link to='#' className="text-reset">Privacy Policy</Link>
              </p>
            </div>



            <div className="col-md-4 col-lg-4 col-xl-4 col-6 mx-auto mb-4">

              <h6 className="fw-bold mb-4">
                Newsletter
              </h6>
              <p>
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>

              <p>
                <input type="text" className="w-100" />
              </p>
            </div>


            <div className="col-md-4 col-lg-4 col-xl-4 col-6 mx-auto mb-4">

              <h6 className="fw-bold mb-4">
                Follow Us
              </h6>
              <p>
             Icons here
              </p>
            </div>


          </div>

        </div>
      </section>



      <div className="text-center p-4">
        © 2023 Copyright Saiid Kobeisy Online.
      </div>

    </footer>
  );
}

export default Footer;
