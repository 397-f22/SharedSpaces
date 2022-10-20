const express = require("express")
// const {initializeApp, applicationDefault} = require("firebase-admin/app")


const app = express()
const port = 3000


 
// var admin = require("firebase-admin");

const serviceAccount = require("./sharedspaces-nu-firebase-adminsdk-l2vb3-f39eaaca4a.json");
const admin = require("firebase-admin");
const { getAuth } = require('firebase-admin/auth');


const adminApp=admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sharedspaces-nu-default-rtdb.firebaseio.com"
});

const auth = adminApp.auth();
// const auth = getAuth(admin);



app.get("/allUsers",(req,res)=>{
    auth.listUsers(100)
    .then(function(result){
    res.setHeader('Content-Type', 'application/json');
        console.log(result);
      res.status(200).json(result);  
    })
    .catch(function(error){
      console.log(error); 
    });

})

app.get("/",(req,res)=>{
    // res.send(adminApp);
    console.log(auth);
})

app.listen(process.env.PORT || port,()=>{
    console.log(`listening on ${port}` )
})