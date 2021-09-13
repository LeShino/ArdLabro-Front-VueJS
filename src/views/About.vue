<template>
  <div class="about">
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


    <header class="header-page-bg overlay-shape extra-bottom-space-lg">

        <div class="header-bottom-shape"></div>
        <div class="container">
            <div class="header-page-content">
                <small class="line-shape-bg color-white">ArdLabro</small>
                <h1 class="color-white">About Us</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
            </div>
        </div>
    </header>


    <section class="company-info-section section-minus-margin-lg">
        <div class="container">
            <div class="company-info-box border-bottom">
                <div class="company-info-data pt-100 pb-70 bg-white position-relative">
                    <div class="row align-items-center">
                        <div class="col-sm-12 col-lg-4 pb-30">
                            <div class="info-item-image text-center">
                                <img src="assets/images/info-item-img.png" alt="info">
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-8">
                            <div class="counter-item-content">
                                <div class="counter-content-list">
                                    <div class="counter-content-thumb">
                                        <i class="flaticon-secure"></i>
                                    </div>
                                    <div class="counter-content-text">
                                        <h3 class="color-main"><span class="counter">2,700</span> <sup>+</sup></h3>
                                        <p>Cybersecurity Projects</p>
                                    </div>
                                </div>
                                <div class="counter-content-list">
                                    <div class="counter-content-thumb">
                                        <i class="flaticon-customer"></i>
                                    </div>
                                    <div class="counter-content-text">
                                        <h3 class="color-main"><span class="counter">1,350</span> <sup>+</sup></h3>
                                        <p>Customers Served Globally</p>
                                    </div>
                                </div>
                                <div class="counter-content-list">
                                    <div class="counter-content-thumb">
                                        <i class="flaticon-read"></i>
                                    </div>
                                    <div class="counter-content-text">
                                        <h3 class="color-main"><span class="counter">350</span> <sup>+</sup></h3>
                                        <p>Cybersecurity Experts</p>
                                    </div>
                                </div>
                                <div class="counter-content-list">
                                    <div class="counter-content-thumb">
                                        <i class="flaticon-star"></i>
                                    </div>
                                    <div class="counter-content-text">
                                        <h3 class="color-main"><span class="counter">250</span> <sup>%</sup></h3>
                                        <p>Customer Retention Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="partner-section pt-100">
        <div class="container section-border-bottom pb-100">
            <div class="section-title">
                <small>Partners</small>
                <h2>We're Working With</h2>
            </div>
            <div class="partner-carousel default-carousel owl-carousel owl-theme">
                <div class="item">
                    <div class="partner-thumb">
                        <a href="#">
                            <img src="assets/images/partner-1.png" alt="partner">
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="partner-thumb">
                        <a href="#">
                            <img src="assets/images/partner-2.png" alt="partner">
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="partner-thumb">
                        <a href="#">
                            <img src="assets/images/partner-3.png" alt="partner">
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="partner-thumb">
                        <a href="#">
                            <img src="assets/images/partner-4.png" alt="partner">
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="partner-thumb">
                        <a href="#">
                            <img src="assets/images/partner-2.png" alt="partner">
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="partner-thumb">
                        <a href="#">
                            <img src="assets/images/partner-3.png" alt="partner">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="about-section pt-100 pb-70">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-sm-12 col-lg-6">
                    <div class="max-585 mx-auto ms-lg-auto me-lg-0">
                        <div class="about-item-text">
                            <div class="section-title section-title-left text-start">
                                <small>About Cysec</small>
                                <h2>Our Approach Is Simple But Not <span>Time-Wasting</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamamet,
                                    consectetur adipisi</p>
                            </div>
                            <div class="counter-item-content about-section-counter">
                                <div class="counter-content-list">
                                    <div class="counter-content-thumb">
                                        <i class="flaticon-secure"></i>
                                    </div>
                                    <div class="counter-content-text">
                                        <h3 class="color-main"><span class="counter">2,700</span> <sup>+</sup></h3>
                                        <p>Cybersecurity Projects</p>
                                    </div>
                                </div>
                                <div class="counter-content-list">
                                    <div class="counter-content-thumb">
                                        <i class="flaticon-customer"></i>
                                    </div>
                                    <div class="counter-content-text">
                                        <h3 class="color-main"><span class="counter">1,350</span> <sup>+</sup></h3>
                                        <p>Customers Served Globally</p>
                                    </div>
                                </div>
                                <div class="counter-content-list">
                                    <div class="counter-content-thumb">
                                        <i class="flaticon-read"></i>
                                    </div>
                                    <div class="counter-content-text">
                                        <h3 class="color-main"><span class="counter">350</span> <sup>+</sup></h3>
                                        <p>Cybersecurity Experts</p>
                                    </div>
                                </div>
                                <div class="counter-content-list">
                                    <div class="counter-content-thumb">
                                        <i class="flaticon-star"></i>
                                    </div>
                                    <div class="counter-content-text">
                                        <h3 class="color-main"><span class="counter">250</span> <sup>%</sup></h3>
                                        <p>Customer Retention Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6 pb-30">
                    <div class="about-item-image about-image-width about-image-frame text-center">
                        <img src="assets/images/about-image-six.jpg" alt="about">
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div class="quality-section quality-sec-bg overlay-shape pt-200 pb-170">

        <div class="section-tb-shape"></div>
        <div class="container position-relative">
            <div class="section-title">
                <small>Why Choose Us?</small>
                <h2 class="color-white">3 Benefits Of Cysec Security</h2>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 pb-30">
                    <div class="quality-card quality-card-red quality-bg-white">
                        <div class="quality-card-icon">
                            <i class="flaticon-check-box"></i>
                        </div>
                        <div class="quality-card-content">
                            <h4>01</h4>
                            <h3>Product Consultation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur sequi nesciunt. Neque porro quisquam estet dolore
                                magnam aliquauptatem.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-30">
                    <div class="quality-card quality-card-blue">
                        <div class="quality-card-icon">
                            <i class="flaticon-check-box"></i>
                        </div>
                        <div class="quality-card-content">
                            <h4>02</h4>
                            <h3>Security Consultation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur sequi nesciunt. Neque porro quisquam estet dolore
                                magnam aliquauptatem.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0 pb-30">
                    <div class="quality-card quality-card-green">
                        <div class="quality-card-icon">
                            <i class="flaticon-check-box"></i>
                        </div>
                        <div class="quality-card-content">
                            <h4>03</h4>
                            <h3>24/7 Technical Support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur sequi nesciunt. Neque porro quisquam estet dolore
                                magnam aliquauptatem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section class="history-section p-tb-100 position-relative">
        <div class="container">
            <div class="section-title section-title-lg">
                <small>Company History</small>
                <h2>Cyber Security History</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniamamet, consectetur adipisi</p>
            </div>
            <div class="service-tab-area">
                <div class="service-grid-carousel service-grid-carousel-two">
                    <div class="service-tab-list item service-tab-active" data-service-tab-item="1">
                        <div class="service-tab-list-inner">
                            <h4>2000</h4>
                        </div>
                    </div>
                    <div class="service-tab-list item" data-service-tab-item="2">
                        <div class="service-tab-list-inner">
                            <h4>2004</h4>
                        </div>
                    </div>
                    <div class="service-tab-list item" data-service-tab-item="3">
                        <div class="service-tab-list-inner">
                            <h4>2008</h4>
                        </div>
                    </div>
                    <div class="service-tab-list item" data-service-tab-item="4">
                        <div class="service-tab-list-inner">
                            <h4>2012</h4>
                        </div>
                    </div>
                    <div class="service-tab-list item" data-service-tab-item="5">
                        <div class="service-tab-list-inner">
                            <h4>2016</h4>
                        </div>
                    </div>
                    <div class="service-tab-list item" data-service-tab-item="6">
                        <div class="service-tab-list-inner">
                            <h4>2020</h4>
                        </div>
                    </div>
                </div>
                <div class="service-details-carousel service-details-carousel-two">
                    <div class="service-details-carousel-item" data-service-tab-details="1">
                        <div class="service-tab-details row align-items-center">
                            <div class="col-12 col-lg-6 service-tab-details-item">
                                <div class="service-details-text">
                                    <h3>Website Protection</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
                                    <a href="service-details.html" class="btn">Discover More <i
                                            class="flaticon-right-arrow-2"></i></a>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 service-tab-details-item">
                                <div class="service-details-image service-details-frame-2">
                                    <img src="assets/images/service-tab-1.jpg" alt="service">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service-details-carousel-item" data-service-tab-details="2">
                        <div class="service-tab-details row align-items-center">
                            <div class="col-12 col-lg-6 service-tab-details-item">
                                <div class="service-details-image service-details-frame-2">
                                    <img src="assets/images/service-tab-3.jpg" alt="service">
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 service-tab-details-item">
                                <div class="service-details-text">
                                    <h3>Hacking Protection</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
                                    <a href="service-details.html" class="btn">Discover More <i
                                            class="flaticon-right-arrow-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service-details-carousel-item" data-service-tab-details="3">
                        <div class="service-tab-details row align-items-center">
                            <div class="col-12 col-lg-6 service-tab-details-item">
                                <div class="service-details-text">
                                    <h3>Confidential Information</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
                                    <a href="service-details.html" class="btn">Discover More <i
                                            class="flaticon-right-arrow-2"></i></a>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 service-tab-details-item">
                                <div class="service-details-image service-details-frame-2">
                                    <img src="assets/images/service-tab-2.jpg" alt="service">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service-details-carousel-item" data-service-tab-details="4">
                        <div class="service-tab-details row align-items-center">
                            <div class="col-12 col-lg-6 service-tab-details-item">
                                <div class="service-details-image service-details-frame-2">
                                    <img src="assets/images/service-tab-4.jpg" alt="service">
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 service-tab-details-item">
                                <div class="service-details-text">
                                    <h3>Mobile Security</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
                                    <a href="service-details.html" class="btn">Discover More <i
                                            class="flaticon-right-arrow-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service-details-carousel-item" data-service-tab-details="5">
                        <div class="service-tab-details row align-items-center">
                            <div class="col-12 col-lg-6 service-tab-details-item">
                                <div class="service-details-text">
                                    <h3>Security Advisory</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
                                    <a href="service-details.html" class="btn">Discover More <i
                                            class="flaticon-right-arrow-2"></i></a>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 service-tab-details-item">
                                <div class="service-details-image service-details-frame-2">
                                    <img src="assets/images/service-tab-6.jpg" alt="service">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service-details-carousel-item" data-service-tab-details="6">
                        <div class="service-tab-details row align-items-center">
                            <div class="col-12 col-lg-6 service-tab-details-item">
                                <div class="service-details-image service-details-frame-2">
                                    <img src="assets/images/service-tab-5.jpg" alt="service">
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 service-tab-details-item">
                                <div class="service-details-text">
                                    <h3>Technical Assurance</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
                                    <a href="service-details.html" class="btn">Discover More <i
                                            class="flaticon-right-arrow-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div class="service-section pb-70">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3 pb-30">
                    <div class="service-box">
                        <div class="service-box-inner">
                            <div class="service-box-icon">
                                <i class="flaticon-design"></i>
                            </div>
                            <div class="service-box-text">
                                <h3>Software Upgration</h3>
                                <p>Tur adipisicing elit sed deimod magna aliqua Ut enim urdisiing elit sedo eiusmoad</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 pb-30">
                    <div class="service-box">
                        <div class="service-box-inner">
                            <div class="service-box-icon">
                                <i class="flaticon-antivirus"></i>
                            </div>
                            <div class="service-box-text">
                                <h3>Use Antivirus Software</h3>
                                <p>Tur adipisicing elit sed deimod magna aliqua Ut enim urdisiing elit sedo eiusmoad</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 pb-30">
                    <div class="service-box">
                        <div class="service-box-inner">
                            <div class="service-box-icon">
                                <i class="flaticon-virus-warning"></i>
                            </div>
                            <div class="service-box-text">
                                <h3>Identifying Threats</h3>
                                <p>Tur adipisicing elit sed deimod magna aliqua Ut enim urdisiing elit sedo eiusmoad</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 pb-30">
                    <div class="service-box">
                        <div class="service-box-inner">
                            <div class="service-box-icon">
                                <i class="flaticon-website"></i>
                            </div>
                            <div class="service-box-text">
                                <h3>Check Website Url</h3>
                                <p>Tur adipisicing elit sed deimod magna aliqua Ut enim urdisiing elit sedo eiusmoad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section class="testimonial-section testimonial-bg pt-200 pb-200">

        <div class="section-tb-shape"></div>
        <div class="container">
            <div class="border-bottom">
                <div class="testimonial-full-area-inner p-tb-100">
                    <div class="section-title">
                        <h2>In Client’s Words</h2>
                    </div>
                    <div class="testimonial-carousel testimonial-carousel-two owl-carousel owl-theme">
                        <div class="item">
                            <div class="testimonial-carousel-content">
                                <p class="testimonial-paragraph">“Transparency is an overall net win consectetur
                                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quiqa Ut e nostrud exercitation ullaco laboris nisi ut
                                    aliquip”</p>
                                <div class="testimonial-client-info">
                                    <div class="testimonial-client-thumb">
                                        <img src="assets/images/client-1.jpg" alt="client">
                                    </div>
                                    <div class="testimonial-client-data">
                                        <h3 class="testimonial-name">Peter Yaworski</h3>
                                        <h4 class="testimonial-designation"><span>Security Engineer,</span>Aila</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimonial-carousel-content">
                                <p class="testimonial-paragraph">Security is a good net win consectetur adipisicing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quiqa Ut e nostrud exercitation ullaco laboris nisi ut aliquip”</p>
                                <div class="testimonial-client-info">
                                    <div class="testimonial-client-thumb">
                                        <img src="assets/images/client-2.jpg" alt="client">
                                    </div>
                                    <div class="testimonial-client-data">
                                        <h3 class="testimonial-name">Devit Clark</h3>
                                        <h4 class="testimonial-designation"><span>Management Engineer,</span>Blim</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimonial-carousel-content">
                                <p class="testimonial-paragraph">“Transparency is an overall net win consectetur
                                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quiqa Ut e nostrud exercitation ullaco laboris nisi ut
                                    aliquip”</p>
                                <div class="testimonial-client-info">
                                    <div class="testimonial-client-thumb">
                                        <img src="assets/images/client-3.jpg" alt="client">
                                    </div>
                                    <div class="testimonial-client-data">
                                        <h3 class="testimonial-name">John Yaworski</h3>
                                        <h4 class="testimonial-designation"><span>Security Engineer,</span>Rink</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="team-section p-tb-100 overflow-hidden position-relative">
        <div class="container">
            <div class="section-title section-title-lg">
                <small>Team Members</small>
                <h2>Our Professional Team <span>Members Will Help You</span></h2>
            </div>
            <div class="team-carousel-two owl-carousel owl-theme">
                <div class="item">
                    <div class="team-card">
                        <div class="team-card-image">
                            <img src="assets/images/team-member-1.jpg" alt="member">
                        </div>
                        <div class="team-card-content">
                            <h3><a href="team-details.html">Kolin C. Ward</a></h3>
                            <h4>Performance Advisor</h4>
                            <ul class="social-list">
                                <li class="facebook-bg"><a href="#"><i class="flaticon-facebook-1"></i></a></li>
                                <li class="twitter-bg"><a href="#"><i class="flaticon-twitter"></i></a></li>
                                <li class="linkedin-bg"><a href="#"><i class="flaticon-linkedin"></i></a></li>
                                <li class="instagram-bg"><a href="#"><i class="flaticon-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="team-card">
                        <div class="team-card-image">
                            <img src="assets/images/team-member-2.jpg" alt="member">
                        </div>
                        <div class="team-card-content">
                            <h3><a href="team-details.html">Ciaran H. Jet</a></h3>
                            <h4>Head Of Consulting</h4>
                            <ul class="social-list">
                                <li class="facebook-bg"><a href="#"><i class="flaticon-facebook-1"></i></a></li>
                                <li class="twitter-bg"><a href="#"><i class="flaticon-twitter"></i></a></li>
                                <li class="linkedin-bg"><a href="#"><i class="flaticon-linkedin"></i></a></li>
                                <li class="instagram-bg"><a href="#"><i class="flaticon-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="team-card">
                        <div class="team-card-image">
                            <img src="assets/images/team-member-3.jpg" alt="member">
                        </div>
                        <div class="team-card-content">
                            <h3><a href="team-details.html">Jecton N. Gill</a></h3>
                            <h4>Commercial Director</h4>
                            <ul class="social-list">
                                <li class="facebook-bg"><a href="#"><i class="flaticon-facebook-1"></i></a></li>
                                <li class="twitter-bg"><a href="#"><i class="flaticon-twitter"></i></a></li>
                                <li class="linkedin-bg"><a href="#"><i class="flaticon-linkedin"></i></a></li>
                                <li class="instagram-bg"><a href="#"><i class="flaticon-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="team-card">
                        <div class="team-card-image">
                            <img src="assets/images/team-member-4.jpg" alt="member">
                        </div>
                        <div class="team-card-content">
                            <h3><a href="team-details.html">John Richard</a></h3>
                            <h4>Performance Advisor</h4>
                            <ul class="social-list">
                                <li class="facebook-bg"><a href="#"><i class="flaticon-facebook-1"></i></a></li>
                                <li class="twitter-bg"><a href="#"><i class="flaticon-twitter"></i></a></li>
                                <li class="linkedin-bg"><a href="#"><i class="flaticon-linkedin"></i></a></li>
                                <li class="instagram-bg"><a href="#"><i class="flaticon-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="team-card">
                        <div class="team-card-image">
                            <img src="assets/images/team-member-5.jpg" alt="member">
                        </div>
                        <div class="team-card-content">
                            <h3><a href="team-details.html">Devid Peterson</a></h3>
                            <h4>Sales Manager</h4>
                            <ul class="social-list">
                                <li class="facebook-bg"><a href="#"><i class="flaticon-facebook-1"></i></a></li>
                                <li class="twitter-bg"><a href="#"><i class="flaticon-twitter"></i></a></li>
                                <li class="linkedin-bg"><a href="#"><i class="flaticon-linkedin"></i></a></li>
                                <li class="instagram-bg"><a href="#"><i class="flaticon-instagram"></i></a></li>
                            </ul>
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
                                            <li><a href="/authentification">Authentication</a></li>
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
        <!-- Debut footer bar 2 -->
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
                                    <i class='bx bxl-discord'></i>
                                    <span class="social-tooltip">Discord</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class='bx bxl-telegram' ></i>
                                    <span class="social-tooltip">Telegram</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fin footer bar 2 -->
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
                                <a><span>[email&#160;protected]</span></a><br>
                                <a><span>[email&#160;protected]</span></a>
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
