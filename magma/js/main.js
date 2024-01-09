let pTag1=document.querySelector(".mg-featured-reel-wrap .items");
let count1 = 0;


let newItems=pTag1.cloneNode(true);

let nextElement=document.querySelector(".mg-featured-reel-wrap");
nextElement.appendChild(newItems);
nextElement.style.width=pTag1.offsetWidth * 2+"px";


function marqueeText(count,element,direction){
 if(count>element.scrollWidth/2){
    element.style.transform='translate3d(0,0,0)';
    count=0;
 }
 element.style.transform=`translate3d(${count * direction}px,0,0)`;
 return count;
}

function animate(){
    count1++;
    count1=marqueeText(count1,nextElement,1)
    requestAnimationFrame(animate)
}
animate()