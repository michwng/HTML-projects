/* main.js
 *      Author:         Jack      
 *      Date:           2021-02-23
 *      Last revised:   2021-02-24
 *      Description:    Methods for the toDoList app
 */  
import ToDoList from './todolist.js';
import ToDoItem from './todoitem.js';

const toDoList = new ToDoList();

// launch app
document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') {
        initApp();
    }
});

// initialize the app
const initApp = () => {
    // listeners
    const itemEntryForm = document.getElementById('itemEntryForm');
    const clearItems = document.getElementById('clearItems');
    
    // submit button
    itemEntryForm.addEventListener('submit', (event) => {
        event.preventDefault();
        processSubmission();
    });
    
    // clear button
    clearItems.addEventListener('click', () => {
       const list = toDoList.getList();
        if (list.length) {
            const confirmed = confirm('Are you sure you want to clear the entire list?');
            if (confirmed) {
                toDoList.clearList();
                // todo - update persistent data
                refreshThePage();
            }
        }
    });
    
    // Procedural 
    // load list object
    refreshThePage();
};

const refreshThePage = () => {
     clearListDisplay();
     renderList();
     clearItemEntryField();
     setFocusOnItemEntry();
};

// helper function
const clearListDisplay = () => {
    const parentElement = document.getElementById('listItems');
    deleteContents(parentElement);
};

// helper function
const deleteContents = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};

// helper function
const renderList = () => {
    const list = toDoList.getList();
    list.forEach(item => {
        buildListItem(item);
    });
};

const buildListItem = (item) => {
    const div = document.createElement('div');
    div.className = 'item';
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.id = item.getId();
    check.tabIndex = 0;
    addClickListenerToCheckbox(check);
    const label = document.createElement('label');
    label.htmlfor = item.getId();
    label.textContent = item.getItem();
    div.appendChild(check);
    div.appendChild(label);
    label.style.textTransform = 'capitalize';
    const container = document.getElementById('listItems');
    container.appendChild(div);
};

// remove item
const addClickListenerToCheckbox = (checkbox) => {
    checkbox.addEventListener('click', (event) => {
        toDoList.removeItemFromList(checkbox.id);
        setTimeout(() => {
            refreshThePage();
        }, 500);
    });
};

// clear the item entry field after new item submission
const clearItemEntryField = () => {
    document.getElementById('newItem').value = '';
};

// set focus on new item entry
const setFocusOnItemEntry = () => {
    document.getElementById('newItem').focus();
}

// create new item on entry
const processSubmission = () => {
    const newEntryText = getNewEntry();
    if (!newEntryText.length) return;
    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText);
    toDoList.addItemToList(toDoItem);
    // update persistent data
    refreshThePage();
};

// helper function
const getNewEntry = () => {
    return document.getElementById('newItem').value.trim();
}

// get new item's id
const calcNextItemId = () => {
    let nextItemId = 1;
    const list = toDoList.getList();
    if (list.length > 0) {
        nextItemId = list[list.length -1].getId() + 1;
    }
    return nextItemId;
}

// create new item from entry
const createNewItem = (itemId, itemText) => {
    const toDo = new ToDoItem();
    toDo.setId(itemId);
    toDo.setItem(itemText);
    return toDo;
}



