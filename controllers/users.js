import { v4 as uuidv4 } from 'uuid';

let users = [
    {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    id: uuidv4()
    },
    {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
    id: uuidv4()
    }
]

export const createUser = (req,res) => {             //create new user
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the data base`);
}

export const getUsers = (req,res) => {               //return all users
    res.send(users);
}

export const getUserById = (req,res) => {            //get user details by id
    const {id} = req.params
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser)
}

export const deleteUser = (req, res) => {            //delete user by id
    const { id } = req.params;
    users = users.filter((user) => user.id != id)
    res.send( `user with id ${id} succesfully deleted from database`)
   }

export const patchUser = (req,res) => {              //edit user by patching
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    res.send(`User with id ${id} has been updated`)
}