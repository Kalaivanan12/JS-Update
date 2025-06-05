function display() {
        document.getElementById('test').innerHTML="welcome to js"
        let n= document.getElementById('name').value 
        console.log("hii "+n)
        
        if(n=="")
        alert("Give Value")
    else
    alert(n)
        }