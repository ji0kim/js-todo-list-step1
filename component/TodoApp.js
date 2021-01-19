import { TodoInput } from "./TodoInput.js";
import { TodoFilter } from "./TodoFilter.js";
import { LocalStorageUtil } from "../js/LocalStorageUtil.js";

export class TodoApp {
  constructor(todoItem) {
    this.storage = new LocalStorageUtil();
    this.todoFilter = new TodoFilter();

    new TodoInput({
      onAdd: (contents) => {
        this.storage.setLocalStorage(contents);
        this.setState(this.storage.storageTodo());
      },
    });
  }

  setState(updateItem) {
    this.todoItem = updateItem;
    this.todoFilter.setState(this.todoItem);
  }
}
