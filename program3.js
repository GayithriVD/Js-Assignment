<head> 
    <title> 
        Question No.3 
    </title> 
</head> 
  
<body> 
    <script type="text/javascript"> 
      var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
document.write(today);
      document.write("<br/>");
today = mm+'/'+dd+'/'+yyyy;
document.write(today);
        
    </script> 
</body> 



