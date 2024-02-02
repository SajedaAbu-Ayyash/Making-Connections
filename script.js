console.log("page loaded...");

//this function for editname when we click in edit profile, we can do this function with 2 ways: 
// first way:
function editProfile() {
    var newName = prompt("Enter your new name:");
    if (newName != null) {
        document.getElementById("userName").innerText = newName;
    }
}

// another way 
// function editProfile() {
//     var newName = document.getElementById("userName");
//     newName.innerText = 'Sajeda';
// }

// this function for remove user when click on any icon in connection requests
function removeUser() {
    document.querySelector('.card-list-item').remove();
    // this is for decrease number of requests when we click on any icon
    document.querySelectorAll('.badge')[0].innerHTML-=1;
}

function removeUserRequest() {
    document.querySelector('.card-list-item').remove();
    document.querySelectorAll('.badge')[0].innerHTML-=1;
    // this is for convert number from string to int
    count = document.querySelectorAll('.badge')[1].innerHTML;
    document.querySelectorAll('.badge')[1].innerHTML = parseInt(count)+1;
    console.log(document.querySelectorAll('.badge'));
}
