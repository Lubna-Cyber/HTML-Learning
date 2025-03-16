let option=parseInt(prompt("Enter the option:1.Add 2.Sub 3.Mult 4.Div"));
let v1=parseInt(prompt("Enter the first Value"));
let v2=parseInt(prompt("Enter the Second Value"));

// if(option==1){
//     function add(){
//     return v1+v2 
//     }   
// }
// let a1=add(v1,v2);
// console.log(a1);


function calculator(option,v1,v2){
    if(option==1)
    {
        return v1+v2;
    }
    else if(option==2)
    {
        return v1-v2;
    }
    else if(option==3)
    {
        return v1*v2;
    }
    else if(option==4)
    {
        return v1/v2;
    }
}
let calc=calculator(option,v1,v2);
// console.log(calc)
// document.writeln(calc)

