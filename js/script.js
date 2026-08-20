const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");


if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

    });

}


const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });

});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            } else {

                entry.target.classList.remove("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});

let tokopediaTime = 15 * 60;

const tokopediaCountdown =
    document.getElementById("tokopedia-countdown");

if (tokopediaCountdown) {

    const tokopediaTimer = setInterval(function () {

        const minutes =
            Math.floor(tokopediaTime / 60);

        const seconds =
            tokopediaTime % 60;

        tokopediaCountdown.textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        tokopediaTime--;

        if (tokopediaTime < 0) {

            clearInterval(tokopediaTimer);

            tokopediaCountdown.textContent =
                "Offer ended";

        }

    }, 1000);
}


function claimTokopediaVoucher(button) {

    button.textContent = "Voucher Claimed ✓";

    button.disabled = true;

}

/* =========================
   TOKOPEDIA PROMO COUNTDOWNS
========================= */

let pushTime = 59;

const pushCountdown =
    document.getElementById("push-countdown");

if (pushCountdown) {

    const pushTimer = setInterval(function () {

        const seconds =
            String(pushTime).padStart(2, "0");

        pushCountdown.textContent =
            `00:${seconds}`;

        pushTime--;

        if (pushTime < 0) {

            clearInterval(pushTimer);

            pushCountdown.textContent =
                "Expired";

        }

    }, 1000);
}



let appTime = 14 * 60 + 59;

const appCountdown =
    document.getElementById("app-countdown");

if (appCountdown) {

    const appTimer = setInterval(function () {

        const minutes =
            Math.floor(appTime / 60);

        const seconds =
            appTime % 60;

        appCountdown.textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        appTime--;

        if (appTime < 0) {

            clearInterval(appTimer);

            appCountdown.textContent =
                "Offer ended";

        }

    }, 1000);
}

function openPromoProduct(button) {

    button.textContent =
        "Opening product...";

    setTimeout(function () {

        button.textContent =
            "Product opened ✓";

    }, 700);
}


function claimTokopediaVoucher(button) {

    button.textContent =
        "Voucher Claimed ✓";

    button.disabled = true;
}

/* =========================
   SHOPEE AI MONITOR PROTOTYPE
========================= */

const shopeeCameraData = {

    1: {
        title: "Camera 1 · Area Sort 1",
        type: "No anomaly detected",
        detail: "AI monitoring is running normally in this area.",
        time: "10:23:41",
        confidence: "98%"
    },

    2: {
        title: "Camera 2 · Area Sort 2",
        type: "Parcel detected outside sorting lane",
        detail: "AI detected an abnormal parcel position. Supervisor verification is recommended.",
        time: "10:24:18",
        confidence: "94%"
    },

    3: {
        title: "Camera 3 · Area Sort 3",
        type: "No anomaly detected",
        detail: "AI monitoring is running normally in this area.",
        time: "10:24:05",
        confidence: "97%"
    },

    4: {
        title: "Camera 4 · Area Sort 4",
        type: "No anomaly detected",
        detail: "AI monitoring is running normally in this area.",
        time: "10:24:22",
        confidence: "96%"
    },

    5: {
        title: "Camera 5 · Outbound Entry",
        type: "Trolley stuck detected",
        detail: "AI detected a trolley remaining stationary beyond the monitoring threshold.",
        time: "10:25:11",
        confidence: "91%"
    },

    6: {
        title: "Camera 6 · Outbound Entry",
        type: "No anomaly detected",
        detail: "AI monitoring is running normally in this area.",
        time: "10:25:27",
        confidence: "98%"
    }

};


function selectShopeeCamera(cameraNumber) {

    const data =
        shopeeCameraData[cameraNumber];

    if (!data) {
        return;
    }


    document
        .querySelectorAll(".camera-card")
        .forEach(function (card) {

            card.classList.remove("active");

        });


    const selectedCard =
        document.querySelector(
            `.camera-card[data-camera="${cameraNumber}"]`
        );


    if (selectedCard) {

        selectedCard.classList.add("active");

    }


    document.getElementById(
        "shopee-alert-title"
    ).textContent = data.title;


    document.getElementById(
        "shopee-alert-type"
    ).textContent = data.type;


    document.getElementById(
        "shopee-alert-detail"
    ).textContent = data.detail;


    document.getElementById(
        "shopee-alert-time"
    ).textContent = data.time;


    document.getElementById(
        "shopee-alert-confidence"
    ).textContent = data.confidence;


    const alertButton =
        document.getElementById(
            "shopee-alert-button"
        );


    alertButton.textContent =
        "Acknowledge Alert";


    alertButton.disabled = false;

}


function acknowledgeShopeeAlert() {

    const button =
        document.getElementById(
            "shopee-alert-button"
        );


    button.textContent =
        "✓ Alert Acknowledged";

    button.disabled = true;

}