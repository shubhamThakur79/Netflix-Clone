const icons = document.querySelectorAll(".fa-plus");

icons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
        const paragraph = e.target.parentElement.nextElementSibling;
        if (paragraph.classList.contains("para")) {
            e.target.classList.toggle("fa-x");
            paragraph.style.display = (paragraph.style.display === "block") ? "none" : "block";

        }
    });
});

const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.querySelector('.email').value.trim();
    if (email !== "") {
        // Add the URL inside the button
        btn.innerHTML = "Redirecting...";
        // Redirect to the URL after a short delay (for demonstration)
        setTimeout(function() {
            window.location.href = 'https://www.netflix.com/signup/registration?locale=en-IN';
        }, 1000);
    } else {
        document.querySelector('#error').style.display = "block";
        document.querySelector('.email').focus();
    }
});

document.getElementById("languageSelect").addEventListener("change", function() {
    const selectedLanguage = this.value;
    const urlPrefix = "https://www.netflix.com/";
    let url;
    
    if (selectedLanguage === "hi") {
        url = urlPrefix + "in-hi/";
        // Toggle page content to Hindi
        document.documentElement.lang = "hi"; // Set language attribute to Hindi
        // You can toggle other content to Hindi here
    } else {
        url = urlPrefix + "in/";
        // Toggle page content to English or default language
        document.documentElement.lang = "en"; // Set language attribute to English or default language
        // You can toggle other content to English or default language here
    }
    
    // Redirect to the updated URL
    window.location.href = url;
});
