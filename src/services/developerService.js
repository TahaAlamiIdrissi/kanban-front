
export class DeveloperService {

    constructor(httpservice) {
        this.httpservice = httpservice;
    }

    getAllDevelopers() {
        return this.httpservice.get("/developer/developers");
    }
    getDeveloperById(id) {
        return this.httpservice.get(`/developer/developers/${id}`);
    }
}