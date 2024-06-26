document.addEventListener("DOMContentLoaded", function () {

    // Header Sticky  ============ start =====>
    const header = document.querySelector("header");
    const handleScroll = () => {
        window.scrollY > 0 ? header.classList.add("sticky-header") : header.classList.remove("sticky-header");
    }

    window.addEventListener("scroll", handleScroll);

    // mobile search form code ============ start =====>
    let searchIcon = document.querySelector(".search-toggle-btn");
    let searchForm = document.querySelector(".menu-search-form");
    let svg1 =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9" stroke-width="2" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
    let svg2 =
        '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
    let isSvg1 = true;
    if (searchIcon) {
        searchIcon.addEventListener("click", function () {
            searchIcon.innerHTML = isSvg1 ? svg2 : svg1;
            isSvg1 = !isSvg1;

            searchForm.classList.toggle("search-bar-show");
        });
    }


    // Show mobile left canvas ============ start =====>
    const toggleslideBtn = document.querySelector(".menu-toggle-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const headerUl = document.querySelector("header .menu ul");

    function toggleButtons(cancelBtn, headerUl) {
        $mobileNav = headerUl.classList.toggle("show-ul");

        if (!$mobileNav) {
            const backDrop = document.querySelector('.back-drop');
            backDrop.remove();
            enableScroll();
        }
        else {
            const backDrop = document.createElement('div');
            header.appendChild(backDrop);
            backDrop.classList.add('back-drop');
            disableScroll();

            backDrop.addEventListener("click", function () {
                headerUl.classList.remove("show-ul");
                backDrop.remove();
                enableScroll();
            });
        }

        function disableScroll() {
            document.body.style.overflow = 'hidden';
        }

        function enableScroll() {
            document.body.style.overflow = 'auto';
        }

    }

    toggleslideBtn.addEventListener("click", function () {
        toggleButtons(cancelBtn, headerUl);
    });

    cancelBtn.addEventListener("click", function () {
        toggleButtons(cancelBtn, headerUl);
    });





    // mobile Dropdown  ============ start =====>
    const navDropdowns = document.querySelectorAll(".dropdown");
    navDropdowns.forEach((parentDropdown) => {
        parentDropdown.addEventListener("click", function (e) {
            this.classList.toggle("showMenu");
        });

        const subDropdowns = parentDropdown.querySelectorAll(".dropdown ul");
        subDropdowns.forEach((subDropdown) => {
            subDropdown.addEventListener("click", function (event) {
                event.stopPropagation(); // Prevents the click event from reaching the parent dropdown
            });
        });
    });

    // Add a click event listener to the document to close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
        navDropdowns.forEach((dropdown) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("showMenu");
            }
        });
    });


    var tabContainer = document.getElementById("tabContainer");
    var tabs = tabContainer.getElementsByClassName("tablinks");

    function openService(serviceName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        for (i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
        document.getElementById(serviceName).style.display = "block";
        tabs[event.target.dataset.index].classList.add("active");
    }

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].dataset.index = i; // Store the index as a data attribute
        tabs[i].addEventListener("click", function (event) {
            openService(event.target.dataset.service);
        });
    }

    // Get the element with id="defaultOpen" and click on it
    tabs[0].click();



    // accordion code  ============ start =====>
    // const detailsElements = document.querySelectorAll("details");
    // const summaryElements = document.querySelectorAll("summary");
    // summaryElements.forEach((summary, index) => {
    //     summary.addEventListener("click", () => {
    //         // Close other open details elements and remove 'active' class
    //         detailsElements.forEach((details, i) => {
    //             if (i !== index) {
    //                 details.open = false;
    //             }
    //         });
    //     });
    // });



    // Scroll to top   ============ start =====>

    // let mybutton = document.getElementById("myBtn");
    // window.onscroll = function () {
    //     scrollFunction();
    // };

    // function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         mybutton.style.display = "block";
    //     } else {
    //         mybutton.style.display = "none";
    //     }
    // }
    // function topFunction() {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }
    // mybutton.addEventListener("click", topFunction);



});
