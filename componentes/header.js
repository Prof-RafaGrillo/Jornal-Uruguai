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
                    
                
                }
                
                .imglogo{
                    width: 30%;
                }
                
                .icones-cbc{
                    display: none;
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
                <img src="./Logo_News-removebg-preview (2).png" alt="" class="imglogo">
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