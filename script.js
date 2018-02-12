"use strict"
let classes = {
    navBar: {
        "min-height": "100px",
        "text-align": "right",
        "line-height": "100px",
        padding: "0 100px 0 0",
    },
    navLink: {
        display: "inline-block",
        margin: "0 40px",
        cursor: "pointer"
    },
    link: {
        color: "#fff",
        "text-decoration": "none",
        "text-transform": "uppercase"
    },
    logo: {
        float: "left",
        padding: "0 0 0 100px",
        "font-family": "'Rammetto One', cursive",
        "text-transform": "none",
        "font-style": "italic",
        "font-size": "32px"
    },
    heroHeading: {
        "text-align": "center",
        "font-size": "40px",
        "font-weight": "800",
        "text-align": "center",
        width: "80%",
        margin: "20px auto"
    },
    workWUs: {
        display: "block",
        margin: "40px auto",
        "text-align": "center",
        "background-color": "#eb7d4b",
        "max-width": "200px",
        padding: "20px",
        "border-radius": "4px",
        "box-shadow": "0px 3px 0px #bc653e",
        cursor: "pointer"
    },
    container: {
        margin: "0 120px",
        padding: "60px 0"
    },
    headingLight: {
        "text-transform": "uppercase",
        "text-align": "center",
        "letter-spacing": "0.1em",
        color: "#fff"
    },
    headingDark: {
        "text-transform": "uppercase",
        "text-align": "center",
        "letter-spacing": "0.1em",
        color: "#3c4761"
    },
    border: {
        width: "100px",
        height: "4px",
        color: "#000",
        "background-color": "#0003",
        margin: "20px auto"
    },
    subheading: {
        "max-width": "600px",
        margin: "20px auto",
        "font-size": "18px"
    },
    flexParent: {
        display: "flex",
        "flex-wrap": "wrap",
        "justify-content": "space-evenly",
        margin: "60px 0 0 0"
    },
    flexChild: {
        "max-width": "300px",
    },
    flexChildImg: {
        width: "100%"
    },
    circle: {
        height: "200px",
        width: "200px",
        "border-radius": "100px",
        "background-color": "#878787",
        margin: "0 auto"
    },
    icon: {
        color: "#fff",
        "background-color": "#bdd1df",
        width: "15px",
        height: "15px",
        padding: "10px",
        "border-radius": "50%",
        margin: "10px 5px"
    },
    position: {
        color: "#3cbee8"
    },
    portfolioLinks: {
        color: "#3c4761",
        "text-decoration": "none",
        "text-transform": "uppercase",
        "background-color": "#00000029",
        padding: "5px 20px",
        "border-radius": "5px",
        margin: "10px 5px",
        display: "inline-block"
    },
    portfolioMore: {
        display: "block",
        margin: "40px auto",
        "text-align": "center",
        "background-color": "#17c2a4",
        "max-width": "200px",
        padding: "20px",
        "border-radius": "4px",
        "box-shadow": "0px 3px 0px rgb(21, 155, 132)",
        "text-decoration": "none",
        color: "#fff",
        "text-transform": "uppercase",
        cursor: "pointer"
    },
    smallCircle: {
        height: "80px",
        width: "80px",
        "border-radius": "100px",
        "background-color": "#878787",
        margin: "20px 40px"
    },
    flexReview: {
        "max-width": "500px",
        display: "flex",
        "flex-wrap": "wrap",
        "justify-content": "center",
        margin: "20px 0"
    },
    reviewText: {
        "max-width": "300px",
        "text-align": "left",
    },
    yellowText: {
        color: "#fcd397"
    },
    formInput: {
        width: "40%",
        height: "40px",
        border: "none",
        "border-radius": "4px",
        "background-color": "#273a71",
        margin: "20px 10px",
        color: "#fff",
        padding: "0 0 0 10px",
        "font-size": "18px",
    },
    textarea: {
        width: "83%",
        height: "200px",
        color: "rgb(255, 255, 255)",
        padding: "10px 0px 0px 10px",
        "font-size": "18px",
        border: "none",
        "background-color": "#273a71",
        "border-radius": "4px",
    },
    sendMessage: {
        display: "block",
        margin: "40px auto",
        "text-align": "center",
        "background-color": "#30bae7",
        "max-width": "200px",
        padding: "20px",
        "border-radius": "4px",
        "box-shadow": "0px 3px 0px rgb(39, 145, 179)",
        "text-decoration": "none",
        color: "#fff",
        "text-transform": "uppercase"
    },
    footer: {
        "min-height": "80px",
        "line-height": "80px",
        "background-color": "#344b8e"
    },
    footerLink: {
        color: "#fff",
        "text-decoration": "none",
        margin: "0 20px",
        ":hover": { background: "yellow" }
    },
    textLight: {
        color: "#fff"
    },
    textDark: {
        color: "#3c4761"
    },
    textCenter: {
        "text-align": "center"
    },
    toTop: {
        margin: "30px",
        "background-color": "rgb(103, 58, 183)",
        padding: "20px 10px",
        "border-radius":" 100%",
        border: "10px solid rgba(0, 0, 0, 0.22)",
        color: "#fff",
        position: "fixed",
        right: "0",
        display: "none",
        cursor: "pointer"
    },
    "footerLink:hover": {
        color: "#30bae7"
    }    
}
// ---------------------------------------------------------------------------
let heroSection = {
    element: `<nav class='navBar textLight'>
                <a class='logo' id="top">Cuda</a>
                <div class='navLink'>
                    <a class='link' href='#'>Home</a>
                </div>
                <div class='navLink'>
                    <a class='link' onclick="scrollToView(this.name)" name="#team">About</a>
                </div>
                <div class='navLink'>
                    <a class='link' onclick="scrollToView(this.name)" name="#portfolio">Work</a>
                </div>
                <div class='navLink'>
                    <a class='link' onclick="scrollToView(this.name)" name="#review">Blog</a>
                </div>
                <div class='navLink'>
                    <a class='link' onclick="scrollToView(this.name)" name="#contact">Contact</a>
                </div>
            </nav>
            <div class='container textLight'>
                <h1 class='heroHeading'>Hi there! We are the new kids on the block and we build awesome websites and mobile apps</h1>
                <a onclick="scrollToView(this.name)" name="#contact" class='workWUs link'>Work with us</a>
            </div>
            <a class="toTop" id="JusuButtonID" onclick="scrollToView(this.name)" name="#top">To top</a>`,
};
let service = {
    element: `<div id='services' class='container textLight textCenter'>
                <h1 class='headingLight'>Services we provide</h1>
                <div class='border'></div>
                <p class='subheading'>We are working with both individuals and businesses from all over the globe to create awesome websites and applications.</p>
                <div class='flexParent'>
                    <div class='flexChild'>
                        <div>
                            <img src='./img/flag.png'>
                        </div>
                        <div>
                            <h3>BRANDING</h3>
                            <p>Lorem ipsum dolor sit amet,  consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                        </div>
                    </div>
                    <div class='flexChild'>
                        <div>
                            <img src='./img/pencil.png'>
                        </div>
                        <div>
                            <h3>DESIGN</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                        </div>
                    </div>
                    <div class='flexChild'>
                        <div>
                            <img src='./img/wheel.png'>
                        </div>
                        <div>
                            <h3>DEVELOPMENT</h3>
                            <p>At vero eos et accusamus et iusto odio dignissimos qui blanditis praesentium.</p>
                        </div>
                    </div>
                    <div class='flexChild'>
                        <div>
                            <img src='./img/rocket.png'>
                        </div>
                        <div>
                            <h3>ROCKET SCIENCE</h3>
                            <p>Et harum quidem rerum est et expedita distinctio. Nam libero tempore.</p>
                        </div>
                    </div>
                </div>
            </div>`
};
let teamSection = {
    element: `<div class='container textCenter textDark' id='team'>
                <h1 class='headingDark'>Meet our beautiful team</h1>
                <div class='border'></div>
                <p class='subheading'>We are a small team of designers and developers, who help brands with big ideas.</p>
                <div class='flexParent'>
                    <div class='flexChild'>
                        <div>
                            <div class='circle'></div>
                        </div>
                        <div>
                            <h3>ANNE HATHAWAY</h3>
                            <h5 class='position'>CEO / Marketing Guru</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, error vel alias tenetur repellendus voluptatem. Eligendi blanditiis facilis cupiditate, quos odio atque enim repellat dolorem commodi architecto ipsam rerum? Amet!</p>
                            <div>
                                <i class="fab fa-facebook-f icon"></i>
                                <i class="fab fa-twitter icon"></i>
                                <i class="fab fa-linkedin-in icon"></i>
                                <i class="fas fa-envelope icon"></i>
                            </div>
                        </div>
                    </div>
                    <div class='flexChild'>
                        <div>
                            <div class='circle'></div>
                        </div>
                        <div>
                            <h3>KATE UPTON</h3>
                            <h5 class='position'>Creative Director</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, error vel alias tenetur repellendus voluptatem. Eligendi blanditiis facilis cupiditate, quos odio atque enim repellat dolorem commodi architecto ipsam rerum? Amet!</p>
                            <div>
                                <i class="fab fa-twitter icon"></i>
                                <i class="fab fa-linkedin-in icon"></i>
                                <i class="fas fa-envelope icon"></i>
                            </div>
                        </div>
                    </div>
                    <div class='flexChild'>
                        <div>
                            <div class='circle'></div>
                        </div>
                        <div>
                            <h3>OLIVIA WILDE</h3>
                            <h5 class='position'>Lead Designer</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, error vel alias tenetur repellendus voluptatem. Eligendi blanditiis facilis cupiditate, quos odio atque enim repellat dolorem commodi architecto ipsam rerum? Amet!</p>
                            <div>
                                <i class="fab fa-facebook-f icon"></i>
                                <i class="fab fa-twitter icon"></i>
                                <i class="fab fa-linkedin-in icon"></i>
                                <i class="fas fa-envelope icon"></i>
                            </div>
                        </div>
                    </div>
                    <div class='flexChild'>
                        <div>
                            <div class='circle'></div>
                        </div>
                        <div>
                            <h3>ASHLEY GREENE</h3>
                            <h5 class='position'>SEO / Developer</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, error vel alias tenetur repellendus voluptatem. Eligendi blanditiis facilis cupiditate, quos odio atque enim repellat dolorem commodi architecto ipsam rerum? Amet!</p>
                            <div>
                                <i class="fab fa-facebook-f icon"></i>
                                <i class="fab fa-twitter icon"></i>
                                <i class="fas fa-envelope icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}
let skillSection = {
    element: `<div class='container textCenter textDark'>
                <h1 class='headingDark'>We got skills!</h1>
                <div class='border'></div>
                <p class='subheading'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, error vel alias tenetur repellendus voluptatem.</p>
                <div class='flexParent'>
                    <div class='flexChild'>
                        <div>
                            <img src='./img/progress1.png'>
                        </div>
                        <div>
                            <h3>WEB DESIGN</h3>
                        </div>
                    </div>
                    <div class='flexChild'>
                        <div>
                            <img src='./img/progress2.png'>
                        </div>
                        <div>
                            <h3>HTML / CSS</h3>
                        </div>
                    </div>
                    <div class='flexChild'>
                        <div>
                            <img src='./img/progress3.png'>
                        </div>
                        <div>
                            <h3>GRAPHIC DESIGN</h3>
                        </div>
                    </div>
                    <div class='flexChild'>
                        <div>
                            <img src='./img/progress4.png'>
                        </div>
                        <div>
                            <h3>UI / UX</h3>
                        </div>
                    </div>
                </div>
            </div>`
}
let portfolioSection = {
    element: `<div class='container textCenter textDark' id='portfolio'>
                <h1 class='headingDark'>Our portfolio</h1>
                <div class='border'></div>
                <p class='subheading'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, error vel alias tenetur repellendus voluptatem.</p>
                <div>
                    <a class='portfolioLinks' href='#'>all</a>
                    <a class='portfolioLinks' href='#'>web</a>
                    <a class='portfolioLinks' href='#'>apps</a>
                    <a class='portfolioLinks' href='#'>icons</a>
                </div>
                <div class='flexParent'>
                    <div>
                        <div>
                            <img src='./img/portfolio1.png' class='flexChildImg'>
                        </div>
                        <div>
                            <h3>Isometric Perspective Mock-Up</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src='./img/portfolio2.png' class='flexChildImg'>
                        </div>
                        <div>
                            <h3>Time Zone App UI</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src='./img/portfolio3.png' class='flexChildImg'>
                        </div>
                        <div>
                            <h3>Viro Media Players UI copy 2</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src='./img/portfolio4.png' class='flexChildImg'>
                        </div>
                        <div>
                            <h3>Blog / Magazine Flat UI Kit</h3>
                        </div>
                    </div>
                </div>
                <a onclick="scrollToView(this.name)" name="#contact" class='portfolioMore'>Work with us</a>
            </div>`
}
let reviewSection = {
    element: `<div class='container textLight textCenter' id='review'>
                <h1 class='headingLight'>WHAT POEPLE SAY ABOUT US</h1>
                <div class='border'></div>
                <p class='subheading'>Our clients love us!</p>
                <div class='flexParent'>
                    <div class='flexReview'>
                        <div>
                            <div class='smallCircle'></div>
                        </div>
                        <div class='reviewText'>
                            <p><em>"Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Nullam dapibus blandit orci, viverra gravida dui lobortis eget"</em></p>
                            <h3>CHANEL IMAN</h3>
                            <span class='yellowText'>CEO of Pinterest</span>
                        </div>
                    </div>
                    <div class='flexReview'>
                       <div>
                            <div class='smallCircle'></div>
                        </div>
                        <div class='reviewText'>
                            <p><em>"Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Nullam dapibus blandit orci, viverra gravida dui lobortis eget"</em></p>
                            <h3>ADRIANA LIMA</h3>
                            <span class='yellowText'>Founder of Instagram</span>
                        </div>
                    </div>
                    <div class='flexReview'>
                       <div>
                            <div class='smallCircle'></div>
                        </div>
                        <div class='reviewText'>
                            <p><em>"Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Nullam dapibus blandit orci, viverra gravida dui lobortis eget"</em></p>
                            <h3>ANNE HATHAWAY</h3>
                            <span class='yellowText'>Lead Designer at Behance</span>
                        </div>
                    </div>
                    <div class='flexReview'>
                       <div>
                            <div class='smallCircle'></div>
                        </div>
                        <div class='reviewText'>
                            <p><em>"Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Nullam dapibus blandit orci, viverra gravida dui lobortis eget"</em></p>
                            <h3>EMMA STONE</h3>
                            <span class='yellowText'>Co-Founder of Shazam</span>
                        </div>
                    </div>
                </div>
            </div>`
}
let contactSection = {
    element: `<div class='container textLight textCenter' id='contact'>
                <h1 class='headingLight'>GET IN TOUCH</h1>
                <div class='border'></div>
                <p class='subheading'>1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America</p>
                <form>
                    <div>
                        <div>
                            <input class="formInput" type="text" name="firstName" placeholder="Your Name*">
                            <input class="formInput" type="email" name="email" placeholder="Your Email*">
                        </div>
                        <div>
                        <textarea class="textarea" placeholder="Your Message*"></textarea>
                        </div>
                    </div>
                </form>
                <a href='#' class='sendMessage'>Send message</a>
            </div>
            <footer class="footer textCenter">
                <a class="footerLink">Fcebook</a>
                <a class="footerLink" href="#">Twitter</a>
                <a class="footerLink" href="#">Google+</a>
                <a class="footerLink" href="#">LinkedIn</a>
                <a class="footerLink" href="#">Behance</a>
                <a class="footerLink" href="#">Dribble</a>
                <a class="footerLink" href="#">GitHub</a>
            </footer>`
};
const body = document.querySelector('body');
body.style.margin = '0';
body.style.fontFamily = "'Titillium Web', sans-serif";
const mainContainer = document.querySelector('#container');
let hero, services, team, skills, portfolio, reviews, contact;
function drawPage() {
    let arr = [hero, services, team, skills, portfolio, reviews, contact];
    let colors = ["#87509c", "#17c2a4", "#e7f1f8", "#fff", "#ffdd99", "#d74680", "#3c5499"];
    let html = [heroSection, service, teamSection, skillSection, portfolioSection, reviewSection, contactSection];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = document.createElement('div');
        mainContainer.appendChild(arr[i]);
        arr[i].style.backgroundColor = colors[i];
        arr[i].innerHTML = html[i].element;
    }
    function addStyle(x) {
        let element = x.substring(0);
        element = document.querySelectorAll('.' + element);
        for (let key in classes[x]) {
            for (let i = 0; i < element.length; i++) {
                element[i].style[key] = classes[x][key];
            }
        }
    }
    for(let key in classes) {
        addStyle(key);
    }
   
    // let style = document.createElement("style");
    // let head = document.querySelector("head");
    // style.innerHTML = `@media screen and (max-width: 500px;) {
    //     div.container {
    //         margin: 111px !important;
    //     }
    // }`
    // head.appendChild(style);
    const mq = window.matchMedia("(max-width: 600px)");
    if (matchMedia) {
        const mq = window.matchMedia("(max-width: 600px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }
    // media query change
    function WidthChange(mq) {
        let container = document.querySelectorAll(".container");
        let navLink = document.querySelectorAll(".navLink");
        if (mq.matches) {
            for(let i = 0; i < container.length; i ++) {
                container[i].style.margin = "0 20px";
            }
            for (let i = 0; i < navLink.length; i++) {
                navLink[i].style.display = "none";
            }
            document.querySelector(".heroHeading").style.fontSize = "30px";
        } else {
            document.querySelector(".heroHeading").style.fontSize = "40px";
            for (let i = 0; i < container.length; i++) {
                container[i].style.margin = "0 120px";
            }
            for (let i = 0; i < navLink.length; i++) {
                navLink[i].style.display = "inline-block";
            }
        }

    }
}
drawPage();
window.onscroll = scroll1;
function scroll1() {
    var toTop = document.getElementById('JusuButtonID');
    window.scrollY > 300 ? toTop.style.display = 'Block' : toTop.style.display = 'none';
}
function scrollToView(x) {
    document.querySelector(x).scrollIntoView({ behavior: 'smooth' });
}


