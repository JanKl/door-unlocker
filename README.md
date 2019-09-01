# door-unlocker – An unexpected Sunday project
One Saturday evening I came home and found that the lock on the front door was broken. My neighbour was able to open the door for me via the door intercom, but the landlord couldn't repair the lock until the next working day. Therefore another solution had to be found.

Because the lock could still be opened via the door intercom, I tried to control this contact via a Raspberry Pi. Fortunately that worked out. So I didn't have to wake my neighbors up to let me in.

The software in this repository is a quickly knocked together script that provides a web server on port 8080 and a web page on it. Click on the button there to switch GPIO pin 21 to +3.3 volts for 3 seconds. A small circuit attracts a relay, which finally switches the door opening contact.
