const buttons=document.querySelectorAll("button")
let str="";
buttons.forEach((b)=>{
    b.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            try{
                document.querySelector("input").value=eval(str);
            }catch(err){
                document.querySelector("input").value="Error...";
            }
            str="";
            
        }else if(e.target.innerHTML=="AC"){
            str="";
            document.querySelector("input").value=str;
        }
        else{
            str=str+e.target.innerHTML;
            document.querySelector("input").value=str;
        }
    })
})