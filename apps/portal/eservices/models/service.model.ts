export interface service{
    isArray: boolean,
    path: string,
    duration: string,
    method: string,
    count: number,
    data: {
        id: string,
        name: string,
        description: string,
        code: string,
        fullyQualifiedName: string,
        medias: [string ],
        supportedQualifications: string,
        version: string,
        procedure: string,
        serviceFees: [
            string
          ],
          processingTimes: [
            string
          ],
          serviceDependencies: [
            string
          ],
          languages: [
            string
          ],
          serviceResources: [
            string
          ],
          targetCustomers: string,
          isPublic: boolean,
          isPublished: boolean,
          isArchived: boolean,
          tags: string,
          deliveryMethod: string,
          serviceOwnerId: string,
          serviceProviderId: string,
          averageRating: any
          enableReview: boolean,
          policy: string,
          publishedOn: string,
          serviceCollectionsId: [
            string
          ],
          serviceCollections: [
            string
          ],
          views: number,
          createdBy: string,
          updatedBy: string
        }
}