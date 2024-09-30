export const State = {
  ACTIVE: "active",
  DONE: "done",
};
export class Task {
  static id = 0;
  constructor(header, body, state) {
    Task.id++;
    this.id = Task.id;
    this.header = header;
    this.body = body;
    this.state = state;
  }
  toString() {
    console.log("id", this.id);
    console.log("header", this.header);
    console.log("body", this.body);
    console.log("state", this.state);
  }
}
export class ToDo {
  toDo = [];
  done = [];
  edit(id, { header, body }) {
    let newTask;
    for (let i = 0; i < this.toDo.length; i++) {
      if (id === this.toDo[i].id) {
        if (header && body) {
          newTask = new Task(header, body, this.toDo[i].state);
        } else if (header) {
          newTask = new Task(header, this.toDo[i].body, this.toDo[i].state);
        } else if (body) {
          newTask = new Task(this.toDo[i].header, body, this.toDo[i].state);
        }
        this.toDo[i] = newTask;
        break;
      }
    }
  }
  add(header, body) {
    this.toDo.push(new Task(header, body, State.ACTIVE));
  }
  delete(id) {
    this.toDo = this.toDo.filter((e) => e.id !== id);
  }
  approval(id) {
    let temp = this.toDo.filter((e) => e.id === id)[0];
    this.delete(id);
    temp.state = State.DONE;
    this.done.push(temp);
  }
  toString() {
    console.log("----------ToDo------------");
    for (let i = 0; i < this.toDo.length; i++) {
      console.log(this.toDo[i]);
    }
    console.log("----------Done------------");
    for (let i = 0; i < this.done.length; i++) {
      console.log(this.done[i]);
    }
  }
}

let todo = new ToDo();
todo.add("h", "b");
todo.add("h", "b");
todo.add("h", "b");

todo.toString();

todo.approval(3);
todo.edit(2, { body: "oooo"});
todo.toString();

