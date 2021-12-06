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

function format(number){
    if (number < 10)
    {
        return ("0" + number);
    }
    return number;
}
h = document.querySelector("#h");
m = document.querySelector("#m");
s = document.querySelector("#s");
hs = document.querySelector("#hours");
ms = document.querySelector("#minutes");
ss = document.querySelector("#seconds");
hs.addEventListener('click', function(){if(!started){h.innerHTML = format(hs.value);}});
ms.addEventListener('click', function(){if(!started){m.innerHTML = format(ms.value);}});
ss.addEventListener('click', function(){if(!started){s.innerHTML = format(ss.value);}});



 function delay(n) {  
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
  }
sound = document.querySelector('.sound');

reset = document.querySelector('#reset');
reset.addEventListener("click", function () {
    seconds = 0;
    h.innerHTML = '00';
    m.innerHTML = '00';
    s.innerHTML = '00';
    started = false;
    styling();
});

st = document.querySelector('#st');
st.addEventListener('click', async function(){
started = !started;
if (started){
    seconds = hs.value*360 + ms.value*6 + ss.value;
}
styling();
while (started){
    await delay(1000);
    if (seconds == 0)
    {
        while (started)
        {
            await sound.play();
        }
        sound.pause()
        break;
    }
    else {
    seconds--;
    hour = Math.floor(seconds / 3600);
    minute = Math.floor((seconds - hour * 3600) / 60);
    second = Math.floor(seconds - hour * 3600 - minute * 60);
    h.innerHTML = format(hour);
    m.innerHTML = format(minute);
    s.innerHTML = format(second);
    }
}
}
);
});