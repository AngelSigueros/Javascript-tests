class Task {
    constructor(id, title, description, dueDate) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.completed = false;
    }
  }


  class TaskService {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    completeTask(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.completed = true;
      }
    }
  
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  
    getPendingTasks() {
      return this.tasks.filter(task => !task.completed);
    }
  
    getCompletedTasks() {
      return this.tasks.filter(task => task.completed);
    }
  }


  // Importa las clases Task y TaskService
// En un entorno Node.js, usarías require(). En un entorno de navegador, usarías import.
// const Task = require('./task');
// const TaskService = require('./taskService');

const taskService = new TaskService();

const task1 = new Task(1, 'Task 1', 'Description 1', new Date());
const task2 = new Task(2, 'Task 2', 'Description 2', new Date());

taskService.addTask(task1);
taskService.addTask(task2);

console.log(taskService.getPendingTasks());

taskService.completeTask(1);

console.log(taskService.getCompletedTasks());
console.log(taskService.getPendingTasks());

taskService.removeTask(2);

console.log(taskService.getPendingTasks());