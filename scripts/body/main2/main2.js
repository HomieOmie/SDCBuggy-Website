import { main2Team, main2Roles, main2Events, main2History, main2Alumni, 
        main2TeamHover, main2RolesHover, main2EventsHover, main2HistoryHover,
        main2AlumniHover, main2TeamLi, main2RolesLi, main2EventsLi,
        main2HistoryLi, main2AlumniLi, main2TeamLiClick, main2RolesLiClick,
        main2EventsLiClick, main2HistoryLiClick, main2AlumniLiClick} from "./main2Constants.js";

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

function main2TeamLiClickEffect(){
    const xButton = document.querySelector(".x-button");

    main2Team.addEventListener("click", () => {

        main2TeamLiClick.forEach(card => {
            card.style.display = "none";
        });
        
        xButton.classList.toggle("active");

        main2TeamLi.classList.toggle("top-left-position");

        // Note: this can only be defined here as the class will not load until the toggle event happens above
        const main2TopLeftPosition = document.querySelector(".top-left-position");

        main2TopLeftPosition.style.marginRight = "85%";
        main2TopLeftPosition.style.marginBottom = "40%";

        xButton.addEventListener("click", () => {

            xButton.classList.remove("active");

            main2TopLeftPosition.style.marginRight = "0%";
            main2TopLeftPosition.style.marginBottom = "0%";

            setTimeout(() => {
                main2TeamLi.classList.remove("top-left-position");
            }, 350);
            
            main2TeamLiClick.forEach(card => {
                card.style.display = "flex";
            });
        });
    });
};

function main2RolesLiClickEffect(){

    main2Roles.addEventListener("click", () => {

        main2RolesLiClick.forEach(card => {
            card.style.display = "none";
        });

        main2RolesLi.classList.toggle("top-left-position");

        // Note: this can only be defined here as the class will not load until the toggle event happens above
        const main2TopLeftPosition = document.querySelector(".top-left-position");

        main2TopLeftPosition.style.marginRight = "85%";
        main2TopLeftPosition.style.marginBottom = "40%";
    });
};

function main2EventsLiClickEffect(){

    main2Events.addEventListener("click", () => {
        
        main2EventsLiClick.forEach(card => {
            card.style.display = "none";
        });

        main2EventsLi.classList.toggle("top-left-position");

        // Note: this can only be defined here as the class will not load until the toggle event happens above
        const main2TopLeftPosition = document.querySelector(".top-left-position");

        main2TopLeftPosition.style.marginRight = "85%";
        main2TopLeftPosition.style.marginBottom = "40%";
    });
};

function main2HistoryLiClickEffect(){

    main2History.addEventListener("click", () => {
        
        main2HistoryLiClick.forEach(card => {
            card.style.display = "none";
        });

        main2HistoryLi.classList.toggle("top-left-position");

        // Note: this can only be defined here as the class will not load until the toggle event happens above
        const main2TopLeftPosition = document.querySelector(".top-left-position");

        main2TopLeftPosition.style.marginRight = "85%";
        main2TopLeftPosition.style.marginBottom = "40%";
    });
};

function main2AlumniLiCLickEffect(){

    main2Alumni.addEventListener("click", () => {
        
        main2AlumniLiClick.forEach(card => {
            card.style.display = "none";
        });

        main2AlumniLi.classList.toggle("top-left-position");

        // Note: this can only be defined here as the class will not load until the toggle event happens above
        const main2TopLeftPosition = document.querySelector(".top-left-position");

        main2TopLeftPosition.style.marginRight = "85%";
        main2TopLeftPosition.style.marginBottom = "40%";
    });
};

function main2TeamClickExpansionEffect() {
    
    main2TeamLiClickEffect();
    main2RolesLiClickEffect();
    main2EventsLiClickEffect();
    main2HistoryLiClickEffect();
    main2AlumniLiCLickEffect();
}

export function main2Effects() {
    main2HoverEffects();
    main2TeamClickExpansionEffect();
}