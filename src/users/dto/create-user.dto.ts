import { Exclude } from "class-transformer";
import { IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    name: string

    // @Exclude()
    // @IsString()
    // password: string
}
