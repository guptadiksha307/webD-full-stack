var enterButton= document.getElementById("enter");
var input= document.getElementById("userInput");
var ul= document.querySelector("ul");
var item= document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}
function listLength(){
    return item.length;
}

function createListElement(){
    var li=document.createElement("li"); //creates an element "li"
    li.appendChild(document.createTextNode(input.value)); //makes text from input field the list text
    ul.appendChild(li); //adds li to ul
    input.value=""; //reset text input field
 
    //START STRIKEthrough
    //because it's in the function,it only adds it for new items
    function crossOut(){
        li.classList.toggle("done");

    }
    li.addEventListener("click",crossOut);
    //END STRIKETHORUGH

    //START ADD DELETE BUTTON
    var dBtn=document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click",deleteListItem);
    //END ADD DELETE BUTTON

    //ADD CLASS DELETE(DISPLAY:NONE)
    function deleteListItem()
{
    li.classList.add("delete")
}
//END ADD CLASS DELETE
}

function addListAfterClick(){

    if(inputLength()>0)
    {
        createListElement();
    }
}
function addListAfterKeypress(event){
    if(input.length()>0 && event.which===13)
    {
        createListElement();
    }
}

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterKeypress);


