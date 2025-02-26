window.onload = () => {
    const apikey = "PAofNVaDeVoXM9sGPlcLVMAl1SpOS7uMGhbLuj20QrTxxW3DySoBLvDP";
    const url = 'https://api.pexels.com/v1/search?query=nature&per_page=15';
    fetch(url, {
        headers: { Authorization: apikey }
    })
    .then(response => response.json()) 
    .then(data => {
        console.log(data)
        data.photos.forEach(photo => {
            let div = document.getElementById("container");
            let img = document.createElement("img");
            img.setAttribute("src", photo.src.medium);
            div.appendChild(img);
        });
    })
    .catch(error => console.error("Error: " + error))
}


