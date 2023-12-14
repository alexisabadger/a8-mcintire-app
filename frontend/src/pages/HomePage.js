import React from "react";


function HomePage() {


    return (
        <>
            <main className="App-main" id="index">
                <section>
                    <article id="">
                        <h2>Hey there!</h2>
                        <p>
                            Welcome to my portfolio site. I'm Elizabeth Alexandra, a full-stack software engineer intern
                            at a small software company in the Mountain West. I'm also a student at Oregon
                            State University, where I'm pursuing a Bachelor of Science in Computer Science.
                        </p>
                    </article>
                    <article id="">
                        <h3>About This Site</h3>
                        <p>
                            This website incorporates some of the web technologies I've worked with so far,
                            namely:
                        </p>

                        <dl>
                            <dt><strong>HTML</strong></dt>    
                            <dd>also known as HyperText Markup Language, HTML is the standard markup 
                                language for documents displayed in a web browser. The latest version
                                of this standard is HTML5.
                            </dd>
                            <dt><strong>CSS</strong></dt>
                            <dd>allows developers to edit a site's presentation layer to give the site 
                                a consistent look and feel. Additionally, developers are able to modify 
                                these style rules without altering the site's content.
                            </dd>
                            <dt><strong>JavaScript</strong></dt>
                            <dd>is multifaceted language with two main programming paradigms: 
                                object-oriented programming and functional programming. Additionally,
                                JavaScript is a both a client-side language (it runs in the browser) 
                                and a server-side language (which can be used to write web servers in Express).
                            </dd>
                            <dt><strong>Node</strong></dt>
                            <dd>is a JavaScript runtime environment. Node allows developers to
                                write JavaScript code that runs outside of the browser, such as on the backend
                                of a web application/website (like this website, in fact).
                            </dd>
                            <dt><strong>Express</strong></dt>
                            <dd>is a web application framework for Node. It was designed to help developers
                                build web applications and APIs. Express is the backend framework used for this website.
                            </dd>
                            <dt><strong>Asynchronous Programming</strong></dt>
                            <dd>according to Mozilla documentation, "Asynchronous programming is a technique 
                                that enables your program to start a potentially long-running 
                                task and still be able to be responsive to other events while that task runs, 
                                rather than having to wait until that task has finished. Once that 
                                task has finished, your program is presented with the result." Asynchronous
                                programming is a key benefit of JavaScript.
                            </dd>
                            <dt><strong>React</strong></dt>
                            <dd>is a JavaScript library for building user interfaces. React, though 
                                first developed by Facebook, is an open-source project. React was used
                                to build the frontend of this website.
                            </dd>
                            <dt><strong>MongoDB</strong></dt>
                            <dd>is a NoSQL (document-oriented database). MongoDB stores data in JSON-like documents
                                (vs. tables in a relational database, like SQL). MongoDB is the database used for this website.
                            </dd>
                        </dl>

                        <p id="homepageLastParagraph">
                            I look forward to adding more technologies to this list 
                            as I continue to learn and grow as a developer.
                        </p>
                    </article>

                </section>
            </main>
        </>
    );
}

export default HomePage;