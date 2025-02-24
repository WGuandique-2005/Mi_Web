// Definir la clase del custom element
class MiElemento extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');
        const descripcion = document.createElement('p');
        descripcion.textContent = "Este es un ejemplo de un custom element en JavaScript. Puedes usarlo para crear tus propios elementos HTML personalizados.";
        const boton = document.createElement('button');
        boton.textContent = "Haz clic aquí";
        boton.addEventListener('click', () => {prompt("Este es un custom element");});

        const style = document.createElement('style');
        style.textContent = `
            div {
                border: 2px solid #000;
                padding: 20px;
                margin: 10px;
                text-align: center;
                background-color: #f0f0f0;
                border-radius: 5px;
            }
            button {
                background-color:rgb(76, 106, 175);
                color: white;
                padding: 10px 20px;
                border: none;
                cursor: pointer;
                margin-top: 10px;
                border-radius: 5px;
            }
            button:hover {
                background-color:rgb(69, 84, 160);
            }
            p {
                font-size: 16px;
                color: #333;
            }
        `;

        container.appendChild(descripcion);
        container.appendChild(boton);
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}
customElements.define('mi-elemento', MiElemento);