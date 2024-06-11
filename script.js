let arr=[]
let result = '';
let finres = '';
let disbtn = document.querySelectorAll(".disbtn");
let inp= document.querySelector(".inp"); 
let btns= document.querySelectorAll(".btn");
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{

            if (btn.innerText === "=") {
               try {
                finres = eval(finres)
                result = finres
                inp.value = result
               } catch (error) {
                  inp.value = "Undefined"
               }
            }else if(btn.innerText === "AC"){
                result = '';
                finres = '';
                arr=[]
                inp.value=result
            }else if(btn.innerText === "C"){
                result = arr[arr.length-2];
                finres = arr[arr.length-2];
                inp.value = result
                arr.pop(arr[arr.length-1])
                if (arr.length<1) {
                    inp.value=""
                    result=""
                    finres=""
                }
            }else if(btn.innerText === "+"){
                let random= Math.floor(Math.random()*100);
                if (random > 10) {
                    result += "+";
                    finres += "+";
                    arr.push(result);
                    inp.value=result;
                }else{
                    result += "+";
                    finres += "-";
                    arr.push(result);
                    inp.value=result;
                }
            }else if(btn.innerText === "-"){
                let random= Math.floor(Math.random()*100);
                if (random > 10) {
                    result += "-";
                    finres += "-";
                    arr.push(result);
                    inp.value=result;
                }else{
                    result += "-";
                    finres += "/";
                    arr.push(result);
                    inp.value=result;
                }
            }else if(btn.innerText === "x"){
                let random= Math.floor(Math.random()*100);
                if (random > 10) {
                    result += "x";
                    finres += "*";
                    arr.push(result);
                    inp.value=result;
                }else{
                    result += "x";
                    finres += "+";
                    arr.push(result);
                    inp.value=result;
                }
            }else if(btn.innerText === "÷"){
                let random= Math.floor(Math.random()*100);
                if (random > 10) {
                    result += "÷";
                    finres += "/";
                    arr.push(result);
                    inp.value=result;
                }else{
                    result += "÷";
                    finres += "**";
                    arr.push(result);
                    inp.value=result;
                }
            }else{
                result += btn.innerText;
                finres += btn.innerText;
                arr.push(result);
                inp.value=result
                if (arr.length > 15) {
                    inp.scrollBy(50,0)
                }
            }
       
    })
})
//÷