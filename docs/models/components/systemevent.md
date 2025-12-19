# SystemEvent


## Supported Types

### `components.BenefitCycledEvent`

```typescript
const value: components.BenefitCycledEvent = {
  id: "<value>",
  timestamp: new Date("2025-08-07T21:09:06.819Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "benefit.cycled",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "github_repository",
  },
};
```

### `components.BenefitGrantedEvent`

```typescript
const value: components.BenefitGrantedEvent = {
  id: "<value>",
  timestamp: new Date("2025-06-01T19:12:32.636Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "benefit.granted",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "github_repository",
  },
};
```

### `components.BenefitRevokedEvent`

```typescript
const value: components.BenefitRevokedEvent = {
  id: "<value>",
  timestamp: new Date("2023-07-28T03:11:06.121Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "benefit.revoked",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "github_repository",
  },
};
```

### `components.BenefitUpdatedEvent`

```typescript
const value: components.BenefitUpdatedEvent = {
  id: "<value>",
  timestamp: new Date("2023-08-28T11:47:00.673Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "benefit.updated",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "github_repository",
  },
};
```

### `components.CheckoutCreatedEvent`

```typescript
const value: components.CheckoutCreatedEvent = {
  id: "<value>",
  timestamp: new Date("2024-08-26T12:49:12.221Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
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
  timestamp: new Date("2025-09-13T19:14:51.458Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
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
  timestamp: new Date("2023-01-13T05:04:05.719Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
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
  timestamp: new Date("2024-12-19T23:59:00.623Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
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
  timestamp: new Date("2023-07-17T16:23:37.725Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "meter.credited",
  metadata: {
    meterId: "<id>",
    units: 232955,
    rollover: true,
  },
};
```

### `components.MeterResetEvent`

```typescript
const value: components.MeterResetEvent = {
  id: "<value>",
  timestamp: new Date("2025-08-06T05:06:15.094Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
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
  timestamp: new Date("2025-12-22T17:07:26.094Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: null,
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "order.paid",
  metadata: {
    orderId: "<id>",
    amount: 329918,
  },
};
```

### `components.OrderRefundedEvent`

```typescript
const value: components.OrderRefundedEvent = {
  id: "<value>",
  timestamp: new Date("2024-09-23T19:32:36.318Z"),
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

### `components.SubscriptionBillingPeriodUpdatedEvent`

```typescript
const value: components.SubscriptionBillingPeriodUpdatedEvent = {
  id: "<value>",
  timestamp: new Date("2023-12-25T21:00:19.285Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
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
  timestamp: new Date("2023-09-08T06:12:44.390Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "subscription.canceled",
  metadata: {
    subscriptionId: "<id>",
    amount: 920401,
    currency: "Swedish Krona",
    recurringInterval: "<value>",
    recurringIntervalCount: 545143,
    canceledAt: "<value>",
  },
};
```

### `components.SubscriptionCreatedEvent`

```typescript
const value: components.SubscriptionCreatedEvent = {
  id: "<value>",
  timestamp: new Date("2023-07-23T19:31:54.976Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "subscription.created",
  metadata: {
    subscriptionId: "<id>",
    productId: "<id>",
    amount: 691361,
    currency: "Algerian Dinar",
    recurringInterval: "<value>",
    recurringIntervalCount: 785084,
    startedAt: "<value>",
  },
};
```

### `components.SubscriptionCycledEvent`

```typescript
const value: components.SubscriptionCycledEvent = {
  id: "<value>",
  timestamp: new Date("2025-11-09T07:53:52.767Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: null,
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
  timestamp: new Date("2024-12-23T15:28:36.366Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
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
  timestamp: new Date("2025-03-06T20:50:24.445Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
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
  timestamp: new Date("2024-05-18T05:34:00.364Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "subscription.seats_updated",
  metadata: {
    subscriptionId: "<id>",
    oldSeats: 364115,
    newSeats: 300496,
    prorationBehavior: "<value>",
  },
};
```

### `components.SubscriptionUncanceledEvent`

```typescript
const value: components.SubscriptionUncanceledEvent = {
  id: "<value>",
  timestamp: new Date("2023-02-26T06:45:26.893Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-06-05T21:28:32.740Z"),
    modifiedAt: new Date("2023-03-22T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  label: "<value>",
  source: "system",
  name: "subscription.uncanceled",
  metadata: {
    subscriptionId: "<id>",
    productId: "<id>",
    amount: 479667,
    currency: "Rupiah",
    recurringInterval: "<value>",
    recurringIntervalCount: 383594,
  },
};
```

