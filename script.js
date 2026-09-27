/* =====================================================
   HERO PROTOCOL — FINAL JS
===================================================== */


/* ================= LOADER ================= */

const loader = document.getElementById("loader");
const loaderBar = document.getElementById("loaderBar");
const loaderPercent = document.getElementById("loaderPercent");
const loaderText = document.getElementById("loaderText");

let progress = 0;

const loaderTimer = setInterval(() => {

    progress += Math.floor(Math.random() * 7) + 3;

    if (progress >= 100) {
        progress = 100;
        clearInterval(loaderTimer);
    }

    if (loaderBar) {
        loaderBar.style.width = progress + "%";
    }

    if (loaderPercent) {
        loaderPercent.textContent = progress + "%";
    }

    if (loaderText) {

        if (progress < 35) {
            loaderText.textContent =
                "INITIALIZING SYSTEM";
        }

        else if (progress < 70) {
            loaderText.textContent =
                "CALIBRATING HERO";
        }

        else {
            loaderText.textContent =
                "SYSTEM READY";
        }

    }

}, 80);


window.addEventListener("load", () => {

    setTimeout(() => {

        if (loader) {
            loader.classList.add("loaded");
        }

    }, 2500);

});


/* ================= REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ================= CURSOR ================= */

const cursor =
    document.querySelector(".cursor");

const cursorDot =
    document.querySelector(".cursor-dot");


if (
    cursor &&
    cursorDot &&
    window.innerWidth > 800
) {

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    window.addEventListener(
        "mousemove",
        (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            cursorDot.style.left =
                mouseX + "px";

            cursorDot.style.top =
                mouseY + "px";

        }
    );


    function cursorAnimation() {

        ringX +=
            (mouseX - ringX) * .13;

        ringY +=
            (mouseY - ringY) * .13;

        cursor.style.left =
            ringX + "px";

        cursor.style.top =
            ringY + "px";

        requestAnimationFrame(
            cursorAnimation
        );

    }

    cursorAnimation();


    document
        .querySelectorAll(
            "a, button, .mission-card, .possibility-card"
        )
        .forEach((element) => {

            element.addEventListener(
                "mouseenter",
                () => {
                    cursor.classList.add(
                        "active"
                    );
                }
            );

            element.addEventListener(
                "mouseleave",
                () => {
                    cursor.classList.remove(
                        "active"
                    );
                }
            );

        });

}


/* ================= MAGNETIC ================= */

document
    .querySelectorAll(".magnetic")
    .forEach((element) => {

        element.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth <= 800) {
                    return;
                }

                const rect =
                    element.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;

                element.style.transform =
                    `translate(${x * .15}px, ${y * .15}px)`;

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                element.style.transform =
                    "translate(0,0)";

            }
        );

    });


/* ================= SHIELD PARALLAX ================= */

const shieldScene =
    document.getElementById(
        "shieldScene"
    );

const shield =
    document.getElementById(
        "shield"
    );


if (
    shieldScene &&
    shield &&
    window.innerWidth > 800
) {

    shieldScene.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                shieldScene.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                .5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                .5;


            shield.style.translate =
                `${x * 22}px ${y * 22}px`;

        }
    );


    shieldScene.addEventListener(
        "mouseleave",
        () => {

            shield.style.translate =
                "0 0";

        }
    );

}


/* ================= MISSION TILT ================= */

document
    .querySelectorAll(".mission-card")
    .forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth <= 800) {
                    return;
                }

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const rotateY =
                    ((x / rect.width) - .5) * 9;

                const rotateX =
                    ((y / rect.height) - .5) * -9;


                card.style.transform =
                    `perspective(1200px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";

            }
        );

    });


/* ================= POSSIBILITY TILT ================= */

document
    .querySelectorAll(".possibility-card")
    .forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth <= 800) {
                    return;
                }

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const rotateY =
                    ((x / rect.width) - .5) * 7;

                const rotateX =
                    ((y / rect.height) - .5) * -7;


                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-10px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translateY(0)";

            }
        );

    });


/* ================= JOURNEY ================= */

const journey =
    document.querySelector(
        ".journey-section"
    );

const journeyProgress =
    document.getElementById(
        "journeyProgress"
    );


function updateJourney() {

    if (
        !journey ||
        !journeyProgress
    ) {
        return;
    }

    const rect =
        journey.getBoundingClientRect();

    const progress =
        Math.max(
            0,
            Math.min(
                100,
                (
                    (window.innerHeight - rect.top) /
                    (rect.height + window.innerHeight)
                ) * 100
            )
        );


    journeyProgress.style.width =
        progress + "%";

}


window.addEventListener(
    "scroll",
    updateJourney
);

updateJourney();


/* ================= NAV ACTIVE ================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach((link) => {

                    link.classList.remove(
                        "active"
                    );

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

            });

        },
        {
            threshold: .35
        }
    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* ================= READY IMPACT ================= */

function heroImpact() {

    if (!shield) {
        return;
    }

    const impactRing =
        document.querySelector(
            ".shield-impact-ring"
        );


    shield.classList.remove("impact");

    void shield.offsetWidth;

    shield.classList.add("impact");


    if (impactRing) {

        impactRing.classList.remove(
            "active"
        );

        void impactRing.offsetWidth;

        impactRing.classList.add(
            "active"
        );

    }


    document.body.classList.remove(
        "impact"
    );

    void document.body.offsetWidth;

    document.body.classList.add(
        "impact"
    );


    setTimeout(() => {

        document.body.classList.remove(
            "impact"
        );

    }, 500);

}


const heroReady =
    document.getElementById(
        "heroReady"
    );


if (heroReady) {

    heroReady.addEventListener(
        "click",
        () => {

            heroImpact();

        }
    );

}


/* ================= MODAL ================= */

const modal =
    document.getElementById(
        "registerModal"
    );

const registerButton =
    document.getElementById(
        "registerButton"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const continueRegistration =
    document.getElementById(
        "continueRegistration"
    );


function openModal() {

    if (!modal) {
        return;
    }

    modal.classList.add("show");

    document.body.classList.add(
        "modal-open"
    );

}


function closeModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.classList.remove(
        "modal-open"
    );

}


if (registerButton) {

    registerButton.addEventListener(
        "click",
        openModal
    );

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


const modalBackdrop =
    document.querySelector(
        ".modal-backdrop"
    );


if (modalBackdrop) {

    modalBackdrop.addEventListener(
        "click",
        closeModal
    );

}


if (continueRegistration) {

    continueRegistration.addEventListener(
        "click",
        () => {

            /*
              Replace this with
              your actual registration
              Google Form link.
            */

            window.open(
                "https://forms.google.com/",
                "_blank"
            );

        }
    );

}


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
            closeModal();
        }

    }
);


/* ================= SMOOTH LINKS ================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const id =
                    link.getAttribute("href");

                const target =
                    document.querySelector(id);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });


/* ================= RANDOM PARTICLES ================= */

function createParticle() {

    if (window.innerWidth < 700) {
        return;
    }

    const particle =
        document.createElement("i");

    particle.style.position =
        "fixed";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.width =
        "3px";

    particle.style.height =
        "3px";

    particle.style.borderRadius =
        "50%";

    particle.style.background =
        Math.random() > .5
            ? "#ef2638"
            : "#1976df";

    particle.style.boxShadow =
        "0 0 12px currentColor";

    particle.style.pointerEvents =
        "none";

    particle.style.zIndex =
        "-1";


    document.body.appendChild(
        particle
    );


    const animation =
        particle.animate(
            [
                {
                    opacity: 0,
                    transform: "translate(0,0)"
                },

                {
                    opacity: .8,
                    transform:
                        "translate(20px,-70px)"
                },

                {
                    opacity: 0,
                    transform:
                        "translate(-20px,-150px)"
                }
            ],
            {
                duration:
                    4500 +
                    Math.random() * 3500,

                easing: "ease-out"
            }
        );


    animation.onfinish = () => {

        particle.remove();

    };

}


setInterval(
    createParticle,
    900
);


/* ================= EASTER EGG ================= */

const brand =
    document.querySelector(
        ".brand"
    );

let brandClicks = 0;
let brandTimeout;


if (brand) {

    brand.addEventListener(
        "click",
        () => {

            brandClicks++;

            clearTimeout(
                brandTimeout
            );

            brandTimeout =
                setTimeout(() => {

                    brandClicks = 0;

                }, 1500);


            if (brandClicks >= 5) {

                brandClicks = 0;

                heroImpact();

                document.title =
                    "⚡ HERO PROTOCOL ACTIVATED";

                setTimeout(() => {

                    document.title =
                        "GFG BU — Hero Protocol";

                }, 2500);

            }

        }
    );

}


/* ================= VISIBILITY ================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            document.title =
                "Come back, Hero ⚡";

        } else {

            document.title =
                "GFG BU — Hero Protocol";

        }

    }
);


/* ================= CONSOLE ================= */

console.log(
    "%cGFG // BU HERO PROTOCOL",
    "background:#ef2638;color:white;padding:10px;font-size:16px;font-weight:bold;"
);

console.log(
    "%cSYSTEM ONLINE",
    "color:#1976df;font-size:13px;"
);