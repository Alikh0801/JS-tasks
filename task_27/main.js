//task 1

// const ulElem = document.querySelector(`ul li:first-child`)
// console.log(ulElem);


//task 2

// const titleElem = document.querySelector("h1");
// titleElem.remove("h1");
// console.log(titleElem);

//task 3

// const titleElem = document.querySelector("h1");
// const classes = document.querySelectorAll(".primary")
// titleElem.innerText = "GeForce 20 Series";
// titleElem.style.color


// classes.forEach(elem => {
//     elem.style.backgroundColor = "#ebebeb"
// })


//task 4

// const classes = document.querySelectorAll(".primary")

// classes.forEach(elem => {
//     console.log(elem);

// })


//task 5

const checklist = document.querySelectorAll("ul li");

checklist.forEach(items => {
    items.classList.add("item")

    if (!items.classList.contains("primary")) {
        items.classList.add("secondary")
    }
})
console.log(checklist);


