import {createButton} from "./dom-utils";
import {createDiv} from "./dom-utils";

const button = createButton();
const block = createDiv();

block.appendChild(button)
document.body.appendChild(block)