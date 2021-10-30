const todolist = document.querySelector(".todo_list");
const todoinput = document.querySelector("#text_todo");
function get_text() {
  var t = document.getElementById("text_todo").value;

  //adding div
  var tododiv = document.createElement("div");
 tododiv.classList.add("todo_div");
  //adding li
  var li = document.createElement("li");
  li.classList.add("items");
  var d=document.createElement("div");
  d.innerText=t;
  li.appendChild(d);
  tododiv.appendChild(li);
  
  //adding  delete btn
  var todobtndel=document.createElement("button");
  todobtndel.classList.add("btn1");
  todobtndel.addEventListener("click",del_div);
  function del_div()
{
  todobtndel.parentElement.remove();
  console.log("a");
}
  todobtndel.innerText='Delete';
  tododiv.appendChild(todobtndel);

  //adding check btn

  var btn_check=document.createElement("button");
  btn_check.classList.add("btn2");
  btn_check.style.backgroundColor="ligth blue";
  btn_check.style.marginLeft="10px";
  btn_check.addEventListener("click",check_div);
  var flag=true;
  function check_div()
  { if(flag===true){
   li.style.backgroundColor="green";
    console.log("b");
    flag=false;
  }
  else{
    li.style.backgroundColor="yellow";
    flag=true;
  }
  }
  btn_check.innerText='check';
  tododiv.appendChild(btn_check);

  todolist.appendChild(tododiv);
  todoinput.value=" ";
  console.log(t);
}

