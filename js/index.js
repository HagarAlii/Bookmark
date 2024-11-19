var siteName = document.getElementById("exampleInputSiteName");
var siteURL = document.getElementById("exampleInputSiteUrl");



var siteContainer ;
if( localStorage.getItem("Sites") == null){
  siteContainer=[];
}else{
  siteContainer = JSON.parse(localStorage.getItem("Sites"))
  display();
}

// function to add the info of each site to array
function add(){
  var siteInfo ={
    name: siteName.value ,
    url: siteURL.value
   }

  if(siteInfo.url == "" || siteInfo.name ==""){
    alert("Site Name or Url is not valid, Please follow the rules below :Site name must contain at least 3 characters , Site URL must be a valid one")
  }
  else if(siteInfo.name.length <3){
   alert("Site name must contain at least 3 characters. Please provide a valid Site Name.")
  }
  else if(!siteInfo.url.includes(siteInfo.name)){
  alert("Site name is not correct. Please enter the corrected Site name to that URL.")
  }
  else  if (
    !siteInfo.url.startsWith("http://") &&
    !siteInfo.url.startsWith("https://")
  ) {
    alert(
      "Site URL must start with 'http://' or 'https://'. Please provide a valid URL."
    );
  }
  else{
    siteContainer.push(siteInfo);
  }
  
  display()
  localStorage.setItem("Sites" , JSON.stringify(siteContainer))
  clear()
  
  
}

// function to clear value after submit.
function clear(){
  siteName.value=null;
  siteURL.value=null;
}

// function to display site info
function display(){
  var showMe=""
  for (var i=0 ; i < siteContainer.length ; i++)
  {
    
    showMe += `
    <div class="row py-2 rounded-5 ">
    <div class="col-3">
      <h5>${i+1}</h5>
      
    </div>
    <div class="col-3 ">
      <h5>${siteContainer[i].name}</h5>
      
    </div>
    <div class="col-3 ">
      <button id="visit" onclick="visit('${siteContainer[i].url}')">
     <span> <i class="pe-2 fa-solid fa-eye"></i> </span>
      Visit</button>
        
    </div>
    <div class="col-3 ">
       <button id="delete" onclick="deleted('${i}')">
     <span> <i class="pe-2 fa-solid fa-trash-can"></i></span>
      Delete</button>
      
    </div>
  </div>
    `
  }
  document.getElementById("inner-container").innerHTML = showMe;

}


  function visit(url){
    window.open(url, "_blank");
}
 
function deleted(index){
  siteContainer.splice(index , 1)
  display();
  localStorage.setItem("Sites" , JSON.stringify(siteContainer))
}


 
