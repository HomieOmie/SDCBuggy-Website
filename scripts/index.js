// TODO: Make this more efficient
import { navbarEffects } from "./header/navbar/navbar.js";
import { bodyGeneralEffects } from "./body/body.js";
import { main2Effects } from "./body/main2/main2.js";
import { main1Effects } from "./body/main1/main1.js";


function mainLoop() {
    navbarEffects();
    bodyGeneralEffects();
    main2Effects();
    main1Effects();
}

mainLoop();
