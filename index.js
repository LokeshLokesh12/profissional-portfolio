function opennavrit(){
    
    if(  document.getElementById("nav-right").style.display == 'none'){
        document.getElementById("nav-right").style. transition = '3s'
        document.getElementById("nav-right").style.display = 'block'
    }
    else{
        document.getElementById("nav-right").style. transition = '3s'
        document.getElementById("nav-right").style.display = 'none'
    }
    if(document.getElementById("nav-right").style.height == '0px'){
        document.getElementById("nav-right").style. transition = '3s'
        document.getElementById("nav-right").style.height = 'auto' 
    }
    else{
        document.getElementById("nav-right").style. transition = '3s'
        document.getElementById("nav-right").style.height = '0'
    }

}
function closenavrit(){
    document.getElementById("nav-right").style.display = 'none'
    document.getElementById("nav-right").style.height = '0'
} 

// if(  document.getElementById("nav-right").style.display == 'none'){
//     document.getElementById("nav-right").style.display = 'block'
// }
// else{
//     document.getElementById("nav-right").style.display = 'none'
// }
// if(document.getElementById("nav-right").style.height == '0'){
//     document.getElementById("nav-right").style.height = 'auto' 
// }
// else{
//     document.getElementById("nav-right").style.height = '0'
// }