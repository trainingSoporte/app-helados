

//main -- let gustos = document.getElementsByClassName('gusto');


const handleClickSave = (e) => {
    console.log('save');
    e.stopImmediatePropagation();
    // !patch e.path not supported
    let _path=[];
    if(e.path === undefined){
        
        let _node = e.target.parentNode;
        while (_node !== null) {
            _path.push(_node);
            _node = _node.parentNode;
        }
    }
    else _path = e.path;
    _path.forEach(element => {
        //     console.log(element);
        if (element.classList != undefined && element.classList.contains('gusto')) {

            element.addEventListener('click', handleClickEdit);
            for (const child of element.children) {
                // console.log(child);
                if (child.classList.contains('foto')) child.classList.toggle('foto--editActive');
                if (child.classList.contains('box')) {
                    child.lastElementChild.textContent = child.firstElementChild.value;
                    child.classList.toggle('box--editActive');
                };
                if (child.classList.contains('cucharita')) {
                    child.removeEventListener('click', handleClickSave);
                    child.classList.toggle('cucharita--editActive');
                }

            }

        }
    });

}

const handleClickEdit = (e) => {
    console.log(e);
    e.stopImmediatePropagation();
    console.log(e.target.parentNode);
    // !patch e.path not supported
    let _path=[];
    if(e.path === undefined){
        
        let _node = e.target.parentNode;
        while (_node !== null) {
            _path.push(_node);
            _node = _node.parentNode;
        }
    }
    else _path = e.path;
    _path.forEach(element => {
        if (element.classList != undefined && element.classList.contains('gusto')) {
            element.removeEventListener('click', handleClickEdit);
            for (const child of element.children) {
                // console.log(child);
                if (child.classList.contains('foto')) child.classList.toggle('foto--editActive');
                if (child.classList.contains('box')) {
                    child.firstElementChild.value = child.lastElementChild.textContent;
                    child.firstElementChild.focus();
                    child.classList.toggle('box--editActive');
                }
                if (child.classList.contains('cucharita')) {
                    child.addEventListener('click', handleClickSave);
                    child.classList.toggle('cucharita--editActive');
                }

            }
        }
    });



}


const editMode = (gustos, isActive) => {

    for (const gusto of gustos) {
        console.log(gusto);
        if (isActive)
            gusto.addEventListener('click', handleClickEdit);
        else {
            gusto.removeEventListener('click', handleClickEdit);

            for (const child of gusto.children) {
                // console.log(child);
                if (child.classList.contains('foto')) child.classList.remove('foto--editActive');
                if (child.classList.contains('box')) child.classList.remove('box--editActive');
                if (child.classList.contains('cucharita')) {
                    child.removeEventListener('click', handleClickSave);
                    child.classList.remove('cucharita--editActive')
                };
            }
        }
    }
}



