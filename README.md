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
