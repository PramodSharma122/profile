import React, { useRef, useState } from 'react';
import './Contact.css';
import { PaperAirplaneIcon } from '@heroicons/react/16/solid';
import tick from '../../assets/images/tick.png';

const Contact = () => {
    const formRef = useRef(null);
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult("Sending...");
        const formData = new FormData(formRef.current);

        formData.append("access_key", "4ed403a3-e453-42ef-8125-1e263e9279c5");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            console.log("Response data:", data); // Debugging line

            if (data.success) {
                setSubmitted(true);
                formRef.current.reset();
                setResult("Form Submitted Successfully");
                setTimeout(() => setSubmitted(false), 4000);
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error('Form submission error', error);
            setResult("Form submission failed");
        }
    };

    return (
        <section className="contact">
            <div className="content">
                <h1 className="heading">Contact
                    <span className='text-yellow-400'> Us</span>
                </h1>
                <p>Feel free to get in touch with me.</p>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><i className="fa-solid fa-map"></i></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>Nepal, Chitwan <br />Bharatpur-23, <br />Jagatpur</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><i className="fa-solid fa-phone"></i></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>+977 9824238746</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><i className="fa-regular fa-envelope"></i></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>pramodsharmac0609@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="contactForm">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name="name" required />
                            <span>Full Name</span>
                        </div>

                        <div className="inputBox">
                            <input type="email" name="email" required />
                            <span>Email</span>
                        </div>

                        <div className="inputBox">
                            <textarea name="message" required></textarea>
                            <span>Type your Message...</span>
                        </div>

                        <div className='relative w-[100%] mt-[10px]'>
                            <button type='submit' className=' w-[100px] p-[10px] hover:bg-yellow-400 text-[18px] font-bold uppercase bg-[#00bcd4] text-white flex space-x-2 rounded-2xl items-center justify-center'>
                                <p className='m-0'>Send</p>
                                <PaperAirplaneIcon className='text-black' />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {result && <span>{result}</span>}

            {submitted && (
                <div className='popup'>
                    <img src={tick} alt="" />
                    <h2>Thank You!</h2>
                    <p>Your details have been successfully submitted, Thanks!</p>
                    <button type='button'>OK</button>
                </div>
            )}
        </section>
    );
}

export default Contact;
