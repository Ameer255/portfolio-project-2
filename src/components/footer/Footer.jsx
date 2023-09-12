import React from "react";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './footer.module.css';



function Footer() {


  return (

    <footer className={`${styles.footer} text-center text-lg-start`}>

      <section className="">
        <div className="container text-start">

          <div className="row mt-5 py-4">

            <div className="col-md-6 col-lg-2 col-xl-2 col-12 mx-auto mb-4">

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

            <div className="col-md-6 col-lg-2 col-xl-2 col-12 mx-auto mb-4">

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



            <div className="col-md-6 col-lg-4 col-xl-4 col-12 mx-auto mb-4">

              <h6 className="fw-bold mb-4">
                Newsletter
              </h6>
              <p>
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>

              <p>
                <input type="text" className="w-100 py-3" placeholder="Enter Email"/>
              </p>
            </div>


            <div className="col-md-6 col-lg-4 col-xl-4 col-12 mx-auto mb-4 mx-3">

              <h6 className="fw-bold mb-4">
                Follow Us
              </h6>
              <div className={`${styles.icons} d-flex align-items-center flex-wrap`}>

                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                {/* <FacebookOutlinedIcon /> */}

                <Link>
                  <i>
                    <svg viewBox="0 0 48 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-240.000000, -299.000000)" fill="#000000">
                          <path d="M288,303.735283 C286.236309,304.538462 284.337383,305.081618 282.345483,305.324305 C284.379644,304.076201 285.940482,302.097147 286.675823,299.739617 C284.771263,300.895269 282.666667,301.736006 280.418384,302.18671 C278.626519,300.224991 276.065504,299 273.231203,299 C267.796443,299 263.387216,303.521488 263.387216,309.097508 C263.387216,309.88913 263.471738,310.657638 263.640782,311.397255 C255.456242,310.975442 248.201444,306.959552 243.341433,300.843265 C242.493397,302.339834 242.008804,304.076201 242.008804,305.925244 C242.008804,309.426869 243.747139,312.518238 246.389857,314.329722 C244.778306,314.280607 243.256911,313.821235 241.9271,313.070061 L241.9271,313.194294 C241.9271,318.08848 245.322064,322.17082 249.8299,323.095341 C249.004402,323.33225 248.133826,323.450704 247.235077,323.450704 C246.601162,323.450704 245.981335,323.390033 245.381229,323.271578 C246.634971,327.28169 250.269414,330.2026 254.580032,330.280607 C251.210424,332.99061 246.961789,334.605634 242.349709,334.605634 C241.555203,334.605634 240.769149,334.559408 240,334.466956 C244.358514,337.327194 249.53689,339 255.095615,339 C273.211481,339 283.114633,323.615385 283.114633,310.270495 C283.114633,309.831347 283.106181,309.392199 283.089276,308.961719 C285.013559,307.537378 286.684275,305.760563 288,303.735283"></path>
                        </g>
                        <g transform="translate(-1332.000000, -476.000000)"></g>
                      </g>
                    </svg>
                  </i>
                </Link>


                <Link>
                  <i>
                    <svg viewBox="0 0 9 17">
                      <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                    </svg>
                  </i>
                </Link>


                <Link>
                  <i>
                    <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                      <title>Instagram</title>
                      <defs></defs>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-642.000000, -295.000000)" fill="#000000">
                          <path d="M666.000048,295 C659.481991,295 658.664686,295.027628 656.104831,295.144427 C653.550311,295.260939 651.805665,295.666687 650.279088,296.260017 C648.700876,296.873258 647.362454,297.693897 646.028128,299.028128 C644.693897,300.362454 643.873258,301.700876 643.260017,303.279088 C642.666687,304.805665 642.260939,306.550311 642.144427,309.104831 C642.027628,311.664686 642,312.481991 642,319.000048 C642,325.518009 642.027628,326.335314 642.144427,328.895169 C642.260939,331.449689 642.666687,333.194335 643.260017,334.720912 C643.873258,336.299124 644.693897,337.637546 646.028128,338.971872 C647.362454,340.306103 648.700876,341.126742 650.279088,341.740079 C651.805665,342.333313 653.550311,342.739061 656.104831,342.855573 C658.664686,342.972372 659.481991,343 666.000048,343 C672.518009,343 673.335314,342.972372 675.895169,342.855573 C678.449689,342.739061 680.194335,342.333313 681.720912,341.740079 C683.299124,341.126742 684.637546,340.306103 685.971872,338.971872 C687.306103,337.637546 688.126742,336.299124 688.740079,334.720912 C689.333313,333.194335 689.739061,331.449689 689.855573,328.895169 C689.972372,326.335314 690,325.518009 690,319.000048 C690,312.481991 689.972372,311.664686 689.855573,309.104831 C689.739061,306.550311 689.333313,304.805665 688.740079,303.279088 C688.126742,301.700876 687.306103,300.362454 685.971872,299.028128 C684.637546,297.693897 683.299124,296.873258 681.720912,296.260017 C680.194335,295.666687 678.449689,295.260939 675.895169,295.144427 C673.335314,295.027628 672.518009,295 666.000048,295 Z M666.000048,299.324317 C672.40826,299.324317 673.167356,299.348801 675.69806,299.464266 C678.038036,299.570966 679.308818,299.961946 680.154513,300.290621 C681.274771,300.725997 682.074262,301.246066 682.91405,302.08595 C683.753934,302.925738 684.274003,303.725229 684.709379,304.845487 C685.038054,305.691182 685.429034,306.961964 685.535734,309.30194 C685.651199,311.832644 685.675683,312.59174 685.675683,319.000048 C685.675683,325.40826 685.651199,326.167356 685.535734,328.69806 C685.429034,331.038036 685.038054,332.308818 684.709379,333.154513 C684.274003,334.274771 683.753934,335.074262 682.91405,335.91405 C682.074262,336.753934 681.274771,337.274003 680.154513,337.709379 C679.308818,338.038054 678.038036,338.429034 675.69806,338.535734 C673.167737,338.651199 672.408736,338.675683 666.000048,338.675683 C659.591264,338.675683 658.832358,338.651199 656.30194,338.535734 C653.961964,338.429034 652.691182,338.038054 651.845487,337.709379 C650.725229,337.274003 649.925738,336.753934 649.08595,335.91405 C648.246161,335.074262 647.725997,334.274771 647.290621,333.154513 C646.961946,332.308818 646.570966,331.038036 646.464266,328.69806 C646.348801,326.167356 646.324317,325.40826 646.324317,319.000048 C646.324317,312.59174 646.348801,311.832644 646.464266,309.30194 C646.570966,306.961964 646.961946,305.691182 647.290621,304.845487 C647.725997,303.725229 648.246066,302.925738 649.08595,302.08595 C649.925738,301.246066 650.725229,300.725997 651.845487,300.290621 C652.691182,299.961946 653.961964,299.570966 656.30194,299.464266 C658.832644,299.348801 659.59174,299.324317 666.000048,299.324317 Z M666.000048,306.675683 C659.193424,306.675683 653.675683,312.193424 653.675683,319.000048 C653.675683,325.806576 659.193424,331.324317 666.000048,331.324317 C672.806576,331.324317 678.324317,325.806576 678.324317,319.000048 C678.324317,312.193424 672.806576,306.675683 666.000048,306.675683 Z M666.000048,327 C661.581701,327 658,323.418299 658,319.000048 C658,314.581701 661.581701,311 666.000048,311 C670.418299,311 674,314.581701 674,319.000048 C674,323.418299 670.418299,327 666.000048,327 Z M681.691284,306.188768 C681.691284,307.779365 680.401829,309.068724 678.811232,309.068724 C677.22073,309.068724 675.931276,307.779365 675.931276,306.188768 C675.931276,304.598171 677.22073,303.308716 678.811232,303.308716 C680.401829,303.308716 681.691284,304.598171 681.691284,306.188768 Z"></path>
                        </g>
                        <g transform="translate(-1734.000000, -472.000000)"></g>
                      </g>
                    </svg>
                  </i>
                </Link>


                <Link>
                  <i>
                    <svg width="48px" height="34px" viewBox="0 0 48 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>Youtube</title>
                      <defs></defs>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-567.000000, -302.000000)" fill="#000000">
                          <path d="M586.044,325.269916 L586.0425,311.687742 L599.0115,318.502244 L586.044,325.269916 Z M614.52,309.334163 C614.52,309.334163 614.0505,306.003199 612.612,304.536366 C610.7865,302.610299 608.7405,302.601235 607.803,302.489448 C601.086,302 591.0105,302 591.0105,302 L590.9895,302 C590.9895,302 580.914,302 574.197,302.489448 C573.258,302.601235 571.2135,302.610299 569.3865,304.536366 C567.948,306.003199 567.48,309.334163 567.48,309.334163 C567.48,309.334163 567,313.246723 567,317.157773 L567,320.82561 C567,324.73817 567.48,328.64922 567.48,328.64922 C567.48,328.64922 567.948,331.980184 569.3865,333.447016 C571.2135,335.373084 573.612,335.312658 574.68,335.513574 C578.52,335.885191 591,336 591,336 C591,336 601.086,335.984894 607.803,335.495446 C608.7405,335.382148 610.7865,335.373084 612.612,333.447016 C614.0505,331.980184 614.52,328.64922 614.52,328.64922 C614.52,328.64922 615,324.73817 615,320.82561 L615,317.157773 C615,313.246723 614.52,309.334163 614.52,309.334163 L614.52,309.334163 Z"></path>
                        </g>
                        <g transform="translate(-1659.000000, -479.000000)"></g>
                      </g>
                    </svg>
                  </i>
                </Link>


                <Link>
                  <i>
                    <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>Pinterest</title>
                      <defs></defs>
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-407.000000, -295.000000)" fill="#000000">
                          <path d="M431.001411,295 C417.747575,295 407,305.744752 407,319.001411 C407,328.826072 412.910037,337.270594 421.368672,340.982007 C421.300935,339.308344 421.357382,337.293173 421.78356,335.469924 C422.246428,333.522491 424.871229,322.393897 424.871229,322.393897 C424.871229,322.393897 424.106368,320.861351 424.106368,318.59499 C424.106368,315.038808 426.169518,312.38296 428.73505,312.38296 C430.91674,312.38296 431.972306,314.022755 431.972306,315.987123 C431.972306,318.180102 430.572411,321.462515 429.852708,324.502205 C429.251543,327.050803 431.128418,329.125243 433.640325,329.125243 C438.187158,329.125243 441.249427,323.285765 441.249427,316.36532 C441.249427,311.10725 437.707356,307.170048 431.263891,307.170048 C423.985006,307.170048 419.449462,312.59746 419.449462,318.659905 C419.449462,320.754101 420.064738,322.227377 421.029988,323.367613 C421.475922,323.895396 421.535191,324.104251 421.374316,324.708238 C421.261422,325.145705 420.996119,326.21256 420.886047,326.633092 C420.725172,327.239901 420.23408,327.460046 419.686541,327.234256 C416.330746,325.865408 414.769977,322.193509 414.769977,318.064385 C414.769977,311.248368 420.519139,303.069148 431.921503,303.069148 C441.085729,303.069148 447.117128,309.704533 447.117128,316.819721 C447.117128,326.235138 441.884459,333.268478 434.165285,333.268478 C431.577174,333.268478 429.138649,331.868584 428.303228,330.279591 C428.303228,330.279591 426.908979,335.808608 426.615452,336.875463 C426.107426,338.724114 425.111131,340.575587 424.199506,342.014994 C426.358617,342.652849 428.63909,343 431.001411,343 C444.255248,343 455,332.255248 455,319.001411 C455,305.744752 444.255248,295 431.001411,295"></path>
                        </g>
                        <g transform="translate(-1499.000000, -472.000000)"></g>
                      </g>
                    </svg>
                  </i>
                </Link>

                <Link>
                  <i>
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon svg-linkedin" viewBox="0 0 310 310">
                      <path d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path>
                      <path d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path>
                      <path d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path>
                    </svg>
                  </i>
                </Link>



              </div>
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
