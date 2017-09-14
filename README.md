# HACKTIVPRESS
Hacktiv Blogging System (Live Code Second Phase)

## Installation :
    npm i -S express
    npm start

### Collections

collections name | field name
-----------------|----------------------------------
users | username, password
articles | title, content, category, author (ref: users) 

### Setting route

routes | HTTP | Description
-------|------|------------
/register | POST | Register new account
/login | POST | Access blog with username and password (Login while get an access token based on credentials)
/articles | POST | Posting at least an article or more (authenticated user only)
/articles | GET | Get all the articles
/articles/:id | GET | Get a single article
/articles/:id | PUT | Updating an article or more (authenticated user only)
/articles/:id | DELETE | Deleting an article or more (authenticated user only)

### For Running the application Step by Step:

        1. Register New Account
        (POST) access to http://localhost:3000/register input on body-urlencoded. Using postman x-www-form-urlencoded: 

        Key | Value | Description
        -------|------|------------
        username | (e.g : pdvega) | Your username
        password | (e.g : pdvega) | Your password

        If You got message 'Register success' congratulation You've got new user account!
        

        2. Login using account which have been registered
        (POST) access to http://localhost:3000/login input on body-urlencoded. Using postman x-www-form-urlencoded
        
        Key | Value | Description
        -------|------|------------
        username | (e.g : pdvega) | Your username
        password | (e.g : pdvega) | Your password
        
        If You got message 'username and token' congratulation You got the token!


        3. See all articles
        (GET) access to http://localhost:3000/articles and You can see all the articles inside.
        
        
        4. Create new article
        (POST) access to http://localhost:3000/articles fill on Headers :
        
        Key | Value | Description
        -------|------|------------
        token | (e.g : $x*#@jshjsl) | your token when login
        
        Using postman fill on body (x-www-form-urlencoded):
        
        Key | Value | Description
        -------|------|------------
        title | (e.g : This is title) | Article Title
        content | (e.g : This is content) | Article Content
        category | (e.g : This is category) | Article Category
        author | (e.g : This is author id) | Author Id based on User Id (User collections)
        
        
        5. See single article
        (GET) access to http://localhost:3000/articles/:id and You can see single articles inside.        


        6. Update new article
        (PUT) access to http://localhost:3000/articles/:id fill on Headers :
        
        Key | Value | Description
        -------|------|------------
        token | (e.g : $x*#@jshjsl) | your token when login
        
        Using postman fill on body (x-www-form-urlencoded):
        
        Key | Value | Description
        -------|------|------------
        title | (e.g : This is title) | Article Title Update
        content | (e.g : This is content) | Article Content Update
        category | (e.g : This is category) | Article Category Update
        author | (e.g : This is author id) | Author Id based on User Id (User collections) 

        
        7. Delete article
        (DELETE) access to http://localhost:3000/articles/:id fill on Headers :
        
        Key | Value | Description
        -------|------|------------
        token | (e.g : $x*#@jshjsl) | your token when login
        
        Delete article by article id
