var item;

function imagevisibility(ele){
    if(ele.style.backgroundColor!='rgb(139, 69, 19)'){
        ele.style.backgroundColor='rgb(139, 69, 19)';
        item=ele.src;
        ele.src="../images/bkimg.png";
        ele.innerHTML = ele.alt;
    }
    else{
        ele.src=item;
        ele.style.backgroundColor='rgb(243, 194, 151)';
    }
}