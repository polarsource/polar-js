# BenefitGrantAds

## Example Usage

```typescript
import { BenefitGrantAds } from "@polar-sh/sdk/models/components";

let value: BenefitGrantAds = {
  createdAt: new Date("2024-10-08T20:41:24.877Z"),
  modifiedAt: new Date("2023-11-10T00:43:35.009Z"),
  id: "<value>",
  isGranted: false,
  isRevoked: false,
  subscriptionId: "<value>",
  orderId: "<value>",
  userId: "<value>",
  benefitId: "<value>",
  properties: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Creation timestamp of the object.                                                                                |
| `modifiedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Last modification timestamp of the object.                                                                       |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the grant.                                                                                             |
| `grantedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | The timestamp when the benefit was granted. If `None`, the benefit is not granted.                               |
| `isGranted`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the benefit is granted.                                                                                  |
| `revokedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.                               |
| `isRevoked`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the benefit is revoked.                                                                                  |
| `subscriptionId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the subscription that granted this benefit.                                                            |
| `orderId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the order that granted this benefit.                                                                   |
| `userId`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the user concerned by this grant.                                                                      |
| `benefitId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the benefit concerned by this grant.                                                                   |
| `properties`                                                                                                     | [components.BenefitGrantAdsSubscriberProperties](../../models/components/benefitgrantadssubscriberproperties.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |