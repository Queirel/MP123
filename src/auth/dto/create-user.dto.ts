import { Exclude } from "class-transformer";
import { IsString } from "class-validator";

export class CreateUserDto2 {

    @IsString()
    name: string

    // @Exclude()
    // @IsString()
    // password: string
}
