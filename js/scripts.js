//find element on web page
const actionButton = document.getElementById("action-btn");

//perform action on click event
actionButton.addEventListener("click", performActionOnClick)

const listItems = document.getElementById('list-items'); //entry point for list items
const dataCollection = [];

//function definition
function performActionOnClick() {
    const value = `test ${new Date()}`;

    dataCollection.push(value);

    addItemAndRenderList(dataCollection);
}

function addItemAndRenderList(dataCollection) {
    //cleaning unordered list
    while (listItems.firstChild) {
        listItems.removeChild(listItems.firstChild);
    }

    //add new item with value to existing unordered list 
    for (let i = 0; i < dataCollection.length; i++) {
        const listItem = document.createElement("LI");
        const textValueForListItem = document.createTextNode(dataCollection[i]);

        listItem.appendChild(textValueForListItem);
        listItems.appendChild(listItem);
    }
}
