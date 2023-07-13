import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ActionService } from "./action.service";
import { ActionControllerBase } from "./base/action.controller.base";

@swagger.ApiTags("actions")
@common.Controller("actions")
export class ActionController extends ActionControllerBase {
  constructor(protected readonly service: ActionService) {
    super(service);
  }
}
