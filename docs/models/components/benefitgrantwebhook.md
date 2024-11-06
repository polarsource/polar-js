# BenefitGrantWebhook

## Example Usage

```typescript
import { BenefitGrantWebhook } from "@polar-sh/sdk/models/components";

let value: BenefitGrantWebhook = {
  createdAt: new Date("2023-06-12T10:03:01.658Z"),
  modifiedAt: new Date("2023-09-18T07:49:46.907Z"),
  id: "<value>",
  isGranted: false,
  isRevoked: false,
  subscriptionId: "<value>",
  orderId: "<value>",
  userId: "<value>",
  benefitId: "<value>",
  properties: {},
  benefit: {
    createdAt: new Date("2024-09-08T22:46:10.175Z"),
    modifiedAt: new Date("2024-12-18T04:45:58.619Z"),
    id: "<value>",
    description: "light mechanically distorted onto",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 611534,
        timeframe: "year",
      },
      activations: {
        limit: 348198,
        enableUserAdmin: false,
      },
      limitUsage: 382920,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the grant.                                                                          |
| `grantedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the benefit was granted. If `None`, the benefit is not granted.            |
| `isGranted`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is granted.                                                               |
| `revokedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.            |
| `isRevoked`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is revoked.                                                               |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the subscription that granted this benefit.                                         |
| `orderId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the order that granted this benefit.                                                |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the user concerned by this grant.                                                   |
| `benefitId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the benefit concerned by this grant.                                                |
| `properties`                                                                                  | *components.BenefitGrantWebhookProperties*                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `benefit`                                                                                     | *components.BenefitInput*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `previousProperties`                                                                          | *components.PreviousProperties*                                                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |