function initial(){
    document.getElementById('modal').style.visibility = "hidden";
    document.getElementById('modal').style.opacity = "0";
    document.getElementById('flexbox').style.filter = "none";
    document.getElementById('first').style.filter = "none";
    document.querySelector('.sentence').style.filter = "none";
    let nodelist = document.querySelectorAll('.middle');

    if(nodelist.length > 0){
        document.querySelector('.sentence').style.display = "none"
    }
}

function visible(){
    document.getElementById('modal').style.visibility = "visible";
    document.getElementById('modal').style.opacity = "1";
    let nodelist = document.querySelectorAll('.middle');
}

let popup1 = document.getElementById('popup');
popup1.addEventListener("click",enableModal);

function enableModal(){
    visible();
    document.getElementById('flexbox').style.filter = "blur(5px)";
    document.getElementById('first').style.filter = "blur(5px)";
    document.querySelector('.sentence').style.filter = "blur(5px)";
}
let closeModal = document.getElementById('button2');
closeModal.addEventListener("click",initial);

let addBtn = document.getElementById('button1');
addBtn.addEventListener("click",addCard);
i = 0;
function addCard(e) {
    i++;
    let flexbox = document.getElementById('flexbox');
    let card = document.createElement("div");
    card.className += "middle";
    let mainId;
    let heading = document.createElement("a");
    heading.className += "heading1";
    let input = document.getElementById('input1').value;
    
    if(input===""){
        alert("Cant be Empty");
        i--;
    }
    else{
        heading.innerHTML = input;
        card.appendChild(heading);
        flexbox.appendChild(card);
        mainId = "card"+i;
        card.setAttribute('id',mainId);
    }
    let heading1 = document.querySelectorAll('.heading1');
    heading1.forEach(i => i.addEventListener("click",showConatiner));

    
    let horizontal = document.createElement("hr");
    card.appendChild(horizontal);
    let itemList = document.createElement("ul");
    itemList.className +="itemlist";
    itemList.setAttribute('id',mainId+'-list');
    card.appendChild(itemList);
    let icons = document.createElement("div");
    icons.innerHTML = "<a class=icon1><i class=fa id=icon1>&#xf055;</i></a><a class=icon2><i id=icon2 onclick = deleteCard() class=fa>&#xf014;</i></a>";
    icons.className += "icons";
    card.appendChild(icons);
    let addnewItem = document.querySelectorAll('.icon1');
    addnewItem.forEach(i => i.addEventListener("click",enableAdditem));

    let delete1 = document.querySelectorAll('.icon2');
    delete1.forEach(i => i.addEventListener("click",deleteCard));

    
    console.log(mainId);
    initial();
}

function deleteCard(e) {
    var id1 = e.target.parentNode.parentNode.parentNode.id;
    console.log(id1);
    var finalDelete = document.getElementById(id1);
    finalDelete.remove();
    homePage();
    let nodelist = document.querySelectorAll('.middle');

    if(nodelist.length === 0){
        document.querySelector('.sentence').style.display = "block"
    }
}

function printD(){
    console.log('1');
}






let clone_div = document.getElementById('container');
function showConatiner(e) {
    let nodelist = document.querySelectorAll('.middle');
    let div_id = e.target.parentNode.id;
    console.log(div_id)
    sessionStorage.setItem("div_id1",div_id);
    
    for(i=0;i<nodelist.length;i++){
        if(nodelist[i].id === div_id){
            nodelist[i].style.display = "block";
            nodelist[i].style.position = "absolute"
            nodelist[i].style.top = "150px";
            nodelist[i].style.right = "650px";
        }
        else{
            nodelist[i].style.display = "none";
        }
    }
    let actual_div = document.getElementById(div_id);
    let heading = actual_div.querySelector('.heading1').textContent;
    document.getElementById('dynamicHeading').innerHTML = heading;
    document.getElementById('first').style.display = "none";
    document.getElementById('container').style.display = "block";
    nodlist = document.querySelectorAll('.middle');
    console.log(nodlist.div_id);


    
}


function homePage(){
    let nodelist = document.querySelectorAll('.middle');
    
    for(i=0;i<nodelist.length;i++){
        nodelist[i].style.display = "block";
        nodelist[i].style.position ="static";
    }

    document.getElementById('first').style.display = "block";
    document.getElementById('container').style.display = "none";
    
}



function enableAdditem(e) {
    let popupid = e.target.parentNode.parentNode.parentNode.id;
    console.log(popupid);
    document.getElementById('modal1').style.visibility = "visible";
    document.getElementById('modal1').style.opacity = "1";
    sessionStorage.setItem("addListIn",popupid);
    document.getElementById('flexbox').style.filter = "blur(5px)";
    document.getElementById('first').style.filter = "blur(5px)";
    document.querySelector('.sentence').style.filter = "blur(5px)";
}

function disableAdditem(){
    document.getElementById('modal1').style.visibility = "hidden";
    document.getElementById('modal1').style.opacity = "0";
    document.getElementById('flexbox').style.filter = "none";
    document.getElementById('first').style.filter = "none";
    document.querySelector('.sentence').style.filter = "none";
}

let addItem = document.getElementById('addItem');
addItem.addEventListener("click",addItemFn);

function addItemFn(e) {
    let id = sessionStorage.getItem("addListIn");
    let card = document.getElementById(id);
    console.log(card);
    let input = document.getElementById('input2').value;
    console.log(input);
    let list = document.createElement("li");
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        let span3 = document.createElement("span");
    if(input===""){
        alert("Cant be Empty");
    }
    else{
        
        list.appendChild(span1);
        list.appendChild(span2);
        list.appendChild(span3);
        span1.innerHTML = input;
        let check = document.createElement('button');
        check.className += "chkitem";
        check.appendChild(document.createTextNode('Completed'));
        span2.appendChild(check);
        let deleteItem = document.createElement('button');
        deleteItem.className += "dltitem";
        deleteItem.appendChild(document.createTextNode('Delete'));
        span3.appendChild(deleteItem);
        let ul1 = card.querySelector('.itemlist');
        ul1.appendChild(list);

        let deleteli = document.querySelectorAll('.dltitem');
        deleteli.forEach(i => i.addEventListener("click",dltLi));

        let checkli = document.querySelectorAll('.chkitem');
        checkli.forEach(i => i.addEventListener("click",chkLi));
        console.log(clone_div);
        
    }
    
    disableAdditem();
}

function dltLi(e) {
    let toDelete = e.target.parentNode.parentNode;
    toDelete.remove();
}

function chkLi(e) {
    let toComplete = e.target.parentNode.parentNode;
    toComplete.style.color = "purple";
    toComplete.style.textDecoration = "line-through";
    toComplete.querySelector('.chkitem').style.display = "none";
}