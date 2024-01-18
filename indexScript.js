document.addEventListener("DOMContentLoaded", function () {
    var openModalButton = document.getElementById("open-modal-button");
    var closeModalButton = document.querySelector(".close-modal-button");
    var modal = document.getElementById("signup-modal");
    var submitButton = document.getElementById("submit-button");

    openModalButton.addEventListener("click", function () {
        modal.style.display = "block";
        showTab("signin-tab");
    });

    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    document.querySelectorAll(".tabs .tab-active").forEach(function (tab) {
        tab.addEventListener("click", function () {
            var tabId = this.querySelector("a").getAttribute("href").replace("#", "");
            showTab(tabId);
        });
    });    

    function showTab(tabId) {
        document.querySelectorAll(".tab-content").forEach(function (content) {
            content.classList.remove("active");
        });
    
        document.getElementById(tabId).classList.add("active");
        document.querySelectorAll(".tab").forEach(function (tab) {
            tab.classList.remove("active");
        });
    
        document.querySelector('a[href="#' + tabId + '"]').parentElement.classList.add("active");
    }    

    submitButton.addEventListener("click", function () {
        var activeTabId = document.querySelector(".tab-content.active").id;
        var form;

        if (activeTabId === "signin-tab") {
            form = document.getElementById("signin-form");
            signIn(form);
        } else if (activeTabId === "signup-tab") {
            form = document.getElementById("signup-form");
            signUp(form);
        }
    });

    function signIn(form) {
        var username = form.querySelector("#signin-username").value;
        var password = form.querySelector("#signin-password").value;
    
        var validUsers = [
            { username: "user1", password: "password1" },
            { username: "user2", password: "password2" },
        ];
    
        var isValidUser = validUsers.some(function (user) {
            return user.username === username && user.password === password;
        });
        form.reset();
    
        if (isValidUser) {
            displayMessage("success", "Sign-in successful!");
            window.location.href = "homepage.html";
        } else {
            displayMessage("error", "Invalid username or password.");
        }
    }

    function signUp(form) {
        var fullname = form.querySelector("#signup-fullname").value;
        var username = form.querySelector("#signup-username").value;
        var password = form.querySelector("#signup-password").value;
        var phone = form.querySelector("#signup-phone").value;
    
        var usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        var phoneRegex = /^\d{11}$/;
    
        if (!usernameRegex.test(username)) {
            displayMessage("error", "Invalid username. It must be alphanumeric and between 3 to 16 characters.");
            return;
        }
    
        if (!passwordRegex.test(password)) {
            displayMessage("error", "Invalid password. It must contain at least one digit, one lowercase and one uppercase letter, and be 6 or more characters.");
            return;
        }
    
        if (!phoneRegex.test(phone)) {
            displayMessage("error", "Invalid phone number. It must be 11 digits.");
            return;
        }
    
        var validUsers = [
            { username: "user1", password: "password1", fullname: "User One", phone: "1234567890" },
            { username: "user2", password: "password2", fullname: "User Two", phone: "9876543210" },
        ];
    
        var isUsernameTaken = validUsers.some(function (user) {
            return user.username === username;
        });
    
        if (isUsernameTaken) {
            displayMessage("error", "Username already taken. Please choose a different one.");
        } else {
            validUsers.push({ username: username, password: password, fullname: fullname, phone: phone });
            form.reset();
    
            displayMessage("success", "Sign-up successful!");
            window.location.href = "homepage.html";
        }
    }
    
    
    
    function displayMessage(type, message) {
        var messageElement = document.createElement("div");
        messageElement.classList.add("alert", type === "success" ? "alert-success" : "alert-danger");
        messageElement.textContent = message;

        document.querySelector(".modal-footer").appendChild(messageElement);

        setTimeout(function () {
            messageElement.remove();
        }, 3000);
    }
});