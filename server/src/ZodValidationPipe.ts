import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      const mappedError = error.errors
        .map((error: { path: any; message: any }) => {
          const { path, message } = error;
          return `${path.join('.')}: ${message}`;
        })
        .join('; ');
      throw new BadRequestException(mappedError);
    }
  }
}
