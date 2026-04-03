# CustomerStateTeam

A team customer along with additional state information:

* Active subscriptions
* Granted benefits
* Active meters

## Example Usage

```typescript
import { CustomerStateTeam } from "@polar-sh/sdk/models/components/customerstateteam.js";

let value: CustomerStateTeam = {
  id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
  createdAt: new Date("2026-06-19T14:51:51.498Z"),
  modifiedAt: new Date("2026-10-12T02:25:21.071Z"),
  metadata: {},
  externalId: "usr_1337",
  email: "customer@example.com",
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
  activeSubscriptions: [
    {
      id: "e5149aae-e521-42b9-b24c-abb3d71eea2e",
      createdAt: new Date("2026-02-15T23:44:26.685Z"),
      modifiedAt: new Date("2026-12-13T10:49:06.652Z"),
      metadata: {},
      status: "active",
      amount: 1000,
      currency: "usd",
      recurringInterval: "day",
      currentPeriodStart: new Date("2025-02-03T13:37:00Z"),
      currentPeriodEnd: new Date("2025-03-03T13:37:00Z"),
      trialStart: new Date("2025-02-03T13:37:00Z"),
      trialEnd: new Date("2025-03-03T13:37:00Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2026-01-18T04:18:40.136Z"),
      startedAt: new Date("2025-01-03T13:37:00Z"),
      endsAt: new Date("2026-01-30T07:36:24.970Z"),
      productId: "d8dd2de1-21b7-4a41-8bc3-ce909c0cfe23",
      discountId: "<value>",
      meters: [
        {
          createdAt: new Date("2026-08-06T03:58:23.691Z"),
          modifiedAt: new Date("2026-11-29T18:34:09.927Z"),
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
      createdAt: new Date("2025-03-23T16:30:46.933Z"),
      modifiedAt: new Date("2026-05-27T23:44:19.476Z"),
      grantedAt: new Date("2025-01-03T13:37:00Z"),
      benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
      benefitType: "license_keys",
      benefitMetadata: {},
      properties: {},
    },
  ],
  activeMeters: [],
  avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
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
| `email`                                                                                                                                                         | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The email address of the customer. This must be unique within the organization.                                                                                 | customer@example.com                                                                                                                                            |
| `emailVerified`                                                                                                                                                 | *boolean*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                              | Whether the customer email address is verified. The address is automatically verified when the customer accesses the customer portal using their email address. | true                                                                                                                                                            |
| `type`                                                                                                                                                          | *"team"*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The type of customer. Team customers can have multiple members.                                                                                                 | team                                                                                                                                                            |
| `name`                                                                                                                                                          | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The name of the customer.                                                                                                                                       | John Doe                                                                                                                                                        |
| `billingAddress`                                                                                                                                                | [components.Address](../../models/components/address.md)                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `taxId`                                                                                                                                                         | *components.CustomerStateTeamTaxId*[]                                                                                                                           | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             | **Example 1:** [<br/>"911144442",<br/>"us_ein"<br/>]<br/>**Example 2:** [<br/>"FR61954506077",<br/>"eu_vat"<br/>]                                               |
| `locale`                                                                                                                                                        | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `organizationId`                                                                                                                                                | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The ID of the organization owning the customer.                                                                                                                 | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                                                            |
| `deletedAt`                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_check_mark:                                                                                                                                              | Timestamp for when the customer was soft deleted.                                                                                                               |                                                                                                                                                                 |
| `activeSubscriptions`                                                                                                                                           | [components.CustomerStateSubscription](../../models/components/customerstatesubscription.md)[]                                                                  | :heavy_check_mark:                                                                                                                                              | The customer's active subscriptions.                                                                                                                            |                                                                                                                                                                 |
| `grantedBenefits`                                                                                                                                               | [components.CustomerStateBenefitGrant](../../models/components/customerstatebenefitgrant.md)[]                                                                  | :heavy_check_mark:                                                                                                                                              | The customer's active benefit grants.                                                                                                                           |                                                                                                                                                                 |
| `activeMeters`                                                                                                                                                  | [components.CustomerStateMeter](../../models/components/customerstatemeter.md)[]                                                                                | :heavy_check_mark:                                                                                                                                              | The customer's active meters.                                                                                                                                   |                                                                                                                                                                 |
| `avatarUrl`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             | https://www.gravatar.com/avatar/xxx?d=404                                                                                                                       |