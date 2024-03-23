function footerTemplate() {
    return `
        

    <footer class="min-footer sub-bg pt-30 pb-30">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 md-mb15">
                <div class="logo icon-img-100">
                    <img src="assets/imgs/logo-light.png" alt="">
                </div>
            </div>
            <div class="col-lg-4 order-md-3">
                <div class="text-center">
                    <p class="fz-14">© 2023 InFolio is Proudly Powered by <span class="underline main-color"><a href="https://themeforest.net/user/ui-themez"
                                target="_blank">UI-ThemeZ</a></span></p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 order-md-2 md-mb15">
                <div class="links d-flex justify-content-end">
                    <ul class="rest d-flex align-items-center">
                        <li>
                            <a href="page-FAQS.html">FAQ</a>
                        </li>
                        <li class="ml-30">
                            <a href="page-about3.html">Careers</a>
                        </li>
                        <li class="ml-30">
                            <a href="page-contact3.html">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>


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
