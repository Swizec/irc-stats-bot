irc-stats-bot
=============

An experiment in creating an irc stats bot that pushes statistics
about an irc channel to graphite ... in node.js


Install
============

   npm install .

Graphite
-----------

You need this sexy beast to draw the pretty graphs and stuff

   pip install whisper
   pip install carbon
   pip install graphite-web
   pip install django
   pip install django-tagging


Basic config stuff

   configure DATABASES in /opt/graphite/webapp/graphite/local_settings.py

   /opt/graphite$ PYTHONPATH=`pwd`/webapp:`pwd`/whisper python ./webapp/graphite/manage.py syncdb

   /opt/graphite$ cp carbon/conf/carbon.conf.example carbon/conf/carbon.conf

   /opt/graphite$ echo DEBUG = True > webapp/graphite/local_settings.py

Run it

   /opt/graphite$ PYTHONPATH=`pwd`/whisper ./bin/run-graphite-devel-server.py

   /opt/graphite$ cp carbon/conf/carbon.conf.example carbon/conf/carbon.conf

   /opt/graphite$ PYTHONPATH=`pwd`/whisper ./carbon/bin/carbon-cache.py --debug start

