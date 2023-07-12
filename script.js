
const init=function(n){
    const main=document.querySelector('.main');
    for(let i=0;i<n;i++){ //to create collumns

        let col=document.createElement('div'); //create the new div
        col.classList.add('col');
        col.setAttribute('id','grid');
        main.appendChild(col);

        for(let i=0;i<n;i++){ //to create lines
            let line=document.createElement('div');
            line.classList.add('line');
            line.setAttribute('id','grid')
            hover(line);
            col.appendChild(line);
            

        }
    }
}

const hover=function(element){
    element.addEventListener('mouseenter',() =>{
        element.style.background='red';
    });
    element.addEventListener('mouseleave',() =>{
        element.style.background='green';
    });
}

const dimension=function(){
    var newdim=prompt ('choose the new dimensions');
    while(newdim >100){
        alert('that is too big try a number smaller than 100');
        newdim=prompt ('choose the new dimensions');
    }
    const main=document.querySelector('.main');
    while (main.firstChild){
        main.removeChild(main.firstChild);
    }

    init(newdim);
}