let body = document.querySelector('body');
let hamburger = document.getElementById('hamburger');
let closeBtn = document.getElementById("close");
let navPanel = document.getElementById("nav-panel");
let modeSwitch = document.getElementById('mode-switch');
let modeText = document.getElementById('mode-text');


hamburger.onclick = () => {
    navPanel.classList.remove('close')
    hamburger.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
}

closeBtn.onclick = () => {
    navPanel.classList.add('close')
    hamburger.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
}


modeSwitch.onclick = () => {
    body.classList.toggle('dark');
    modeSwitch.classList.toggle('dark-mode');
    if(body.classList.contains('dark')){
        modeText.innerHTML = 'Dark mode';
    } else {
        modeText.innerHTML = 'Light Mode';
    }
}