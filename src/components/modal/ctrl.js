"use strict";
var overlay = document.getElementById('overlay');
var container = document.getElementById('modal');
overlay.addEventListener('click', function () {
    container.innerHTML = '';
});
var modals = document.getElementsByClassName('modal-trigger');
ite(modals, createModal);
function createModal(modal) {
    var modalContent = modal.getElementsByTagName('div').item(0);
    modal.addEventListener('click', function () {
        container.innerHTML = '';
        container.appendChild(modalContent);
    });
}
function ite(nodes, callback) {
    var i = nodes.length;
    while (i--) {
        callback(nodes[i]);
    }
}
