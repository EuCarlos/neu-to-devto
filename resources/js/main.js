let start = document.getElementById('start'), stop = document.getElementById('stop'); sreset = document.getElementById('reset'), 
  wm = document.getElementById('w_minutes'), ws = document.getElementById('w_seconds'),
  bm = document.getElementById('b_minutes'), bs = document.getElementById('b_seconds');


let startTimer;
start.addEventListener('click', () => {
  if(startTimer === undefined) startTimer = setInterval(timer, 1000)
  else alert("it's running already");
  
})
                      
reset.addEventListener('click', () => {
  wm.innerText = 25; ws.innerText = "00"; bm.innerText = 5; bs.innerText = "00";
  document.getElementById('counter').innerText = 0;
  stopInterval(); startTimer = undefined;
});

stop.addEventListener('click', () => {
  stopInterval(); startTimer = undefined;
})

const timer = () => {
  if(ws.innerText != 0){
    ws.innerText--;
  } else if(wm.innerText != 0 && ws.innerText == 0){
    ws.innerText = 59;
    wm.innerText--;
  }
  
  const breakTimerCountdownConditional = wm.innerText == 0 && ws.innerText == 0
  if(breakTimerCountdownConditional){
    if(bs.innerText !=0){
      bs.innerText--;
    } else if(bm.innerText != 0 && bs.innerText == 0) {
      bs.innerText =59;
      bm.innerText--;
    }
  }
  const textZeroCondicional = wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0
  if(textZeroCondicional){
    wm.innerText = 25; ws.innerText = "00";
    bm.innerText = 5; bs.innerText = "00";
    document.getElementById('counter').innerText++;
  }
}

const stopInterval = () => clearInterval(startTimer);