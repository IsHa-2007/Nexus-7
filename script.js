document.addEventListener('DOMContentLoaded', function() {
    const button=document.querySelector('#grid');
    const about=document.querySelector('.about');
    button.addEventListener('click',function(){
        about.scrollIntoView({behavior:'smooth'});
    })
    const bootScreen = document.getElementById('boot-screen');
const bootText = document.getElementById('boot-text');
const lines = [
    "INITIALIZING NEXUS-7...",
    "SYSTEM CHECK COMPLETE.",
    "ACCESS GRANTED.",
    "WELCOME TO TECHFEST IIT BOMBAY"
];
function typeLine(line, callback) {
    let i = 0;
    const interval = setInterval(function() {
        bootText.innerHTML += line[i];
        i++;
        if(i === line.length) {
            clearInterval(interval);
            callback();
        }
    }, 50);
}function startBoot(index) {
    if(index === lines.length) {
        setTimeout(function() {
            bootScreen.style.opacity = '0';
            bootScreen.style.transition = 'opacity 1s ease';
            setTimeout(function() {
                bootScreen.style.display = 'none';
                document.getElementById('main-page').style.display = 'block';
            }, 1000);
        }, 500);
        return;
    }
    typeLine(lines[index], function() {
        bootText.innerHTML += '\n';
        setTimeout(function() {
            startBoot(index + 1);
        }, 300);
    });
}
document.getElementById('main-page').style.display = 'none';
startBoot(0);
})
