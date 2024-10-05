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
        <figure class="h-[250px] relative">
            <img class="h-full w-full object-cover"
            src=${video.thumbnail} />

            ${video.others.posted_date? `<span class="absolute right-2 bottom-2 bg-black rounded p-1 text-white">${video.others.posted_date}</span>` : ""}

            
        </figure>
        <div class="px-0 py-2 flex gap-3 items-center">
            <div>
                <img class="h-12 w-12 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
            </div>
            <div>
                <h2 class="font-bold">${video.title}</h2>
                <div class="flex items-center gap-2">
                    <p class="text-gray-500">${video.authors[0].profile_name}</p>

                    ${video.authors[0].verified? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />`:""}

                    
                </div>
                
                <p></p>
            </div>
        </div>
        `;

    videosSection.append(cardDiv);
    })
}


loadCategories();
loadVideos();