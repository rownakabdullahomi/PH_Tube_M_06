const btnCategories = document.querySelector("#btn-categories");
const videosSection = document.querySelector("#videos");

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
    displayVideos(data.videos);
}

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

const displayVideos = (videos) => {
    videos.forEach(video => {
        console.log(video);
        const cardDiv = document.createElement("div");
        cardDiv.classList = "card bg-base-100 shadow-xl"
        cardDiv.innerHTML = `
        <figure>
    <img
      src=${video.thumbnail} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `;

    videosSection.append(cardDiv);
    })
}


loadCategories();
loadVideos();