# BenefitGrantMeterCreditWebhook

## Example Usage

```typescript
import { BenefitGrantMeterCreditWebhook } from "@polar-sh/sdk/models/components/benefitgrantmetercreditwebhook.js";

let value: BenefitGrantMeterCreditWebhook = {
  createdAt: new Date("2025-03-25T07:43:23.918Z"),
  modifiedAt: new Date("2025-05-01T18:17:06.742Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-10-04T20:17:27.013Z"),
    modifiedAt: new Date("2026-12-13T13:45:10.283Z"),
    metadata: {
      "key": 5682.16,
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
    deletedAt: new Date("2025-06-14T19:06:24.911Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2024-08-29T23:41:53.521Z"),
    modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-09-07T16:41:04.296Z"),
    modifiedAt: null,
    type: "meter_credit",
    description:
      "blah sometimes catalog uh-huh drat phew impure whole ah darling",
    selectable: false,
    deletable: true,
    organizationId: "<value>",
    metadata: {
      "key": 97475,
    },
    properties: {
      units: 298008,
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
| `customer`                                                                                                   | *components.Customer*                                                                                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `member`                                                                                                     | [components.Member](../../models/components/member.md)                                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `benefit`                                                                                                    | [components.BenefitMeterCredit](../../models/components/benefitmetercredit.md)                               | :heavy_check_mark:                                                                                           | A benefit of type `meter_unit`.<br/><br/>Use it to grant a number of units on a specific meter.              |
| `properties`                                                                                                 | [components.BenefitGrantMeterCreditProperties](../../models/components/benefitgrantmetercreditproperties.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `previousProperties`                                                                                         | [components.BenefitGrantMeterCreditProperties](../../models/components/benefitgrantmetercreditproperties.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |