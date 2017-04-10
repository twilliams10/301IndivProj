//global variables
  var fnameinput = "";
	var lnameinput = "";
	var messageinput = "";
	var item1 = "";
	var item2 = "";
	var item3 = "";   
  
function getInfo() {
  var nameinput = document.getElementById("fname").value + " " + document.getElementById("lname").value;
 
  getClassStanding();   //calls the getClassStanding function
    
  getPreferences();    //calls the getPreferences function
    
  document.getElementById("fnameinput").innerHTML += fnameinput;
	document.getElementById("lnameinput").innerHTML += lnameinput + graduation + ;
	document.getElementById("messageinput").innerHTML += messageinput;
	document.getElementById("item1").innerHTML += item1;
	document.getElementById("item2").innerHTML += item2;
  document.getElementById("item 3").innerHTML += item3;
	  
  // make profile section and username section visible
  document.getElementById("info").style.display = "block";
  document.getElementById("orderInfo").style.display = "block";	  
}

/* function getClassStanding() {
  classYears = document.getElementsByName("classStanding");
  //store the radio button values to the array classSYears(index values 0 - 3)
  for(var i = 0; i<4; i++) {
    if(classYears[i].checked) {
      studentYear =classYears[i].value;
      i = 4;
    }
  }
  
  switch(studentYear) {
  case "Freshman":
    graduation = currentYear + 4;
    break;
  case "Sophomore":
    graduation = currentYear + 3;
    break;
  case "Junior":
    graduation = currentYear + 2;
    break;
  case "Senior":
    graduation = currentYear + 1;
    break;
}
*/


}

function getClassStanding2() {
  classYears = document.getElementsByName("classStanding");
  //store the radio button values to the array classSYears(index values 0 - 3)
  if(classYears[0].checked) {
    studentYear = classYears[0].value;
  } else if(classYears[1].checked) {
    studentYear = classYears[1].value;
  } else if(classYears[2].checked) {
    studentYear = classYears[2].value;
  } else if(classYears[3].checked) {
    studentYear = classYears[3].value;
  } else {
    alert("Please select a class year!")
  }
}

function getPreferences() {
    //each checkbox is an independent decision, requiring its own decision structure
  if(document.getElementById("tuition").checked){
    tuition = "In-State";
  } else {
    tuition = "Out-of-State";    
  }
  
   if(document.getElementById("housing").checked){
    housing = "On-Campus";
  } else {
    housing = "Off-Campus";    
  }
  
   if(document.getElementById("finAid").checked){
    finAid = "Receives Financial Aid";
  } else {
    finAid = "No Financial Aid";    
  }
}
 
 var button = document.getElementById("createBtn");
 if (button.addEventListener) {
    button.addEventListener("click", getProfile);
 }