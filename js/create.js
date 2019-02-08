
  	var wordLista = []; // creating array
  	var wordListaHint = []; // creating array
  	var indexingOnly = []; // creating array
	var t1 = document.getElementById('t1').value;
	var t2 = document.getElementById('t2').value;
	
	var counterlang = 1;
	
function add_element(){
	var lines = $('#t1').val().split('\n');
	for(var i = 0;i < lines.length;i++){
    wordLista.push(lines[i]); // adding element to array
	
	//code here using lines[i] which will give you each line
	}
	var lines2 = $('#t2').val().split('\n');
	for(var ii = 0;ii < lines2.length;ii++){
    wordListaHint.push(lines2[ii]); // adding element to array
	
	//code here using lines[i] which will give you each line
	}
	
	
	
	disp(); // displaying the array elements

	document.getElementById('t1').value=''; // Making the text box blank
	document.getElementById('t2').value=''; // Making the text box blank
	
	
	
	if (typeof(Storage) !== "undefined") {
		// Store
		
		localStorage.setItem("ahente",wordLista);
		localStorage.setItem("schools",JSON.stringify(wordListaHint));
		
	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
	counterlang=counterlang+1;
}


function disp(){

var str='';
var counter = wordLista.length;
for (i=0;i<counter;i++) 
{ 
str +=  "<tr><td>" + wordLista[i] + "</td>";  // adding each element with key number to variable
str += "<td style='color:gray;'>" + wordListaHint[i] + "</td></tr>";  // adding each element with key number to variable
} 


document.getElementById('disp').innerHTML=str; // Display the elements of the array

document.getElementById('butClr').style.display="inline"; // Display the elements of the array
	
}
  