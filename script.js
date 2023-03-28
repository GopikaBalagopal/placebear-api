let width=prompt("enter the pics width");
let height=prompt("enter the pics height");

placebear()

async function placebear(){
    let link=`https://placebear.com/${width}/${height}`
    let img=document.createElement("img");
    let main=document.getElementById("image");
    img.src=link;
    main.append(img);
    
}