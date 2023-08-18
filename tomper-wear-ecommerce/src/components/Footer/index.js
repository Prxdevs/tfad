// import React from 'react';
import Wrapper from './styles';
import { socialLinks, footerLinks } from "../../utils/constants";
import { Link } from 'react-router-dom';
import logo from '../../assets/05.png';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <Wrapper>
      <footer class="footer-section" style={{paddingTop:'30px'}}>
        <div class="container" style={{borderBottom:'#202020 1px solid'}}>


            {/* <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src={logo} style={{width:"30%"}} class="img-fluid" alt="logo"/></a>
                            </div>
                            <div class="footer-text">
                                <p style={{marginTop:'5px'}}>UNSTOPPABLE MOMENTUM</p>
                                <p style={{marginTop:'4px'}}>Periparambil House,<br/>Muthrathikkara Parapukkara<br/>Thrissur, Kerala-680310</p>
                            </div>
                            {/* <div class="footer-social-icon" style={{alignItems:'left'}}>
                                <span style={{color:"black"}}>Follow us</span><br/>
                                <div style={{marginTop:'5px'}}>

                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3 style={{letterSpacing:'1px'}}>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/orders">Orders</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/checkout">Checkout</a></li>
                                <li><a href="/products">Products</a></li>
                                <li><a href="/cart">Cart</a></li>
                                <li><a href="/profile">Profile</a></li>
                                {/* <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Talk To Us</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Feel Free to Contact Us</p>
                            </div>
                            <div>
                                <a href='tel:+919496621525'  style={{color:'#000000'}}>

                                <h4 style={{letterSpacing:'-0.02em'}}>+91 94966 21525</h4>
                                </a>
                                <p>tfad9496@gmail.com</p>
                            </div>
                            {/* <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved <a href="">TFad</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/orders">Orders</a></li>
                                <li><a href="/products">Shop</a></li>
                                <li><a href="/checkout">Checkout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </Wrapper>
  );
};

export default Footer;
