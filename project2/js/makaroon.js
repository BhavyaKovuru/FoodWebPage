function closeBars(element){
    element.classList.toggle("change");
}

function buttonActivateIce(){
    //console.log('fn called');
    document.getElementById('drinks').style.display= "none";
    document.getElementById('ice').style.display= "block";
}
function buttonActivateDrinks(){
    //console.log('fn called');
    document.getElementById('drinks').style.display= "block";
    document.getElementById('ice').style.display= "none";
}