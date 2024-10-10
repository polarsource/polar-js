# BenefitGrantWebhook

## Example Usage

```typescript
import { BenefitGrantWebhook } from "@polar-sh/sdk/models/components";

let value: BenefitGrantWebhook = {
  createdAt: new Date("2023-10-28T06:01:39.364Z"),
  modifiedAt: new Date("2022-09-04T21:23:13.781Z"),
  id: "<value>",
  isGranted: false,
  isRevoked: false,
  subscriptionId: "<value>",
  orderId: "<value>",
  userId: "<value>",
  benefitId: "<value>",
  properties: {},
  benefit: {
    createdAt: new Date("2024-05-01T09:46:08.628Z"),
    modifiedAt: new Date("2023-06-29T11:49:18.398Z"),
    id: "<value>",
    description: "untried painfully knit",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {},
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
| `benefit`                                                                                     | *components.BenefitGrantWebhookBenefit*                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `previousProperties`                                                                          | *components.PreviousProperties*                                                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |