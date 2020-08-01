'use_strict'
console.log(localStorage.getItem('osama'));
if (!localStorage.getItem('toDoArr')) {
    localStorage.setItem('toDoArr', JSON.stringify([]))
} else {

    render(JSON.parse(localStorage.getItem('toDoArr')));
}

var addform = document.getElementById('addForm');

addform.addEventListener('submit', function () {
    event.preventDefault();
    var whatToDo = event.target.wToDo.value;
    var tempArr = JSON.parse(localStorage.getItem('toDoArr'));
    tempArr.push(whatToDo);
    localStorage.setItem('toDoArr', JSON.stringify(tempArr));
    render(tempArr);
    // var tempArr;
    // if(localStorage.getItem('toDoArr')){
    //     tempArr = JSON.parse(localStorage.getItem('toDoArr'));
    // }else{
    //     tempArr=[];
    //     localStorage.setItem('toDoArr', JSON.stringify(tempArr));
    // }
    // localStorage.setItem('toDoArr', JSON.stringify(tempArr.push(toDoArr)))
    //     render(tempArr);
});
function render(tempArr) {
    if (document.getElementsByTagName('ul')[0]) {
        document.getElementsByTagName('ul')[0].remove();
    }
    var todo = document.getElementById('toDo');
    var ul = document.createElement('ul');


    for (let index = 0; index < tempArr.length; index++) {
        var li = document.createElement('li');
        li.innerHTML = tempArr[index];
        li.style.display = 'inline-block'
        li.setAttribute('id', index + 'li')

        var x = document.createElement('span')
        x.setAttribute('id', index)
        x.innerHTML = " X"
        var br = document.createElement('br')
        ul.appendChild(br);
        ul.appendChild(li);
        ul.appendChild(x);



    } todo.appendChild(ul);
    deleteItem(tempArr);
}

function deleteItem(tempArr) {


    // for (let index = 0; index < tempArr.length; index++) {
    //     document.getElementById(index).addEventListener('click',function(){
    //         console.log(index);
    //     tempArr.splice(index,1);
    //     localStorage.setItem('toDoArr',JSON.stringify(tempArr));
    //     render(tempArr);

    //     // document.getElementsByTagName('li')[index].remove();
    //     // document.getElementsByTagName('span')[index].remove();


    // })

    document.getElementsByTagName('ul')[0].addEventListener('click', function (event) {
        console.log(event.target.tagName);
        if (event.target.tagName == 'SPAN' && event.target.id) {
            tempArr.splice(event.target.id, 1);
            localStorage.setItem('toDoArr', JSON.stringify(tempArr));
            render(tempArr);
        }
        // document.getElementsByTagName('li')[index].remove();
        // document.getElementsByTagName('span')[index].remove();

    });
}





