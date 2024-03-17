const childDivs = document.querySelectorAll(".child-div");
const btnIcon = document.querySelectorAll(".btnIcon");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const ele = document.querySelector(":root");

let childDivsLength = childDivs.length;

let translateValue = 0;

// const eleComputed = getComputedStyle(ele);
// console.log(eleComputed.getPropertyValue("--translateDiv"));

//let setVal = ele.style.setProperty("--translateDiv","10px");

btnIcon.forEach((item)=>{
  item.addEventListener("click",()=>{
  if(item.classList.contains("icon2")){
    console.log("true");
    if(translateValue===0){
      translateValue = 0;
      icon2.classList.add("displayNone");
      icon1.classList.remove("displayNone");
      console.log("000")
      return;
    }
    translateValue++;
    ele.style.setProperty("--translateDiv",`${translateValue * 100}vw`);
    console.log(translateValue);
  }
   else if(item.classList.contains("icon1")){
    console.log("false");
     if(translateValue===-(childDivsLength - 1)){
      translateValue = -(childDivsLength - 1);
      icon1.classList.add("displayNone");
       icon2.classList.remove("displayNone");
      console.log("000")
      return;
    }
     translateValue--;
     ele.style.setProperty("--translateDiv",`${translateValue * 100}vw`);
     console.log(translateValue);
  }
})
});

