/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ActionService } from "../action.service";
import { ActionCreateInput } from "./ActionCreateInput";
import { ActionWhereInput } from "./ActionWhereInput";
import { ActionWhereUniqueInput } from "./ActionWhereUniqueInput";
import { ActionFindManyArgs } from "./ActionFindManyArgs";
import { ActionUpdateInput } from "./ActionUpdateInput";
import { Action } from "./Action";

export class ActionControllerBase {
  constructor(protected readonly service: ActionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Action })
  async create(@common.Body() data: ActionCreateInput): Promise<Action> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        objectId: true,
        objectNewDetails: true,
        objectOldDetails: true,
        updatedAt: true,
        userName: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Action] })
  @ApiNestedQuery(ActionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Action[]> {
    const args = plainToClass(ActionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        objectId: true,
        objectNewDetails: true,
        objectOldDetails: true,
        updatedAt: true,
        userName: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Action })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: ActionWhereUniqueInput
  ): Promise<Action | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        objectId: true,
        objectNewDetails: true,
        objectOldDetails: true,
        updatedAt: true,
        userName: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Action })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: ActionWhereUniqueInput,
    @common.Body() data: ActionUpdateInput
  ): Promise<Action | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          objectId: true,
          objectNewDetails: true,
          objectOldDetails: true,
          updatedAt: true,
          userName: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Action })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: ActionWhereUniqueInput
  ): Promise<Action | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          objectId: true,
          objectNewDetails: true,
          objectOldDetails: true,
          updatedAt: true,
          userName: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
