import React from "react";

import ProjectPage from "../components/ProjectPage";

export default class DirtyServerManager extends React.Component {

    render() {
        const Skills = ['CSS','HTML','JS','bash','lua','php','apache','linux','Ubuntu','Debian','Centos','Github']
        return (
            <ProjectPage Title="Dirty Server Manager" SubTitle1="Avorion" SubTitle2="Server" SubTitle3="Web Interface"
              Role="Project Lead" Context="Developer"
              Year="2017"
              Description="This is a project dedicated to server deployment, management, and exposing features to the client, for the game 'Avorion'"
              Experience="After getting invloved in a MP/SP game named Avorion, I quickly realized that there was an oppurtunity for me. I could take my knowledge of linux servers and web development and create a project that many can use.  This project is still in development, and available as an alpha release."
              Skills={Skills}
              CodeExample={true}
              CodeExampleBash={"Step 1: Verify or install these dependencies: lib32gcc1, tmux (V2.0+), php7.0, php7.0-gd\n\n\n\nsudo apt-get update\nsudo apt-get install lib32gcc1 tmux php7.0 php7.0-gd\n\nStep 2: Create a new user for avorion to run on. (Do not use root)\n\nsudo adduser avorion\nsudo su - avorion\n\nStep 3: Download the manager\n\nWARNING: The latest version of this is meant for avorion build 0.12 r8487 (BETA)\n       In order to run and install this script for the current none BETA version.\n         Use this command instead of the normal command below:\n         wget -O DirtyServerManager.tar.gz https://github.com/dirtyredz/Dirty-Server-Manager/releases/download/1.0.10/DirtyServerManager.tar.gz\n\nwget -O DirtyServerManager.tar.gz avorion.dirtyredz.com\n\nStep 4: Unpack the tar file\n\ntar -xvf DirtyServerManager.tar.gz\n\nStep 5: Steamcmd and avorion server Installation\n\n./manager install\n\nStep 6: After a succesful server installation you can start the server\n\n./manager start\n\nStep 7: [Optional] To start the web interface run this commands\n\n./manager start-web\n\nThis command will start the PHP-web-server, this server is unable to handle ssl requests.\nUltimatly the php server is not as robust as an apache server, that is why I include an apache settup below.\n\nAlternativly: [Optional] Apache settup for those who wish to take advantage of SSL(https)\n\nsu root           'or another user with sudo access'\nsudo apt-get update\nsudo apt-get install apache2 libapache2-mod-php7.0\ncd /home/avorion\nsudo ./ApacheInstall.sh\n\nRegardless of which server you choose, the site will be accessed via:\nhttp://YOUR-IP-ADDRESS:The_Web_Port\n\nStep 8: After all is done and working properly be sure to secure your firewall with the appropriate commands. Remember to open ports for the game as well as the web interface These are the default ports you will need to open:\n\ntcp/27000\nudp/27000\nudp/27003\nudp/27020  -Steam\ntcp/27020  -Steam\nudp/27021  -Steam\ntcp/27021  -Steam\ntcp/8080   -web interface default\ntcp/443    -If using apche/ssl\n\nUnfortunately I do not provide any commands or any scripts to setup your firewall, this you will have to do manually or risk your server being exposed.\n\nCheck help for more commands:"}

              href="https://github.com/dirtyredz/Dirty-Server-Manager"
              hrefText="View On Github"
              />
        );
    }
}
