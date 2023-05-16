


  
//Mobile scale 


setInterval(check, 40);

function check()
{
    var gridContainerItem = document.getElementsByClassName("gridContainerItem");
  
    if(document.body.clientWidth<  1000)
    {
        document.getElementById("rightCentralLowerText").children[1].children[1].style.visibility="hidden";
        gridContainerItem[2].style.visibility="hidden";
    }  
    else
    {
        gridContainerItem[2].style.visibility="visible";
        document.getElementById("rightCentralLowerText").children[1].children[1].style.visibility="visible";
    }
 
    if(screen.width <  450)
    {
        document.getElementById("rightCentralLowerText").style.display = "none";
        gridContainerItem[2].style.display="none";
       document.getElementsByClassName("gridContainer")[0].style.width ="540px";
       document.getElementById("rightCentralText").style.width ="500px";
       
    }
    else 
    {
        gridContainerItem[2].style.display="grid";
        document.getElementById("rightCentralLowerText").style.display = "";
        document.getElementsByClassName("gridContainer")[0].style.width ="800px";
        document.getElementById("rightCentralText").style.width ="900px";
    }
}

