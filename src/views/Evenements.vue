<template>

<div class="fixed-top">
        <div class="navbar-area navbar-area-three">

            <div class="mobile-nav">
                <a href="index.html" class="mobile-brand">
                    <img src="assets/images/logo-white-menu.png" alt="logo" class="logo">
                </a>
                <div class="navbar-option">
                    <div class="navbar-option-item navbar-option-dots dropdown">
                        <button type="button" id="dot" aria-haspopup="true" aria-expanded="false">
                            <i class="flaticon-menu-1"></i>
                        </button>
                        <ul class="dropdown-menu navbar-dots-dropdown">
                            <li class="dropdown-item">
                                <div
                                    class="navbar-option-item navbar-option-language navbar-option-language-flat dropdown language-option">
                                    <button class="dropdown-toggle" type="button" id="language3"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="flaticon-worldwide"></i>
                                        <span class="lang-name"></span>
                                    </button>
                                    <div class="dropdown-menu language-dropdown-menu" aria-labelledby="language3">
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/uk-flat.png" alt="flag">
                                            English
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/ci-flat.png" alt="flag">
                                            Français
                                        </a>
                                        <!-- <a class="dropdown-item" href="#">
                                            <img src="assets/images/germany-flat.png" alt="flag">
                                            Deutsch
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/china-flat.png" alt="flag">
                                            简体中文
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/uae-flat.png" alt="flag">
                                            العربيّة
                                        </a> -->
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown-item">
                                <div class="navbar-option-item navbar-option-account">
                                    <a href="authentication.html"><i class="flaticon-user"></i></a>
                                </div>
                            </li>
                            <li class="dropdown-item">
                                <div class="navbar-option-item navbar-option-cart">
                                    <a href="cart.html"><i class="flaticon-shopping-bag"></i>
                                        <span class="option-badge option-badge-danger">2</span>
                                    </a>
                                </div>
                            </li>
                            <li class="dropdown-item">
                                <div class="navbar-option-item navbar-option-sidebar">
                                    <span><i class="flaticon-menu"></i></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="navbar-option-item navbar-option-language navbar-option-language-flat dropdown mobile-hide language-option">
                        <button class="dropdown-toggle" type="button" id="language1" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="flaticon-worldwide"></i>
                            <span class="lang-name"></span>
                        </button>
                        <div class="dropdown-menu language-dropdown-menu" aria-labelledby="language1">
                            <a class="dropdown-item" href="#">
                                <img src="assets/images/uk-flat.png" alt="flag">
                                     English
                             </a>
                            <a class="dropdown-item" href="#">
                                <img src="assets/images/ci-flat.png" alt="flag">
                                Français
                            </a>
                                        <!-- <a class="dropdown-item" href="#">
                                            <img src="assets/images/germany-flat.png" alt="flag">
                                            Deutsch
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/china-flat.png" alt="flag">
                                            简体中文
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/uae-flat.png" alt="flag">
                                            العربيّة
                                        </a> -->
                        </div>
                    </div>
                    <div class="navbar-option-item navbar-option-search dropdown">
                        <button type="button" id="search" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i class="flaticon-search"></i>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="search">
                            <form>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="flaticon-search"></i>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Search result">
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="navbar-option-item navbar-option-account mobile-hide">
                        <a href="authentication.html"><i class="flaticon-user"></i></a>
                    </div>
                    <div class="navbar-option-item navbar-option-cart mobile-hide">
                        <a href="cart.html"><i class="flaticon-shopping-bag"></i>
                            <span class="option-badge option-badge-danger">2</span>
                        </a>
                    </div>
                    <div class="navbar-option-item navbar-option-sidebar mobile-hide">
                        <span><i class="flaticon-menu"></i></span>
                    </div>
                </div>
            </div>

            <div class="main-nav">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="/">
                            <img src="assets/images/logo-white-menu.png" alt="logo" class="logo">
                        </a>
                        <!-- Debut vrai menu nav-2 -->
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a href="/" class="nav-link  active">Accueil</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/about" class="nav-link dropdown-toggle">La Start-Up</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="ai-platforms.html" class="nav-link">AI Platform</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="compliance.html" class="nav-link">Compliance</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link dropdown-toggle">Partner</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="partner-directory.html" class="nav-link">Partner
                                                        Directory</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="become-a-partner.html" class="nav-link">Become A
                                                        Partner</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="ratings.html" class="nav-link">Ratings</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="career.html" class="nav-link">Career</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="presale-service.html" class="nav-link">Presale Service</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="/projet" class="nav-link dropdown-toggle">Projets</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">Applications Mobile</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">Cloud</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">Developpement Web</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">Open Source</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">SaaS</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="/services" class="nav-link dropdown-toggle">Services</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="services.html" class="nav-link">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">Services 1</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">Services 2</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">Services 3</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">Services 4</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="service-details.html" class="nav-link">Service Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="/evenements" class="nav-link ">Events</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/blog" class="nav-link ">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/contact" class="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    <!-- Debut menu nav bar lang-auth -->

                    <div class="navbar-option-item navbar-option-language navbar-option-language-flat dropdown language-option">
                                <button class="dropdown-toggle" type="button" id="language3" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="flaticon-worldwide"></i>
                                    <span class="lang-name">English</span>
                                </button>
                                <div class="dropdown-menu language-dropdown-menu" aria-labelledby="language3">
                                    <a class="dropdown-item" href="#">
                                            <img src="assets/images/uk-flat.png" alt="flag">
                                            English
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/ci-flat.png" alt="flag">
                                            Français
                                        </a>
                                        <!-- <a class="dropdown-item" href="#">
                                            <img src="assets/images/germany-flat.png" alt="flag">
                                            Deutsch
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/china-flat.png" alt="flag">
                                            简体中文
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/uae-flat.png" alt="flag">
                                            العربيّة
                                        </a> -->
                                </div>
                     </div>

                    <div class="navbar-option">
                        <div class="navbar-option-item navbar-option-search">
                            <form>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <i class="flaticon-search"></i>
                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Search result">
                                </div>
                            </form>
                        </div>
                        <div class="navbar-option-item navbar-option-account">
                            <a href="/authentification"><i class="flaticon-user"></i></a>
                        </div>
                        <div class="navbar-option-item navbar-option-sidebar">
                            <span><i class="flaticon-menu"></i></span>
                        </div>
                    </div>
                    <!-- Fin menu nav bar lang-auth -->
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div>
     <header class="header-page-bg overlay-shape">

        <div class="header-bottom-shape"></div>
        <div class="container">
            <div class="header-page-content">
                <small class="line-shape-bg color-white">Cysec</small>
                <h1 class="color-white">Events</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Events</li>
                    </ol>
                </nav>
            </div>
        </div>
    </header>


    <section class="event-list-section p-tb-100">
        <div class="container">
            <div class="product-list-header">
                <div class="product-list-header-item">
                    <div class="product-list-result">
                        <p>Showing 1-8 Of 20 Results</p>
                    </div>
                </div>
            </div>
            <div class="event-list-content">
                <div class="event-list-item">
                    <div class="event-list-time">
                        <h4>16</h4>
                        <span>Nov 2022</span>
                    </div>
                    <div class="event-list-text">
                        <h3>Website Security Test</h3>
                        <ul class="event-list-markup">
                            <li><i class='bx bx-radio-circle-marked'></i>ABC Conference Center</li>
                            <li><i class='bx bxs-map'></i>14 Darling Dr, Sydney NSW 2000, Australia</li>
                            <li><i class='bx bx-time'></i>10:15 AM</li>
                        </ul>
                    </div>
                    <div class="event-list-button">
                        <a href="event-details.html" class="btn btn-white">View Details</a>
                    </div>
                </div>
                <div class="event-list-item">
                    <div class="event-list-time">
                        <h4>17</h4>
                        <span>Nov 2022</span>
                    </div>
                    <div class="event-list-text">
                        <h3>Virtual Assistant</h3>
                        <ul class="event-list-markup">
                            <li><i class='bx bx-radio-circle-marked'></i>Sydney Conference Hall</li>
                            <li><i class='bx bxs-map'></i>27 Park Dr, Sydney 2000, Australia</li>
                            <li><i class='bx bx-time'></i>9:15 AM</li>
                        </ul>
                    </div>
                    <div class="event-list-button">
                        <a href="event-details.html" class="btn btn-white">View Details</a>
                    </div>
                </div>
                <div class="event-list-item">
                    <div class="event-list-time">
                        <h4>18</h4>
                        <span>Nov 2022</span>
                    </div>
                    <div class="event-list-text">
                        <h3> Digital Learning Inc.</h3>
                        <ul class="event-list-markup">
                            <li><i class='bx bx-radio-circle-marked'></i>ABC Conference Hall</li>
                            <li><i class='bx bxs-map'></i>14 Darling Dr, Sydney 2000, Australia</li>
                            <li><i class='bx bx-time'></i>9:30 AM</li>
                        </ul>
                    </div>
                    <div class="event-list-button">
                        <a href="event-details.html" class="btn btn-white">View Details</a>
                    </div>
                </div>
                <div class="event-list-item">
                    <div class="event-list-time">
                        <h4>19</h4>
                        <span>Nov 2022</span>
                    </div>
                    <div class="event-list-text">
                        <h3>Cloud & Cyber Security Brief</h3>
                        <ul class="event-list-markup">
                            <li><i class='bx bx-radio-circle-marked'></i>ABC Conference Center</li>
                            <li><i class='bx bxs-map'></i>14 Darling Dr, Sydney NSW 2000, Australia</li>
                            <li><i class='bx bx-time'></i>10:15 AM</li>
                        </ul>
                    </div>
                    <div class="event-list-button">
                        <a href="event-details.html" class="btn btn-white">View Details</a>
                    </div>
                </div>
                <div class="event-list-item">
                    <div class="event-list-time">
                        <h4>20</h4>
                        <span>Nov 2022</span>
                    </div>
                    <div class="event-list-text">
                        <h3>Security In Transaction</h3>
                        <ul class="event-list-markup">
                            <li><i class='bx bx-radio-circle-marked'></i>Sydney Conference Hall</li>
                            <li><i class='bx bxs-map'></i>27 Park Dr, Sydney 2000, Australia</li>
                            <li><i class='bx bx-time'></i>9:15 AM</li>
                        </ul>
                    </div>
                    <div class="event-list-button">
                        <a href="event-details.html" class="btn btn-white">View Details</a>
                    </div>
                </div>
                <div class="event-list-item">
                    <div class="event-list-time">
                        <h4>21</h4>
                        <span>Nov 2022</span>
                    </div>
                    <div class="event-list-text">
                        <h3>Digital Marketing Security</h3>
                        <ul class="event-list-markup">
                            <li><i class='bx bx-radio-circle-marked'></i>ABC Conference Hall</li>
                            <li><i class='bx bxs-map'></i>14 Darling Dr, Sydney 2000, Australia</li>
                            <li><i class='bx bx-time'></i>9:30 AM</li>
                        </ul>
                    </div>
                    <div class="event-list-button">
                        <a href="event-details.html" class="btn btn-white">View Details</a>
                    </div>
                </div>
                <div class="event-list-item">
                    <div class="event-list-time">
                        <h4>22</h4>
                        <span>Nov 2022</span>
                    </div>
                    <div class="event-list-text">
                        <h3>Conference On Social Media Protection</h3>
                        <ul class="event-list-markup">
                            <li><i class='bx bx-radio-circle-marked'></i>ABC Conference Center</li>
                            <li><i class='bx bxs-map'></i>14 Darling Dr, Sydney NSW 2000, Australia</li>
                            <li><i class='bx bx-time'></i>10:15 AM</li>
                        </ul>
                    </div>
                    <div class="event-list-button">
                        <a href="event-details.html" class="btn btn-white">View Details</a>
                    </div>
                </div>
                <div class="event-list-item">
                    <div class="event-list-time">
                        <h4>23</h4>
                        <span>Nov 2022</span>
                    </div>
                    <div class="event-list-text">
                        <h3>Virtual Assistant</h3>
                        <ul class="event-list-markup">
                            <li><i class='bx bx-radio-circle-marked'></i>Sydney Conference Hall</li>
                            <li><i class='bx bxs-map'></i>27 Park Dr, Sydney 2000, Australia</li>
                            <li><i class='bx bx-time'></i>9:15 AM</li>
                        </ul>
                    </div>
                    <div class="event-list-button">
                        <a href="event-details.html" class="btn btn-white">View Details</a>
                    </div>
                </div>
                <div class="page-pagination">
                    <nav aria-label="pagination">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <span class="page-link"><i class="flaticon-left-arrow-1"></i></span>
                            </li>
                            <li class="page-item active">
                                <span class="page-link">
                                    1
                                    <span class="sr-only">(current)</span>
                                </span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#"><i class="flaticon-next"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>


    <div class="report-section">
        <div class="container">
            <div class="report-box">
                <div class="report-box-inner">
                    <div class="report-box-item report-box-text">
                        <h3>Get Free Report</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore quaerat voluptatem.</p>
                    </div>
                    <div class="report-box-item">
                        <a href="#" class="btn">Download Report</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <footer class="footer-lg bg-black footer-top-shape">
        <div class="footer-upper-two pt-100 pb-80">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-4">
                        <div class="footer-content-item">
                            <div class="footer-logo">
                                <a href="index.html"><img src="assets/images/logo-white.png" alt="logo"></a>
                            </div>
                            <div class="footer-details">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniama met
                                    consectetur adipisi.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-8">
                        <div class="footer-right pl-80">
                            <div class="row">
                                <div class="col-sm-6 col-md-4 col-lg-4">
                                    <div class="footer-content-list footer-content-item">
                                        <div class="footer-content-title">
                                            <h3>Cyber Services</h3>
                                        </div>
                                        <ul class="footer-details footer-list">
                                            <li><a href="ai-platforms.html">Cysec Discovery</a></li>
                                            <li><a href="ai-platforms.html">Cysec On-Demand</a></li>
                                            <li><a href="ai-platforms.html">Cysec MobileSuite</a></li>
                                            <li><a href="ai-platforms.html">Cysec Continous</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-4">
                                    <div class="footer-content-list footer-content-item">
                                        <div class="footer-content-title">
                                            <h3>Support & Help</h3>
                                        </div>
                                        <ul class="footer-details footer-list">
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="contact-us.html">Contact Us</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            <li><a href="blogs-list-with-sidebar.html">Blogs</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-4">
                                    <div class="footer-content-list footer-content-item">
                                        <div class="footer-content-title">
                                            <h3>Quick Links</h3>
                                        </div>
                                        <ul class="footer-details footer-list">
                                            <li><a href="terms-services.html">Terms Of Services</a></li>
                                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                            <li><a href="authentication.html">Authentication</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-lower bg-off-white">
            <div class="container">
                <div class="footer-lower-grid">
                    <div class="footer-lower-item footer-lower-info">
                            <div class="footer-copyright-text">
        <p>Copyright ©2021 Design &amp; Developed By <a href="https://ardlabro.com/"
                target="_blank">ArdLabro</a></p>
    </div>
                        <div class="footer-lower-action d-flex flex-wrap align-items-baseline">
                            <ul class="footer-action-list">
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="terms-services.html">Terms Of Services</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-lower-item">
                        <ul class="footer-lower-social">
                            <li>
                                <a href="#">
                                    <i class='bx bxl-facebook-square'></i>
                                    <span class="social-tooltip">Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class='bx bxl-twitter'></i>
                                    <span class="social-tooltip">Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class='bx bxl-linkedin'></i>
                                    <span class="social-tooltip">Linkedin</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class='bx bxl-pinterest-alt'></i>
                                    <span class="social-tooltip">Pinterest</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>


    <div class="scroll-top" id="scrolltop">
        <div class="scroll-top-inner">
            <span><i class="flaticon-up-arrow"></i></span>
        </div>
    </div>


    <div class="sidebar-modal-wrapper">
        <div class="sidebar-modal">
            <div class="sidebar-modal-inner">
                <div class="sidebar-modal-header">
                    <div class="sidebar-modal-logo">
                        <img src="assets/images/logo.png" alt="logo">
                    </div>
                    <div class="sidebar-modal-close">
                        <i class="flaticon-cross-sign"></i>
                    </div>
                </div>
                <div class="sidebar-modal-body">
                    <div class="sidebar-modal-para">
                        <p>Cysec is a consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                    </div>
                    <div class="sidebar-modal-content-item">
                        <h4>Contact Us:</h4>
                        <div class="contact-grid-para"><i class="flaticon-network"></i>Level 2, 11 York St, Sydney 2000,
                            Australia</div>
                        <div class="contact-grid-para">
                            <i class="flaticon-phone-call"></i>
                            <p>
                                <a href="tel:0061-665-66785">+61 665 66785</a><br>
                                <a href="tel:0061-567-8907">+61 567 8907</a>
                            </p>
                        </div>
                        <div class="contact-grid-para">
                            <i class="flaticon-email"></i>
                            <p>
                                <a
                                    href=" https://templates.ardlabro.com/cdn-cgi/l/email-protection#7c15121a134e4c4e4c3c1f050f191f521f1311"><span
                                        class="__cf_email__"
                                        data-cfemail="1e777078712c2e2c2e5e7d676d7b7d307d7173">[email&#160;protected]</span></a><br>
                                <a
                                    href=" https://templates.ardlabro.com/cdn-cgi/l/email-protection#6a191f1a1a05181e2a0913190f0944090507"><span
                                        class="__cf_email__"
                                        data-cfemail="e0939590908f9294a08399938583ce838f8d">[email&#160;protected]</span></a>
                            </p>
                        </div>
                    </div>
                    <div class="sidebar-modal-content-item">
                        <div class="sidebar-modal-share">
                            <p>Follow:</p>
                            <ul class="social-list">
                                <li><a href="#"><i class="bx bxl-facebook"></i></a></li>
                                <li><a href="#"><i class="bx bxl-twitter"></i></a></li>
                                <li><a href="#"><i class="bx bxl-instagram"></i></a></li>
                                <li><a href="#"><i class="bx bxl-linkedin"></i></a></li>
                                <li><a href="#"><i class="bx bxl-pinterest-alt"></i></a></li>
                                <li><a href="#"><i class="bx bxl-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>