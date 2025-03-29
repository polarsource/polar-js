# DiscountPercentageRepeatDuration

Schema for a percentage discount that is applied on every invoice
for a certain number of months.

## Example Usage

```typescript
import { DiscountPercentageRepeatDuration } from "@polar-sh/sdk/models/components/discountpercentagerepeatduration.js";

let value: DiscountPercentageRepeatDuration = {
  duration: "once",
  durationInMonths: 285315,
  type: "fixed",
  basisPoints: 442160,
  createdAt: new Date("2025-02-07T01:50:48.003Z"),
  modifiedAt: new Date("2023-04-25T19:05:13.328Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  name: "<value>",
  code: "<value>",
  startsAt: new Date("2023-05-30T04:41:33.304Z"),
  endsAt: new Date("2023-01-29T00:45:56.979Z"),
  maxRedemptions: 403196,
  redemptionsCount: 775061,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      createdAt: new Date("2024-01-17T20:56:10.200Z"),
      modifiedAt: new Date("2025-07-20T21:58:44.449Z"),
      id: "<value>",
      name: "<value>",
      description: "lightly and pace crocodile pulverize great round arrange",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
  ],
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
| `metadata`                                                                                    | Record<string, *components.DiscountPercentageRepeatDurationMetadata*>                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the discount. Will be displayed to the customer when the discount is applied.         |                                                                                               |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Code customers can use to apply the discount during checkout.                                 |                                                                                               |
| `startsAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp after which the discount is redeemable.                                             |                                                                                               |
| `endsAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp after which the discount is no longer redeemable.                                   |                                                                                               |
| `maxRedemptions`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | Maximum number of times the discount can be redeemed.                                         |                                                                                               |
| `redemptionsCount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of times the discount has been redeemed.                                               |                                                                                               |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The organization ID.                                                                          | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                          |
| `products`                                                                                    | [components.DiscountProduct](../../models/components/discountproduct.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |