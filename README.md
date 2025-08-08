# Blackjack
A simple blackjack game made with HTML, css and JS


(env) pi@raspberrypi:~/escaperoom-messaging $ export FLASK_ENV=development
(env) pi@raspberrypi:~/escaperoom-messaging $ export FLASK_APP=escape_me
(env) pi@raspberrypi:~/escaperoom-messaging $ flask init-db
Traceback (most recent call last):
  File "/home/pi/env/bin/flask", line 5, in <module>
    from flask.cli import main
  File "/home/pi/env/lib/python3.11/site-packages/flask/__init__.py", line 7, in <module>
    from .app import Flask as Flask
  File "/home/pi/env/lib/python3.11/site-packages/flask/app.py", line 28, in <module>
    from . import cli
  File "/home/pi/env/lib/python3.11/site-packages/flask/cli.py", line 18, in <module>
    from .helpers import get_debug_flag
  File "/home/pi/env/lib/python3.11/site-packages/flask/helpers.py", line 16, in <module>
    from werkzeug.urls import url_quote
ImportError: cannot import name 'url_quote' from 'werkzeug.urls' (/home/pi/env/lib/python3.11/site-packages/werkzeug/urls.py)

