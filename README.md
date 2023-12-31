# Somaiya Awards System 

### Documentation
____

#### Introduction

Somaiya Awards system is a full stack web application for all institutes under Somaiya Trust . The web application was built to ease the process of filling out the apllications for somaiya awards and selecting the best candidate of all . The web application helps the user to analyze each applicant based on their form scores and overall feedback

#### Technologies 

- Frontend : ![React](https://img.shields.io/badge/react-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=plastic&logo=tailwind-css&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=plastic&logo=mui&logoColor=white)

- Backend : ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=plastic&logo=node.js&logoColor=white) 	![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=plastic&logo=Sequelize&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=plastic&logo=JSON%20web%20tokens)

- Database : ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=plastic&logo=mysql&logoColor=white)

___

### Getting Started 

#### Installation

Clone the project

```bash
git clone "https://github.com/trushildhokiya/somaiya-awards.git"
```

Open the project directory
```bash
cd somaiya-awards
```

Setting Up Frontend

```bash
cd frontend
npm install --force 
```

> **Warning**
> Due to no updations in dependency of Material Table we have to use depreated version MUI 4.0x which causes dependency errors while executing 

```bash
npm install
```

> so do not use above command instead use --force with npm install 

Start your frontend React App
```bash
npm start
```

Setting Up Backend Server

```bash
cd backend
npm install
```

Once you are completed installing dependencies in backend , open config folder and edit config.json file. Replace &lt;password&gt; with you actual database password 
```json
"password": "<password>",
"database": "somaiya_awards",
```

> **Note**
> You must create a database called somaiya_awards on your database server otherwise your backend server may not be able to connect to the database and throw error

Edit your .env file

```env
EMAIL_ID = <enter your actual email ID >
EMAIL_PASSWORD = <Enter your gmail APP key not gmail's password >
```

> **Note**
> Not editing the env file may not affect your server startup but may cause errors in actions where email is to be sent via backend server (see mailing section below)

Start your backend server
```bash
npm run dev  # to start your backend development server
npm start    # to start backend production server
```

___