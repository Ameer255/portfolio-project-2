import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './checkout.module.css';
import paypalImg from '../../assets/images/paypal.svg';



const CheckOutInfo = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        countries: '',
        fName: '',
        lName: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        zip: '',
        number: ''
      });


      const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Update the corresponding field in the formData state
        setFormData((prevData)=>({...prevData, [name]: value}));
        // console.log(formData);
      };



      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if all fields are filled
        const isFormValid = Object.values(formData).every((value) => {
            // alert(value)
            return value.trim() !== ''
        });
    
        if (isFormValid) {
          // Navigate to another route if the form is valid
          navigate('/order-placed');
        } else {
          // alert if not all fields are filled
          alert('Please fill in all fields before submitting.');
        }
      };



    return (
        <div className={`col-11 col-md-7 border-md px-5 py-5`}>

            <div className="px-5">
                <div className="my-3">
                    <h3>Saiid Kobeisy Online</h3>
                    <p>Cart {'>'} checkout {'>'} <span className="fw-bold">Information</span></p>
                </div>

                <div className={`d-flex flex-column align-items-center my-4`}>
                    <p>Express checkout</p>

                    <button className={`${styles.paypal} d-flex justify-content-center my-2 btn border`} onClick={()=>alert('Paypal is currently unavailable.!')}>
                        <img src={paypalImg} alt="paypal logo" />
                    </button>

                </div>

                <div className="position-relative my-4">
                    <hr />
                    <p className={`position-absolute rounded-5 d-flex justify-content-center align-items-center ${styles.or}`}>OR</p>
                </div>

                <div className={`d-flex justify-content-between my-3`}>
                    <h5>Contact</h5>
                    <p>Have an account? <Link>Log in</Link></p>
                </div>



                <div className="my-4 px-2">
                    <form action="" onSubmit={handleSubmit}>
                        <input onChange={handleChange} value={formData.email} type="email" name="email" id="email" className="form-control py-3" placeholder="Email or phone number" />

                        <div className="d-flex align-items-center my-3">
                            <input type="checkbox" name="newsCheck" id="newsCheck" />
                            <p className="m-0 px-2"> Email me with news and offers</p>
                        </div>


                        <h5 className="my-3">Shipping address</h5>

                        <select onChange={handleChange} value={formData.country} name="countries" id="countries" className="form-control py-3 my-2">
                            <option value="United States">United States</option>
                            <option value="United States">Australia</option>
                            <option value="United States">Pakistan</option>
                            <option value="United States">United Kingdom</option>
                        </select>


                        <div className="row">
                            <div className="col-12 col-md-6">
                                <input onChange={handleChange} value={formData.fName} type="text" name="fName" id="fName" className="form-control my-2 py-3" placeholder="First name (optional)" />
                            </div>

                            <div className="col-12 col-md-6">
                                <input onChange={handleChange} value={formData.lName} type="text" name="lName" id="lName" className="form-control my-2 py-3" placeholder="Last name name" />
                            </div>

                            <div className="col-12">
                                <input onChange={handleChange} value={formData.address} type="text" name="address" id="address" className="form-control my-2 py-3" placeholder="Address" />
                            </div>

                            <div className="col-12">
                                <input onChange={handleChange} value={formData.apartment} type="text" name="apartment" id="apartment" className="form-control my-2 py-3" placeholder="Apartment, suite, etc." />
                            </div>


                            <div className="col-12 col-md-4">
                                <input onChange={handleChange} value={formData.city} type="text" name="city" id="city" className="form-control my-2 py-3" placeholder="City" />
                            </div>

                            <div className="col-12 col-md-4">
                                <input onChange={handleChange} value={formData.state} type="text" name="state" id="state" className="form-control my-2 py-3" placeholder="State" />
                            </div>

                            <div className="col-12 col-md-4">
                                <input onChange={handleChange} value={formData.zip} type="number" name="zip" id="zip" className="form-control my-2 py-3" placeholder="Zip code" />
                            </div>

                            <div className="col-12">
                                <input onChange={handleChange} value={formData.number} type="number" name="number" id="number" className="form-control my-2 py-3" placeholder="Phone" />
                            </div>

                            <div className="d-flex align-items-center my-2">
                                <input type="checkbox" name="" id="next-time" />
                                <label htmlFor="next-time" className="m-0 px-2"> Save this information for next time</label>
                            </div>

                            <div className="d-flex align-items-center my-2">
                                <input type="checkbox" name="" id="news-offers" />
                                <label htmlFor="news-offers" className="m-0 px-2"> Text me with news and offers</label>
                            </div>



                            <div className="d-flex justify-content-md-end justify-content-center my-4 my-md-0">
                                <button className={`btn btn-primary py-3 px-5 rounded-2`}>Confirm Order</button>
                            </div>

                            <hr className="my-4"/>


                        </div>


                    </form>
                </div>
            </div>

        </div>
    )
}

export default CheckOutInfo;