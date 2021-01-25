import { HttpService } from "./httpService";
import { DeveloperService } from "./developerService";
import { TaskService } from "./taskService";


export class ServiceFactory {

    #_httpService = null;
    #_developerService = null;
    #_taskService = null;


    get httpService() {
        if (!this._httpService) {
            this._httpService = new HttpService();
        }
        return this._httpService;
    }
    
    get taskService() {
        if (!this._taskService) {
            this._taskService = new TaskService(this.httpService);
        }
        return this._taskService;
    }


    get developerService() {
        if (!this._developerService) {
            this._developerService = new DeveloperService(this.httpService);
        }
        return this._developerService;
    }
    
}

export default new ServiceFactory();