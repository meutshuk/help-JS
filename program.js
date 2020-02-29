
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

function listHeroes(){
    var name=`<ol>
    <li> Utshuk </li>
    <li> Dhamala </li>
    </ol>
   `
    document.getElementById('heroes').innerHTML=name;
}

function nothing(){ var name=""; document.getElementById('heroes').innerHTML=name;}

function changePhoto(pId,photo){    // function to change photo of certain id (pId) when mouse is over that photo
    document.getElementById(pId).src=photo; // photo is relaced in the html with that id
}

function invisible(){   // function to invisible a certain thing when clicked
    document.getElementById('uglyboi').className='hidden';
    function newWindow(){
        var apple =window.open()
        apple.document.write("<h1 style='color:red'>YOU UGLY MOTHERFUCKER. I HATE YOU. GO DIE PUNK.</h1>")
        setInterval(apple.close(),20000);
    }
    newWindow();
}

function openWindow(){
    var newWin = window.open("try.html");
    //windowContent ="<p>Hello vro How are you</p>";
    //newWin.document.write(windowContent);
    
}

function checkPopup(){
    var testpop = window.open("","","width=100,height=100");
    if (testpop ===null){
        alert("Please Turn off your ad blocker");
    }
    testpop.close();
}
checkPopup();

function checkName(){
    if (document.getElementById('LName').value.length==0){
        alert("Mother Fucker are you a bastard huh. Hurry and Write a name you dumbFuck");
        document.getElementById('LName').focus();   // focus to the form text after alert
        document.getElementById('LName').style.backgroundColor="yellow";    // changes the color of the text to show where
        return false;

    }
    document.getElementById('LName').style.backgroundColor="white";
}