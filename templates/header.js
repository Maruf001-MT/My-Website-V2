

function headerTemplate() {
    return `
       
    
    <nav class="navbar navbar-expand-lg bord blur">
            <div class="container">

                <!-- Logo -->
                <a class="logo icon-img-100" href="#">
                    <img src="/assets/imgs/logo.svg" alt="logo">
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"><i class="fas fa-bars"></i></span>
                </button>

                <!-- navbar links -->
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#0" data-scroll-nav="0"><span class="rolling-text">Home</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#0" data-scroll-nav="1"><span
                                    class="rolling-text">Services</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#0" data-scroll-nav="2"><span
                                    class="rolling-text">About</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#0" data-scroll-nav="3"><span
                                    class="rolling-text">Portfolio</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#0" data-scroll-nav="4"><span
                                    class="rolling-text">Clients</span></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#0" data-scroll-nav="6"><span
                                    class="rolling-text">Contact</span></a>
                        </li>
                    </ul>
                </div>

                <div class="topnav">
                    <div class="menu-icon cursor-pointer">
                        <span class="icon ti-align-right"></span>
                    </div>
                </div>
            </div>
        </nav>

        <div class="hamenu one-scroll">
            <div class="logo icon-img-100">
                <img src="assets/imgs/logo-light.png" alt="">
            </div>
            <div class="close-menu cursor-pointer ti-close"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">
                        <div class="menu-text">
                            <div class="text">
                                <h2>Menu</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="menu-links">
                            <ul class="main-menu rest">
                                <li data-scroll-nav="0">
                                    <div class="o-hidden">
                                        <div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Home">Home</span></div>
                                    </div>
                                </li>
                                <li data-scroll-nav="1">
                                    <div class="o-hidden">
                                        <div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Services">Services</span>
                                        </div>
                                    </div>
                                </li>
                                <li data-scroll-nav="2">
                                    <div class="o-hidden">
                                        <div class="link cursor-pointer dmenu"><span class="fill-text" data-text="About">About</span>
                                        </div>
                                    </div>
                                </li>
                                <li data-scroll-nav="3">
                                    <div class="o-hidden">
                                        <div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Portfolio">Portfolio</span>
                                        </div>
                                    </div>
                                </li>
                                <li data-scroll-nav="4">
                                    <div class="o-hidden">
                                        <div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Clients">Clients</span>
                                        </div>
                                    </div>
                                </li>
                                <li data-scroll-nav="5">
                                    <div class="o-hidden">
                                        <div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Blogs">Blogs</span>
                                        </div>
                                    </div>
                                </li>
                                <li data-scroll-nav="6">
                                    <div class="o-hidden">
                                        <div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Contact">Contact</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="cont-info">
                            <div class="item mb-50">
                                <h6 class="sub-title mb-15 opacity-7">Address</h6>
                                <h5>541 Melville Geek, <br> Palo Alto, CA 94301</h5>
                            </div>
                            <div class="item mb-50">
                                <h6 class="sub-title mb-15 opacity-7">Social Media</h6>
                                <ul class="rest social-text">
                                    <li class="mb-10">
                                        <a href="#0" class="hover-this"><span class="hover-anim">Facebook</span></a>
                                    </li>
                                    <li class="mb-10">
                                        <a href="#0" class="hover-this"><span class="hover-anim">Twitter</span></a>
                                    </li>
                                    <li class="mb-10">
                                        <a href="#0" class="hover-this"><span class="hover-anim">LinkedIn</span></a>
                                    </li>
                                    <li>
                                        <a href="#0" class="hover-this"><span class="hover-anim">Instagram</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="item mb-40">
                                <h6 class="sub-title mb-15 opacity-7">Contact Us</h6>
                                <h5><a href="#0">Hello@email.com</a></h5>
                                <h5 class="underline mt-10"><a href="#0">+1 840 841 25 69</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    `;
}

// Function to inject any given template into a target element
function injectTemplate(templateFunction, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
        targetElement.innerHTML = templateFunction();
    } else {
        console.error(`Element with ID ${targetElementId} not found.`);
    }
}
