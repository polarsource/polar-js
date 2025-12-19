# BenefitGrantMeterCreditWebhook

## Example Usage

```typescript
import { BenefitGrantMeterCreditWebhook } from "@polar-sh/sdk/models/components/benefitgrantmetercreditwebhook.js";

let value: BenefitGrantMeterCreditWebhook = {
  createdAt: new Date("2024-03-25T07:43:23.918Z"),
  modifiedAt: new Date("2024-05-01T18:17:06.742Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
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
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-01-16T07:44:47.570Z"),
    modifiedAt: new Date("2023-08-20T06:58:17.350Z"),
    type: "meter_credit",
    description:
      "greedily analyse near horde pocket-watch neglected shrilly or aha coaxingly",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    metadata: {},
    properties: {
      units: 76669,
      rollover: false,
      meterId: "<value>",
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Creation timestamp of the object.                                                                            |
| `modifiedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Last modification timestamp of the object.                                                                   |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the grant.                                                                                         |
| `grantedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | The timestamp when the benefit was granted. If `None`, the benefit is not granted.                           |
| `isGranted`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is granted.                                                                              |
| `revokedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.                           |
| `isRevoked`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is revoked.                                                                              |
| `subscriptionId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the subscription that granted this benefit.                                                        |
| `orderId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the order that granted this benefit.                                                               |
| `customerId`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the customer concerned by this grant.                                                              |
| `memberId`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The ID of the member concerned by this grant.                                                                |
| `benefitId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the benefit concerned by this grant.                                                               |
| `error`                                                                                                      | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                                 | :heavy_minus_sign:                                                                                           | The error information if the benefit grant failed with an unrecoverable error.                               |
| `customer`                                                                                                   | [components.Customer](../../models/components/customer.md)                                                   | :heavy_check_mark:                                                                                           | A customer in an organization.                                                                               |
| `benefit`                                                                                                    | [components.BenefitMeterCredit](../../models/components/benefitmetercredit.md)                               | :heavy_check_mark:                                                                                           | A benefit of type `meter_unit`.<br/><br/>Use it to grant a number of units on a specific meter.              |
| `properties`                                                                                                 | [components.BenefitGrantMeterCreditProperties](../../models/components/benefitgrantmetercreditproperties.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `previousProperties`                                                                                         | [components.BenefitGrantMeterCreditProperties](../../models/components/benefitgrantmetercreditproperties.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |