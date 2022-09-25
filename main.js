

let navBar = document.getElementsByClassName('navBar');
console.log(navBar);

//Archivo
navBar.archivo.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopImmediatePropagation();
})


//Editar
let gustos = document.getElementsByClassName('gusto');

navBar.editar.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopImmediatePropagation();
    let isActive = (navBar.editar.classList.toggle('optionActive'));
    editMode(gustos,isActive);
})
// let editOption = document.getElementsByClassName('edit');
// console.log(editOption);

// console.log(gustos);

for (const gusto of gustos) {
    for (const child of gusto.children) {
        // console.log(child);
        if(child.classList.contains('foto')) child.classList.toggle('foto--editInactive');
        if(child.classList.contains('box')) child.classList.toggle('box--editInactive');
        if(child.classList.contains('cucharita')) child.classList.toggle('cucharita--editInactive');
    }
}
    

//Facturar
navBar.facturar.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopImmediatePropagation();
})