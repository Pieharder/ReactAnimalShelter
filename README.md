# Shelter WOW!

<a href='https://github.com/PRKille/ReactAnimalShelter/stargazers'>
  <img src='https://img.shields.io/github/stars/PRKille/ReactAnimalShelter.svg?color=yellow&style=plastic'>
</a>
<a href='https://github.com/PRKille/ReactAnimalShelter/network/members'>
  <img src='https://img.shields.io/github/forks/PRKille/ReactAnimalShelter?color=blueviolet&style=plastic'>
</a>
<a href='https://github.com/PRKille/ReactAnimalShelter/issues'>
  <img src='https://img.shields.io/github/issues/PRKille/ReactAnimalShelter?color=brightgreen&style=plastic'>
</a>

## A animal shelter frontend application built with React and Love.

#### By Dusty McCord, Steph Podolak, Patrick Kille, Geoff Goetz

## Components Hierarchy

![Diagram](./Shelter_WOW_.jpeg) 


## User Stories


|Component|Story|
|:---:|:---|
| Add Cat| Users should be able to add and update a cat listing with name, age, breed, gender |
| List Cats | Users should be able to list all cats in the shelter |
| Cat Details | Users should be able to view a specific cat's details by clicking on a cat in the cat list |
| Adopt a Cat | Users should be able to adopt a cat and that cat would be removed from the shelter list |
| Add Dog | Users should be able to add and update a dog listing with name, age, breed, gender |
| List Dogs | Users should be able to list all dogs in the shelter |
| Dog Details | Users should be able to view a specific dog's details by clicking on a dog in the dog list |
| Adopt a Dog | Users should be able to adopt a dog and that dog would be removed from the shelter list |

## Setup/Installation Requirements

### Install .NET Core

#### on macOS:
* _[Click here](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.106-macos-x64-installer) to download a .NET Core SDK from Microsoft Corp._
* _Open the file (this will launch an installer which will walk you through installation steps. Use the default settings the installer suggests.)_

#### on Windows:
* _[Click here](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.203-windows-x64-installer) to download the 64-bit .NET Core SDK from Microsoft Corp._
* _Open the .exe file and follow the steps provided by the installer for your OS._

#### Install dotnet script
_Enter the command ``dotnet tool install -g dotnet-script`` in Terminal (macOS) or PowerShell (Windows)._

### Install MySQL and MySQL Workbench

#### on macOS:
_Download the MySQL Community Server DMG File [here](https://dev.mysql.com/downloads/file/?id=484914). Follow along with the installer until you reach the configuration page. Once you've reached Configuration, set the following options (or user default if not specified):_
* use legacy password encryption
* set password (and change the password field in appsettings.json file of this repository to match your password)
* click finish
* open Terminal and enter the command ``echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.bash_profile`` if using Git Bash.
* Verify MySQL installation by opening Terminal and entering the command ``mysql -uroot -p{your password here, omitted brackets}``. If you gain access to the MySQL command line, installation is complete. An error (e.g., -bash: mysql: command not found) indicates something went wrong.

_Download MySQL Workbench DMG file [here](https://dev.mysql.com/downloads/file/?id=484391). Install MySQL Workbench to Applications folder. Open MySQL Workbench and select Local instance 3306 server, then enter the password you set. If it connects, you're all set._

#### on Windows:
_Download the MySQL Web Installer [here](https://dev.mysql.com/downloads/file/?id=484919) and follow along with the installer. Click "Yes" if prompted to update, and accept license terms._
* Choose Custom setup type
* When prompted to Select Products and Features, choose the following: MySQL Server (Will be under MySQL Servers) and MySQL Workbench (Will be under Applications)
* Select Next, then Execute. Wait for download and installation (can take a few minutes)
* Advance through Configuration as follows:
  - High Availability set to Standalone.
  - Defaults are OK under Type and Networking.
  - Authentication Method set to Use Legacy Authentication Method.
  - Set password to epicodus. You can use your own if you want but epicodus will be assumed in the lessons.
  - Unselect Configure MySQL Server as a Windows Service.
* Complete installation process

_Add the MySQL environment variable to the System PATH. Instructions for Windows 10:_
* Open the Control Panel and visit _System > Advanced System Settings > Environment Variables..._
* Select _PATH..._, click _Edit..._, then _Add_.
* Add the exact location of your MySQL installation and click _OK_. (This location is likely C:\Program Files\MySQL\MySQL Server 8.0\bin, but may differ depending on your specific installation.)
* Verify installation by opening Windows PowerShell and entering the command ``mysql -uroot -p{your password here, omitted brackets}``. It's working correctly if you gain access to the MySQL command line. Exit MySQL by entering the command ``exit``.
* Open MySQL Workbench and select Local instance 3306 server (may be named differently). Enter the password you set, and if it connects, you're all set.

### To Clone and Run this project:

Clone the project by typing this command into your terminal.
```sh
git clone https://github.com/PRKille/ReactAnimalShelter.git
```

Navigate to the new project folder by typing:
```sh
cd ReactAnimalShelter
```
To Start the database server:
Navigate to the database folder with:
```sh
cd AnimalShelter.Solution
cd AnimalShelter
```
Install all required packages and start the server by inputting:
```sh
dotnet restore
dotnet build
dotnet ef database update
dotnet run
```
Move to the project directory with:
```sh
cd ..
cd ..
cd ReactAnimalShelter
```

Install all required packages with this command:
```sh
npm install
```

In the project directory, you can run: 
 ```sh
 npm start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

 ```sh
 npm test
```
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

 ```sh
  npm build
 ```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

 ```sh
  npm eject
 ```
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Support and Contact Details
_Have a bug or an issue with this application? [Open a new issue](https://github.com/PRKille/ReactAnimalShelter/issues) here on GitHub._

## Technologies Used
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* Components Diagram made with [Draw IO](https://draw.io/).

## License
[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Dusty McCord, Steph Podolak, Geoff Goetz, Patrick Kille_**