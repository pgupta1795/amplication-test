/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ActionWhereInput } from "./ActionWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ActionCountArgs {
  @ApiProperty({
    required: false,
    type: () => ActionWhereInput,
  })
  @Field(() => ActionWhereInput, { nullable: true })
  @Type(() => ActionWhereInput)
  where?: ActionWhereInput;
}

export { ActionCountArgs as ActionCountArgs };
