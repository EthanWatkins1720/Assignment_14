let count = 0;
let toggle = false;

const addAlbum = async (e) => {
    e.preventDefault();

    const form = document.getElementById("add-album-form");
    const formData = new FormData(form);
    formData.append("members", getMembers());
    

    let response;
    
    // For new albums
    if (form._id.value == -1) {
        formData.delete("_id");

        response = await fetch("/api/data", {
            method: "POST",
            body: formData,
        });
    }

    // Error
    if(response.status != 200) {
        console.log("Error contacting server");
        return;
    }

    addShowHide;
    resetForm();
    showAlbums();
};

const getMembers = () => {
    const inputs = document.querySelectorAll("#band-members-div input")
    const members = [];

    inputs.forEach((input) => {
        members.push(input.value);
    });

    return members;
}

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

const addShowHide = (e) => {
    e.preventDefault();
    if (toggle) {
        document.getElementById("add-album-box").style.display = "none";
        toggle = false;
    } else if (toggle == false) {
        document.getElementById("add-album-box").style.display = "block";
        toggle = true;
    }
};

const addMember = (e) => {
    e.preventDefault();
    const memberDiv = document.getElementById("band-members-div");
    const input = document.createElement("input");
    input.type = "text";
    memberDiv.append(input);
}

window.onload = () => {
    count = 0;
    toggle = false;
    showAlbums();
    document.getElementById("add-button").onclick = addShowHide;
    document.getElementById("band-members-button").onclick = addMember;
    document.getElementById("add-album-form").onsubmit = addAlbum;

};