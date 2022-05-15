import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserCustomer1651423596977 implements MigrationInterface {
    name = 'createUserCustomer1651423596977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" integer NOT NULL, "name" character varying(255) NOT NULL, "lastName" character varying(255) NOT NULL, "phone" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "customerId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_6c687a8fa35b0ae35ce766b56ce" UNIQUE ("customerId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6c687a8fa35b0ae35ce766b56ce" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6c687a8fa35b0ae35ce766b56ce"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_6c687a8fa35b0ae35ce766b56ce"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "customerId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createAt"`);
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
