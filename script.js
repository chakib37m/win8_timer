document.addEventListener("DOMContentLoaded", function() {
    for(var i=0; i<24; i++){
    var select = document.getElementById("hours");
    var option = document.createElement("OPTION");
    select.options.add(option);
    option.text = i;
    option.value = i;
}
for(var i=0; i<60; i++){
    var select = document.getElementById("minutes");
    var option = document.createElement("OPTION");
    select.options.add(option);
    option.text = i;
    option.value = i;
}
for(var i=0; i<60; i++){
    var select = document.getElementById("seconds");
    var option = document.createElement("OPTION");
    select.options.add(option);
    option.text = i;
    option.value = i;
}

started = false;
function styling(){
    btn = document.querySelector('#st');
    if (started)
    {
        btn.innerHTML = "Stop";
        btn.style.backgroundColor = "#e6475d";
    }
    else
    {
        btn.innerHTML = "Start";
        btn.style.backgroundColor = "#5ddd6c"
    }
}


h = document.querySelector("#h");
m = document.querySelector("#m");
s = document.querySelector("#s");
hs = document.querySelector("#hours");
ms = document.querySelector("#minutes");
ss = document.querySelector("#seconds");

hs.addEventListener('click', function(){h.innerHTML = '0' + hs.value;});
ms.addEventListener('click', function(){m.innerHTML = '0' + ms.value;});
ss.addEventListener('click', function(){s.innerHTML = '0' + ss.value;});
/******************************************************
 * need to change the 0
 * and make it two integers
 * ***************************************************
 */




});
