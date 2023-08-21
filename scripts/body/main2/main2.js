import { main2Team, main2Roles, main2Events, main2History, main2Alumni, 
        main2TeamHover, main2RolesHover, main2EventsHover, main2HistoryHover,
        main2AlumniHover } from "./main2Constants.js";

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

export function main2Effects() {
    main2HoverEffects();
}