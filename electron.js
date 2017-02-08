const { app, BrowserWindow } = require('electron');

let win;

function createWindow () {
    win = new BrowserWindow({ width: 1024, height: 768 });

    win.loadURL(`file://${__dirname}/index.html`);

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
