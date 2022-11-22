/* Web Design & Client Side Scripting _ Week 8 Lab 

Damien Portanier 

16 11 2022

Using if statements, create a rock, paper, scissors game.

https://wrpsa.com/the-official-rules-of-rock-paper-scissors/

You may use any method of user input and any method of visualisation (alerts, document.getElement etc), as you will be marked on the JavaScript logic around your if statements

When you have completed your game, please commit to GitHub and upload a text document with the link here
*/

//in the index.html file a button is created to run what is inside the function check ()
function check(){//begin with function give more control on js code 
	
	//variables + input + convert it to integer + store it to variable
	var user; 
	user = parseInt(prompt("Enter a number between 1 and 3: ")); //prompt = permit the user input //parseInt = convert datatype of what user input into Integer //store user answer into age (variable)
	 
 	var random;
	random = prompt("Choose between rock, paper, scissors ?"); 
	
	//if statement // && = and // == means true + output
	if (user==1 && random=="rock"){
		document.getElementById("placeholder").innerHTML="Draw !"; //output Welcome on webpage (inner HTML)
	}
	else if (user==1 && random=="paper"){
		document.getElementById("placeholder").innerHTML="User 2 win";
	}
	else if (user==1 && random=="scissors"){
		document.getElementById("placeholder").innerHTML="User 1 win";
	}
	else if (user==2 && random=="rock"){
		document.getElementById("placeholder").innerHTML="User 1 win";
	}
	else if (user==2 && random=="paper"){
		document.getElementById("placeholder").innerHTML="Draw !";
	}
	else if (user==2 && random=="scissors"){
		document.getElementById("placeholder").innerHTML="User 2 win";
	}
	else if (user==3 && random=="rock"){
		document.getElementById("placeholder").innerHTML="User 2 win";
	}
	else if (user==3 && random=="paper"){
		document.getElementById("placeholder").innerHTML="User 1 win";
	}
	else if (user==3 && random=="scissors"){
		document.getElementById("placeholder").innerHTML="Draw !";
	}
	else {
		document.getElementById("placeholder").innerHTML="Invalid input, please try again"; 
	}
}//close function