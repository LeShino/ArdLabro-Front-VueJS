<template>
    <div>
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
                                            </a>
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
                                </a>
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
                            <a class="navbar-brand" href="index.html">
                                <img src="assets/images/logo-white-menu.png" alt="logo" class="logo">
                            </a>
                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link dropdown-toggle">Home</a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item  nav-item-1">
                                                <a href="index.html" class="nav-link">Homepage 1</a>
                                            </li>
                                            <li class="nav-item  nav-item-2">
                                                <a href="index-2.html" class="nav-link">Homepage 2</a>
                                            </li>
                                            <li class="nav-item  nav-item-3">
                                                <a href="index-3.html" class="nav-link">Homepage 3</a>
                                            </li>
                                            <li class="nav-item  nav-item-4">
                                                <a href="index-4.html" class="nav-link">Homepage 4</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link dropdown-toggle active">Pages</a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href="about-us.html" class="nav-link">About Us</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="faqs.html" class="nav-link">FAQ's</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="testimonials.html" class="nav-link">Testimonials</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link dropdown-toggle">Team</a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <a href="our-teams.html" class="nav-link">Our Teams</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="team-details.html" class="nav-link">Team Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link dropdown-toggle">Event</a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <a href="event-landing-page.html" class="nav-link">Event Landing
                                                            Page</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="all-events.html" class="nav-link">All Events</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="event-category.html" class="nav-link">Event Category</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="event-details.html" class="nav-link">Event Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link dropdown-toggle">Company</a>
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
                                                <a href="#" class="nav-link dropdown-toggle">Shop</a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <a href="shops-grid.html" class="nav-link">Shops Grid</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="shops-list.html" class="nav-link">Shops List</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="shop-details.html" class="nav-link">Shop Details</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="cart.html" class="nav-link">Cart</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="checkout.html" class="nav-link">Checkout</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="my-account.html" class="nav-link">My Account</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="my-orders.html" class="nav-link">My Orders</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="my-addresses.html" class="nav-link">My Addresses</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link dropdown-toggle active">Account</a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <a href="authentication.html"
                                                            class="nav-link active">Authentication</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="forget-password.html" class="nav-link">Forget Password</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link dropdown-toggle">Others</a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <a href="pricing.html" class="nav-link">Pricing</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="terms-services.html" class="nav-link">Terms Of Services</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="privacy-policy.html" class="nav-link">Privacy Policy</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="coming-soon.html" class="nav-link">Coming Soon</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="search-page.html" class="nav-link">Search Page</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="404.html" class="nav-link">404 Error Page</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link dropdown-toggle">Services</a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href="services.html" class="nav-link">Services</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="service-details.html" class="nav-link">Service Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link dropdown-toggle">Blog</a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href="blogs-grid-without-sidebar.html" class="nav-link">Blogs Grid </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="blogs-3.html" class="nav-link">Blogs Grid 2 </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="blogs-list-with-sidebar.html" class="nav-link">Blogs List </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="blog-details.html" class="nav-link">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="contact-us.html" class="nav-link">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="navbar-option">
                                <div
                                    class="navbar-option-item navbar-option-language navbar-option-language-flat dropdown language-option">
                                    <button class="dropdown-toggle" type="button" id="language3" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="flaticon-worldwide"></i>
                                        <span class="lang-name"></span>
                                    </button>
                                    <div class="dropdown-menu language-dropdown-menu" aria-labelledby="language3">
                                        <a class="dropdown-item" href="#">
                                            <img src="assets/images/uk-flat.png" alt="flag">
                                            English
                                        </a>
                                        <a class="dropdown-item" href="#">
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
                                        </a>
                                    </div>
                                </div>
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
                                    <a href="authentication.html"><i class="flaticon-user"></i></a>
                                </div>
                                <div class="navbar-option-item navbar-option-cart">
                                    <a href="cart.html"><i class="flaticon-shopping-bag"></i>
                                        <span class="option-badge option-badge-danger">2</span>
                                    </a>
                                </div>
                                <div class="navbar-option-item navbar-option-sidebar">
                                    <span><i class="flaticon-menu"></i></span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>


        <header class="header-page-bg overlay-shape">

            <div class="header-bottom-shape"></div>
            <div class="container">
                <div class="header-page-content">
                    <small class="line-shape-bg color-white">AdrLabro</small>
                    <h1 class="color-white">Authentication</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Authentication</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </header>


        <section class="authentication-section p-tb-100">
            <div class="container">
                <div class="authentication-box">
                    <div class="authentication-grid">
                        <div class="authentication-item">
                            <h2 class="authentication-title">ArdLabro</h2>
                            <div class="authentication-user-body">
                                <div class="authentication-tab">
                                    <div class="authentication-tab-item authentication-tab-active"
                                        data-authentcation-tab="1">
                                        <i class="flaticon-enter"></i>
                                        Login
                                    </div>
                                    <div class="authentication-tab-item" data-authentcation-tab="2">
                                        <i class="flaticon-verify"></i>
                                        Register
                                    </div>
                                </div>
                                <div class="authentication-tab-details">
                                    <div class="authentication-tab-details-item authentication-tab-details-active"
                                        data-authentcation-details="1">
                                        <div class="authentication-form">
                                            <form>
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                                        <div class="form-group custom-form-group mb-20">
                                                            <div class="input-group">
                                                                <label for="name">User Name*</label>
                                                                <input type="text" name="name" id="name"
                                                                    class="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                                        <div class="form-group custom-form-group mb-20">
                                                            <div class="input-group">
                                                                <label for="password">Password*</label>
                                                                <input type="password" name="password" id="password"
                                                                    required class="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                                        <button class="btn full-width mb-20">Login</button>
                                                    </div>
                                                </div>
                                                <div class="authentication-account-access">
                                                    <div class="authentication-account-access-item">
                                                        <div class="input-checkbox">
                                                            <input type="checkbox" id="check1">
                                                            <label for="check1">Remember Me!</label>
                                                        </div>
                                                    </div>
                                                    <div class="authentication-account-access-item">
                                                        <div class="authentication-link">
                                                            <a href="forget-password.html">Forget password?</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="authentication-social-access">
                                            <div class="authentication-social-item social-btn social-btn-fb">
                                                <a href="#" class="btn btn-pill default-box-shadow">Facebook</a>
                                            </div>
                                            <div class="authentication-social-item social-btn social-btn-tw">
                                                <a href="#" class="btn btn-pill default-box-shadow">Twitter</a>
                                            </div>
                                            <div class="authentication-social-item social-btn social-btn-ld">
                                                <a href="#" class="btn btn-pill default-box-shadow">Linkedin</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="authentication-tab-details-item" data-authentcation-details="2">
                                        <div class="authentication-form">
                                            <form>
                                                <div class="row">
                                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                                        <div class="form-group custom-form-group mb-20">
                                                            <div class="input-group">
                                                                <label for="name">User Name*</label>
                                                                <input type="text" name="name" id="name"
                                                                    class="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                                        <div class="form-group custom-form-group mb-20">
                                                            <div class="input-group">
                                                                <label for="email">Email Address*</label>
                                                                <input type="text" name="email" id="email"
                                                                    class="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                                        <div class="form-group custom-form-group mb-20">
                                                            <div class="input-group">
                                                                <label for="password">Password*</label>
                                                                <input type="password" name="password" id="password"
                                                                    class="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                                        <div class="form-group custom-form-group mb-20">
                                                            <div class="input-group">
                                                                <label for="confirm_password">Confirm Password*</label>
                                                                <input type="confirm_password" name="confirm_password"
                                                                    id="confirm_password" class="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                                        <button class="btn full-width mb-20">Register</button>
                                                    </div>
                                                </div>
                                                <div class="authentication-account-access">
                                                    <div class="authentication-account-access-item">
                                                        <div class="input-checkbox mb-10">
                                                            <input type="checkbox" id="check3">
                                                            <label for="check3">I agree to the <a
                                                                    href="privacy-policy-2.html">Privacy Policy</a></label>
                                                        </div>
                                                        <div class="input-checkbox">
                                                            <input type="checkbox" id="check2">
                                                            <label for="check2">I agree to the <a
                                                                    href="terms-conditions.html">Terms &
                                                                    Conditions</a></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="authentication-social-access">
                                            <div class="authentication-social-item social-btn social-btn-fb">
                                                <a href="#" class="btn btn-pill">Facebook</a>
                                            </div>
                                            <div class="authentication-social-item social-btn social-btn-tw">
                                                <a href="#" class="btn btn-pill">Twitter</a>
                                            </div>
                                            <div class="authentication-social-item social-btn social-btn-ld">
                                                <a href="#" class="btn btn-pill">Linkedin</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="authentication-item">
                            <div class="authentication-image desk-pad-left-30">
                                <img src="assets/images/authentication.png" alt="authentication">
                            </div>
                        </div>
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
                                    <a href="#"><span>[email&#160;protected]</span></a><br>
                                    <a href="#"><span>[email&#160;protected]</span></a>
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