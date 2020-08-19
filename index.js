//Documentation: https://picsum.photos/;

// const baseURL= "https://picsum.photos/v2/list";
// const baseURL= "https://picsum.photos/200/300?random=";
const baseURL = "https://picsum.photos/v2/list?page=3&limit=40";
const masonry = document.querySelector(".masonry");

fetch(baseURL)
  .then((result) => {
    console.log(result);
    return result.json();
  })
  .then((data) => {
    displayImages(data);
  })
  .catch((err) => console.log(err));

function displayImages(passedData) {
  passedData.forEach((element) => {
    // console.log(element);
    let box = document.createElement("div");
    let img = document.createElement("img");

    box.setAttribute("class", "masonry-item");
    console.log(element.download_url);
    img.src = element.download_url;
    masonry.appendChild(box);
    box.appendChild(img);
    img.alt = element.url;
    img.setAttribute("class", "masonry-content");
  });
}
