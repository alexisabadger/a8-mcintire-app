
import React from 'react';
import { useLocation } from 'react-router-dom'; 

function SubmitPage() {

    const location = useLocation();
    const formData = location.state;

    return (
        <>
    <main id="contact">
        <section>
            <h2>Contact</h2>
            <article>
                <p>Thank you for your message!</p>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Subject: {formData.subject}</p>
            </article>
        </section>
    </main>

        </>
    );
}

export default SubmitPage;