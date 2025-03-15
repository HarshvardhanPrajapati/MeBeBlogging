document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchbar");
    const searchableItems = document.querySelectorAll(".searchable");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();

        searchableItems.forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(query)) {
                item.style.display = "flex";
            }
            else {
                item.style.display = "none";
            }
        });
    });
});


const add_btn = document.getElementById("BlogAddButton");
let blogform = document.querySelector(".Form");
add_btn.addEventListener("click", () => {
let whole_content = document.querySelectorAll(".content");
    if (add_btn.innerText == "Add blog") {
        whole_content.forEach(section => section.style.display = "none");
        blogform.style.display = "block";
        add_btn.innerText = "Cancel";
    }
    else {
        whole_content.forEach(section => section.style.display = "flex");
        blogform.style.display = "none";
        add_btn.innerText = "Add blog";
    }
});


//publish button functionality
let publish_button = document.getElementById("submitbtn");

publish_button.addEventListener("click", (event) => {
    event.preventDefault();
    let heading = document.getElementById("heading").value;
    let blog_content = document.getElementById("blogcontent").value;
    let blogimage = document.getElementById("blogimage");
    let blogimagefile = blogimage.files[0];

    let new_blog = document.createElement("div");
    new_blog.classList.add("content", "max-width-2", "searchable");
    let imgtag = "";
    if (blogimagefile) {
        let imgurl = URL.createObjectURL(blogimagefile);
        imgtag = `<img src="${imgurl}" alt="blog-image">`;
    }

    new_blog.innerHTML = `
    <div class="contentleft">
                <h3>${heading}</h3>
                <p>${blog_content}</p>
            </div>
            <div class="contentright">
                ${imgtag}
            </div>
    `;

    let entire_content = document.querySelector(".main-content");
    entire_content.appendChild(new_blog);

    document.getElementById("form").reset();
    blogform.style.display = "none";

    whole_content = document.querySelectorAll(".content");
    whole_content.forEach(section => section.style.display = "flex");
    add_btn.innerText = "Add blog";

})