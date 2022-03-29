// document.getElementById("text")
// function dummy(){
//     const head = document.getElementsByClassName("text")
//     console.log(head);
// }

function dummy(){
    document.getElementById("container").style.flexDirection="column"
    // document.getElementById("container").style.backgroundColor="lightpink"
}


// function dummy(){
//     var result=document.getElementById("text");
//     var result1= result.value
//     document.getElementById("output").innerText=result1
// }

function clock(){
    var hours= document.getElementById("hour")
    var minits= document.getElementById("min")
    var secs= document.getElementById("sec")
    var amoos= document.getElementById("amoo")

    var time =new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var sec=time.getMinutes();
    
}