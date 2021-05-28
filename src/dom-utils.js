import './style.css';

export function createButton() {
    const btn = document.createElement("button");
    btn.className = 'btn'
    btn.innerText = 'Hello, World!'
    return btn
}

export function createDiv(){
    const div = document.createElement("div");
    div.className = 'block';
    return div
}

