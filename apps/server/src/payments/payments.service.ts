import { Injectable } from '@nestjs/common';
import { GetPaymentsArgs } from './dto/payments.dto';

@Injectable()
export class PaymentsService {
  async findOne(args: GetPaymentsArgs) {
    return {
      id: args.id,
      description: 'ApplePay',
    }
  }
}
