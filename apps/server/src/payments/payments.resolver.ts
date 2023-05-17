import { Resolver, Query, Args } from '@nestjs/graphql';

import { Payments } from './models/payments.model';
import { GetPaymentsArgs } from './dto/payments.dto';
import { PaymentsService } from './payments.service';

@Resolver(Payments)
export class PaymentsResolver {
	constructor(
		private paymentsService: PaymentsService
	) {}

	@Query(returns => Payments, { name: 'payments' })
	async getPayment(@Args() args: GetPaymentsArgs): Promise<Payments> {  // 自定義 dto
		console.log('test')
		return await this.paymentsService.findOne(args)
	}
}
