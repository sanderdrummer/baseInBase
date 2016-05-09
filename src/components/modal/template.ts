
export class ModalTemplate{
    triggerText:string;
    modal;
    constructor(triggerText, modal){
        this.triggerText = triggerText;
        this.modal = modal;
    }
    createTrigger(){
        return `
        <a href="#" id="modalTrigger"> ${this.triggerText} </a>
        `
    }
    createModal(){
        return `
        <div id="modal">
            <div id="content">
                
            </div>
        </div>
        <div id="background"> </div>
        `;

    }
    
} 
