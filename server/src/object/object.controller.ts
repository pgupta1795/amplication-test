import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ObjectService } from "./object.service";
import { ObjectControllerBase } from "./base/object.controller.base";

@swagger.ApiTags("objects")
@common.Controller("objects")
export class ObjectController extends ObjectControllerBase {
  constructor(protected readonly service: ObjectService) {
    super(service);
  }
}
