import React from 'react';

// Import components from their individual paths
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { Button } from '../../components/Button/Button.jsx';

// Import CSS module (currently empty, but can be filled in later)
import styles from './contact.module.css';

export const Contact = () => {
    // Function to generate the mailto link with form data
    const generateMailTo = (formData) => {
        const {
            name,
            email,
            phone,
            message
        } = formData;

        return `mailto:rfugaban@my.centennialcollege.ca?subject=Contact from ${name}&body=${message} - from ${name}, Email: ${email}, Phone: ${phone}`;
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const mailtoLink = generateMailTo(Object.fromEntries(formData));
        window.location.href = mailtoLink;
    };

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' name='name' className={styles.input} placeholder='Enter your name' required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' className={styles.input} placeholder='Enter your email address' required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor='phone'>Phone</label>
                        <input type='text' id='phone' name='phone' className={styles.input} placeholder='Enter your phone number' required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' name='message' className={styles.textarea} placeholder='Enter your message' required></textarea>
                    </div>

                    <div className={styles.formGroup}>
                        <button type='submit' className={styles.button}>Submit</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}