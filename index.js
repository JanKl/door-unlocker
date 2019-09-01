const express = require('express');

const app = express();

app.get('/openDoor', (req, res) => {
    openDoor();
    res.status(200).send({
        success: 'true',
        message: 'door is open'
    });
});


app.use(express.static('public'));

const PORT = 8080;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});

const Gpio = require('onoff').Gpio;
const doorSwitch = new Gpio(21, 'out');

var isDoorOpen = false;

if (!Gpio.accessible) {
    console.error("GPIO not accessible");
    process.exit();
}

function openDoor() {
    if (isDoorOpen) {
        return;
    }

    doorSwitch.writeSync(1);
    isDoorOpen = true;

    setTimeout(closeDoor, 3000);
}

function closeDoor() {
    if (!isDoorOpen) {
        return;
    }

    doorSwitch.writeSync(0);
    isDoorOpen = false;
}

process.on('SIGINT', () => {
    doorSwitch.unexport();
});