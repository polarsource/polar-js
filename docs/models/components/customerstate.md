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
  createdAt: new Date("2023-04-12T13:06:03.685Z"),
  modifiedAt: new Date("2025-01-27T23:17:57.756Z"),
  metadata: {},
  externalId: "usr_1337",
  email: "customer@example.com",
  emailVerified: true,
  name: "John Doe",
  billingAddress: null,
  taxId: [
    "911144442",
    "us_ein",
  ],
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  deletedAt: new Date("2025-01-12T15:44:32.793Z"),
  activeSubscriptions: [
    {
      id: "e5149aae-e521-42b9-b24c-abb3d71eea2e",
      createdAt: new Date("2023-06-29T21:29:51.503Z"),
      modifiedAt: new Date("2025-03-19T06:38:24.563Z"),
      metadata: {},
      status: "active",
      amount: 1000,
      currency: "usd",
      recurringInterval: "month",
      currentPeriodStart: new Date("2025-02-03T13:37:00Z"),
      currentPeriodEnd: new Date("2025-03-03T13:37:00Z"),
      cancelAtPeriodEnd: false,
      canceledAt: null,
      startedAt: new Date("2025-01-03T13:37:00Z"),
      endsAt: null,
      productId: "d8dd2de1-21b7-4a41-8bc3-ce909c0cfe23",
      discountId: null,
      meters: [
        {
          createdAt: new Date("2023-02-21T03:07:24.293Z"),
          modifiedAt: new Date("2023-08-01T15:49:02.586Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        },
      ],
    },
  ],
  grantedBenefits: [
    {
      id: "d322132c-a9d0-4e0d-b8d3-d81ad021a3a9",
      createdAt: new Date("2025-07-13T15:26:30.510Z"),
      modifiedAt: new Date("2024-10-06T12:02:58.817Z"),
      grantedAt: new Date("2025-01-03T13:37:00Z"),
      benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
      benefitType: "custom",
      benefitMetadata: {
        "key": "value",
      },
      properties: {},
    },
  ],
  activeMeters: [
    {
      id: "<value>",
      createdAt: new Date("2023-03-22T19:19:39.234Z"),
      modifiedAt: new Date("2023-03-24T14:16:16.143Z"),
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

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                            | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The ID of the customer.                                                                                                                                         | 992fae2a-2a17-4b7a-8d9e-e287cf90131b                                                                                                                            |
| `createdAt`                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_check_mark:                                                                                                                                              | Creation timestamp of the object.                                                                                                                               |                                                                                                                                                                 |
| `modifiedAt`                                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_check_mark:                                                                                                                                              | Last modification timestamp of the object.                                                                                                                      |                                                                                                                                                                 |
| `metadata`                                                                                                                                                      | Record<string, *components.CustomerStateMetadata*>                                                                                                              | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `externalId`                                                                                                                                                    | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.                                              | usr_1337                                                                                                                                                        |
| `email`                                                                                                                                                         | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The email address of the customer. This must be unique within the organization.                                                                                 | customer@example.com                                                                                                                                            |
| `emailVerified`                                                                                                                                                 | *boolean*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                              | Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address. | true                                                                                                                                                            |
| `name`                                                                                                                                                          | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The name of the customer.                                                                                                                                       | John Doe                                                                                                                                                        |
| `billingAddress`                                                                                                                                                | [components.Address](../../models/components/address.md)                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `taxId`                                                                                                                                                         | *components.CustomerStateTaxId*[]                                                                                                                               | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             | [<br/>"911144442",<br/>"us_ein"<br/>]                                                                                                                           |
| `organizationId`                                                                                                                                                | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The ID of the organization owning the customer.                                                                                                                 | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                                                            |
| `deletedAt`                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_check_mark:                                                                                                                                              | Timestamp for when the customer was soft deleted.                                                                                                               |                                                                                                                                                                 |
| `activeSubscriptions`                                                                                                                                           | [components.CustomerStateSubscription](../../models/components/customerstatesubscription.md)[]                                                                  | :heavy_check_mark:                                                                                                                                              | The customer's active subscriptions.                                                                                                                            |                                                                                                                                                                 |
| `grantedBenefits`                                                                                                                                               | [components.CustomerStateBenefitGrant](../../models/components/customerstatebenefitgrant.md)[]                                                                  | :heavy_check_mark:                                                                                                                                              | The customer's active benefit grants.                                                                                                                           |                                                                                                                                                                 |
| `activeMeters`                                                                                                                                                  | [components.CustomerStateMeter](../../models/components/customerstatemeter.md)[]                                                                                | :heavy_check_mark:                                                                                                                                              | The customer's active meters.                                                                                                                                   |                                                                                                                                                                 |
| `avatarUrl`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             | https://www.gravatar.com/avatar/xxx?d=404                                                                                                                       |