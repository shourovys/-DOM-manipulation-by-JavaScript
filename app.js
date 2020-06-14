const listParent = document.getElementById("my-list").addEventListener("click", function (params) {
    params.target.parentNode.removeChild(params.target)
    // document.getElementById("my-list").removeChild(params.target)

})



// const listItems = document.getElementsByClassName("list-item");

// for (let i = 0; i < listItems.length; i++) {
//     const listItem = listItems[i];

//     listItem.addEventListener("click", function (params) {
//         params.target.parentNode.removeChild(params.target)

//     })

// }


document.getElementById("add-btn").addEventListener("click", function () {
    const itemParent = document.getElementById("my-list");
    const newItem = document.createElement("li");
    newItem.innerText = "btn add me";
    newItem.classList = "list-item"
    itemParent.appendChild(newItem)
})