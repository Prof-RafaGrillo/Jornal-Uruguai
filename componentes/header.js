class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <style>
                .cabecalho{
                    display: flex;
                    background-color: rgba(224, 236, 255, 0.897);
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                
                .cabecalho--menu{
                    height: 24px;
                    width: 24px;
                    background-image: url("./Imagens/Menu.svg");
                    background-repeat: no-repeat;
                    display: inline-block;
                    background-position: center;
                    
                }
                .container {
                    display:flex;
                    align-items: center;
                }

                .container--botao{
                    border: none;
                    background-color: transparent;
                }

                .imglogo{
                    width: 30%;
                }
                
                .icones-cbc{
                    display: none;
                }

                .lista-menu{
                    display:none;
                    position: absolute;
                    top:100%;
                    right: 40;
                    width: 60%;
                }

                .lista-menu__item {
                    text-transform: uppercase;  
                    padding: 1em;
                    background-color: rgba(224, 236, 255, 0.95);
                    list-style-type: none;
                }

                .lista-menu__titulo {
                    color: #ff9900;
                    font-weight: 700;
                }
                .lista-menu__link {
                    background: red ;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-decoration: none;
                    
                }

               

                @media screen and (min-width: 768px) {
                    .botoes {
                        display: flex;
                    }
                    .cabecalho{
                        background-color: rgba(224, 236, 255, 0.897)  ;
                        display: flex;
                        justify-content: space-between;
                        color: rgb(33, 32, 32);
                        
                    }
                    .icones-cbc{
                        display: block;
                    }
                    
                    .imglogo1{
                        text-align: center;
                        width: 18%;
                    }
                    
                    .imglogo{
                        width: 12%;
                        margin-top: 0px;
                        cursor: pointer;
                        text-align: center;
                    
                    }
                    
                    .botao{
                        display: flex;
                        justify-content: space-between;
                        background-color: #03961b;
                        border: none; 
                        color: white; 
                        padding: 15px 32px; 
                        text-align: center; 
                        text-decoration: none; 
                        display: inline-block;
                        font-size: 16px;
                        margin: 4px 2px;
                        cursor: pointer; 
                        border-radius: 12px; 
                        margin-top: 35px;
                    
                        font-family: "Tauri", sans-serif;
                    }
                    .botao:hover{
                      
                        background-color: #a6f0ad; 
                        color: black; 
                    
                    }
            </style>
            <header class="cabecalho">
                <div class="container">
                    <button class="container--botao" onclick="abrirMenu()">
                            <span class="cabecalho--menu"></span>
                    </button>
                    <ul class="lista-menu">
                        <li class= "lista-menu__item">
                            <a class="lista-menu__link" href="#" target="_blank" rel="noopener noreferrer">Home</a>
                        </li>
                        <li class= "lista-menu__item">
                            <a class="lista-menu__link" href="#" target="_blank" rel="noopener noreferrer">Notícias</a>
                        </li>
                        <li class= "lista-menu__item">
                            <a class="lista-menu__link" href="#" target="_blank" rel="noopener noreferrer">Projetos</a>
                        </li>
                        <li class= "lista-menu__item">
                            <a class="lista-menu__link" href="../Pages/Scratch/index-scratch.html" target="_blank" rel="noopener noreferrer">Scratch</a>
                        </li>
                        <li class= "lista-menu__item">
                            <a class="lista-menu__link" href="#" target="_blank" rel="noopener noreferrer">Projeto Agrinho</a>
                        </li>
                    </ul>
                    <img src="./Logo_News-removebg-preview (2).png" alt="" class="imglogo">
                </div>
                <img src="Po__1_-removebg-preview.png" alt="" class="imglogo1">
                <div class="icones-cbc">
                        <button class="botao">Home</button>
                        <button class="botao">Login</button>
                        <button class="botao">Pages</button>
                </div>  
            </header>
        
        `;
    }
}


customElements.define('header-component', Header);

var verificaoMenu
    verificaoMenu = false;

function abrirMenu(){
    const menu = document.querySelector(".lista-menu")
    if (verificaoMenu === false){
        verificaoMenu = true
        menu.style.display = "block"
    } else{
        verificaoMenu = false
        menu.style.display = "none"
    }
    

}