window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.onload = function () {
    window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".text");

    const navLinks = {
        "PRODUCT": "https://www.salesforce.com/products/",
        "INDUSTRIES": "https://www.salesforce.com/industries/",
        "CUSTOMER": "https://www.salesforce.com/customer-success-stories/",
        "LEARNING": "https://trailhead.salesforce.com/",
        "SUPPORT": "https://help.salesforce.com/",
        "MORE ^": "https://www.salesforce.com/"
    };

    navItems.forEach(item => {
        item.style.cursor = "pointer";

        item.addEventListener("click", () => {

            const text = item.innerText.trim();

            if (navLinks[text]) {
                window.open(navLinks[text], "_blank");
            }
        });
    });

    const logo = document.querySelector(".icon");

    logo.style.cursor = "pointer";

    logo.addEventListener("click", () => {
        window.open("https://www.salesforce.com/", "_blank");
    });
    const searchIcon = document.querySelectorAll(".logo")[0];

    searchIcon.addEventListener("click", () => {
        window.open(
            "https://www.salesforce.com/search/",
            "_blank"
        );
    });

    const globeIcon = document.querySelectorAll(".logo")[1];

    globeIcon.addEventListener("click", () => {
        window.open(
            "https://www.salesforce.com/in/",
            "_blank"
        );
    });

    const loginBtn = document.querySelector(".login");

    loginBtn.style.cursor = "pointer";

    loginBtn.addEventListener("click", () => {
        window.open(
            "https://login.salesforce.com/",
            "_blank"
        );
    });

    const tryBtn = document.querySelector(".try");

    tryBtn.style.cursor = "pointer";

    tryBtn.addEventListener("click", () => {
        window.open(
            "https://www.salesforce.com/in/form/signup/freetrial-sales/",
            "_blank"
        );
    });

    const freeTrialButtons = document.querySelectorAll(".button1, .btn1");

    freeTrialButtons.forEach(btn => {

        btn.style.cursor = "pointer";

        btn.addEventListener("click", () => {
            window.open(
                "https://www.salesforce.com/in/form/signup/freetrial-sales/",
                "_blank"
            );
        });
    });

    const demoButtons = document.querySelectorAll(".button2, .btn2");

    demoButtons.forEach(btn => {

        btn.style.cursor = "pointer";

        btn.addEventListener("click", () => {
            window.open(
                "https://www.salesforce.com/products/platform/demo/",
                "_blank"
            );
        });
    });

    const cardLinks = [
        "https://www.salesforce.com/small-business/",
        "https://www.salesforce.com/products/sales-cloud/",
        "https://www.salesforce.com/products/service-cloud/",
        "https://www.salesforce.com/products/marketing-cloud/"
    ];

    const cards = document.querySelectorAll(
        ".card1, .card2, .card3, .card4"
    );

    cards.forEach((card, index) => {

        card.style.cursor = "pointer";

        card.addEventListener("click", () => {
            window.open(cardLinks[index], "_blank");
        });
    });

    const allProducts = document.querySelectorAll(".boxz")[0];

    allProducts.style.cursor = "pointer";

    allProducts.addEventListener("click", () => {
        window.open(
            "https://www.salesforce.com/products/",
            "_blank"
        );
    });

    const learningCards = document.querySelectorAll(".card5");

    const learningLinks = [
        "https://trailhead.salesforce.com/",
        "https://trailhead.salesforce.com/content/learn/modules/crm-basics",
        "https://trailhead.salesforce.com/content/learn/modules/sales-cloud-basics"
    ];

    learningCards.forEach((card, index) => {

        card.style.cursor = "pointer";

        card.addEventListener("click", () => {
            window.open(
                learningLinks[index],
                "_blank"
            );
        });
    });

    const learnFree = document.querySelectorAll(".boxz")[1];

    learnFree.style.cursor = "pointer";

    learnFree.addEventListener("click", () => {
        window.open(
            "https://trailhead.salesforce.com/",
            "_blank"
        );
    });

    const customersBtn = document.querySelectorAll(".boxz")[2];

    customersBtn.style.cursor = "pointer";

    customersBtn.addEventListener("click", () => {
        window.open(
            "https://www.salesforce.com/customer-success-stories/",
            "_blank"
        );
    });


    const footerLinks = document.querySelectorAll(".footer-box li");

    const footerUrls = [
        "https://www.salesforce.com/products/",
        "https://www.salesforce.com/editions-pricing/",
        "https://careers.salesforce.com/",
        "https://help.salesforce.com/"
    ];

    footerLinks.forEach((item, index) => {

        item.style.cursor = "pointer";

        item.addEventListener("click", () => {
            window.open(
                footerUrls[index],
                "_blank"
            );
        });
    });

    const contact = document.querySelector(".contactdetails");

    contact.style.cursor = "pointer";

    contact.addEventListener("click", () => {
        window.open(
            "https://www.salesforce.com/company/contact-us/",
            "_blank"
        );
    });

});