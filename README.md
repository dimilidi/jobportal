# Jobsy. - job portal website

 <br/>

**Jobsy.** is a MERN Stack based web application. <br>
**Goal:** The application is free and available to all. Created to help find an employee and an employer. 
 <br/>
 <br/>

> Checkout our project: [GitHub Repo](https://github.com/dimilidi/jobportal)<br/>
> Visit our website: [Jobsy Website](https://jobsy-jobportal.netlify.app)<br/> <br/>


## Table of Contents

1. [Project Status](#1-project-status)
2. [General Info](#2-general-information)
3. [Technologies Used](#3-technologies-used)
4. [Screenshots](#4-screenshots)
5. [Room for Improvement](#5-room-for-improvement)
6. [Acknowledgements](#6-acknowledgements)
7. [Setup](#7-setup)
8. [Contact](#8-contact)

<!-- * [License](#license) -->

## 1. Project Status

Project is: _in progress_ 

## 2. General Information


## Not logged in user: 
* can view ads without logging in
 <br/>

## Logged in user:
* views the ads and sees the contact to the person who published the ad
* has the ability to send a message to the person who published the ad
* publishes own advertisements (searching or offering)
* has a user profile where has the possibility of giving a contact (email and/or phone), profession, short description about himself
* can edit his profile (about section, add a profile photo)
* can see his ads and edit/deleting them
* can delete profile with all his ads



## 3. Technologies Used

**Design:**
- Figma  [-> see design](https://www.figma.com/file/cmWtNE21nByCtTRUkoR2uS/Wireframing-DT?node-id=112%3A2815&t=uVB5Ez63DIcXSe0U-0)

**General:**
- Node.js (v18.12.1)


**Frontend:**
- React (^18.2.0)
- TypeScript (4.9.3)
- Vite (4.0.0)
- Tailwind (3.2.4)
- Axios (1.2.1)
- Framer Motion (8.0.1)


**Backend**
- Express (^4.18.2)
- Mongoose (^6.8.0)
- Eslint (^8.29.0)
- bcrypt (^5.1.0)
- jswebtoken (^8.5.1)
- Cloudinary (^1.33.0)
- Socket.io (^4.5.4)


**Data base:**
- MongoDB


**Deployment:**
-Frontend: Netlify
-Bckend: Render
<!-- 
## 3. Features

List the ready features here:

- Awesome feature 1
- Awesome feature 2
- Awesome feature 3 -->

## 4. Screenshots

**Mobile First** <br>
<img src='./frontend/src/assets/screenshots/home_mobile.png ' width='150' height='300' />
<img src='./frontend/src/assets/screenshots/ads.list_mobile.png ' width='150' height='300' />
<img src='./frontend/src/assets/screenshots/account_mobile.png ' width='150' height='300' />
<img src='./frontend/src/assets/screenshots/Account_mobile2.png ' width='150' height='300' />
<img src='./frontend/src/assets/screenshots/editAccount_mobile.png' width='150' height='300' />
<img src='./frontend/src/assets/screenshots/CreateAd_mobile.png' width='150' height='300' />
<img src='./frontend/src/assets/screenshots/deleteAccount_mobile.png' width='150' height='300' />

**Desktop** <br>
<img src='./frontend/src/assets/screenshots/home_desktop.png ' width='300' height='250' />
<img src='./frontend/src/assets/screenshots/Account_desktop.png ' width='300' height='250' />




## 6. Room for Improvement

 Improvements for future development:

- [ ] Add new feature for user to network each other
- [ ] Add new feature for user to manage ads created by other users in his/her account. eg. save and categorize ads (favorits, contacting)
- [ ] Infinitive scroll in Mobile Version when browsing ads.

To do:

- Add 'partner' in user model to manage connected contacts
- Add related routes with partner in backend like `/user/partners`, `/user/add-partners` or `/user/delete-partners`

## 8. Acknowledgements

- This is the final project of one year MERN Stack Course by Digital Career Institute.
- This project was inspired by LinkedIn, makes communication as easy as possible with direct messeges.
- Many thanks to our teachers Christoph Muck, Jan Laskowski, Manuel Jung and whole DCI Team. 

## 7. Setup

To run this project, install it locally using npm:

```
$ git clone git@github.com:dimilidi/jobportal.git
$ cd backend
$ npm install
$ npm run dev
$ cd ../frontend
$ npm install
$ npm run dev
```


## 8. Our Team: 

1. ::woman_mechanic: **Miki Gerlach** (Backend, Frontend) [LinkedIn](https://www.linkedin.com/in/mikigerlach/)
2. :ninja: **Lidiya Dimitrova** (Backend, Frontend) [LinkedIn](https://www.linkedin.com/in/dimitrovalidiya/)
5. :sunglasses: **Timon Hosch** (Backend, Frontend) [LinkedIn](https://www.linkedin.com/in/timon-hosch-3a1463236/)
3. :cartwheeling: **Paulina Hryszko** (Design, Frontend) [LinkedIn](https://www.linkedin.com/in/paulina-hryszko/)
4. :lotus_position_woman: **Oriana Quintero** (Design, Frontend) [LinkedIn](https://www.linkedin.com/in/oriana-quintero/)



Images credits to: https://icons8.com/illustrations 

