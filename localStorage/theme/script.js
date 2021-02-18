let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');
console.log(style);

if (style == null) {
    setTheme('light');
} else {
    setTheme(style);
}

for (let i of switches) {
    console.log(i);
    i.addEventListener('click', function () {
        let theme = this.dataset.theme;
        console.log(theme);
        setTheme(theme);
    });
}

function setTheme(theme) {
    if (theme == 'light') {
        document.getElementById('switcher-id').href = 'light.css';
    } else if (theme == 'sky') {
        document.getElementById('switcher-id').href = 'sky.css';
    } else if (theme == 'purple') {
        document.getElementById('switcher-id').href = 'purple.css';
    } else if (theme == 'dark') {
        document.getElementById('switcher-id').href = 'dark.css';
    }
    localStorage.setItem('style', theme);
}