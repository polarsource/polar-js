# CustomerStateIndividual

A customer along with additional state information:

* Active subscriptions
* Granted benefits
* Active meters

## Example Usage

```typescript
import { CustomerStateIndividual } from "@polar-sh/sdk/models/components/customerstateindividual.js";

let value: CustomerStateIndividual = {
  id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  createdAt: new Date("2026-07-06T21:29:59.771Z"),
  modifiedAt: new Date("2026-04-08T08:45:31.345Z"),
  metadata: {},
  externalId: "usr_1337",
  email: "customer@example.com",
  emailVerified: true,
  type: "individual",
  name: "John Doe",
  billingName: "John Doe",
  billingAddress: {
    country: "US",
  },
  taxId: [
    "911144442",
    "us_ein",
  ],
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  deletedAt: new Date("2024-12-12T04:56:33.080Z"),
  firstUserEventAt: new Date("2026-02-15T23:44:26.685Z"),
  avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  activeSubscriptions: [
    {
      id: "e5149aae-e521-42b9-b24c-abb3d71eea2e",
      createdAt: new Date("2026-12-13T10:49:06.652Z"),
      modifiedAt: new Date("2024-01-06T06:43:38.902Z"),
      metadata: {
        "key": 1918.07,
      },
      status: "active",
      amount: 1000,
      currency: "usd",
      recurringInterval: "month",
      currentPeriodStart: new Date("2025-02-03T13:37:00Z"),
      currentPeriodEnd: new Date("2025-03-03T13:37:00Z"),
      trialStart: new Date("2025-02-03T13:37:00Z"),
      trialEnd: new Date("2025-03-03T13:37:00Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-08-23T21:50:26.126Z"),
      startedAt: new Date("2025-01-03T13:37:00Z"),
      endsAt: new Date("2024-08-22T09:40:42.927Z"),
      productId: "d8dd2de1-21b7-4a41-8bc3-ce909c0cfe23",
      discountId: "<value>",
      meters: [
        {
          createdAt: new Date("2025-03-23T16:30:46.933Z"),
          modifiedAt: new Date("2026-05-27T23:44:19.476Z"),
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
      createdAt: new Date("2025-03-18T01:05:28.322Z"),
      modifiedAt: new Date("2025-10-16T08:51:00.130Z"),
      grantedAt: new Date("2025-01-03T13:37:00Z"),
      benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
      benefitType: "downloadables",
      benefitMetadata: {},
      properties: {},
    },
  ],
  activeMeters: [
    {
      id: "<value>",
      createdAt: new Date("2025-05-28T09:44:21.414Z"),
      modifiedAt: new Date("2026-04-03T05:13:08.601Z"),
      meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
      consumedUnits: 25,
      creditedUnits: 100,
      balance: 75,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                            | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The ID of the customer.                                                                                                                                         | 992fae2a-2a17-4b7a-8d9e-e287cf90131b                                                                                                                            |
| `createdAt`                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_check_mark:                                                                                                                                              | Creation timestamp of the object.                                                                                                                               |                                                                                                                                                                 |
| `modifiedAt`                                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_check_mark:                                                                                                                                              | Last modification timestamp of the object.                                                                                                                      |                                                                                                                                                                 |
| `metadata`                                                                                                                                                      | Record<string, *components.MetadataOutputType*>                                                                                                                 | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `externalId`                                                                                                                                                    | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated.                                              | usr_1337                                                                                                                                                        |
| `email`                                                                                                                                                         | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The email address of the customer. This must be unique within the organization.                                                                                 | customer@example.com                                                                                                                                            |
| `emailVerified`                                                                                                                                                 | *boolean*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                              | Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address. | true                                                                                                                                                            |
| `type`                                                                                                                                                          | *"individual"*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                              | The type of customer.                                                                                                                                           | individual                                                                                                                                                      |
| `name`                                                                                                                                                          | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The name of the customer.                                                                                                                                       | John Doe                                                                                                                                                        |
| `billingName`                                                                                                                                                   | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The name that should appear on the customer's invoices. Falls back to the customer name when not explicitly set.                                                | John Doe                                                                                                                                                        |
| `billingAddress`                                                                                                                                                | [components.Address](../../models/components/address.md)                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `taxId`                                                                                                                                                         | *components.CustomerStateIndividualTaxId*[]                                                                                                                     | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             | **Example 1:** [<br/>"911144442",<br/>"us_ein"<br/>]<br/>**Example 2:** [<br/>"FR61954506077",<br/>"eu_vat"<br/>]                                               |
| `locale`                                                                                                                                                        | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `organizationId`                                                                                                                                                | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The ID of the organization owning the customer.                                                                                                                 | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                                                            |
| `defaultPaymentMethodId`                                                                                                                                        | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The ID of the customer's default payment method, if any. Use the payment methods endpoint to retrieve its details.                                              |                                                                                                                                                                 |
| `deletedAt`                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_check_mark:                                                                                                                                              | Timestamp for when the customer was soft deleted.                                                                                                               |                                                                                                                                                                 |
| `firstUserEventAt`                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_check_mark:                                                                                                                                              | Timestamp of the first event ingested for this customer. Can predate `created_at`, and is null if no event was ever ingested.                                   |                                                                                                                                                                 |
| `avatarUrl`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             | https://www.gravatar.com/avatar/xxx?d=404                                                                                                                       |
| `activeSubscriptions`                                                                                                                                           | [components.CustomerStateSubscription](../../models/components/customerstatesubscription.md)[]                                                                  | :heavy_check_mark:                                                                                                                                              | The customer's active subscriptions.                                                                                                                            |                                                                                                                                                                 |
| `grantedBenefits`                                                                                                                                               | [components.CustomerStateBenefitGrant](../../models/components/customerstatebenefitgrant.md)[]                                                                  | :heavy_check_mark:                                                                                                                                              | The customer's active benefit grants.                                                                                                                           |                                                                                                                                                                 |
| `activeMeters`                                                                                                                                                  | [components.CustomerStateMeter](../../models/components/customerstatemeter.md)[]                                                                                | :heavy_check_mark:                                                                                                                                              | The customer's active meters.                                                                                                                                   |                                                                                                                                                                 |