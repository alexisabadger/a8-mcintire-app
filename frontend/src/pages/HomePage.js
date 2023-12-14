import React from "react";


function HomePage() {

    console.log("HomePage");

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
                            <dd>for both first-time and returning users? 
                            </dd>
                            <dt><strong>Node</strong></dt>
                            <dd>from both a technical and goal-oriented perspective? What happens to users when they run into errors,
                                and can these errors be recovered from?
                            </dd>
                            <dt><strong>Express</strong></dt>
                            <dd>enjoyable, and appropriate for its intended audience?
                            </dd>
                            <dt><strong>Asynchronous Programming</strong></dt>
                            <dd>enjoyable, and appropriate for its intended audience?
                            </dd>
                            <dt><strong>React</strong></dt>
                            <dd>enjoyable, and appropriate for its intended audience?
                            </dd>
                            <dt><strong>MongoDB</strong></dt>
                            <dd>enjoyable, and appropriate for its intended audience?
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