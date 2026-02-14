// Objects vs Array
// Objects -- when you want to show all data based on
// one entity(k j entity mate all data jota hoy) (ex.
// one user data)
 
// Array -- when you want to show entity (ex. all
// users)
 
// create
// varabile = {}
// key : value --> key-value sturcture
let User ={
    name:"Test",
    email:"test@gmail.com",
    rollno:7
}
 
// access (dot vs square notation)
 
// variable_name.key;
User.name;
User.email;
 
// user.first-name;
 
// variable_name['key'];
User['name'];
 
// user[first_name]
 
// let demo = "name"
 
// user[demo] --> convert into name (demo = 'name')
 
// --> output: abc
 
 
// Nesting and Deep Access
 
const user1 = {
    name: "test",
    address: {
        city: "Surat",
        pin: 395009,
        locations: {
            lat: 24.2,
            lng: 77.4,
        },
    },
    email: "test@gmail.com",
}; // --> nested Object
 
user1.address.locations.lat; // --> Deep Access
 
// user1.address.location.lng;
 
 
// object destructuring:
 
let { lat, lng } = user1.address.locations;
let { name, email, address } = user1;
let { city } = user1.address;
let { lat: abc_lat } = user1.address.locations;
 
// destructuring and rename variable name
 
let demo = {
    first_name: "Demo",
    last_name: "User",
    age: 45,
    email: "demo@user.com",
};
 
 // Looping (for - in loop)
// for (variable name in object_name){}
 for (const key in demo) {
    // console.log(key);
    // obj.key --> not working
    // console.log(demo[key]);
    console.log(key, ":", demo[key]); // -- log whole object
 }
 
 // copying objects : Spred, object.assign, deep-clone
 // Spred
 // let user_data ={...demo};
 let user_data = {gender : "male", role: "user", ...demo} // add key -value and copy object
 // use case : state update
 // const user = {
//      name : "amit",
//      ge : 30
//    };
 
// const updateduser = {
// ...user,
// age : 31
//};
 
// console.log(updatesuser);
 
// object.assign -- copy and add keys-value
let user_data_assign = Object.assign({}, demo); // -- nothing will be add just copy
let user_data_assign1 = Object.assign({phone_number : 7896541230}, demo); // = add and copy
// use case : default settings + user nsettings merge
// const defaultsetting = {
//    theme: "light"'
//    language : "en"
//};
 
// const usersettings = {
//     theme" "dark"
//}
 
// const finalsetting = object.assign({},defaultsettings, usersettings);
 
// console.log(finalsettings);
 
// object assign vs spred
 
// object.assign() -- method --ESS old version , less used
// spred -- operator -- state upadated,  most used in react apllication, clean code
 
// deep clone
let temp_user1_clone = { ...user1 }
 
// user1_clone.address.city = "Valsad" --> that will change value of user1 too
// issue : when you clone & copy nested object using spread or object.assign into new variable that copy all value but nested object pass only reference not copy
// (Jyare tame nested object (parent obj.) spread na upyog thi copy karo tyare nested obj. (child obj.) reference pass karshe --> value copy thase nahi)
// How to clone that -- use deep clone
// first convert your object to string
// JSON - JavaScript Object Notation
// JSON.stringify(obj_name) -- convert object into string
// JSON.parse(stingify_object) -- convert string to object
 
let clone_user1 = JSON.parse(JSON.stringify(user1))
 
// Deep clone = completely new memory
// use case:
// Real time use:
// API response handling
// Avoid data mutation bugs
 
// object.key -- add all keys into array formate
let key_arr = Object.keys(demo);

// Use case: User profile form validation
// ex. website par thi user form ma data add kare chhe ane te data
// backend pase object formate ma aave chhe

// const userProfile = {
//   name: "Rahul",
//   email: "rahul@gmail.com",
//   age: 25
// };

// // now check how many field user fill up
// const keys = Object.keys(userProfile);
// console.log(keys);
// console.log(keys.length);
// Optional Chaining, Computed Properties
// user1.address.location.lng;
user1?.address?.location?.lng;  // --- ? Optional Chaining

// use case:

// Without optional chaining → app crash
// Backend data incomplete
// API response safety

// const apiResponse = {
//   user: {
//     profile: {
//       name: "Neha"
//     }
//   }
// };

// console.log(apiResponse.user?.profile?.name);
// console.log(apiResponse.user?.address?.city);

