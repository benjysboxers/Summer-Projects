let myList;
let i;
myList = document.getElementsByTagName("LI");
i;
// Create a "close" button and append it to each list item
for (i=0; i< myList.length; i++){
    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00D7');

    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}


// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
i; 
for (i=0; i< close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item