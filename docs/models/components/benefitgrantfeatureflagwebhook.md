# BenefitGrantFeatureFlagWebhook

## Example Usage

```typescript
import { BenefitGrantFeatureFlagWebhook } from "@polar-sh/sdk/models/components/benefitgrantfeatureflagwebhook.js";

let value: BenefitGrantFeatureFlagWebhook = {
  createdAt: new Date("2026-02-08T15:05:04.958Z"),
  modifiedAt: new Date("2024-07-10T07:04:29.893Z"),
  id: "<value>",
  isGranted: false,
  isRevoked: false,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-12-20T15:22:06.971Z"),
    modifiedAt: new Date("2026-12-09T05:39:29.991Z"),
    metadata: {
      "key": 655761,
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
    deletedAt: new Date("2026-10-31T23:00:34.339Z"),
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
    createdAt: new Date("2025-11-03T12:51:50.168Z"),
    modifiedAt: new Date("2026-03-21T04:27:51.216Z"),
    type: "feature_flag",
    description: "outgoing upright avow pinion excitedly gripping",
    selectable: true,
    deletable: false,
    isDeleted: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    properties: {},
  },
  properties: {},
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_check_mark:                                                                                                                     | Creation timestamp of the object.                                                                                                      |
| `modifiedAt`                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_check_mark:                                                                                                                     | Last modification timestamp of the object.                                                                                             |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The ID of the grant.                                                                                                                   |
| `grantedAt`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_minus_sign:                                                                                                                     | The timestamp when the benefit was granted. If `None`, the benefit is not granted.                                                     |
| `isGranted`                                                                                                                            | *boolean*                                                                                                                              | :heavy_check_mark:                                                                                                                     | Whether the benefit is granted.                                                                                                        |
| `revokedAt`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_minus_sign:                                                                                                                     | The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.                                                     |
| `isRevoked`                                                                                                                            | *boolean*                                                                                                                              | :heavy_check_mark:                                                                                                                     | Whether the benefit is revoked.                                                                                                        |
| `subscriptionId`                                                                                                                       | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The ID of the subscription that granted this benefit.                                                                                  |
| `orderId`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The ID of the order that granted this benefit.                                                                                         |
| `customerId`                                                                                                                           | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The ID of the customer concerned by this grant.                                                                                        |
| `memberId`                                                                                                                             | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The ID of the member concerned by this grant.                                                                                          |
| `benefitId`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The ID of the benefit concerned by this grant.                                                                                         |
| `error`                                                                                                                                | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                                                           | :heavy_minus_sign:                                                                                                                     | The error information if the benefit grant failed with an unrecoverable error.                                                         |
| `customer`                                                                                                                             | *components.Customer*                                                                                                                  | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `member`                                                                                                                               | [components.Member](../../models/components/member.md)                                                                                 | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `benefit`                                                                                                                              | [components.BenefitFeatureFlag](../../models/components/benefitfeatureflag.md)                                                         | :heavy_check_mark:                                                                                                                     | A benefit of type `feature_flag`.<br/><br/>Use it to grant feature flags with key-value metadata<br/>that can be queried via the API and webhooks. |
| `properties`                                                                                                                           | [components.BenefitGrantFeatureFlagProperties](../../models/components/benefitgrantfeatureflagproperties.md)                           | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `previousProperties`                                                                                                                   | [components.BenefitGrantFeatureFlagProperties](../../models/components/benefitgrantfeatureflagproperties.md)                           | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |