# CustomerState

A customer along with additional state information:

* Active subscriptions
* Granted benefits
* Active meters

## Example Usage

```typescript
import { CustomerState } from "@polar-sh/sdk/models/components/customerstate.js";

let value: CustomerState = {
  id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  createdAt: new Date("2024-04-11T13:06:03.685Z"),
  modifiedAt: new Date("2026-01-27T23:17:57.756Z"),
  metadata: {},
  externalId: "usr_1337",
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
  deletedAt: new Date("2026-01-12T15:44:32.793Z"),
  activeSubscriptions: [
    {
      id: "e5149aae-e521-42b9-b24c-abb3d71eea2e",
      createdAt: new Date("2024-06-28T21:29:51.503Z"),
      modifiedAt: new Date("2026-03-19T06:38:24.563Z"),
      metadata: {},
      status: "active",
      amount: 1000,
      currency: "usd",
      recurringInterval: "week",
      currentPeriodStart: new Date("2025-02-03T13:37:00Z"),
      currentPeriodEnd: new Date("2025-03-03T13:37:00Z"),
      trialStart: new Date("2025-02-03T13:37:00Z"),
      trialEnd: new Date("2025-03-03T13:37:00Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-02-21T03:07:24.293Z"),
      startedAt: new Date("2025-01-03T13:37:00Z"),
      endsAt: new Date("2024-07-31T15:49:02.586Z"),
      productId: "d8dd2de1-21b7-4a41-8bc3-ce909c0cfe23",
      discountId: "<value>",
      meters: [
        {
          createdAt: new Date("2026-04-30T07:02:55.261Z"),
          modifiedAt: new Date("2024-01-19T20:12:49.183Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        },
      ],
    },
  ],
  grantedBenefits: [],
  activeMeters: [
    {
      id: "<value>",
      createdAt: new Date("2026-04-09T07:47:28.564Z"),
      modifiedAt: new Date("2025-01-15T23:50:15.732Z"),
      meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
      consumedUnits: 25,
      creditedUnits: 100,
      balance: 75,
    },
  ],
  avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            | Example                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The ID of the customer.                                                                                                                                                | 992fae2a-2a17-4b7a-8d9e-e287cf90131b                                                                                                                                   |
| `createdAt`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | Creation timestamp of the object.                                                                                                                                      |                                                                                                                                                                        |
| `modifiedAt`                                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | Last modification timestamp of the object.                                                                                                                             |                                                                                                                                                                        |
| `metadata`                                                                                                                                                             | Record<string, *components.MetadataOutputType*>                                                                                                                        | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |                                                                                                                                                                        |
| `externalId`                                                                                                                                                           | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.                                                     | usr_1337                                                                                                                                                               |
| `email`                                                                                                                                                                | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The email address of the customer. This must be unique within the organization.                                                                                        | customer@example.com                                                                                                                                                   |
| `emailVerified`                                                                                                                                                        | *boolean*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                     | Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address.        | true                                                                                                                                                                   |
| `type`                                                                                                                                                                 | [components.CustomerType](../../models/components/customertype.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                                     | The type of customer: 'individual' for single users, 'team' for customers with multiple members. Legacy customers may have NULL type which is treated as 'individual'. | individual                                                                                                                                                             |
| `name`                                                                                                                                                                 | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The name of the customer.                                                                                                                                              | John Doe                                                                                                                                                               |
| `billingAddress`                                                                                                                                                       | [components.Address](../../models/components/address.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |                                                                                                                                                                        |
| `taxId`                                                                                                                                                                | *components.CustomerStateTaxId*[]                                                                                                                                      | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    | [<br/>"911144442",<br/>"us_ein"<br/>]                                                                                                                                  |
| `organizationId`                                                                                                                                                       | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The ID of the organization owning the customer.                                                                                                                        | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                                                                   |
| `deletedAt`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | Timestamp for when the customer was soft deleted.                                                                                                                      |                                                                                                                                                                        |
| `activeSubscriptions`                                                                                                                                                  | [components.CustomerStateSubscription](../../models/components/customerstatesubscription.md)[]                                                                         | :heavy_check_mark:                                                                                                                                                     | The customer's active subscriptions.                                                                                                                                   |                                                                                                                                                                        |
| `grantedBenefits`                                                                                                                                                      | [components.CustomerStateBenefitGrant](../../models/components/customerstatebenefitgrant.md)[]                                                                         | :heavy_check_mark:                                                                                                                                                     | The customer's active benefit grants.                                                                                                                                  |                                                                                                                                                                        |
| `activeMeters`                                                                                                                                                         | [components.CustomerStateMeter](../../models/components/customerstatemeter.md)[]                                                                                       | :heavy_check_mark:                                                                                                                                                     | The customer's active meters.                                                                                                                                          |                                                                                                                                                                        |
| `avatarUrl`                                                                                                                                                            | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    | https://www.gravatar.com/avatar/xxx?d=404                                                                                                                              |