# Cheat Sheet

1. Initialize project - npm init --yes
2. install nodemon - npm i nodemon -D
3. Install and setup express - npm i express 
    * add routes
    * add body = parser - url encoded 
    * add static files - app.use('името на папката в която е CSS')

4. Add view engine - Handlebars - npm i express-handlebars
    * register with express
    * add views folder 
    * add home template - от home взимаме всичко което е над main тага + footer
    * add main layout
    * add partial template folder

5. Add Home controller
    * add controller to routes
    * set strictquery

6. Configure database - npm i mongoose & mongoose.connect

7. Authentication
    * fix html links
    * add auth controller
    * add register page
    * add login pages - delete action, попълваме празните полета на email i password и даваме път /register към регистер

8. Add user model   
9. Add auth service
10. Install bcrypta and cookie-parser and configure 
11. Register user
    * validate repeat password
    * check if user exists
    * use bcypt to hash password

12. Login user    
    * check if user exists
    * check if password is valid

13. Generate JWT token - npm i jsonwebtoken    
    * OPTIONAL use util.promisify to use async
    * generate token with payload
    * add token to cookie

14. Add authentication middleware 
    * add decodedtoken
    * use authentication middleware

15. Logout
16. Authorization middleware
17. Dynamic navigation
18. Error handling
19. Add error notifications
20. Login automatically after register
21. Parse errors

----
navigation 
authorizatiion
notification





