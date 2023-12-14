import React from "react";
import { HiHome } from "react-icons/hi2";


function HomePage() {

    console.log("HomePage");

    return (
        <>
            <main className="App-main" id="index">
                <section>
                    <article id="">
                        <h3>Home Page</h3>
                        <p>
                            This is an article about my career goals.
                        </p>
                    </article>
                    <article id="">
                        <h3>About this app</h3>
                        <p>
                            This website incorporates all of the following technologies, which
                            are explained briefly here and demonstrated in each of the pages.
                        </p>

                        <dl>
                            <dt><strong>HTML</strong></dt>    
                            <dd>HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser.
                            </dd>
                            <dt><strong>CSS</strong></dt>
                            <dd>at enabling users to accomplish their mission with a minimum amount of time and frustration?
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

                        <p>
                            Maybe one final paragraph here, to wrap up the page?
                        </p>
                    </article>

                </section>
            </main>
        </>
    );
}

export default HomePage;