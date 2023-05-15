import { Injectable } from '@nestjs/common';
import { GetPaymentsArgs } from './dto/payments.dto';
import { schema } from '@nx-integrated/schema';
import { Payments } from '@nx-integrated/schema';

@Injectable()
export class PaymentsService {
  async findOne(args: GetPaymentsArgs) {
    console.log(schema)
    return {
      id: args.id,
      description: 'ApplePay',
    }
  }
}
