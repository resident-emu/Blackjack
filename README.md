# Blackjack
A simple blackjack game made with HTML, css and JS
                       
[Unit]
Description=Start Start_all.sh
After=graphical.target

[Service]
ExecStart=/home/pi/Start_all.sh
Restart=on-failure
RestartSec=5
Environment=DISPLAY=0:
Environment=XAUTHORITY=/home/pi/.Xauthority

[Install]
WantedBy=default.target




