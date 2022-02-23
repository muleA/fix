"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCollection = void 0;
class ServiceCollection {
    constructor() { }
    async addServiceEntry(createServiceEntry) {
        this.serviceEntries.push(createServiceEntry);
    }
    async updateServiceEntry(serviceEntry) {
        var existIndex = this.serviceEntries.findIndex(element => element.id == serviceEntry.id);
        this.serviceEntries[existIndex] = serviceEntry;
    }
    async removeServiceEntry(id) {
        this.serviceEntries = this.serviceEntries.filter(element => element.id != id);
    }
    async updateServiceEntries(serviceEntries) {
        this.serviceEntries = [];
        this.serviceEntries = serviceEntries;
    }
    async addServiceResource(createServiceResource) {
        this.serviceResources.push(createServiceResource);
    }
    async updateServiceResource(serviceResource) {
        var existIndex = this.serviceResources.findIndex(element => element.id == serviceResource.id);
        this.serviceResources[existIndex] = serviceResource;
    }
    async removeServiceResource(id) {
        this.serviceResources = this.serviceResources.filter(element => element.id != id);
    }
    async updateResources(serviceResources) {
        this.serviceResources = serviceResources;
    }
}
exports.ServiceCollection = ServiceCollection;
//# sourceMappingURL=serviceCollection.js.map