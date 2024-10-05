const btnCategories = document.querySelector("#btn-categories");

const loadCategories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
    const data = await res.json();
    displayCategories(data.categories);

}

const displayCategories = (categories) => {
    categories.forEach(category => {
       const button = document.createElement("button");
       button.classList = ("btn");
       button.innerText = category.category;
       btnCategories.append(button);
    });
}

const loadVideos = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    const data = await res.json();
    console.log(data.videos);
}


loadCategories();
loadVideos();