document.addEventListener("DOMContentLoaded", function () {

    const pages = document.querySelectorAll(".page");
    const navigation = document.querySelectorAll("[data-page]");

    function showPage(pageId) {

        // Hide every page
        pages.forEach(function (page) {
            page.classList.remove("active");
        });

        // Show selected page
        const selectedPage = document.getElementById(pageId);

        if (selectedPage) {
            selectedPage.classList.add("active");
        }

        // Update navigation highlight
        document.querySelectorAll("nav a").forEach(function (link) {
            link.classList.remove("active");

            if (link.dataset.page === pageId) {
                link.classList.add("active");
            }
        });

        // Change browser URL
        history.pushState(null, "", "#" + pageId);

        // Go to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    // Make ALL data-page buttons and links work
    navigation.forEach(function (element) {

        element.addEventListener("click", function (event) {

            event.preventDefault();

            const pageId = this.dataset.page;

            if (pageId) {
                showPage(pageId);
            }

        });

    });


    // Eligibility form
    const form = document.getElementById("form");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            showPage("schemes");

        });

    }


    // Browser back / forward buttons
    window.addEventListener("popstate", function () {

        const pageId = location.hash.replace("#", "") || "home";

        if (document.getElementById(pageId)) {
            showPageWithoutHistory(pageId);
        }

    });


    function showPageWithoutHistory(pageId) {

        pages.forEach(function (page) {
            page.classList.remove("active");
        });

        const selectedPage = document.getElementById(pageId);

        if (selectedPage) {
            selectedPage.classList.add("active");
        }

        document.querySelectorAll("nav a").forEach(function (link) {

            link.classList.toggle(
                "active",
                link.dataset.page === pageId
            );

        });

        window.scrollTo(0, 0);
    }


    // Open correct page if URL already contains #schemes etc.
    const firstPage = location.hash.replace("#", "") || "home";

    if (document.getElementById(firstPage)) {
        showPageWithoutHistory(firstPage);
    } else {
        showPageWithoutHistory("home");
    }


    // Chatbot
    const chatButton = document.querySelector(".chat");

    if (chatButton) {

        chatButton.addEventListener("click", function () {

            alert("Hello! 👋\nHow can NidhiTarang help you today?");

        });

    }

});