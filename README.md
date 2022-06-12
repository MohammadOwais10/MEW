# MEW 
Men's Ethnic Wear is an ecommerce web application
### 🚀visit : https://e-mew.herokuapp.com
## Tools and Packages
 ![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;
![expressjs](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp;
![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)&nbsp;
![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)&nbsp;
![react-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)&nbsp;
![mui](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)&nbsp;
![chart-js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)&nbsp;
![jwt](	https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)&nbsp;
<img src="https://logos-download.com/wp-content/uploads/2020/07/Cloudinary_Logo.png" height="30px" alt="Cloudinary">
<img src="https://velog.velcdn.com/images%2Fjch9537%2Fpost%2F7f031d06-1270-43ed-a097-f177caef37ba%2Fimage.png" height="28px" width="90px" alt="Node Mailer">
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)&nbsp;
![heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)&nbsp;

## Features
- Login/Signup User Account
- Update Profile/Password User Account
- Reset Password Mail using nodemailer
- Cart Add/Remove Items | Update Quantities
- Wishlist Add/Remove Items
- Products Pagination (Default 8 Products Per Page)
- Product Search
- Product Filters Based on Category/Ratings/Price
- Shipping Info in Session Storage
- Make Payment using Stripe
- My Orders (With All Filters)
- Order Details of All Ordered Item
- Review Products User Account
- Admin: Dashboard access to only admin roles
- Admin: Update Order Status | Delete Order
- Admin: Add/Update Products
- Admin: Update User Data | Delete User
- Admin: List Review of Product | Delete Review
- Stock Management: Decrease stock of product when shipped

## Run Locally
Clone the project
```bash
  git clone https://github.com/MohammadOwais10/MEW.git
```
Go to the project directory
```bash
  cd project
```
Install dependencies
```bash
  npm install
```
```bash
  cd frontend/
  npm install
```
Start the server 
```bash
  npm run start
```
Start the client 
```bash
  //open another terminal
  cd frontend/
  npm start
```

## Environment configurations
set your config.env file : it's only format
```
PORT=4000
DB_URI='mongodb_uri'
JWT_SECRET='your jwt secret'
JWT_EXPIRE= 1d
COOKIE_EXPIRE = 7
SMPT_SERVICE=gmail
SMPT_MAIL='your email'
SMPT_PASSWORD='email password'
SMPT_HOST=smtp.gmail.com
SMPT_PORT=587
CLOUDINARY_NAME= "name"
CLOUDINARY_API_KEY= 'cloudinary key'
CLOUDINARY_API_SECRET= 'cloudinary secret'
STRIPE_API_KEY='stripe key'
STRIPE_SECRET_KEY='stripe secret'
```
## UI Screenshot
- Home UI
![mewHome](https://user-images.githubusercontent.com/91982138/173220729-30fc04a1-6f7e-4cec-9186-75405b5e1593.PNG)
- Products UI
![mewProducts](https://user-images.githubusercontent.com/91982138/173220730-60902535-2155-4ac3-a67c-60e23c74b411.PNG)
- Pagination and Filter Box UI 
![mewCatPag](https://user-images.githubusercontent.com/91982138/173220738-77d748a0-fb60-4dc5-813a-c94afd9f36ad.PNG)
- Admin Dashboard UI 
![mewDashboard](https://user-images.githubusercontent.com/91982138/173220739-c68f397f-56ab-4c2f-b1c0-0e33b91c04a4.PNG)
- Admin Manage Order UI 
![mewAllOrders](https://user-images.githubusercontent.com/91982138/173220745-8c3631d1-5190-47fa-a891-82d16cc2763f.PNG)
- Admin Charts Dynamic Value UI 
![mewChart](https://user-images.githubusercontent.com/91982138/173220743-4082caf9-0601-49db-b011-61a0987bc400.PNG)
