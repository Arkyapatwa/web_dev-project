let startmenu=document.getElementsByClassName("startmenu")[0];
let taskbar=document.getElementsByClassName("taskbar")[0];

taskbar.addEventListener('click',()=>{
    if (startmenu.style.bottom == "59px"){
        startmenu.style.bottom="-465px";
    }
    else{
        startmenu.style.bottom="59px";
    }
})