import { main2Team, main2Roles, main2Events, main2History, main2Alumni, 
        main2TeamHover, main2RolesHover, main2EventsHover, main2HistoryHover,
        main2AlumniHover, main2TeamLi, main2RolesLi, main2EventsLi,
        main2HistoryLi, main2AlumniLi} from "./main2Constants.js";

function main2TeamHoverEffect() {

    main2Team.addEventListener("mouseenter", function () {
        main2TeamHover.forEach(card => {
            card.style.filter = "blur(.35vw)";
        });
    });
    
    main2Team.addEventListener("mouseleave", function () {
        main2TeamHover.forEach(card => {
            card.style.filter = "none";
        });
    });
};

function main2RolesHoverEffect() {

    main2Roles.addEventListener("mouseenter", function () {
        main2RolesHover.forEach(card => {
            card.style.filter = "blur(.35vw)";
        });
    });
    
    main2Roles.addEventListener("mouseleave", function () {
        main2RolesHover.forEach(card => {
            card.style.filter = "none";
        });
    });
};

function main2EventsHoverEffect() {

    main2Events.addEventListener("mouseenter", function () {
        main2EventsHover.forEach(card => {
            card.style.filter = "blur(.35vw)";
        });
    });
    
    main2Events.addEventListener("mouseleave", function () {
        main2EventsHover.forEach(card => {
            card.style.filter = "none";
        });
    });
};

function main2HistoryHoverEffect() {

    main2History.addEventListener("mouseenter", function () {
        main2HistoryHover.forEach(card => {
            card.style.filter = "blur(.35vw)";
        });
    });
    
    main2History.addEventListener("mouseleave", function () {
        main2HistoryHover.forEach(card => {
            card.style.filter = "none";
        });
    });
};

function main2AlumniHoverEffect() {

    main2Alumni.addEventListener("mouseenter", function () {
        main2AlumniHover.forEach(card => {
            card.style.filter = "blur(.35vw)";
        });
    });
    
    main2Alumni.addEventListener("mouseleave", function () {
        main2AlumniHover.forEach(card => {
            card.style.filter = "none";
        });
    });
};

function main2HoverEffects() {
    main2TeamHoverEffect();
    main2RolesHoverEffect();
    main2EventsHoverEffect();
    main2HistoryHoverEffect();
    main2AlumniHoverEffect();
};

// TODO: refactor this and use more for loops
function main2TeamClickExpansionEffect() {
    
    
    main2Team.addEventListener("click", () => {

        main2RolesLi.style.display = "none";
        main2EventsLi.style.display = "none";
        main2HistoryLi.style.display = "none";
        main2AlumniLi.style.display = "none";

        main2TeamLi.classList.toggle("top-left-position");

        // Note: this can only be defined here as the class will not load until the toggle event happens above
        const main2TopLeftPosition = document.querySelector(".top-left-position");

        main2TopLeftPosition.style.marginRight = "85%";
        main2TopLeftPosition.style.marginBottom = "40%";
    });

    main2Roles.addEventListener("click", () => {
        main2TeamLi.style.display = "none";
        main2EventsLi.style.display = "none";
        main2HistoryLi.style.display = "none";
        main2AlumniLi.style.display = "none";

        main2RolesLi.classList.toggle("top-left-position");

        // Note: this can only be defined here as the class will not load until the toggle event happens above
        const main2TopLeftPosition = document.querySelector(".top-left-position");

        main2TopLeftPosition.style.marginRight = "85%";
        main2TopLeftPosition.style.marginBottom = "40%";
    });

    main2Events.addEventListener("click", () => {
        main2TeamLi.style.display = "none";
        main2RolesLi.style.display = "none";
        main2HistoryLi.style.display = "none";
        main2AlumniLi.style.display = "none";

        main2EventsLi.classList.toggle("top-left-position");

        // Note: this can only be defined here as the class will not load until the toggle event happens above
        const main2TopLeftPosition = document.querySelector(".top-left-position");

        main2TopLeftPosition.style.marginRight = "85%";
        main2TopLeftPosition.style.marginBottom = "40%";
    });

    main2History.addEventListener("click", () => {
        main2TeamLi.style.display = "none";
        main2RolesLi.style.display = "none";
        main2EventsLi.style.display = "none";
        main2AlumniLi.style.display = "none";

        main2HistoryLi.classList.toggle("top-left-position");

        // Note: this can only be defined here as the class will not load until the toggle event happens above
        const main2TopLeftPosition = document.querySelector(".top-left-position");

        main2TopLeftPosition.style.marginRight = "85%";
        main2TopLeftPosition.style.marginBottom = "40%";
    });

    main2Alumni.addEventListener("click", () => {
        main2TeamLi.style.display = "none";
        main2RolesLi.style.display = "none";
        main2EventsLi.style.display = "none";
        main2HistoryLi.style.display = "none";

        main2AlumniLi.classList.toggle("top-left-position");

        // Note: this can only be defined here as the class will not load until the toggle event happens above
        const main2TopLeftPosition = document.querySelector(".top-left-position");

        main2TopLeftPosition.style.marginRight = "85%";
        main2TopLeftPosition.style.marginBottom = "40%";
    });
}

export function main2Effects() {
    main2HoverEffects();
    main2TeamClickExpansionEffect();
}