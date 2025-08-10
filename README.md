# Blackjack
A simple blackjack game made with HTML, css and JS
                       
                 
[Unit]
Description=Start Start_all.sh
After=graphical.target

[Service]
User=pi
Group=pi
ExecStart=/home/pi/Start_all.sh
Restart=on-failure
RestartSec=5
Environment=DISPLAY=:0
Environment=XAUTHORITY=/home/pi/.Xauthority

[Install]
WantedBy=graphical.target

uid=1000(pi) gid=1000(pi) groups=1000(pi),4(adm),20(dialout),24(cdrom),27(sudo),29(audio),44(video),46(plugdev),60(games),100(users),102(input),105(render),110(netdev),995(spi),994(i2c),993(gpio),115(lpadmin)






