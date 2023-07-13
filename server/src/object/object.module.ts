import { Module } from "@nestjs/common";
import { ObjectModuleBase } from "./base/object.module.base";
import { ObjectService } from "./object.service";
import { ObjectController } from "./object.controller";

@Module({
  imports: [ObjectModuleBase],
  controllers: [ObjectController],
  providers: [ObjectService],
  exports: [ObjectService],
})
export class ObjectModule {}
