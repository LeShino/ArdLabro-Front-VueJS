<template>
    <div>
          <div class="home">
    <div class="topbar">
        <div class="topbar-inner">
            <div class="container-fluid">
                <div class="topbar-grid">
                    <div class="topbar-item">
                        <ul class="social-list">
                            <li class="linkedin-bg"><a href="#"><i class="flaticon-linkedin"></i></a></li>
                            <li class="twitter-bg"><a href="#"><i class="flaticon-twitter"></i></a></li>
                            <li class="telegram-bg"><a href="#"><img src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiBmaWxsPSIjMDM5YmU1IiByPSIxMiIvPjxwYXRoIGQ9Im01LjQ5MSAxMS43NCAxMS41Ny00LjQ2MWMuNTM3LS4xOTQgMS4wMDYuMTMxLjgzMi45NDNsLjAwMS0uMDAxLTEuOTcgOS4yODFjLS4xNDYuNjU4LS41MzcuODE4LTEuMDg0LjUwOGwtMy0yLjIxMS0xLjQ0NyAxLjM5NGMtLjE2LjE2LS4yOTUuMjk1LS42MDUuMjk1bC4yMTMtMy4wNTMgNS41Ni01LjAyM2MuMjQyLS4yMTMtLjA1NC0uMzMzLS4zNzMtLjEyMWwtNi44NzEgNC4zMjYtMi45NjItLjkyNGMtLjY0My0uMjA0LS42NTctLjY0My4xMzYtLjk1M3oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" /></a></li>
                            <li class="discord-bg"><a href="#"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwNyA1MTIuMDA3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDA3IDUxMi4wMDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzgyN0REQzsiIGN4PSIyNTYuMDAzIiBjeT0iMjU2LjAwMyIgcj0iMjU2LjAwMyIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzZFNjRDMzsiIGQ9Ik0zODAuMTE3LDExMy41NjdjLTUuNjI4LTUuNjI5LTEzLjQwNC05LjExMi0yMS45OTQtOS4xMTJIMTUzLjg3N2MtMTcuMTc2LDAtMzEuMSwxMy45MjQtMzEuMSwzMS4xDQoJVjMzOS44YzAsOC41ODYsMy40NzksMTYuMzYsOS4xMDYsMjEuOTg3bDAsMGwxNDkuMDA2LDE0OS4wMDZDNDEwLjU5Miw0OTguMjc4LDUxMiwzODguOTg3LDUxMiwyNTYuMDAxDQoJYzAtMy42MTYtMC4wOTQtNy4yMTEtMC4yNDItMTAuNzkxTDM4MC4xMTcsMTEzLjU2N3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM1MDQ2QUY7IiBkPSJNMzU4LjEyMywxMDQuNDU2SDE1My44NzdjLTE3LjE3NiwwLTMxLjEsMTMuOTI0LTMxLjEsMzEuMXYyMDQuMjQ2YzAsMTcuMTc2LDEzLjkyNCwzMS4xLDMxLjEsMzEuMQ0KCWgxNzIuNjA3bC03LjAwNi0yOC4wMjNsNjkuNzQzLDY0LjY2OWMwLTcuNTU4LDAtMjY0LjYyLDAtMjcxLjk5QzM4OS4yMjIsMTE4LjM4LDM3NS4yOTgsMTA0LjQ1NiwzNTguMTIzLDEwNC40NTZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTMyMy40NiwxOTAuMzY3YzAsMC0xMi44OTYtMTMuNjUzLTQyLjE3Ny0xNS42Mjl2NC4zMTFjMCwwLDE2LjA2LTAuOTMzLDM1Ljk0LDE4LjYzNg0KCWMtMTUuMDA2LTEwLjc5Ni0zNi40MTMtMTcuNTU5LTYwLjE5MS0xNy41NTlzLTQ1LjE4NSw2Ljc2Mi02MC4xOTEsMTcuNTU5YzE5Ljg4LTE5LjU2OSwzNS45NC0xOC42MzYsMzUuOTQtMTguNjM2di00LjMxMQ0KCWMtMjkuMjgxLDEuOTc2LTQyLjE3NywxNS42MjktNDIuMTc3LDE1LjYyOWMtMjIuMzEyLDI4Ljc0LTIzLjU2OSw5MS42MTMtMjMuNTY5LDkxLjYxM2MyMS4wMTcsMjUuMzI4LDQ3LjQyNCwyMi4wOTYsNDcuNDI0LDIyLjA5Ng0KCWw5LjctMTQuMDExYy0xMi41MDktMy4zODQtMjEuNDQyLTExLjE1My0yNi44MTEtMTcuMjAzYzE0Ljk3OSwxMC41ODcsMzYuMTcxLDE3LjIwMyw1OS42ODQsMTcuMjAzczQ0LjcwNS02LjYxNSw1OS42ODQtMTcuMjAzDQoJYy01LjM2OSw2LjA0OS0xNC4zMDIsMTMuODE5LTI2LjgxMSwxNy4yMDNsOS43LDE0LjAxMWMwLDAsMjYuNDA3LDMuMjM0LDQ3LjQyNC0yMi4wOTYNCglDMzQ3LjAzMSwyODEuOTc5LDM0NS43NzMsMjE5LjEwNywzMjMuNDYsMTkwLjM2N3ogTTIyOS4wMSwyNjQuMTk2Yy04LjQzMywwLTE1LjI2OS03LjI2My0xNS4yNjktMTYuMjI0DQoJYzAtOC45Niw2LjgzNi0xNi4yMjQsMTUuMjY5LTE2LjIyNGM4LjQzMywwLDE1LjI2OSw3LjI2NCwxNS4yNjksMTYuMjI0UzIzNy40NDMsMjY0LjE5NiwyMjkuMDEsMjY0LjE5NnogTTI4NS4wNTYsMjY0LjE5Ng0KCWMtOC40MzMsMC0xNS4yNjktNy4yNjMtMTUuMjY5LTE2LjIyNGMwLTguOTYsNi44MzYtMTYuMjI0LDE1LjI2OS0xNi4yMjRjOC40MzMsMCwxNS4yNjksNy4yNjQsMTUuMjY5LDE2LjIyNA0KCVMyOTMuNDksMjY0LjE5NiwyODUuMDU2LDI2NC4xOTZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" /></a></li>
                         </ul>
                    </div>
                    <div class="topbar-item topbar-right">
                        <div class="topbar-right-grid">
                            <div class="topbar-right-item">
                                <div class="topbar-info">
                                    <div class="topbar-info-list">
                                        <img src="assets/images/chat-icon.png" alt="icon">
                                        <div class="topbar-info-text">
                                            <h3><a href="tel:">+225 2122232425</a></h3>
                                            <p>Infoline </p>
                                        </div>
                                    </div>
                                    <div class="topbar-info-list">
                                        <img src="assets/images/clock-icon.png" alt="icon">
                                        <div class="topbar-info-text">
                                            <h3>8:30 - 16:00 </h3>
                                            <p>Lun - Ven</p>
                                        </div>  
                                    </div>
                                    <div class="topbar-info-list">
                                        <img src="assets/images/email-icon.png" alt="icon">
                                        <div class="topbar-info-text">
                                            <h3>
                                                <a> <span> [email&#160;protected]</span></a>
                                            </h3>
                                            <p>E-mail</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="topbar-language dropdown language-option">
                                    <button class="dropdown-toggle" type="button" id="language2"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="flaticon-worldwide"></i>
                                        <span class="lang-name"></span>
                                    </button>
                                    <div class="dropdown-menu language-dropdown-menu" aria-labelledby="language2">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="navbar-area navbar-area-two">

        <div class="mobile-nav">
            <a href="/" class="mobile-brand">
                <img src="assets/images/logo.png" alt="logo" class="logo">
            </a>
            <div class="navbar-option">
                <div class="navbar-option-item navbar-option-dots dropdown">
                    <button type="button" id="dot" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="flaticon-menu-1"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item">
                            <div class="navbar-option-item navbar-option-account">
                                <a href="/authentification"><i class="flaticon-user"></i></a>
                            </div>
                        </li>
                        <li class="dropdown-item">
                            <div class="navbar-option-item navbar-option-sidebar">
                                <span><i class="flaticon-menu"></i></span>
                            </div>
                        </li>
                    </ul>
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
                <div class="navbar-option-item navbar-option-account">
                    <a href="/authentication"><i class="flaticon-user mobile-hide"></i></a>
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
                        <img src="assets/images/logo.png" alt="logo" class="logo">
                    </a>
                    <!-- Debut menu principale -->
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
                                        <a href="#" class="nav-link">Services</a>
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
                    <!-- Fin menu princiale -->

                    <!-- Debut menu nav bar lang-auth -->
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


    <header class="header-banner-two header-two">
        <div class="header-shape">
            <div class="header-shape-item">
                <img src="assets/images/circle-1.png" alt="shape">
            </div>
            <div class="header-shape-item">
                <img src="assets/images/header-square-shape.png" alt="shape">
            </div>
        </div>
        <div class="container-fluid">
            <div id="rev_slider_wrapper" class="rev_slider_wrapper fullwidthbanner-container">

                <div id="rev_slider" class="rev_slider fullwidthabanner" style="display:none;" data-version="5.4.1">
                    <ul>

                        <li data-index="rs-1" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
                            data-hideslideonmobile="off" data-easein="default" data-easeout="default"
                            data-masterspeed="1500" data-rotate="0" data-saveperformance="off" data-title="Intro">


                            <div class="tp-caption tp-resizeme rs-parallaxlevel-1" id="slide-1-layer-1"
                                data-x="['right','center','center','center']" data-hoffset="['-10','0','0','0']"
                                data-y="['middle','middle','middle','bottom']" data-voffset="['0','230','200','20']"
                                data-width="none" data-height="none" data-whitespace="nowrap" data-type="image"
                                data-responsive_offset="on"
                                data-frames='[{"from":"x:right;","speed":1500,"to":"o:1;","delay":2500,"ease":"Power3.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                                data-textAlign="['left','left','left','left']" style="z-index: 5;border-width:0px;"><img
                                    src="assets/images/header-shape-image-3.png" alt=""
                                    data-ww="['868px','868px','726px','345px']"
                                    data-hh="['810px','810px','677px','322px']" width="1000" height="600"
                                    data-no-retina></div>

                            <div class="tp-caption WebProduct-SubTitle tp-resizeme line-shape-bg revolution-header-subtitle"
                                id="slide-1-layer-2" data-x="['left','center','center','center']"
                                data-hoffset="['15','0','0','0']" data-y="['middle','top','top','top']"
                                data-voffset="['-240','50','50','50']" data-fontsize="['20','20','18','18']"
                                data-width="none" data-height="none" data-whitespace="nowrap" data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1250,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                                data-textAlign="['left','center','center','center']"
                                style="z-index: 12; white-space: nowrap;letter-spacing:2px;font-weight:500;">Cyber
                                Solution</div>

                            <div class="tp-caption WebProduct-Title tp-resizeme revolution-header-title"
                                id="slide-1-layer-3" data-x="['left','center','center','center']"
                                data-hoffset="['15','0','0','0']" data-y="['middle','top','top','top']"
                                data-voffset="['-110','100','100','120']" data-fontsize="['80','60','50','40']"
                                data-lineheight="['90','75','60','50']" data-width="none" data-height="none"
                                data-whitespace="nowrap" data-textAlign="['left','center','center','center']"
                                data-type="text" data-responsive_offset="on"
                                data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                                style="z-index: 11; white-space: nowrap;">
                                <span>Cyber Security</span> Can <br> Assist Your Site
                            </div>

                            <div class="tp-caption WebProduct-Content tp-resizeme revolution-header-para"
                                id="slide-1-layer-4" data-x="['left','center','center','center']"
                                data-hoffset="['15','0','0','0']" data-y="['middle','top','top','top']"
                                data-voffset="['40','280','230','230']" data-fontsize="['18','18','16','16']"
                                data-lineheight="['24','24','24','22']" data-width="['800','800','700','330']"
                                data-height="['none','none','none','none']" data-whitespace="normal"
                                data-textAlign="['left','center','center','center']" data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1500,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                                style="z-index: 13; min-width: 448px; max-width: 448px; white-space: normal;">Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim nmmet consectetur adiinamontetur
                                adipisicing</div>

                            <div class="tp-caption revolution-header-button" id="slide-1-layer-5"
                                data-x="['left','center','center','center']" data-hoffset="['15','0','0','0']"
                                data-y="['middle','top','top','top']" data-voffset="['150','360','300','360']"
                                data-width="none" data-height="none" data-whitespace="nowrap"
                                data-responsive_offset="on" data-responsive="off"
                                data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1750,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;"}]'
                                data-textAlign="['left','center','center','center']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="z-index: 14; white-space: nowrap;">
                                <div class="header-button">
                                    <a href="#" class="btn">Discover More <i class="flaticon-right-arrow-4"></i></a>
                                    <a href="#" class="btn btn-border">Get A Quote <i
                                            class="flaticon-right-arrow-4"></i></a>
                                </div>
                            </div>
                        </li>

                        <li data-index="rs-2" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
                            data-hideslideonmobile="off" data-easein="default" data-easeout="default"
                            data-masterspeed="1500" data-rotate="0" data-saveperformance="off" data-title="Intro">


                            <div class="tp-caption tp-resizeme rs-parallaxlevel-1" id="slide-2-layer-1"
                                data-x="['right','center','center','center']" data-hoffset="['-10','0','0','0']"
                                data-y="['middle','middle','middle','bottom']" data-voffset="['50','230','200','20']"
                                data-width="none" data-height="none" data-whitespace="nowrap" data-type="image"
                                data-responsive_offset="on"
                                data-frames='[{"from":"x:right;","speed":1500,"to":"o:1;","delay":2500,"ease":"Power3.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                                data-textAlign="['left','left','left','left']" style="z-index: 5;border-width:0px;"><img
                                    src="assets/images/header-shape-image-4.png" alt=""
                                    data-ww="['868px','868px','726px','345px']"
                                    data-hh="['810px','810px','677px','322px']" width="1000" height="600"
                                    data-no-retina></div>

                            <div class="tp-caption WebProduct-SubTitle tp-resizeme line-shape-bg revolution-header-subtitle"
                                id="slide-2-layer-2" data-x="['left','center','center','center']"
                                data-hoffset="['15','0','0','0']" data-y="['middle','top','top','top']"
                                data-voffset="['-240','50','50','50']" data-fontsize="['20','20','18','18']"
                                data-width="none" data-height="none" data-whitespace="nowrap" data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1250,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                                data-textAlign="['left','center','center','center']"
                                style="z-index: 12; white-space: nowrap;letter-spacing:2px;font-weight:500;">Cyber
                                Solution</div>

                            <div class="tp-caption WebProduct-Title tp-resizeme revolution-header-title"
                                id="slide-2-layer-3" data-x="['left','center','center','center']"
                                data-hoffset="['15','0','0','0']" data-y="['middle','top','top','top']"
                                data-voffset="['-110','100','100','120']" data-fontsize="['80','60','50','40']"
                                data-lineheight="['90','75','60','50']" data-width="none" data-height="none"
                                data-whitespace="nowrap" data-textAlign="['left','center','center','center']"
                                data-type="text" data-responsive_offset="on"
                                data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                                style="z-index: 11; white-space: nowrap;">
                                Automotive Cyber <br> Security <span>Engineers</span></div>

                            <div class="tp-caption WebProduct-Content tp-resizeme revolution-header-para"
                                id="slide-2-layer-4" data-x="['left','center','center','center']"
                                data-hoffset="['15','0','0','0']" data-y="['middle','top','top','top']"
                                data-voffset="['40','280','230','230']" data-fontsize="['18','18','16','16']"
                                data-lineheight="['24','24','24','22']" data-width="['800','800','700','330']"
                                data-height="['none','none','none','none']" data-whitespace="normal"
                                data-textAlign="['left','center','center','center']" data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1500,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                                style="z-index: 13; min-width: 448px; max-width: 448px; white-space: normal;">Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim nmmet consectetur adiinamontetur
                                adipisicing</div>

                            <div class="tp-caption revolution-header-button" id="slide-2-layer-5"
                                data-x="['left','center','center','center']" data-hoffset="['15','0','0','0']"
                                data-y="['middle','top','top','top']" data-voffset="['150','360','300','360']"
                                data-width="none" data-height="none" data-whitespace="nowrap"
                                data-responsive_offset="on" data-responsive="off"
                                data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1750,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;"}]'
                                data-textAlign="['left','center','center','center']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]" style="z-index: 14; white-space: nowrap;">
                                <div class="header-button">
                                    <a href="#" class="btn">Discover More <i class="flaticon-right-arrow-4"></i></a>
                                    <a href="#" class="btn btn-border">Get A Quote <i
                                            class="flaticon-right-arrow-4"></i></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </header>


    <div class="service-section pt-100 pb-70">
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


    <section class="about-section pb-70 about-bg-shape">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-sm-12 col-lg-6 pb-30">
                    <div class="about-item-image text-center">
                        <img src="assets/images/about-image-three.png" alt="about">
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <div class="max-585 mx-auto mx-lg-0">
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
            </div>
        </div>
    </section>


    <div class="quality-section pb-70">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 pb-30">
                    <div class="quality-card quality-card-red">
                        <div class="quality-card-icon">
                            <i class="flaticon-consultant"></i>
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
                            <i class="flaticon-shield"></i>
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
                            <i class="flaticon-customer-service"></i>
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


    <section class="partner-section p-tb-100 bg-off-white">
        <div class="container">
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
            </div>
        </div>
    </section>


    <section class="service-section p-tb-100">
        <div class="container">
            <div class="section-title section-title-lg">
                <small>Cybersecurity Services</small>
                <h2>Cyber Security Solutions & Technology Aid <span>Entire Solution</span></h2>
            </div>
            <div class="service-item-grid d-flex flex-wrap">
                <div class="service-item-list service-box-two">
                    <div class="service-box-icon">
                        <i class="flaticon-password"></i>
                    </div>
                    <div class="service-box-text">
                        <h3>Choose Strong Passwords</h3>
                        <p>Lorem ipsum dolor amet consectetur adiising eli sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliquaqem</p>
                        <p><a href="service-details.html" class="redirect-link">Learn More <i
                                    class="flaticon-right-arrow-2"></i></a></p>
                    </div>
                </div>
                <div class="service-item-list service-box-two">
                    <div class="service-box-icon">
                        <i class="flaticon-bug"></i>
                    </div>
                    <div class="service-box-text">
                        <h3>Update Your Antivirus</h3>
                        <p>Lorem ipsum dolor amet consectetur adiising eli sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliquaqem</p>
                        <p><a href="service-details.html" class="redirect-link">Learn More <i
                                    class="flaticon-right-arrow-2"></i></a></p>
                    </div>
                </div>
                <div class="service-item-list service-box-two">
                    <div class="service-box-icon">
                        <i class="flaticon-sign-out"></i>
                    </div>
                    <div class="service-box-text">
                        <h3>Remember To Log Off</h3>
                        <p>Lorem ipsum dolor amet consectetur adiising eli sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliquaqem</p>
                        <p><a href="service-details.html" class="redirect-link">Learn More <i
                                    class="flaticon-right-arrow-2"></i></a></p>
                    </div>
                </div>
                <div class="service-item-list service-box-two">
                    <div class="service-box-icon">
                        <i class="flaticon-network"></i>
                    </div>
                    <div class="service-box-text">
                        <h3>Safety In Trusted Websites</h3>
                        <p>Lorem ipsum dolor amet consectetur adiising eli sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliquaqem</p>
                        <p><a href="service-details.html" class="redirect-link">Learn More <i
                                    class="flaticon-right-arrow-2"></i></a></p>
                    </div>
                </div>
                <div class="service-item-list service-box-two">
                    <div class="service-box-icon">
                        <i class="flaticon-email-2"></i>
                    </div>
                    <div class="service-box-text">
                        <h3>Check Emails Before Opening </h3>
                        <p>Lorem ipsum dolor amet consectetur adiising eli sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliquaqem</p>
                        <p><a href="service-details.html" class="redirect-link">Learn More <i
                                    class="flaticon-right-arrow-2"></i></a></p>
                    </div>
                </div>
                <div class="service-item-list service-box-two">
                    <div class="service-box-icon">
                        <i class="flaticon-broken-link"></i>
                    </div>
                    <div class="service-box-text">
                        <h3>Check Website Url</h3>
                        <p>Lorem ipsum dolor amet consectetur adiising eli sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliquaqem</p>
                        <p><a href="service-details.html" class="redirect-link">Learn More <i
                                    class="flaticon-right-arrow-2"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="about-section pb-70 bg-shape-right-top">
        <div class="container-fluid">
            <div class="row align-items-end">
                <div class="col-12 col-lg-7">
                    <div class="max-790 desk-ml-auto">
                        <div class="about-item-text">
                            <div class="section-title section-title-left text-start">
                                <small>About Cysec</small>
                                <h2>Protect Your Website Web Server Ect From <span>Hacker Threats</span></h2>
                            </div>
                            <div class="about-content-list-two">
                                <div class="about-list-item-two">
                                    <div class="about-list-item-selector about-list-item-selector-small">
                                        <i class="flaticon-check-1"></i>
                                    </div>
                                    <div class="about-list-item-text">
                                        <h3>Identifying Threats</h3>
                                        <p>Lorem ipsum dolor sit ameconsectetur adipied t laboresectetur adipisitetur
                                            adipied </p>
                                    </div>
                                </div>
                                <div class="about-list-item-two">
                                    <div class="about-list-item-selector about-list-item-selector-small">
                                        <i class="flaticon-check-1"></i>
                                    </div>
                                    <div class="about-list-item-text">
                                        <h3>Server Security</h3>
                                        <p>Lorem ipsum dolor sit ameconsectetur adipied t laboresectetur adipisitetur
                                            adipied</p>
                                    </div>
                                </div>
                                <div class="about-list-item-two">
                                    <div class="about-list-item-selector about-list-item-selector-small">
                                        <i class="flaticon-check-1"></i>
                                    </div>
                                    <div class="about-list-item-text">
                                        <h3>Web Security</h3>
                                        <p>Lorem ipsum dolor sit ameconsectetur adipied t laboresectetur adipisitetur
                                            adipied</p>
                                    </div>
                                </div>
                                <div class="about-list-item-two">
                                    <div class="about-list-item-selector about-list-item-selector-small">
                                        <i class="flaticon-check-1"></i>
                                    </div>
                                    <div class="about-list-item-text">
                                        <h3>Database Security</h3>
                                        <p>Lorem ipsum dolor sit ameconsectetur adipied t laboresectetur adipisitetur
                                            adipied</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-5 pb-30">
                    <div class="about-item-image text-center">
                        <img src="assets/images/about-image-four.png" alt="about">
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="blog-section pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <small>Cybersecurity Services</small>
                <h2>Our Latest <span>Insights</span></h2>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 pb-30">
                    <div class="blog-card blog-card-dark">
                        <div class="blog-card-thumb">
                            <img src="assets/images/blog-1.jpg" alt="blog">
                        </div>
                        <div class="blog-card-content">
                            <small>Cyber Security Awards</small>
                            <h3>Clutch Names CyberHunter Leader in Canada</h3>
                            <button class="btn">Learn More <i class="flaticon-right-arrow-4"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-30">
                    <div class="blog-card blog-card-dark">
                        <div class="blog-card-thumb">
                            <img src="assets/images/blog-2.jpg" alt="blog">
                        </div>
                        <div class="blog-card-content">
                            <small>Hacking Protection</small>
                            <h3>How To Identify And Avoid Phishing Attacks?</h3>
                            <button class="btn">Learn More <i class="flaticon-right-arrow-4"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 pb-30 offset-md-3 offset-lg-0">
                    <div class="blog-card blog-card-dark">
                        <div class="blog-card-thumb">
                            <img src="assets/images/blog-3.jpg" alt="blog">
                        </div>
                        <div class="blog-card-content">
                            <small>Cloud Security</small>
                            <h3>Why Use CyberHunter For Your Cloud Security</h3>
                            <button class="btn">Learn More <i class="flaticon-right-arrow-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Debut div report section -->
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
    <!-- Fin div report section -->

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
        <div class="footer-lower bg-off-white">
            <div class="container">
                <div class="footer-lower-grid">
                    <div class="footer-lower-item footer-lower-info">
                            <div class="footer-copyright-text">
        <p>Copyright ©2021 Design &amp; Developpement <a href="https://ardlabro.com/"
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
                                <a><span> [email&#160;protected]</span></a><br>
                                <a><span> [email&#160;protected]</span></a>
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
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "Home",
//   components: {
//     HelloWorld,
//   },
// };
</script>
