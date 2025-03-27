
// function alertBox()
// {
//     alert("Welcome Here")
// }

// let box = ()=>{
//     alert("Hello Buddiesss...")
// }

// let btn = document.getElementById('btn')

// btn.addEventListener('click',()=>{
//     box()
// }) 


    function createRectangle()
    {
    let div = document.createElement('div')

    div.style.width="400px";
    div.style.height = "200px"
    div.style.backgroundColor="orange"
    document.body.appendChild(div)
    }

    let rectangle = document.getElementById("rectangle")

    rectangle.addEventListener('click',()=>{
            createRectangle()
    })


    function createSquare()
    {
    let div = document.createElement('div')

    div.style.width="200px";
    div.style.height = "200px"
    div.style.backgroundColor="black"
    document.body.appendChild(div)
    }

    let square = document.getElementById("square")

    square.addEventListener('click',()=>{
            createSquare()
    })

    function createCircle()
    {
    let div = document.createElement('div')
    
    div.style.width="200px";
    div.style.height ="200px"
    div.style.borderRadius="100px" ;
    div.style.backgroundColor="red"
    div.style.border="2px solid Blue"
    document.body.appendChild(div)
    }

    let Circle = document.getElementById("circle")

    Circle.addEventListener('click',()=>{
            createCircle()
    })


    function createTriangle()
    {
    let div = document.createElement('div')   

    div.style.width="0";
    div.style.height ="0"
    div.style.borderLeft="100px solid transparent" ;
    div.style.borderRight="100px solid transparent" ;
    div.style.borderBottom="200px solid Blue" ;
//     div.style.border="5px solid black"
    document.body.appendChild(div)
    }

    let Triangle = document.getElementById("Triangle")

    Triangle.addEventListener('click',()=>{
        createTriangle()
    })

    
    function createoval()
    {
    let div = document.createElement('div')
    
    div.style.height ="150px";
    div.style.width ="100px";
   div.style.backgroundColor="green";
   div.style.borderRadius = "50%";
  
    document.body.appendChild(div)
    }

    let oval = document.getElementById("oval")

    oval.addEventListener('click',()=>{
            createoval()
    })

    

