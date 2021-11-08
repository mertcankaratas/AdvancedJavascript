import {BaseLogger,MongoLogger,ElastikLogger} from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User Component yüklendi");

let logger1 = new BaseLogger();
let userService = new UserService(logger1);

let user1=new User(1,"Mertcan","Karataş","İstanbul");
let user2=new User(2,"can","Karataş","Ankara");
userService.add(user1);
userService.add(user2);

console.log(userService.list());

console.log(userService.getById(2));



let customer ={id:1,firstName:"Mertcan"};
// * prototyping
customer.lastName = "Karataş";

// console.log(customer.lastName);
