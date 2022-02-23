"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
class Service {
    constructor() { }
    async addMedia(createMedia) {
        this.medias.push(createMedia);
    }
    async updateMedia(media) {
        var existIndex = this.medias.findIndex(element => element.id == media.id);
        this.medias[existIndex] = media;
    }
    async removeMedia(id) {
        this.medias = this.medias.filter(element => element.id != id);
    }
    async updateMedias(medias) {
        this.medias = [];
        this.medias = medias;
    }
    async addServiceFee(createServiceFee) {
        this.serviceFees.push(createServiceFee);
    }
    async updateServiceFee(serviceFee) {
        var existIndex = this.serviceFees.findIndex(element => element.id == serviceFee.id);
        this.serviceFees[existIndex] = serviceFee;
    }
    async removeServiceFee(id) {
        this.serviceFees = this.serviceFees.filter(element => element.id != id);
    }
    async updateServiceFees(serviceFees) {
        this.serviceFees = [];
        this.serviceFees = serviceFees;
    }
    async addProcessingTime(createProcessingTime) {
        this.processingTimes.push(createProcessingTime);
    }
    async updateProcessingTime(processingTime) {
        var existIndex = this.processingTimes.findIndex(element => element.id == processingTime.id);
        this.processingTimes[existIndex] = processingTime;
    }
    async removeProcessingTime(id) {
        this.processingTimes = this.processingTimes.filter(element => element.id != id);
    }
    async updateProcessingTimes(processingTimes) {
        this.processingTimes = [];
        this.processingTimes = processingTimes;
    }
    async addServiceDependency(createServiceDependency) {
        this.serviceDependencies.push(createServiceDependency);
    }
    async updateServiceDependency(serviceDependency) {
        var existIndex = this.serviceDependencies.findIndex(element => element.id == serviceDependency.id);
        this.serviceDependencies[existIndex] = serviceDependency;
    }
    async removeServiceDependency(id) {
        this.serviceDependencies = this.serviceDependencies.filter(element => element.id != id);
    }
    async updateServiceDependencies(serviceDependencies) {
        this.serviceDependencies = [];
        this.serviceDependencies = serviceDependencies;
    }
    async addLanguage(createLanguage) {
        this.languages.push(createLanguage);
    }
    async updateLanguage(language) {
        var existIndex = this.languages.findIndex(element => element.id == language.id);
        this.languages[existIndex] = language;
    }
    async removeLanguage(id) {
        this.languages = this.languages.filter(element => element.id != id);
    }
    async updateLanguages(languages) {
        this.languages = [];
        this.languages = languages;
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
        this.serviceResources = [];
        this.serviceResources = serviceResources;
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map