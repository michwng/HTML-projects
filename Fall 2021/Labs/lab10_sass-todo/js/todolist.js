/* todolist.js
 *      Author:         Jack      
 *      Date:           2021-02-23
 *      Last revised:   2021-02-25
 *      Description:    Defines the ToDoList class
 */      

export default class ToDoList {
    constructor() {
        this._list = [];
    }
    
    getList() {
        return this._list;
    }
    
    clearList() {
        this._list = [];
    }
    
    addItemToList(itemObj) {
        this._list.push(itemObj);
    }
    
    removeItemFromList(id) {
        const list = this._list;
        for (let i = 0; i < list.length; i++) {
            if (list[i]._id == id) {
                list.splice(i, 1);
                break;
            }
        }
    }
}