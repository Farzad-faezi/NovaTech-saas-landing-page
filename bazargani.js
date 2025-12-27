function validation(){
    var name = document.getElementById("name").value;
    var last_name = document.getElementById("last_name").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    document.getElementById("Name").innerHTML= "";
    document.getElementById("Last_name").innerHTML="";
    document.getElementById("Email").innerHTML="";
    document.getElementById("Password").innerHTML="";

    if(name == ""){
        document.getElementById("Name").innerHTML=
        'Please fill out'
        return false;
    };
    if(last_name.length <= 3 || last_name.length > 20){
        document.getElementById("Last_name").innerHTML=
        'please fill out'
        return false;
    };
    if(email == ""){
        document.getElementById("Email").innerHTML=
        'please fill out'
        return false;
    };
    if(email.indexOf("@") <= 0){
        document.getElementById("Email").innerHTML=
        "please fill out";
        return false;
    };
    if(password == ""){
        document.getElementById("Password").innerHTML=
        "please fill out";
        return false;
    };

    if(password.length > 5 || password.length < 20){
     document.getElementById("Password").innerHTML=
        "not";
        return false;
    };
};
