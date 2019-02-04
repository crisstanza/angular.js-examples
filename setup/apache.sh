#!/bin/bash

clear
cd "$(dirname "$0")"

#
# Author: Cris Stanza, 04-Fev-2019
#

APACHE_HOME=/etc/apache2
CONF_FILE=999-angular.js-examples.conf

systemctl stop apache2

cp ${CONF_FILE} ${APACHE_HOME}/sites-available/
chmod 644 ${APACHE_HOME}/sites-available/${CONF_FILE}
rm ${APACHE_HOME}/sites-enabled/${CONF_FILE}
ln -s ../sites-available/${CONF_FILE} ${APACHE_HOME}/sites-enabled/${CONF_FILE}

systemctl start apache2
