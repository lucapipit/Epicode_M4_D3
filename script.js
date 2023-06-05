
const apiUrl = 'https://api.pexels.com/v1/';
const apiKey = "SOXY8wAyVFa6s795zedhKgbsNR3enxKPjyjnEiq37CxxtaqvwpqVz62r";
let main = document.getElementById("main");
let searchArry = [];


function logJSONData() {

    let searchValue = document.getElementById("searchValue").value;
    fetch(apiUrl + 'search?query=' + searchValue, {headers: {Authorization: apiKey}})
    .then((response) => {
        console.log(response);
        return response.json(); 
    })
    .then((res) => {
        console.log(res);
        searchArry = res.photos;
        return appendPics(searchArry);
    })
    .catch((error) => console.error(error));
}




function appendPics(input){
    resetResults();
    let maxWidth = document.getElementById("widthValue").value;
    for (const photo of input) {
        if(photo.width < maxWidth || maxWidth === ""){
            let img = document.createElement("img");
            img.src = photo.src.medium;
            img.classList.add("searched", "m-1");
            main.appendChild(img);
        }
    }
}


function resetResults(){
    /* let toRemove = document.getElementsByClassName("searched");
    for (i = toRemove.length; i > 0; i--) {
        toRemove[i-1].remove();
    } */
    main.innerText = "";
}

