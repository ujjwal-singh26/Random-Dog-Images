let btn=document.querySelector("button");
let img_url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",async()=>{
    let link=await getImages();
    let img=document.querySelector("#result");
    img.setAttribute("src",link);
});

async function getImages(){
    try{
        let res=await axios.get(img_url);
        return res.data.message;
    }
    catch(e)
    {
        console.log("ERROR-",e);
        return "No Image Found!"
    }
}