
import Menu from '../components/Navigation';

function TopicsPage() {

    console.log("TopicsPage");

    return (
        <>
            <main id="index">
                <section>
                    <h2>Web Dev Concepts</h2>
                    <nav class="local" id="grid-child-local-nav">
                        <a class="anchor" href="#webServers">Servers</a>
                        <a class="anchor" href="#frontendDesign">Design</a>
                        <a class="anchor" href="#optimizingImages">Images</a>
                        <a class="anchor" href="#favicons">Favicons</a>
                        <a class="anchor" href="#CSS">CSS</a>
                        <a class="anchor" href="#forms">Forms</a>
                        <a class="anchor" href="#express">Express</a>
                        <a class="anchor" href="#JavaScript">JavaScript</a>
                    </nav>

                    <article id="webServers">
                        <h3>Web Servers</h3>
                        <p>
                            The file <strong>index.html</strong>, as it relates to websites and servers, 
                            is the name of the resource generally served when a user requests the root
                            path of a website. In most cases--the Apache server at access.engr.oregonstate.edu among them--
                            the root directory ("/") is mapped to index.html. Another name for index.html is the "designated homepage,"
                            served to clients when a GET request is made to the root path of website in question.
                        </p>
                        <p>
                            As <strong>HTTP requests</strong> are how clients and servers communicate across the web,
                            the ability to inspect this network traffic is a vital part of a web developer's toolkit. 
                            Its functionality is available in most modern browsers; in Chrome, it can be found
                            by pressing Function+F12 (to open DevTools), and then clicking Network. This opens
                            the Network tab, where network traffic--information being sent between the client
                            and the <strong>server</strong>--can be inspected. This communication between the client and the server is 
                            composed of a status (common HTTP status codes include: 200 (success!), 400, 403, and 404), 
                            a request header (containing the <strong>URL</strong>, request method, <strong>HTTP status code</strong>, IP address, and
                            policy), a response header (containing cache details, date, content type, the date), and
                            the body (the information requested from the <strong>server</strong>). When a file is stored locally, and being sent to
                            the server in a <strong>POST or PUT request</strong>, the file's details can be viewed in the Network Tab's 
                            "Payload" subcategory. However, when the information is being sent from the (remote) server to 
                            the (local) client as a part of a <strong>GET request</strong>, the file's details can be viewed in the 
                            Network Tab's "Response" subcategory.
                        </p>
                        <p> 
                            When viewed in the Network tab, favicon.ico file has a status 200; this indicates to the user that the browser has
                            issued a GET request for this resource, and the resource has been returned successfully.
                            However, main.css and main.js files do not display 200 on the Network tab (at present, they display nothing). 
                            There is no data on the Network tab for these resources because they have not yet been created. The only network traffic to be seen 
                            is two successful GET requests for favicon.ico and index.html.
                        </p>
                        <p>
                            It is important to note that the <strong>URL</strong> to this file contains four parts:
                            the scheme, the host domain, the subdomain, and the resource(s). <strong>The scheme</strong>
                            is the protocol the client must use to access this resource (the protocol for all files on
                            web.engr.oregonstate.edu are secure HyperText Transfer Protocol). The <strong>host domain</strong>
                            for this site is oregonstate.edu. The <strong>subdomain</strong> is "web.engr." and
                            the resources are index.html and favicon.ico.
                        </p>
                    </article>

                    <article id="frontendDesign">
                        <h3>Frontend Design</h3>
                        <p>
                            <strong>"Frontend design"</strong> is a combination of the UI (user interface) and the UX (user experience)--in short,
                            how the site looks and feels from a user's perspective. While the UI is focused on the visual design
                            of the site and the UX is more concerned with usability (how well the user can achieve their goals),
                            both form and function are necessary to create a site that users will return to. To ensure a website
                            is usable, keep these principles in mind: <strong>The 5 "E's" of Usability</strong>. Is a website...
                        </p>

                        <dl>
                            <dt><strong>Effective</strong></dt>    
                            <dd>at helping users accomplish their goal or purpose?
                            </dd>
                            <dt><strong>Efficient</strong></dt>
                            <dd>at enabling users to accomplish their mission with a minimum amount of time and frustration?
                            </dd>
                            <dt><strong>Easy-to-navigate</strong></dt>
                            <dd>for both first-time and returning users? 
                            </dd>
                            <dt><strong>Error-free</strong></dt>
                            <dd>from both a technical and goal-oriented perspective? What happens to users when they run into errors,
                                and can these errors be recovered from?
                            </dd>
                            <dt><strong>Engaging</strong></dt>
                            <dd>enjoyable, and appropriate for its intended audience?
                            </dd>
                        </dl>

                        <p>
                            Coming to the aid of the frontend developer, looking to make a more 
                            structured, organized, and easily-navigable website, are <strong>page layout tags</strong>.
                            While they can function similarly to divs, as containers for different 
                            components and content areas, page layout tags are different from divs in a crucial way;
                            they allow screen readers and search engines to better understand the structure
                            and purpose of the various areas of a website. These tags include: <strong>header</strong> (containing items
                            such as a title, publisher, and slogan--similar to a newspaper masthead),
                            <strong>nav</strong> (a block of links, allowing the user to external sites, other pages of the current site, or content further down the page), 
                            <strong>main</strong> (the site's primary content), <strong>section</strong> (a group of content
                                with a similar purpose or theme), <strong>article</strong> (a single, specific topic), 
                            <strong>aside</strong> (content related to an article), 
                            and <strong>footer</strong> (appears below the main tag, can contain copyright, contact information,
                                and (frequently) links to lesser-used pages).
                        </p>
                        <p>
                            While these page layout tags provide structure to a single page of a website,
                            <strong>tools within the nav bar--anchors</strong>--create hyperlinks which connect a 
                                website to external content, internal content, and from page to page.
                        </p>
                        <ol>
                            <li>External content: connects a website to content outside the current site. The 
                                href="" inside of external content anchor links to external sites, such as href="oregonstate.edu"
                            </li>
                            <li>Internal content: connects a user to content on the current page. The
                                href="" inside of internal content anchors will contain #IDs of individual elements on the DOM tree,
                                such as href="#travelGallery"
                            </li>
                            <li>From page to page: connects a user to other pages of the same website. The href="" inside 
                                these links can contain either absolute or relative paths. An example of a relative path 
                                to a website within the current directory is href="./photos.html"
                            </li>
                        </ol>
                    </article>

                    <article id="optimizingImages">
                        <h3>Optimizing Images</h3>
                        
                        <p>There are 6 major specifications of images used on the web: <strong>.PNG</strong>, <strong>.GIF</strong>,
                            and <strong>.SVG</strong> (can be used for line art),
                            <strong>.JPG</strong> and <strong>.WEBP</strong> (mostly used for photography), and .AVIF (mentioned in the 
                            <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types" target="_blank">mdn web docs</a>
                            and used for photography, with arguably better compression than JPG). It is important to note, however,
                            that .AVIF is not available in all browsers.</p>
                        <p>For line art, it is suggested to use the .PNG or .SVG image formats (.PNG for its ability to compress color information
                            into index color mode and .SVG for its mathematically-derived precision). Both formats allow for smaller file 
                            sizes while maintaining necessary detail.
                        </p>
                    </article>

                    <article id="favicons">
                        <h3>Favicons</h3>

                        <p><strong>Favicons</strong> are small, simple images which are displayed in 
                            the browser tab and feature a website or brand's logo. They further brand recognition 
                            and allow users to easily pick out a tab among the many they may have open in their 
                            browser at any given time. Favicons are mostly commonly rendered in .ICO are .SVG and 
                            .PNG images formats, though .GIF can also be used.
                        </p>
                    </article>

                    <article id="CSS">
                        <h3>Cascading Stylesheets</h3>

                        <p>Stylesheets are an important component of websites and web applications. The rules of <strong>CSS</strong>
                            -- Cascading Stylesheets -- allow developers to edit a site's presentation layer to give
                            the site a consistent look and feel. Additionally, developers are able to modify these style rules
                            without altering the site's content.
                        </p>
                        <p>
                            How can CSS be used to style a website?
                            <ol>
                                <li>
                                    <strong>Imported/linked stylesheets</strong>: CSS is written in a separate file (or multiple separate files)
                                    which are then linked to a site's HTML file(s) using the link tag.
                                </li>
                                <li>
                                    <strong>Embedded styles</strong>: CSS is written directly into the HTML file, using the style attribute
                                    of an individual HTML element.
                                </li>
                                <li>
                                    <strong>Inline styles</strong>: CSS is written directly into the HTML file, using the style tag.
                                </li>
                                <li>
                                    In a <strong>JavaScript template literal</strong>: which is where CSS is written directly in 
                                    a JavaScript function
                                </li>
                                <li>
                                    In <strong>regular JavaScript</strong>, which can be accomplished by manipulating the Document Object Model.
                                </li>
                            </ol>
                        </p>
                    </article>

                    <article id="forms">
                        <h3>Forms</h3>

                        <p>Much of the activity that occurs on the web is 
                            the result of user input. Web <strong>forms</strong> are a
                            way for businesses and organizations to collect
                            data from users (and for users to interact with
                            websites). Forms are the heart of web development.</p>
                            
                        <p>Forms are created with the <strong>form tag</strong> 
                            and contain a variety of input types, including
                            <strong>textboxes</strong>, <strong>checkboxes</strong>, 
                            <strong>radio buttons</strong>, and dropdown <strong> option lists.
                            </strong>. Form fields can be grouped into <strong>fieldsets</strong>
                            and more details can be provided about a fieldset with the
                            <strong>legend tag</strong>.
                        </p>

                        <p>The most important thing to keep in mind when working
                            with forms is ease-of-use and <strong>accessibility</strong>. Forms
                            should be easy to understand, easy to navigate, and
                            compatible with a variety of devices and browsers.
                            Accessible forms: 
                        </p>
                            <ol>
                                <li>
                                    provide instructions that can be easily read by
                                    both sighted users and users with limited vision.
                                    They also...
                                </li>
                                <li>
                                    provide information about why certain information
                                    is being collected.
                                </li>
                                <li>
                                    are keyboard accessible, meaning they can be filled out
                                    entirely with a keyboard.
                                </li>
                                <li>
                                    have tab indexing, so users can easily switch between fields.
                                </li>
                                <li>
                                    set the first field to autofocus, so the user
                                    can begin typing immediately.
                                </li>
                                <li>
                                    are also fully-compatible with screen readers,
                                    including error messages.
                                </li>
                            </ol>

                        <p>
                            In the United States, form accessibility is governed by the 
                            <a href="https://www.section508.gov/develop/software-websites/" target="_blank">Americans 
                                with Disabilities Act (ADA) - Section 508.</a>
                        </p>
                    </article>

                    <article id="express">
                        <h3>Express</h3>

                        <p>Node, npm, and Express are the backbone of backend web development
                            in JavaScript. The <strong>Node.js</strong> runtime allows developers 
                            to run JavaScript code on the server. One of the most useful features of
                            JavaScript, one particularly useful for web development, is its
                            asynchronous nature (<a href="https://nodejs.org/en/docs/guides/blocking-vs-non-blocking" target="_blank">see 
                                the Node.js documentation for more information on this topic</a>).
                            </p>
                        <p>Hand-in-hand with Node.js is <strong>npm</strong>, the Node Package Manager.
                            It makes installing and managing third-party libraries and dependencies
                            extremely easy.
                        </p>
                        <p>
                            A third tool, <strong>Express.js</strong>, is the Node.js web application framework.
                        </p>
                    </article>

                    <article id="JavaScript">
                        <h3>JavaScript</h3>

                        <p>JavaScript was invented by Brendan Eich in 1995. While its name
                            sounds similar to Java, it is a completely different language
                            (however, its name is an homage to Java, which was extremely
                            popular at the time). JavaScript is a both a <strong>client-side</strong>
                            language (it runs in the browser) and a <strong>server-side</strong>
                            language (which can be used to write web servers in Express). 
                            As an <strong>event-driven</strong> language, JavaScript
                            can respond to user input and other events. It is also
                            <strong>dynamically-typed</strong>; variables can be assigned
                            different types of data at different times, and these assignments
                            can change. Last, JavaScript is <strong>interpreted</strong> 
                            (not compiled before it is run) and <strong>asynchronous</strong>
                            (can run multiple processes at once).
                        </p>
                        <p>
                            Data types in JavaScript include <strong>strings</strong>,
                            <strong>numbers</strong>, <strong>booleans</strong>, 
                            <strong>arrays</strong>, and <strong>objects</strong>. <strong>JSON</strong>,
                            or JavaScript Object Notation, is a data format which enables programs to
                            pass information to and from clients and servers.
                        </p>
                        <p>
                            JavaScript is multifaceted language with two main programming paradigms: 
                            <strong>object-oriented programming</strong> and <strong>functional programming</strong>.
                            Object-oriented programming uses objects and classes to organize code. 
                            In functional programming, the programmer organizes code into functions.
                            Additionally, in JavaScript, these functions are first-class objects,
                            meaning that they can be passed as arguments to other functions, returned 
                            from other functions, and assigned to variables.
                        </p>

                    </article>

                </section>
            </main>
        </>
    );
}

export default TopicsPage;