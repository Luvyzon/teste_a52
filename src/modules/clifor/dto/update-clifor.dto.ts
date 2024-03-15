import { PartialType } from '@nestjs/mapped-types';
import { CreateCliforDto } from './create-clifor.dto';

export class UpdateCliforDto extends PartialType(CreateCliforDto) {}
