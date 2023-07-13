import { Module } from "@nestjs/common";
import { ActionModuleBase } from "./base/action.module.base";
import { ActionService } from "./action.service";
import { ActionController } from "./action.controller";

@Module({
  imports: [ActionModuleBase],
  controllers: [ActionController],
  providers: [ActionService],
  exports: [ActionService],
})
export class ActionModule {}
