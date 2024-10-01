var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageanime() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: "-10",
        duration: 2,
        opacity: 0,
        ease: Expo.easeInOut,
    })
        .to(".boundingelem", {
            y: "0",
            duration: 2,
            // opacity:0,
            delay: -1,
            ease: Expo.easeInOut,
            stagger: .2,
        })
        .from("#herofooter", {
            y: "10",
            duration: 2,
            delay: -1,
            opacity: 0,
            ease: Expo.easeInOut,
        })
}

// mouse moving circle code here
function mousemovecirlce() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`
    })
}


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });                         

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});

firstpageanime();
mousemovecirlce();