function init(){
    if(navigator.geolocation){
        document.getElementById("notify").innerHTML = "I will find you.....and I WILL kill you!";

        navigator.geolocation.getCurrentPosition(successfunc, errorfunc);
    }else {
        document.getElementById("notify").innerHTML = "You can run....but you can't hide!";
    }
}

function successfunc(pos){
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    document.getElementById("notify").innerHTML = "You are at lat: "+lat+" and long: "+long+" now wait for 2 mins and a word of advice.....do not open the door!";
}

function errorfunc(pos){
    document.getElementById("notify").innerHTML = "FUCK!!!";
}

function storename(){
    var username = document.getElementById("yourname").value;
    if(username === ""){
        return false;
    }

    localStorage.setItem("Name", username);

    document.getElementById("yourname").value = "Name Saved";
}

function getname(){
    if(localStorage.getItem("Name") === null){
        return false;
    }

    document.getElementById("yourname").value = "Name Stored: " + localStorage.getItem("Name");
}

function removename(){
    if(localStorage.getItem("Name") === null){
        return false;
    }

    localStorage.removeItem("Name");
    document.getElementById("yourname").value = "Name Removed";
}
onload = init;