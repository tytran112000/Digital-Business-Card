import React from "react"
import ReactDOM from "react-dom"

function Image(){
    return(
        <img src="./images/profilepic.png" className="profile-picture"/>
    )
}

function MainContent(){
    return (
        <div className="main-content">
            <div className="personal-info">
                <h1>Tung Tran</h1>
                <h3>Frontend Developer</h3>
                <p>tungtran.com</p>
            </div>
            <div className="buttons">
                <a href="" target="blank">
                    <button className="gmail"><img src="./images/Icon.png"  />Email</button>
                </a>
                <a href="https://www.linkedin.com/in/tyler-tran-h/" target="blank">    
                    <button className="linkedin"><img src="./images/Vector.png" />Linkedin</button>
                </a>
            </div>
            <div className="main-text">
                <div>
                    <h2>About</h2>
                    <p>Hello, I'm a web developer with experience building websites and web applications for small and medium-sized businesses. Are you building a website for your eCommerce business or trying to build your portfolio - Let's get in 
                    touch, I can help!</p>
                </div>
                <div>
                    <h2>Interest</h2>
                    <p>Web-development: HTML/CSS, Javascript, APIs, ReactJS, Figma, etc.</p>
                    <p>Marketing: SEO, Google Ads, Facebook Ads, etc.</p>
                    <p>Others: Python, SQL, building businesses, video editing, photo editing, etc.</p>
                </div>
            </div>
        </div>
    )
}

function Footer(){
    return(
        <div className="footer">
            <a href="https://www.facebook.com/hoangtung.tran.35513800/">
                <img  src="./images/Facebook.png" />
            </a>
            <a href="https://github.com/tytran112000">
                <img href="" src="./images/GitHub.png" />
            </a>
            <a href="">
                <img href="" src="./images/Instagram.png" />
            </a>        
            <a href="">
                 <img href="" src="./images/Twitter.png" />
            </a>
        </div>
    )
}

function App(){
    return(
        <div className="background-all">
                <Image />
                <MainContent />
                <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))