/*
    https://www.thapatechnical.com/2021/04/how-to-deploy-mern-projects-on-heroku.html
    #Step to Deploy(Host) MERN Website:
        1) Copy and Past the Client Folder inside the server folder and then delete the client folder outside the server folder
            -> note that when you are hosting the website you just have to host server part so, we have to include 'client' folder into the 'server' folder
        2) We need to change the PORT number from Statc to Dynamic for Heroku
            -> when we are deploying in the heroku, heroku will automatically give the port number the website, which we have to get, we don't know which port number heroku will give us so we have to wirte this:
                -> const PORT = process.env.PORT || 5000;
                -> 5000 for local system and other for huruku
            -> now we can delete port number from 'config.env'
        3) We need to tell the Heroku to serve the static files of the client
            -> now we have to build the react project of client, so in the client folder through terminal write:
                -> npm run build
            -> now we have to diploy the build and server
            -> now we have to write :
                -> if (process.env.NOD_ENV === "production") {
                    app.use(express.static("client/build"));
                -> to app.js in server 
        4) Remove the Proxy from the pakage.json file, if you have any
            ->   "proxy":"http://localhost:8080",
            -> because we know now client and server are in the same path and are running in the same domain
        5) We need to add few scripts on the server package.json file in order to tell Heroku, what to do and what not to.
            -> https://www.freecodecamp.org/news/deploying-a-mern-application-using-mongodb-atlas-to-heroku/
            -> "scripts": {
                        "test": "echo \"Error: no test specified\" && exit 1",
                        "start":"node app.js",
                        "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
                    },
        6) Remove the git file from the Client side, if there is any
        7) Once all above steps completed, then we will create an application on Heroku
                    -> so now you have to write 
                    -> heroku login
                        -> if it is not working then use 
                            -> heroku login -i
                -> and then this will pop up
                    -> heroku: Press any key to open up the browser to login or q to exit:
        8) Once login then go to Heroku website to create an Heroku app to host our project
                -> now when you are in website you have to create a new app and wirte a unique app name
                
                a) heroku login
                b) Create a new Git repository in server root
                    -> git init
                    -> after that we can see the hide folder in the gray color:
                        -> because we add the 'node_modules' and 'config.env' to '.gitignore'
                c) to check the status 
                    -> git status
                d) and then write :
                    -> heroku git:remote -a merntutorialroman
                        -> after that this will show
                            -> set git remote heroku to https://git.heroku.com/merntutorialroman.git
                e) now we have to add:
                    -> git add .
                f) after that we need to commit:
                    -> git commit -am "make it better"
                    -> if you have a same code the you have to commit it again
                g) - to use yarn to install your application's dependences plese delete the package-lock.json file
                    -> git rm yarn.lock
                g) now we have to host
                    -> git push heroku master:main

        NOTE: ERROR while hosting:
                    -> Node version not specified in package.json
                        -> to solve the porblem add: to package.json
                            {
                            "name": "myapp",
                            "description": "a really cool app",
                            "version": "1.0.0",
                            "engines": {
                                "node": "<version>"
                            }
}
        
}

*/
