function loadDoc(){
    const mes = new XMLHttpRequest();
    mes.onload = function(){
        document.getElementById("one").innerHTML=this.responseText;

    } 
    mes.open("get","mes.txt");
    mes.send();

}
























