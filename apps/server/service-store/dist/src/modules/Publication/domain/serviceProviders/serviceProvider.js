"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProvider = void 0;
class ServiceProvider {
    constructor() { }
    async addDelegatedService(createDelegatedService) {
        this.delegatedServices.push(createDelegatedService);
    }
    async updateDelegatedService(delegatedService) {
        var existIndex = this.delegatedServices.findIndex(element => element.id == delegatedService.id);
        this.delegatedServices[existIndex] = delegatedService;
    }
    async removeDelegatedService(id) {
        this.delegatedServices = this.delegatedServices.filter(element => element.id != id);
    }
    async updateDelegatedServices(delegatedServices) {
        this.delegatedServices = [];
        this.delegatedServices = delegatedServices;
    }
}
exports.ServiceProvider = ServiceProvider;
//# sourceMappingURL=serviceProvider.js.map