function submitForm (){
    document.getElementById("send").submit();
}

function submitForm(){
    document.getElementById("#chatForm").submit();
}

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("day-theme");
    if(document.body.classList.contains("day-theme")){
        icon.src = "bx bxs-sun";
    }
    else{
        icon.src = "bx bxs-moon";
    }
}

function openChat(){
    document.getElementById("chat-form-container").style.display ="block";
} 

function closeChat(){
    document.getElementById("chat-form-container").style.display ="none";
}