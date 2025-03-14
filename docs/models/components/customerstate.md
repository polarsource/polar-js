# CustomerState

A customer along with additional state information:

* Active subscriptions
* Active benefits

## Example Usage

```typescript
import { CustomerState } from "@polar-sh/sdk/models/components/customerstate.js";

let value: CustomerState = {
  id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  createdAt: new Date("2024-11-30T21:58:32.911Z"),
  modifiedAt: new Date("2024-04-16T06:38:07.129Z"),
  metadata: {
    "key": "<value>",
  },
  externalId: "usr_1337",
  email: "customer@example.com",
  emailVerified: true,
  name: "John Doe",
  billingAddress: {
    country: "FR",
  },
  taxId: [
    "FR61954506077",
    "eu_vat",
  ],
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  deletedAt: new Date("2025-05-11T15:54:08.244Z"),
  activeSubscriptions: [
    {
      id: "e5149aae-e521-42b9-b24c-abb3d71eea2e",
      createdAt: new Date("2025-03-30T19:59:30.170Z"),
      modifiedAt: new Date("2025-05-19T17:59:45.777Z"),
      metadata: {
        "key": "<value>",
      },
      amount: 1000,
      currency: "usd",
      recurringInterval: "year",
      currentPeriodStart: new Date("2025-02-03T13:37:00Z"),
      currentPeriodEnd: new Date("2025-03-03T13:37:00Z"),
      cancelAtPeriodEnd: false,
      canceledAt: null,
      startedAt: new Date("2025-01-03T13:37:00Z"),
      endsAt: null,
      productId: "d8dd2de1-21b7-4a41-8bc3-ce909c0cfe23",
      discountId: null,
      priceId: "196ca717-4d84-4d28-a1b8-777255797dbc",
    },
  ],
  grantedBenefits: [
    {
      id: "d322132c-a9d0-4e0d-b8d3-d81ad021a3a9",
      createdAt: new Date("2024-08-24T12:51:13.766Z"),
      modifiedAt: new Date("2024-06-02T18:22:20.556Z"),
      grantedAt: new Date("2025-01-03T13:37:00Z"),
      benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
      benefitType: "downloadables",
      properties: {},
    },
  ],
  avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
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
| `avatarUrl`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             | https://www.gravatar.com/avatar/xxx?d=blank                                                                                                                     |