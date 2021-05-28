import './style.css';

export default function createButton() {
    const btn = document.createElement("button");
    document.body.appendChild(btn)
    btn.className = 'btn'
    btn.innerText = 'Hello, World'
    return btn
}

document.body.appendChild(createButton())
