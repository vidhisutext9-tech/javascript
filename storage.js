// localstorage API: setItem, getItem, removeItem 
// localstorage --> save that data into browser's storage, after close browse data wasn't deleted
// (browser nu aevu storage k jema data store thy che and browser band thy jay to pan data delete thato nathi)
// ~ 5 MB storage

// setItem
// localStorage.setItem("key",value)
localStorage.setItem("name","test_user");
 
//getItem
// localStorage.getItem("key_name")
let user = localStorage.getItem("name");

// removeItem
localStorage.removeItem("name");

// updateItem IT
localStorage.setItem("name", "Demo User");

// sessionStorage API
// session Storage --> save that for temporarily time when you close tab delete was deleted
// (aa storage data ne temporarily time save kari ne rake che,jyare pan tab close karsho tyre teni sthe data pan delete thy jay che)
// ~5Mb storage

// setItem
sessionStorage.setItem("email", "test@test.com");

// getItem
let email = sessionStorage.getItem("email");

// removeItem
// sessionStorage.removeItem("email");

// update
sessionStorage.setItem("email", "user@user.com");
sessionStorage.setItem("name", "user");
sessionStorage.setItem("age", "10");
sessionStorage.setItem("cart", "");

//clear 
sessionStorage.clear();

// Basic cookie stutchar (manual key = value;)
// coookie --> store data into brower cookieStore
// (Cookie data na brower na cookies name ni property ma save kare ChannelMergerNode, cookies no use light data save karva mate thai che)
// when you reload web page data will be automatically send to server 
// ~ 4 kb Storage
document.cookie = "name = test1";

//max age
document.cookie = "email = test@gmail.com; max-age=60"

//dark light mode --> save into local storage
let btn = document.querySelector("button");
let body = document.querySelector("body");

// localstorage --> value --> classList.add(theme)
if (localStorage.getItem("theme") === "dark") {
    body.className = "";
    body.classList.add(localStorage.getItem("theme"));
    btn.textContent = "Light Mode";
    btn.style.color = "#222";
    btn.style.backgroundColor = "#555";
    localStorage.setItem("theme", "dark");
}

btn.addEventListener("click", () => {
    console.log("btn clicked");

    if(body.classList.contains("light")){
        body.classList.remove("light");
        body.classList.add("dark");
        btn.textContent = "Light Mode";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        localStorage.setItem("theme", "dark");
        
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        btn.textContent = "Dark Mode";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        localStorage.setItem("theme", "light");
    }

});
