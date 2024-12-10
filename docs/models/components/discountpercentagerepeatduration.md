# DiscountPercentageRepeatDuration

Schema for a percentage discount that is applied on every invoice
for a certain number of months.

## Example Usage

```typescript
import { DiscountPercentageRepeatDuration } from "@polar-sh/sdk/models/components";

let value: DiscountPercentageRepeatDuration = {
  duration: "repeating",
  durationInMonths: 798912,
  type: "percentage",
  basisPoints: 888868,
  createdAt: new Date("2024-09-08T08:42:45.062Z"),
  modifiedAt: new Date("2023-04-17T06:29:55.197Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  name: "<value>",
  code: "<value>",
  startsAt: new Date("2024-11-28T15:47:50.768Z"),
  endsAt: new Date("2022-10-19T14:56:56.864Z"),
  maxRedemptions: 765202,
  redemptionsCount: 243118,
  organizationId: "<value>",
  products: [
    {
      createdAt: new Date("2022-11-09T16:56:29.548Z"),
      modifiedAt: new Date("2023-04-14T17:45:46.632Z"),
      id: "<value>",
      name: "<value>",
      description: "sternly dapper jubilant via merrily upright",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `duration`                                                                                    | [components.DiscountDuration](../../models/components/discountduration.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `durationInMonths`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.DiscountType](../../models/components/discounttype.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `basisPoints`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `metadata`                                                                                    | Record<string, *components.DiscountPercentageRepeatDurationMetadata*>                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the discount. Will be displayed to the customer when the discount is applied.         |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Code customers can use to apply the discount during checkout.                                 |
| `startsAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp after which the discount is redeemable.                                             |
| `endsAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp after which the discount is no longer redeemable.                                   |
| `maxRedemptions`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | Maximum number of times the discount can be redeemed.                                         |
| `redemptionsCount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of times the discount has been redeemed.                                               |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The organization ID.                                                                          |
| `products`                                                                                    | [components.DiscountProduct](../../models/components/discountproduct.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |