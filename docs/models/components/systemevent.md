# SystemEvent


## Supported Types

### `components.BalanceCreditOrderEvent`

```typescript
const value: components.BalanceCreditOrderEvent = {
  id: "<value>",
  timestamp: new Date("2026-10-30T20:58:03.483Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: null,
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "balance.credit_order",
  metadata: {
    orderId: "<id>",
    amount: 996540,
    currency: "Sudanese Pound",
    taxAmount: 665183,
    fee: 909783,
  },
};
```

### `components.BalanceDisputeEvent`

```typescript
const value: components.BalanceDisputeEvent = {
  id: "<value>",
  timestamp: new Date("2024-10-31T08:56:24.962Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-09-25T07:05:28.643Z"),
    modifiedAt: new Date("2024-12-04T08:14:43.576Z"),
    metadata: {},
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-08-22T22:08:47.665Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "balance.dispute",
  metadata: {
    transactionId: "<id>",
    disputeId: "<id>",
    amount: 370640,
    currency: "Cedi",
    presentmentAmount: 35442,
    presentmentCurrency: "<value>",
    taxAmount: 512163,
    fee: 801148,
  },
};
```

### `components.BalanceDisputeReversalEvent`

```typescript
const value: components.BalanceDisputeReversalEvent = {
  id: "<value>",
  timestamp: new Date("2026-03-08T13:28:30.966Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-04-17T10:22:19.684Z"),
    modifiedAt: new Date("2026-12-23T03:25:58.534Z"),
    metadata: {
      "key": 790223,
    },
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-06-16T20:01:39.186Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "balance.dispute_reversal",
  metadata: {
    transactionId: "<id>",
    disputeId: "<id>",
    amount: 370640,
    currency: "Cedi",
    presentmentAmount: 35442,
    presentmentCurrency: "<value>",
    taxAmount: 512163,
    fee: 801148,
  },
};
```

### `components.BalanceOrderEvent`

```typescript
const value: components.BalanceOrderEvent = {
  id: "<value>",
  timestamp: new Date("2024-08-24T02:29:28.468Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-07-03T08:28:47.201Z"),
    modifiedAt: new Date("2026-03-16T19:59:32.736Z"),
    metadata: {
      "key": 233.49,
    },
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-04-04T00:08:29.575Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: null,
  label: "<value>",
  source: "system",
  name: "balance.order",
  metadata: {
    transactionId: "<id>",
    orderId: "<id>",
    amount: 825373,
    currency: "UAE Dirham",
    presentmentAmount: 535304,
    presentmentCurrency: "<value>",
    taxAmount: 571305,
    fee: 460080,
  },
};
```

### `components.BalanceRefundEvent`

```typescript
const value: components.BalanceRefundEvent = {
  id: "<value>",
  timestamp: new Date("2024-02-22T00:39:19.003Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-02-23T08:41:26.899Z"),
    modifiedAt: null,
    metadata: {
      "key": "<value>",
    },
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-05-02T07:24:06.903Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: null,
  label: "<value>",
  source: "system",
  name: "balance.refund",
  metadata: {
    transactionId: "<id>",
    refundId: "<id>",
    amount: 231482,
    currency: "Denar",
    presentmentAmount: 403761,
    presentmentCurrency: "<value>",
    taxAmount: 510130,
    fee: 330280,
  },
};
```

### `components.BalanceRefundReversalEvent`

```typescript
const value: components.BalanceRefundReversalEvent = {
  id: "<value>",
  timestamp: new Date("2025-01-16T23:12:47.762Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: null,
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-05-11T13:54:25.489Z"),
    modifiedAt: new Date("2025-08-26T20:00:45.810Z"),
    metadata: {
      "key": 3199.43,
    },
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-11-06T13:28:49.215Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: null,
  label: "<value>",
  source: "system",
  name: "balance.refund_reversal",
  metadata: {
    transactionId: "<id>",
    refundId: "<id>",
    amount: 231482,
    currency: "Denar",
    presentmentAmount: 403761,
    presentmentCurrency: "<value>",
    taxAmount: 510130,
    fee: 330280,
  },
};
```

### `components.BenefitCycledEvent`

```typescript
const value: components.BenefitCycledEvent = {
  id: "<value>",
  timestamp: new Date("2026-08-07T21:09:06.819Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-05-07T03:03:18.888Z"),
    modifiedAt: new Date("2025-04-22T13:09:01.674Z"),
    metadata: {
      "key": 6152,
    },
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-06-09T06:45:13.644Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "benefit.cycled",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "discord",
  },
};
```

### `components.BenefitGrantedEvent`

```typescript
const value: components.BenefitGrantedEvent = {
  id: "<value>",
  timestamp: new Date("2026-06-01T19:12:32.636Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-05-21T18:25:59.959Z"),
    modifiedAt: null,
    metadata: {
      "key": 9968.19,
    },
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: null,
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-11-01T01:26:40.175Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "benefit.granted",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "discord",
  },
};
```

### `components.BenefitRevokedEvent`

```typescript
const value: components.BenefitRevokedEvent = {
  id: "<value>",
  timestamp: new Date("2024-07-27T03:11:06.121Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-12-20T10:11:06.501Z"),
    modifiedAt: new Date("2024-03-31T00:59:29.996Z"),
    metadata: {},
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-10-24T18:01:23.762Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "benefit.revoked",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "discord",
  },
};
```

### `components.BenefitUpdatedEvent`

```typescript
const value: components.BenefitUpdatedEvent = {
  id: "<value>",
  timestamp: new Date("2024-08-27T11:47:00.673Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-03-19T15:17:49.753Z"),
    modifiedAt: new Date("2024-11-16T08:21:28.320Z"),
    metadata: {},
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-02-01T10:30:18.204Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "benefit.updated",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "discord",
  },
};
```

### `components.CheckoutCreatedEvent`

```typescript
const value: components.CheckoutCreatedEvent = {
  id: "<value>",
  timestamp: new Date("2025-08-26T12:49:12.221Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-10-19T13:38:52.340Z"),
    modifiedAt: new Date("2026-12-29T20:25:03.970Z"),
    metadata: {},
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: null,
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-12-16T10:15:12.551Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "checkout.created",
  metadata: {
    checkoutId: "<id>",
    checkoutStatus: "<value>",
  },
};
```

### `components.CustomerCreatedEvent`

```typescript
const value: components.CustomerCreatedEvent = {
  id: "<value>",
  timestamp: new Date("2026-09-13T19:14:51.458Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-10-27T23:58:02.118Z"),
    modifiedAt: new Date("2026-08-18T15:28:07.589Z"),
    metadata: {
      "key": "<value>",
    },
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-07-03T17:20:41.925Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "customer.created",
  metadata: {
    customerId: "<id>",
    customerEmail: "<value>",
    customerName: "<value>",
    customerExternalId: "<id>",
  },
};
```

### `components.CustomerDeletedEvent`

```typescript
const value: components.CustomerDeletedEvent = {
  id: "<value>",
  timestamp: new Date("2024-01-13T05:04:05.719Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-09-16T09:35:19.286Z"),
    modifiedAt: new Date("2025-02-08T06:21:23.433Z"),
    metadata: {
      "key": 6405.15,
    },
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-05-10T02:25:43.420Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "customer.deleted",
  metadata: {
    customerId: "<id>",
    customerEmail: "<value>",
    customerName: "<value>",
    customerExternalId: "<id>",
  },
};
```

### `components.CustomerUpdatedEvent`

```typescript
const value: components.CustomerUpdatedEvent = {
  id: "<value>",
  timestamp: new Date("2025-12-19T23:59:00.623Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-04-24T23:55:36.582Z"),
    modifiedAt: new Date("2024-06-30T06:45:32.799Z"),
    metadata: {},
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: null,
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-08-19T08:37:29.408Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "customer.updated",
  metadata: {
    customerId: "<id>",
    customerEmail: "<value>",
    customerName: "<value>",
    customerExternalId: "<id>",
    updatedFields: {},
  },
};
```

### `components.MeterCreditEvent`

```typescript
const value: components.MeterCreditEvent = {
  id: "<value>",
  timestamp: new Date("2024-07-16T16:23:37.725Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-09-12T07:39:36.245Z"),
    modifiedAt: new Date("2026-12-03T06:10:18.874Z"),
    metadata: {
      "key": "<value>",
    },
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-12-25T07:56:12.723Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: null,
  label: "<value>",
  source: "system",
  name: "meter.credited",
  metadata: {
    meterId: "<id>",
    units: 522220,
    rollover: false,
  },
};
```

### `components.MeterResetEvent`

```typescript
const value: components.MeterResetEvent = {
  id: "<value>",
  timestamp: new Date("2026-08-06T05:06:15.094Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-10-08T10:56:40.838Z"),
    modifiedAt: null,
    metadata: {},
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-08-30T03:05:35.840Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "meter.reset",
  metadata: {
    meterId: "<id>",
  },
};
```

### `components.OrderPaidEvent`

```typescript
const value: components.OrderPaidEvent = {
  id: "<value>",
  timestamp: new Date("2026-12-22T17:07:26.094Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: null,
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "order.paid",
  metadata: {
    orderId: "<id>",
    amount: 52059,
  },
};
```

### `components.OrderRefundedEvent`

```typescript
const value: components.OrderRefundedEvent = {
  id: "<value>",
  timestamp: new Date("2025-09-23T19:32:36.318Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: null,
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "order.refunded",
  metadata: {
    orderId: "<id>",
    refundedAmount: 839516,
    currency: "Lek",
  },
};
```

### `components.OrderVoidedEvent`

```typescript
const value: components.OrderVoidedEvent = {
  id: "<value>",
  timestamp: new Date("2026-10-13T09:21:52.741Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-06-11T05:58:23.487Z"),
    modifiedAt: new Date("2026-12-29T18:44:28.530Z"),
    metadata: {},
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-12-24T13:51:51.140Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "order.voided",
  metadata: {
    orderId: "<id>",
    amount: 140583,
    currency: "Kina",
  },
};
```

### `components.SubscriptionBillingPeriodUpdatedEvent`

```typescript
const value: components.SubscriptionBillingPeriodUpdatedEvent = {
  id: "<value>",
  timestamp: new Date("2024-12-24T21:00:19.285Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-06-16T06:42:54.188Z"),
    modifiedAt: new Date("2026-05-31T19:46:38.426Z"),
    metadata: {
      "key": 9101.59,
    },
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-07-07T04:23:31.981Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "subscription.billing_period_updated",
  metadata: {
    subscriptionId: "<id>",
    oldPeriodEnd: "<value>",
    newPeriodEnd: "<value>",
  },
};
```

### `components.SubscriptionCanceledEvent`

```typescript
const value: components.SubscriptionCanceledEvent = {
  id: "<value>",
  timestamp: new Date("2024-09-07T06:12:44.390Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-10-05T18:12:17.403Z"),
    modifiedAt: new Date("2025-08-20T11:27:10.452Z"),
    metadata: {
      "key": 5529.49,
    },
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-06-14T08:14:54.827Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: null,
  label: "<value>",
  source: "system",
  name: "subscription.canceled",
  metadata: {
    subscriptionId: "<id>",
    amount: 776946,
    currency: "Rufiyaa",
    recurringInterval: "<value>",
    recurringIntervalCount: 156481,
    canceledAt: "<value>",
  },
};
```

### `components.SubscriptionCreatedEvent`

```typescript
const value: components.SubscriptionCreatedEvent = {
  id: "<value>",
  timestamp: new Date("2024-07-22T19:31:54.976Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-01-27T17:33:13.098Z"),
    modifiedAt: new Date("2026-05-10T10:50:56.085Z"),
    metadata: {},
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-03-11T13:41:40.304Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "subscription.created",
  metadata: {
    subscriptionId: "<id>",
    productId: "<id>",
    amount: 425851,
    currency: "Peso Uruguayo",
    recurringInterval: "<value>",
    recurringIntervalCount: 828737,
    startedAt: "<value>",
  },
};
```

### `components.SubscriptionCycledEvent`

```typescript
const value: components.SubscriptionCycledEvent = {
  id: "<value>",
  timestamp: new Date("2026-11-09T07:53:52.767Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-09-17T21:26:14.519Z"),
    modifiedAt: new Date("2026-03-18T08:29:19.047Z"),
    metadata: {},
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: null,
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "subscription.cycled",
  metadata: {
    subscriptionId: "<id>",
  },
};
```

### `components.SubscriptionProductUpdatedEvent`

```typescript
const value: components.SubscriptionProductUpdatedEvent = {
  id: "<value>",
  timestamp: new Date("2025-12-23T15:28:36.366Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-01-08T12:17:40.995Z"),
    modifiedAt: new Date("2024-07-28T05:48:38.104Z"),
    metadata: {
      "key": 152496,
    },
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: null,
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "subscription.product_updated",
  metadata: {
    subscriptionId: "<id>",
    oldProductId: "<id>",
    newProductId: "<id>",
  },
};
```

### `components.SubscriptionRevokedEvent`

```typescript
const value: components.SubscriptionRevokedEvent = {
  id: "<value>",
  timestamp: new Date("2026-03-06T20:50:24.445Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-09-29T09:32:23.843Z"),
    modifiedAt: new Date("2026-03-30T17:38:22.850Z"),
    metadata: {},
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-02-04T09:19:56.146Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "subscription.revoked",
  metadata: {
    subscriptionId: "<id>",
  },
};
```

### `components.SubscriptionSeatsUpdatedEvent`

```typescript
const value: components.SubscriptionSeatsUpdatedEvent = {
  id: "<value>",
  timestamp: new Date("2025-05-18T05:34:00.364Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-02-03T01:41:06.181Z"),
    modifiedAt: new Date("2025-02-16T11:28:43.212Z"),
    metadata: {},
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-08-06T11:40:13.702Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "subscription.seats_updated",
  metadata: {
    subscriptionId: "<id>",
    oldSeats: 837317,
    newSeats: 555995,
    prorationBehavior: "<value>",
  },
};
```

### `components.SubscriptionUncanceledEvent`

```typescript
const value: components.SubscriptionUncanceledEvent = {
  id: "<value>",
  timestamp: new Date("2024-02-26T06:45:26.893Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-06-09T17:09:26.925Z"),
    modifiedAt: new Date("2025-02-24T10:03:22.955Z"),
    metadata: {},
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-02-15T18:10:20.376Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "subscription.uncanceled",
  metadata: {
    subscriptionId: "<id>",
    productId: "<id>",
    amount: 748490,
    currency: "Falkland Islands Pound",
    recurringInterval: "<value>",
    recurringIntervalCount: 540492,
  },
};
```

### `components.SubscriptionUpdatedEvent`

```typescript
const value: components.SubscriptionUpdatedEvent = {
  id: "<value>",
  timestamp: new Date("2026-12-14T12:28:45.732Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-02-15T13:45:58.648Z"),
    modifiedAt: new Date("2025-01-14T05:31:35.552Z"),
    metadata: {},
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-08-31T06:44:34.534Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "subscription.updated",
  metadata: {
    subscriptionId: "<id>",
    seats: 417281,
    prorationBehavior: "reset",
  },
};
```

