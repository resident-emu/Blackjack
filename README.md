# Blackjack
A simple blackjack game made with HTML, css and JS


Traceback (most recent call last):
  File "/home/pi/escaperoom-messaging/run.py", line 3, in <module>
    app = create_app(debug=True)
          ^^^^^^^^^^^^^^^^^^^^^^
  File "/home/pi/escaperoom-messaging/escape_me/__init__.py", line 19, in create_app
    socketio.init_app(app)
  File "/home/pi/env/lib/python3.11/site-packages/flask_socketio/__init__.py", line 243, in init_app
    self.server = socketio.Server(**self.server_options)
                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/pi/env/lib/python3.11/site-packages/socketio/base_server.py", line 34, in __init__
    self.eio = self._engineio_server_class()(**engineio_options)
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/pi/env/lib/python3.11/site-packages/engineio/base_server.py", line 83, in __init__
    self._async = importlib.import_module(
                  ^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/lib/python3.11/importlib/__init__.py", line 126, in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "<frozen importlib._bootstrap>", line 1206, in _gcd_import
  File "<frozen importlib._bootstrap>", line 1178, in _find_and_load
  File "<frozen importlib._bootstrap>", line 1149, in _find_and_load_unlocked
  File "<frozen importlib._bootstrap>", line 690, in _load_unlocked
  File "<frozen importlib._bootstrap_external>", line 940, in exec_module
  File "<frozen importlib._bootstrap>", line 241, in _call_with_frames_removed
  File "/home/pi/env/lib/python3.11/site-packages/engineio/async_drivers/eventlet.py", line 1, in <module>
    from eventlet.green.threading import Event
  File "/home/pi/env/lib/python3.11/site-packages/eventlet/__init__.py", line 17, in <module>
    from eventlet import convenience
  File "/home/pi/env/lib/python3.11/site-packages/eventlet/convenience.py", line 7, in <module>
    from eventlet.green import socket
  File "/home/pi/env/lib/python3.11/site-packages/eventlet/green/socket.py", line 4, in <module>
    __import__('eventlet.green._socket_nodns')
  File "/home/pi/env/lib/python3.11/site-packages/eventlet/green/_socket_nodns.py", line 11, in <module>
    from eventlet import greenio
  File "/home/pi/env/lib/python3.11/site-packages/eventlet/greenio/__init__.py", line 3, in <module>
    from eventlet.greenio.base import *  # noqa
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/pi/env/lib/python3.11/site-packages/eventlet/greenio/base.py", line 32, in <module>
    socket_timeout = eventlet.timeout.wrap_is_timeout(socket.timeout)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/pi/env/lib/python3.11/site-packages/eventlet/timeout.py", line 166, in wrap_is_timeout
    base.is_timeout = property(lambda _: True)
    ^^^^^^^^^^^^^^^
TypeError: cannot set 'is_timeout' attribute of immutable type 'TimeoutError'


