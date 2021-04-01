var students={
    name:"Muhammad Rashid",
    class:"xii",
    rollNO:17279
}


function prope() {
    
    console.log(students.name,students.class,students.rollNO);

var newDiv = document.createElement('div');
newDiv.style.backgroundColor = "none";
newDiv.style.fontSize = "40px";
newDiv.innerText = students.name+" "+students.class+" "+students.rollNO
document.getElementById('a').appendChild(newDiv)
}
function ret() {
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText = students
    document.getElementById('a').appendChild(newDiv)
}
// function roll() {
//     var students={
//         name:"Muhammad Rashid",
//         class:"xii",
//         rollNO:17279
//     }
//     // console.log(students.name,students.class,students.rollNO);
//  var student=delete students.rollNO
// var newDiv = document.createElement('div');
// newDiv.style.backgroundColor = "none";
// newDiv.style.fontSize = "40px";
// newDiv.innerText = student.name
// document.getElementById('a').appendChild(newDiv)
// }



//   function so() {
      
//     var newDiv = document.createElement('div');
// newDiv.style.backgroundColor = "none";
// newDiv.style.fontSize = "40px";
// newDiv.innerText = 
// document.getElementById('a').appendChild(newDiv)
//   }


  function ful(){
    var library=[
        {author:"bill gates",
         title:"The Road Ahead",
         readingStatus:true
        },
        {author:"bilclinthon",
         title:"The Road ",
         readingStatus:false
        },
        {author:"bill gates",
         title:"The Road Ahead",
         readingStatus:true
        }];

        var s=library[0].readingStatus
        var p=library[1].readingStatus
  var q = library[2].readingStatus
  var newDiv = document.createElement('div');
  newDiv.style.backgroundColor = "none";
  newDiv.style.fontSize = "40px";
  newDiv.innerText = s+" "+p+" "+q
  document.getElementById('a').appendChild(newDiv)
  
}

function vol() {
    var r = parseInt(document.getElementById("r").value)
    var h = parseInt(document.getElementById("h").value)
    var pi = 3.14
var v = pi*h*(r*r)
    var newDiv = document.createElement('div');
  newDiv.style.backgroundColor = "none";
  newDiv.style.fontSize = "40px";
  newDiv.innerText = v
  document.getElementById('a').appendChild(newDiv)
}


function sub() {
    var sub = document.getElementById("sub").value
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText = sub.slice(0,1)+" "+sub+" "+sub.slice(1,2)+" "+sub.slice(2,3)+" "+sub.slice(0,2)+" "+sub.slice(1,3)
    document.getElementById('a').appendChild(newDiv)
}


function sec(params) {
    a=new Date()
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText = a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()
    document.getElementById('a').appendChild(newDiv)
}

function slas() {
    a=new Date()


    
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText = a.getDay()+"/"+(a.getMonth()+1)+"/"+a.getFullYear()
    document.getElementById('a').appendChild(newDiv)
}
function hyp(params) {
    a=new Date()
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText = a.getDay()+"-"+(a.getMonth()+1)+"-"+a.getFullYear()
    document.getElementById('a').appendChild(newDiv)
}


function dat() {
    var date1 =parseInt( document.getElementById("date1").value)
    var date2 = parseInt(document.getElementById("date2").value)
if(date1>date2){
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText = date1+">"+date2
    document.getElementById('a').appendChild(newDiv)
}
if(date1<date2){
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText = date1+"<"+date2
    document.getElementById('a').appendChild(newDiv)
}
if(date1===date2){
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText = date1+"="+date2
    document.getElementById('a').appendChild(newDiv)
}
}

function da() {
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText = new Date()
    document.getElementById('a').appendChild(newDiv)
}
function soo() {
    
a=new Date()
var ss = parseInt(a.getMonth())
if(ss>5){
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText ="This Day is Weekend"
    document.getElementById('a').appendChild(newDiv)
}
else{
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText ="This Day is not a Weekend"
   document.getElementById('a').appendChild(newDiv) 
}

   
}

function dif() {
    var date1 =parseInt( document.getElementById("date1").value)
    var date2 = parseInt(document.getElementById("date2").value)
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =date1-date2
   document.getElementById('a').appendChild(newDiv) 
}


function add3() {
    var add3 = parseInt(document.getElementById("add3").value)
    a=new Date()
  s=a.setMinutes(a.getMinutes()+add3)
    ss=Date(s)
    console.log(ss);
   
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =ss
   document.getElementById('a').appendChild(newDiv) 
    
}


function datee() {
    var datee = document.getElementById("datee").value;
    // var d = datee.getDay()
    a=new Date(datee)
sss=parseInt(a.getDay()-1)
console.log(sss)
    switch (sss) {
            case 1:{
              var z="Monday"
            }
                
                break;
                case 2:{
                    var z="Tuesday"
                }
                    
                    break;
                    case 3:{
                        var z="Wednesday"
                    }
                        
                        break;
                        case 4:{
                            var z="Thursday"
                        }
                            
                            break;
                            case 5:{
                                var z="Friday"
                            }
                                
                                break;
                                case 6:{
                                    var z="Saturday"
                                }
                                    
                                    break;
                                    case 0:{
                                        var z="Sunday"
                                    }
                                        
                                        break;
        
            // default:{
            //     var z="The number doesn't represents a day"
            // }
            //     break;
        }
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =z
   document.getElementById('a').appendChild(newDiv) 


}

function hou() {
    var sss=document.getElementById("hou").value;
    var g=parseInt(sss.slice(0,2))
    var h=parseInt(sss.slice(3,5))
    console.log(sss,g,h);
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =(g*60)+h+" "+"Minutes in"+sss+" "+"time"
   document.getElementById('a').appendChild(newDiv) 
}
function dayy() {
    var dayy = parseInt(document.getElementById("dayy").value)
    if(dayy%4===0){
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "none";
        newDiv.style.fontSize = "40px";
        newDiv.innerText ="This year has 366 Days"
       document.getElementById('a').appendChild(newDiv) 
    }
    else{
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "none";
        newDiv.style.fontSize = "40px";
        newDiv.innerText ="This year has 365 Days"
       document.getElementById('a').appendChild(newDiv) 
    }

}

function dayyy() {
    var dayyy = parseInt(document.getElementById("dayyy").value)
    console.log(dayyy)
    a=new Date()
    
    var ss = a.getFullYear()
    console.log(ss)
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =ss-dayyy+"is the age of yours"
   document.getElementById('a').appendChild(newDiv) 
}






function aaa() {
    var datee = document.getElementById("aaa").value;
    // var d = datee.getDay()
    a=new Date(datee)
sss=parseInt(a.getDay())
console.log(sss)
    switch (sss) {
            case 1:{
              var z="Mon"
            }
                
                break;
                case 2:{
                    var z="Tues"
                }
                    
                    break;
                    case 3:{
                        var z="Wed"
                    }
                        
                        break;
                        case 4:{
                            var z="Thu"
                        }
                            
                            break;
                            case 5:{
                                var z="Fri"
                            }
                                
                                break;
                                case 6:{
                                    var z="Sat"
                                }
                                    
                                    break;
                                    case 0:{
                                        var z="Sun"
                                    }
                                        
                                        break;
        
            // default:{
            //     var z="The number doesn't represents a day"
            // }
            //     break;
        }
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =z
   document.getElementById('a').appendChild(newDiv) 


}


function aa() {
    var datee = document.getElementById("aaa").value;
    // var d = datee.getDay()
    a=new Date(datee)
sss=parseInt(a.getDay())
console.log(sss)
var newDiv = document.createElement('div');
newDiv.style.backgroundColor = "none";
newDiv.style.fontSize = "40px";
newDiv.innerText =sss
document.getElementById('a').appendChild(newDiv) 


}


function daaaa() {
    var d = document.getElementById("daaaa").value
   b= Date(d)
    a = new Date()
// var s=parseInt(d.getMonth())
// var p=parseInt(a.getMonth())
// var t=parseInt(d.getDay())
// var u = parseInt(a.getDay())

    console.log(b,a);
    var newDiv = document.createElement('div');
newDiv.style.backgroundColor = "none";
newDiv.style.fontSize = "40px";
newDiv.innerText =b
document.getElementById('a').appendChild(newDiv) 
}


function posi() {
    var datee = document.getElementById("aaa").value;
    // var d = datee.getDay()
    a=new Date(datee)
sss=parseInt(a.getDay())
console.log(sss)
    switch (sss) {
            case 1:{
              var z="2nd"
            }
                
                break;
                case 2:{
                    var z="3rd"
                }
                    
                    break;
                    case 3:{
                        var z="4th"
                    }
                        
                        break;
                        case 4:{
                            var z="5th"
                        }
                            
                            break;
                            case 5:{
                                var z="6th"
                            }
                                
                                break;
                                case 6:{
                                    var z="7th"
                                }
                                    
                                    break;
                                    case 0:{
                                        var z="1st"
                                    }
                                        
                                        break;
        
            // default:{
            //     var z="The number doesn't represents a day"
            // }
            //     break;
        }
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =z
   document.getElementById('a').appendChild(newDiv) 


}

function weekk() {
    var datee = document.getElementById("aaa").value;
    // var d = datee.getDay()
    a=new Date(datee)
var s = a.get
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =z
   document.getElementById('a').appendChild(newDiv) 
}


function fu() {
    var datee = document.getElementById("datee").value;
    // var d = datee.getDay()
    a=new Date(datee)
sss=parseInt(a.getMonth())
console.log(sss)
    switch (sss) {
            case 1:{
              var z="January"
            }
                
                break;
                case 2:{
                    var z="February"
                }
                    
                    break;
                    case 3:{
                        var z="March"
                    }
                        
                        break;
                        case 4:{
                            var z="April"
                        }
                            
                            break;
                            case 5:{
                                var z="May"
                            }
                                
                                break;
                                case 6:{
                                    var z="June"
                                }
                                    
                                    break;
                                    case 7:{
                                        var z="July"
                                    }
                                        
                                        break;
        
            // default:{
            //     var z="The number doesn't represents a day"
            // }
            //     break;
        }
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = "none";
    newDiv.style.fontSize = "40px";
    newDiv.innerText =z
   document.getElementById('a').appendChild(newDiv) 


}