import {ModalTemplate} from './template';

var overlay = document.getElementById('overlay');
var container = document.getElementById('modal');

overlay.addEventListener('click',function(){
    container.innerHTML = '';
});
let modals = document.getElementsByClassName('modal-trigger');
ite(modals, createModal);

function createModal(modal){
    const modalContent = modal.getElementsByTagName('div').item(0);
    modal.addEventListener('click', function(){
        container.innerHTML = '';
        container.appendChild(modalContent);
    });
}

function ite(nodes, callback){
    let i = nodes.length;
    while(i--){
        callback(nodes[i]);
    }
}
