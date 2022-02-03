/* todoitem.js
 *      Author:         Jack      
 *      Date:           2021-02-23
 *      Last revised:   2021-02-24
 *      Description:    Defines the ToDoItem class
 */  
export default class ToDoItem {
    constructor() {
        this._id = null;
        this._item = null;
    }
    
    getId() {
        return this._id;
    }

    setId(id) {
        this._id = id;
    }

    getItem() {
        return this._item;
    }

    setItem(item) {
        this._item = item;
    }
}