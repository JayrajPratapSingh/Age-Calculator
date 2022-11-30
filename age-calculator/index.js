

const calculatedage = () =>{
    const dateEle = document.getElementById("date").value
    const monthEle = document.getElementById("month").value
    const yearEle = document.getElementById("year").value
    
    
    let date = new Date();
    let newDate = date.getDate();
    let newMonth = 1 + date.getMonth();
    let newYear =  date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 , 31]

if(dateEle>newDate){
    newDate = newDate + month[newMonth-1];
    newMonth = newMonth-1
}
if(monthEle>newMonth){
    newMonth = newMonth + 12
    newYear = newYear-1
}


let dates = newDate - dateEle;
let months = newMonth - monthEle;
let years = newYear - yearEle;
if(!dateEle || !monthEle || !yearEle){
        
    document.getElementById("output").innerHTML = "please input valid data from month and year"
}
else{
    document.getElementById("output").innerHTML = `Your age is ${years} years ${months} months ${dates} days`

}

}





