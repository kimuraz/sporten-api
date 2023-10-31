import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  isDate,
} from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  trainerId?: string;

  @IsString()
  @IsOptional()
  userType?: string;

  @IsBoolean()
  @IsOptional()
  isConfirmed: boolean;

  @IsBoolean()
  @IsOptional()
  isActivated: boolean;

  @IsDate()
  @IsOptional()
  createdAt: Date;
}
