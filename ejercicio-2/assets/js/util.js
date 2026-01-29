const consoleList = document.getElementById('console-log');
function log(msg,type='info'){
    const li= document.createElement('li');
    li.innerHTML=`>> ${msg}`;
    li.className=`log-${type}`;
    consoleList.appendChild(li);
    consoleList.scrollTop = consoleList.scrollHeight;
}

const overlay = document.getElementById('overlay');
const overlayText = document.getElementById('overlay-text');
const statusSpan = document.getElementById('mission-status');
function toggleOverlay(show,text='') {
    if (show) {
        overlay.classList.remove('d-none');
        overlayText.innerText=text;
    } else {
         overlay.classList.add('d-none');
    }
}