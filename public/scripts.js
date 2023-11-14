let count = 0;

const showAlbums = async() => {
    let response;
    let albumJSON;

    try {
        response = await fetch("../api/data");
        albumJSON = await response.json();  
    } catch (error) {
        console.log("Error retrieving JSON")
    }

    let albumDivLeft = document.getElementById("album-list-left");
    let albumDivCenter = document.getElementById("album-list-center");
    let albumDivRight = document.getElementById("album-list-right");

    albumJSON.forEach((album) => {
        let section = document.createElement("section");
        
        if (count % 3 == 0) {
            albumDivLeft.append(section);
        }
        if (count % 3 == 1) {
            albumDivCenter.append(section);
        }
        if (count % 3 == 2) {
            albumDivRight.append(section);
        }

        count++;
        
        let h2 = document.createElement("h2");
        section.append(h2);
        h2.innerHTML = album.name;

        let img = document.createElement("img");
        img.classList.add("cover");
        section.append(img);
        img.src= album.picture;

        let band = document.createElement("p");
        section.append(band);
        band.innerHTML = "Band: " + album.band;

        let genre = document.createElement("p");
        section.append(genre);
        genre.innerHTML = "Genre: " + album.genre;

        let year = document.createElement("p");
        section.append(year);
        year.innerHTML = "Release year: " + album.year;

        let membersTitle = document.createElement("p");
        section.append(membersTitle);
        membersTitle.innerHTML = "Band members: ";

        let members = document.createElement("ul");
        section.append(members);
        for (mem in album.members) {
            let member = document.createElement("li");
            member.innerText = album.members[mem];
            members.append(member);
        }
    });
};

window.onload = () => {
    count = 0;
    showAlbums();
}