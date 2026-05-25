particlesJS("background", {

    particles: {
        number: {
            value: 15, // Number of particles (count)
            density: {
                enable: true,
                value_area: 300, // Area where particles will be coming from
            },
        },

        color: {
            value: "#b96b1c", // Particle color (white)
        },

        shape: {
            type: "triangle", // Shape of particles (triangle)
        },
        opacity: {
            value: 0.8, // Opacity of particles
            random: true, // Randomize opacity
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },

        // Connecting lines
        line_linked: {
            enable: true,
            distance: 150, // Distance for linking particles
            color: "#ffffff", // Line color (white)
            opacity: 0.4,
            width: 1,
        },

        // Particle movement
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
        },
    },
    // Interactivity settings
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true, //Enable hover interactivity
                mode: "repulse",
            },
            onclick: {
                enable: true, //Enable click function
                mode: "push", // Add particles on click
            },
            resize: true, //Resize particles animation on window resize
        },
    },

    //Detect retina displays
    retina_detect: true,

});