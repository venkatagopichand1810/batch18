
const express = require("express");
const app = express();
const PORT = 5007;

// middleware to parse the json reponse in the request body
app.use(express.json())
let users = [
    {id: 1, name: "venkat", email: "venkatagopichand@gmail.com"},
    {id: 2, name: "rama", email: "rama@gmail.com"},
    {id: 3, name: "john", email: "john@gmail.com"},
    {id: 4, name: "shiva", email: "shiva@gmail.com"}
]

// api to get the data

app.get("/api/users", (req, res) => {
    res.json(users)
})

// post the data
app.post("/api/users", (req, res) => {
    // we have to put th name and email in the request body
    const {name, email} = req.body;

    // validation part
    if(!name){
        return res.status(400).json({
            error: "Name is required"
        })
    }
     if(!email){
        return res.status(400).json({
            error: "Email is required"
        })
    }

    // add new user
    const newUser = {
        id: users.length + 1,
        name, 
        email
    }
    // push newuser every time to the users array
    users.push(newUser);
    
    res.status(201).json({
        message: "user created successfully",
        user: newUser
    })
})

// get the user details based on the id
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId)
    if(!user){
        return res.status(404).json({error:  "User is not found"})
    }

    res.json(user)
})

// delete the user
app.delete("/api/users/:id", (req, res) => {
     const userId = parseInt(req.params.id);
     console.log(userId); //3
     const userIndex = users.findIndex(u => u.id === userId);
     console.log(userIndex); 

     if(userIndex === -1) {
        return res.status(404).json({error: "User is not found"})
     }

     //remove the user
     const deleteUser = users.splice(userId, 1);
     console.log(deleteUser)

     res.json({
        message: "User deleted successfully",
        deletedUser: deleteUser[0]
     })

})

// patch --partial update of the resource

app.patch("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const {name, email} = req.body;

    const user = users.find(user => user.id === userId);

    if(!user){
        return res.status(404).json({error: "user is not found"})
    }

    // only update the partial data
    if(name){
        user.name = name
    }

    if(email){
        user.email = email
    }

    res.json({
        message: "User updated successfully",
        user
    })
})


// full update of the existing resourec
app.put("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const {name, email} = req.body;

     const userIndex = users.findIndex(u => u.id === userId);

    if(userIndex === -1){
        return res.status(404).json({error: "user is not found"})
    }

   //full replacement of the resource
   users[userIndex] = {
    id:userId,
    name, 
    email
   }

    res.json({
        message: "User replaced successfully",
        user: users[userIndex]
    })
})





app.listen(PORT, () => {
    console.log("server is running")
})