
export class TaskService {
    constructor(httpservice) {
        this.httpservice = httpservice;
    }

    getAllTasks() {
        return this.httpservice.get("/task/tasks", true);
    }
    getAllTaskStatus(){
        return this.httpservice.get("/task/task-status", true);

    }
    getAllTaskTypes(){
        return this.httpservice.get("/task/task-types", true);
    }
    createTask(task){
        return this.httpservice.post("/task/tasks",task);
    }
}