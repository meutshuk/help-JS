
function popup(meaage){
    alert(meaage);
}

function changeYellow(){       // function to change taxt to yellow whne the text is clicked
    document.getElementById("hello").style.backgroundColor='yellow';
}

function changeWhite(){     // function to change the color of the input text to white
    document.getElementById('hello').style.backgroundColor='white';
}

function checkAddress(checkId){     // checks if the field in email field is empty or not
   if( document.getElementById(checkId).value ===""){alert("Email ID Required")}
}

function fillNames(){   // this function is to autofill the Fname and lName of in the form accorfing to the email Address
    var fname,lname,email;
    email=document.getElementById('email').value;
    switch(email){
        case "me.utshuk1001@gmail.com":
            fname="utshuk";
            lname='Dhamala';
            break;
        case "apple.ball@gmail.com":
            fname="apple";
            lname='ball';
            break;
    }
    document.getElementById('fName').value=fname;
    document.getElementById('lName').value=lname;
}
