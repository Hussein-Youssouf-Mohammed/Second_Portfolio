import Script from "next/script"

const Home   = ()  =>  {
  return (
     <div>
          <header>
        <div className="container">
            <a href="#" className="logo">Portfolio.</a>
            <i className="fa fa-bars fa-2x toggle-bar"></i>
            <nav>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
            </nav>
        </div>
    </header>
    <div className="loading" id="home">
        <div className="container">
            <div className="content">
                <h2>Hi there , </h2>
                <h1>I 'm Hus<span>sein</span> Yo<span>usso</span>uf <br /> Full Stack Web Developer</h1>
                <p>As an ambitious and hardworking individual, I have experience in the IT field, especially in web development, and I can work both front
and back. I am currently seeking a job to take my career to a better level</p>
                <button className="btn">Download Cv</button>
                <div className="scoial">
                    <li><i className="fab fa-facebook fa-2x"></i></li>
                    <li><i className="fab fa-whatsapp fa-2x"></i></li>
                    <li><i className="fab fa-yahoo fa-2x"></i></li>
                    <li><i className="fab fa-twitter fa-2x"></i></li>
                </div>
            </div>
            <div className="img">
                <img src="../images/hussein.jpg" alt="" />
                <div className="img-back"></div>
            </div>
        </div>
    </div>
    <div className="services" id="services">
        <h2>Our <span>Services</span></h2>
        <div className="container">
            <div className="service">
                <i className="fa fa-code fa-2x" aria-hidden="true"></i>
                <h3>Web Desgin</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint omnis accusamus veritatis atque itaque?</p>
                <button className="btn">Read More</button>
            </div>
            <div className="service">
                <i className="fa fa-laptop fa-2x" aria-hidden="true"></i>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint omnis accusamus veritatis atque itaque?</p>
                <button className="btn">Read More</button>

            </div>
            <div className="service">
                <i className="fa fa-home fa-2x" aria-hidden="true"></i>
                <h3>Fix Issue</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint omnis accusamus veritatis atque itaque?</p>
                <button className="btn">Read More</button>

            </div>
        </div>
    </div>
    <div className="projects" id="projects">
        <h2>Latest <span>Project</span></h2>
        <div className="container">
            <div className="project">
            <img src="../images/desn3.jpg" alt="" />
                <div className="project-content">
                    <h4>Web Desgin</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate!</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>

            <div className="project">
            <img src="../images/desn6.jpg" alt="" />
                <div className="project-content">
                    <h4>Web Desgin</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate!</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>

            <div className="project">
            <img src="../images/desn5.jpg" alt="" />
                <div className="project-content">
                    <h4>Web Desgin</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate!</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>

            <div className="project">
            <img src="../images/desn4.jpg" alt="" />
                <div className="project-content">
                    <h4>Web Desgin</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate!</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>

            <div className="project">
            <img src="../images/back6.jpg" alt="" />
                <div className="project-content">
                    <h4>Web Desgin</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate!</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>

            <div className="project">
            <img src="../images/back5.jpg" alt="" />
                <div className="project-content">
                    <h4>Web Desgin</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate!</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>

            <div className="project">
            <img src="../images/back4.jpg" alt="" />
                <div className="project-content">
                    <h4>Web Desgin</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate!</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>

            <div className="project">
            <img src="../images/desn2.jpg" alt="" />
             <div className="project-content">
                    <h4>Web Desgin</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate!</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            
            <div className="project">
                <img src="../images/desn1.jpg" alt="" />
                <div className="project-content">
                    <h4>Web Desgin</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate!</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            
            <div className="project">
                <img src="../images/back3.jpg" alt="" />
                <div className="project-content">
                    <h4>Web Desgin</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate!</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div className="project">
                <img src="../images/back2.jpg" alt="" />
                <div className="project-content">
                    <h4>Web Desgin</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate!</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div className="project">
                <img src="../images/back1.jpg" alt="" />
                <div className="project-content">
                    <h4>Web Desgin</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate!</p>
                    <a href="#"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            
        </div>
    </div>
    <div className="contact" id="contact">
        <h2>Contact <span>Me !</span> </h2>
        <div className="container">
                <input type="text" placeholder="Enter Your Name" />
                <input type="text" placeholder="Enter Your Email" />
                <textarea name="" placeholder="Message..."></textarea>

                <button className="btn">Send Message</button>
        </div>
    </div>
    <footer>
        <div className="container">
            <div className="text">
                <p>copyright &copy; 2023 by Hus<span>suein</span> You<span>ssouf </span>  All Right Reserved.</p>
            
            </div>
            <a href="#home" className="icon">
                <i className="fa fa-arrow-up fa-2x" aria-hidden="true"></i>
            </a>
        </div>
    </footer>
    <Script src="../js/main.js"></Script>
     </div>
  )
}
export default Home