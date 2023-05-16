import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsResolver } from './payments.resolver';
import { PaymentsService } from './payments.service';

describe('PaymentsResolver', () => {
  let resolver: PaymentsResolver;
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: [PaymentsService, PaymentsResolver],
    }).compile();
  });

  beforeEach(async () => {
    resolver = app.get<PaymentsResolver>(PaymentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
