
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function ContactPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        userRole: '',
        photography: '',
        blog: '',
        projects: '',
        other: '',
        contactSource: ''
    });

    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);
        try {
            const response = await axios.post('/contact', formData);
            console.log(response);
            navigate('/submit', { state: formData });
        } catch (error) {
            console.log("There was an error submitting the form: ", error);
        }
    };

    return (
        <>
    <main id="contact">
        <section>
            <h2>Contact</h2>
            <article>
                <h3>Stay in touch?</h3>
                <p>Fill out the form below (with the information requested) to send me a message.</p>
                <p id="requiredFields">(All fields with * are required.)</p>
                <form id="contactForm" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Your Information</legend>
                        
                        <label for="name">Name: *</label>
                        <input type="text" name="name" class="required" id="name" required autofocus placeholder="your name here" aria-required="true"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        
                        <label for="email">Email: *</label>
                        <input type="email" name="email" class="required" id="email" required placeholder="your email here" aria-required="true" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>

                        <label for="subject">Subject: *</label>
                        <input type="text" name="subject" class="required" id="subject" required placeholder="subject of your message" aria-required="true" 
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}/>
                        
                        <label for="message">Message: *</label>
                        <textarea name="message" class="required" id="message" cols="30" rows="10" required placeholder="your message here (between 5 and 1,000 characters)" aria-required="true" maxlength="1000" minlength="5"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                        
                    </fieldset>
                    
                    <fieldset>
                        <legend>About You</legend>
                        <label for="userRole">Please select that which best describes you:</label>
                            <select name="userRole" id="userRole"   
                                value={formData.userRole}
                                 onChange={(e) => setFormData({ ...formData, userRole: e.target.value })}>
                                <option name="softwareEngineer" value="softwareEngineer">Software Engineer</option>
                                <option name="student" value="student">Student</option>
                                <option name="faculty" value="faculty">Faculty</option>
                                <option name="staff" value="staff">Staff</option>
                                <option name="hiringManager" value="hiringManager">Hiring Manager</option>
                                <option name="recruiter" value="recruiter">Recruiter</option>
                                <option name="other" value="other" default>Other</option>
                                <option name="none" value="none">None</option>
                            </select>

                            <p>What kind of content would you like to see more of?</p>
                            
                                <label for="photography" class="checkbox">photography
                                    <input type="checkbox" name="photography" id="photography" value="yes" 
                                    
                                    />
                                </label>

                                <label for="blog" class="checkbox">blog posts
                                    <input type="checkbox" name="blog" id="blog" value="yes" />
                                </label>

                                <label for="projects" class="checkbox">projects
                                    <input type="checkbox" name="projects" id="projects" value="yes" />
                                </label>

                                <label for="other" class="checkbox">other
                                    <input type="checkbox" name="other" id="other" value="yes" />
                                </label>
                    </fieldset>

                    <fieldset>
                        <legend>How did you hear about me?</legend>

                        <label for="searchEngine">Search Engine
                            <input type="radio" name="contactSource" id="searchEngine" value="radio" />
                        </label>

                        <label for="socialMedia">Social Media
                            <input type="radio" name="contactSource" id="socialMedia" value="socialMedia" />
                        </label>

                        <label for="wordOfMouth">Word of Mouth
                            <input type="radio" name="contactSource" id="wordOfMouth" value="wordOfMouth" />
                        </label>

                        <label for="other">Other
                            <input type="radio" name="contactSource" id="other" value="other" />
                        </label>
                    </fieldset>
                    


                    <fieldset id="contactButtonSet">
                        <label for="submit">
                            <button type="submit" id="submit" name="submitDetails" class="contactButtons">Submit</button>
                        </label>

                        <label for="reset">
                            <button type="reset" id="reset" name="resetDetails" class="contactButtons">Reset</button>
                        </label>
                    </fieldset>

                </form>
            </article>
        </section>
    </main>

        </>
    );
}

export default ContactPage;