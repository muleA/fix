"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1639039819843 = void 0;
class Init1639039819843 {
    constructor() {
        this.name = 'Init1639039819843';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "public"."user" ("id" SERIAL NOT NULL, "content" character varying(255), "is_done" boolean NOT NULL DEFAULT false, "createdate" TIMESTAMP NOT NULL DEFAULT now(), "updateddate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_03b91d2b8321aa7ba32257dc321" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "public"."user"`);
    }
}
exports.Init1639039819843 = Init1639039819843;
//# sourceMappingURL=1639039819843-Init.js.map