
var sitename=  document.getElementById("sitename");
var siteurl=  document.getElementById("siteurl");

var tBody=document.getElementById("tBody")
 var btnn= document.getElementById("btnn")
var allbook=[];

var bookIndex;

if(localStorage.getItem("allbook") != null){
    allbook=JSON.parse(localStorage.getItem("allbook"));
    displayAll();
}




function  displayAll() {
    var box=``;
    
    for(var i = 0 ; i < allbook.length;i++){
    box+=`
    <tr>
 
   
      
    <td>
    
     
    ${i+1}
   
    <td>${allbook[i].sitename}</td>
    <td> <a href="${allbook[i].siteurl}" id="vis" class="btn  btn-outline-sucssess "> <i class="fa-regular fa-eye me-2"></i>Visit</a> 
    <td>  <button id="del" onclick="deleteItem(${i})" class="btn "><i class="fa-regular fa-trash-can me-2"></i> Delete</button>  </td>
    </td>


   
   

   </tr>
 
 
    `
 
    }
    tBody.innerHTML=box;
   
 }


btnn.addEventListener("click",function(){
if(validurl()){


    var site={
        sitename:sitename.value,
        siteurl: `https://${siteurl.value}`,
        
      } 
      allbook.push(site);
   
      localStorage.setItem("allbook",JSON.stringify(allbook));
     displayAll();
     
    }else{

     alert("bookmark or url name is not valid")   
    }})

function deleteItem(index){
 
    allbook.splice(index,1);
    localStorage.setItem("allbook",JSON.stringify(allbook))
    displayAll();
}

  
  sitename.value="";
  siteurl.value="";
  





  function validurl(){
    var regex1= /www\..*\.com$/
    return regex1.test(siteurl.value);
   }


 