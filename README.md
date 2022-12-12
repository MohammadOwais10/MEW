# MEW 
Men's Ethnic Wear is an ecommerce web application
### 🚀visit : https://mew.onrender.com
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
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

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
set your config.env file : use given format
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
![mew-home-ui](https://user-images.githubusercontent.com/91982138/207134798-4220edcb-9861-445d-9598-88d9cd6d4ce1.PNG)

- Products UI
![mew-product-ui](https://user-images.githubusercontent.com/91982138/207134901-29e94576-54ea-4465-8649-096bcc8e28c4.PNG)

- Pagination and Filter Box UI 
![mew-filter-ui](https://user-images.githubusercontent.com/91982138/207134998-fb74c77e-d7e2-4d10-9f08-ff22cb3d750e.PNG)

- Cart UI
![mew-cart-ui](https://user-images.githubusercontent.com/91982138/207135222-c1e0832b-2ae9-4256-8491-cf2a37176fd5.PNG)

- Shipping UI
![mew-shipping-ui](https://user-images.githubusercontent.com/91982138/207136309-22b09817-561e-417c-8dad-8152b5979400.PNG)

- Payment UI
![mew-payment-ui](https://user-images.githubusercontent.com/91982138/207135291-e325a4a5-aaa2-4030-8a0d-1fa42a598771.PNG)

- Admin Dashboard UI 
![mew-dashboard-ui](https://user-images.githubusercontent.com/91982138/207135039-3e559185-01c0-450c-b3ec-631bdc36d72b.PNG)

- Admin All Order UI 
![mew-allorder-ui](https://user-images.githubusercontent.com/91982138/207136443-08c92fa6-1212-4693-b356-a7d5ef6390ab.PNG)

- Admin Update Product UI 
![mew-update-ui](https://user-images.githubusercontent.com/91982138/207136497-075a5d19-b9e4-41aa-9001-c4c9b1d5427d.PNG)

- Admin Process Order UI 
![mew-order-process-ui](https://user-images.githubusercontent.com/91982138/207136613-a651fa4f-f77f-48c3-bcd1-187162398782.PNG)
