var allitems=[];
var liList=document.querySelectorAll("ul li")
for(var i=0;i<liList.length;i++){
liList[i].addEventListener('click',function (eventInfo) {
    
    var recipe=eventInfo.target.innerHTML
    getrecipes(recipe)
})
}

function getrecipes(recipe) {
    
var koks=new XMLHttpRequest();
koks.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
koks.send();


koks.addEventListener("readystatechange",function () {

    if (koks.readyState==4) {
        allitems=JSON.parse(koks.response).recipes
        displayData()
        console.log(allitems);
    }
})
}

getrecipes('chicken')
function displayData() {
    var cartoona=``
    
    for(var i=0;i<allitems.length;i++){
        cartoona+=`
        <div class="col-md-4 py-5">
        <img src="${allitems[i].image_url}" class="w-100"/>
        <h2>${allitems[i].title.split(' ').slice(0,2).join(' ')}</h2>
        <a href="${allitems[i].source_url}" target="_blank">see more</a>
    </div>
    `
    }
    document.querySelector(".container .row").innerHTML=cartoona
}
