# DiscountPercentageRepeatDurationBase

## Example Usage

```typescript
import { DiscountPercentageRepeatDurationBase } from "@polar-sh/sdk/models/components/discountpercentagerepeatdurationbase.js";

let value: DiscountPercentageRepeatDurationBase = {
  duration: "once",
  durationInMonths: 919171,
  type: "fixed",
  basisPoints: 305267,
  createdAt: new Date("2025-10-30T14:18:34.931Z"),
  modifiedAt: new Date("2025-12-21T18:06:07.641Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  name: "<value>",
  code: "<value>",
  startsAt: new Date("2024-12-20T21:28:33.162Z"),
  endsAt: new Date("2023-04-27T17:15:09.840Z"),
  maxRedemptions: 650914,
  redemptionsCount: 827314,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `duration`                                                                                    | [components.DiscountDuration](../../models/components/discountduration.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `durationInMonths`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `type`                                                                                        | [components.DiscountType](../../models/components/discounttype.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `basisPoints`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `metadata`                                                                                    | Record<string, *components.DiscountPercentageRepeatDurationBaseMetadata*>                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the discount. Will be displayed to the customer when the discount is applied.         |                                                                                               |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Code customers can use to apply the discount during checkout.                                 |                                                                                               |
| `startsAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp after which the discount is redeemable.                                             |                                                                                               |
| `endsAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp after which the discount is no longer redeemable.                                   |                                                                                               |
| `maxRedemptions`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | Maximum number of times the discount can be redeemed.                                         |                                                                                               |
| `redemptionsCount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of times the discount has been redeemed.                                               |                                                                                               |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The organization ID.                                                                          | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                          |