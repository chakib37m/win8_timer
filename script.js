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

});