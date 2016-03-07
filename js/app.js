$(document).ready(function () {
    /*ajax-request to the server*/
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://cors.io/?u=http://dev.frevend.com/json/users.json",
        /*url: "http://localhost:1337/dev.frevend.com/json/users.json",*/
        crossDomain: true
    }).done(function (data) {
        window.data = data;
    }).fail(function (xhr, textStatus, errorThrown) {
        alert(xhr.responseText);
        alert(textStatus);
    });
    /*function to show parsed comments*/
    function addComments(position1, position2) {
        var comments = document.getElementById("comments");
        for (var i = position1; i < position2; i++) {
            var container = document.createElement("div");
            container.className = "container";
            comments.appendChild(container);

            var row = document.createElement("diw");
            row.className = "row";
            container.appendChild(row);

            var column1 = document.createElement("div");
            column1.className = "col-md-1 col-sm-1 col-xs-1 radio_container";
            row.appendChild(column1);

            var radio = document.createElement("div");
            radio.className = "radio_button";
            if (i === 0) {
                radio.className = "radio_button radio_button_active";
            }
            radio.addEventListener("click", function () {
                if (this.className !== "radio_button radio_button_active") {
                    document.getElementsByClassName("radio_button_active")[0].className = "radio_button";
                    this.className = "radio_button radio_button_active";
                }
            });
            column1.appendChild(radio);

            var column2 = document.createElement("div");
            column2.className = "col-md-2 col-sm-2 col-xs-4";
            row.appendChild(column2);

            var image = document.createElement("div");
            image.className = "account_image";
            image.style.background = "url('http://dev.frevend.com/json/images/u_" + (i + 1) + ".png')";
            image.style.backgroundSize = "contain";
            column2.appendChild(image);

            var column3 = document.createElement("div");
            column3.className = "col-md-9 col-sm-9 col-xs-7 list_account_desc";
            row.appendChild(column3);

            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            p1.className = "list_account_title";
            p1.innerHTML = data.users[i].name;
            p2.className = "list_account_text";
            p2.innerHTML = data.users[i].desc;
            column3.appendChild(p1);
            column3.appendChild(p2);

            var row2 = document.createElement("diw");
            row2.className = "row small_screen";
            container.appendChild(row2);

            var column = document.createElement("div");
            column.className = "col-sm-12 col-xs-12";
            row2.appendChild(column);

            var p = document.createElement("p");
            p.className = "list_account_text_small";
            p.innerHTML = data.users[i].desc;
            column.appendChild(p);
        }
    }
    /*when scrolling add new comments*/
    $(window).scroll(function () {
        var $top = $(document).scrollTop();
        var comments = document.getElementById("comments");
        if ($top > 600 && $top < 700) {
            if (comments.childNodes.length >= 10) {
                return;
            }
            addComments(0, 10);
        }
        if ($top >= 2300 && $top < 2500) {
            if (comments.childNodes.length >= 20) {
                return;
            }
            addComments(10, 20);
        }
    });
    /*add event listeners to some elements*/
    document.getElementById("apple").addEventListener("mouseover", function () {
        var image = document.getElementById("apple_blue");
        image.className = "apple_image apple_image_active";
    });
    document.getElementById("apple").addEventListener("mouseout", function () {
        var image = document.getElementById("apple_blue");
        image.className = "apple_image";
    });
    document.getElementById("android").addEventListener("mouseover", function () {
        var image = document.getElementById("android_blue");
        image.className = "android_image android_image_active";
    });
    document.getElementById("android").addEventListener("mouseout", function () {
        var image = document.getElementById("android_blue");
        image.className = "android_image";
    });
    /*add blue border-top to the menu items*/
    var links = document.getElementsByClassName("link");
    for (var j = 0; j < links.length; j++) {
        links[j].addEventListener("click", function () {
            document.getElementsByClassName("link nav_active")[0].className = "link";
            if (this.className === "link nav_active") {
                this.className = "link";
            } else {
                this.className = "link nav_active";
            }
        });
    }
    /*show/hide menu on small devices*/
    var menu = document.getElementById("menu");
    menu.addEventListener("click", function () {
        var menuItems = document.getElementsByClassName("wrapper")[0];
        if (menuItems.style.display === "none") {
            menuItems.style.display = "block";
        } else {
            menuItems.style.display = "none";
        }
    });
    /*show menu items always on middle/big screens*/
    $(window).resize(function () {
        var menuItems = document.getElementsByClassName("wrapper")[0];
        if (document.documentElement.clientWidth >= 768) {
            menuItems.style.display = "block";
        }
    });

    var blue_rounds = document.getElementsByClassName("blue_round");
    for (var i = 0; i < blue_rounds.length; i++) {
        blue_rounds[i].addEventListener("click", function () {
            document.getElementsByClassName("blue_round blue_active")[0].className = "blue_round";
            if (this.className === "blue_round blue_active") {
                this.className = "blue_round";
            } else {
                this.className = "blue_round blue_active";
            }
        });
    }
});
