---
title: Dirty Server Manager
path: "/project/Dirty-Server-Manager"
created: "2015-05-28T22:40:32.169Z"
updated: "2015-05-28T22:40:32.169Z"
keywords: ["Avorion","Web Interface","Server","Mods"]
skills: ["CSS","HTML","JS","BASH","Lua","PHP","Apache","Linux","Ubuntu","Github"]
---
<center-content>
This is a project dedicated to server deployment, management, and exposing features to the client, for the game 'Avorion'
</center-content>

<project-summary>
After getting invloved in a MP/SP game named Avorion, I quickly realized that there was an oppurtunity for me. I could take my knowledge of linux servers and web development and create a project that many can use. This project is still in development, and available as an alpha release.
</project-summary>

Some more content here!


<code-display language="language-bash">
  Step 1: Verify or install these dependencies: lib32gcc1, tmux (V2.0+), php7.0, php7.0-gd

  sudo apt-get update
  sudo apt-get install lib32gcc1 tmux php7.0 php7.0-gd

  Step 2: Create a new user for avorion to run on. (Do not use root)

  sudo adduser avorion
  sudo su - avorion

  Step 3: Download the manager

  WARNING: The latest version of this is meant for avorion build 0.12 r8487 (BETA)
        In order to run and install this script for the current none BETA version.
          Use this command instead of the normal command below:
          wget -O DirtyServerManager.tar.gz https://github.com/dirtyredz/Dirty-Server-Manager/releases/download/1.0.10/DirtyServerManager.tar.gz

  wget -O DirtyServerManager.tar.gz avorion.dirtyredz.com

  Step 4: Unpack the tar file

  tar -xvf DirtyServerManager.tar.gz

  Step 5: Steamcmd and avorion server Installation

  ./manager install

  Step 6: After a succesful server installation you can start the server

  ./manager start

  Step 7: [Optional] To start the web interface run this commands

  ./manager start-web

  This command will start the PHP-web-server, this server is unable to handle ssl requests.
  Ultimatly the php server is not as robust as an apache server, that is why I include an apache settup below.

  Alternativly: [Optional] Apache settup for those who wish to take advantage of SSL(https)

  su root           'or another user with sudo access'
  sudo apt-get update
  sudo apt-get install apache2 libapache2-mod-php7.0
  cd /home/avorion
  sudo ./ApacheInstall.sh

  Regardless of which server you choose, the site will be accessed via:
  http://YOUR-IP-ADDRESS:The_Web_Port

  Step 8: After all is done and working properly be sure to secure your firewall with the appropriate commands. Remember to open ports for the game as well as the web interface These are the default ports you will need to open:

  tcp/27000
  udp/27000
  udp/27003
  udp/27020  -Steam
  tcp/27020  -Steam
  udp/27021  -Steam
  tcp/27021  -Steam
  tcp/8080   -web interface default
  tcp/443    -If using apche/ssl

  Unfortunately I do not provide any commands or any scripts to setup your firewall, this you will have to do manually or risk your server being exposed.

  Check help for more commands:
</code-display>
