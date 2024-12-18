# DiscountFixedRepeatDuration

Schema for a fixed amount discount that is applied on every invoice
for a certain number of months.

## Example Usage

```typescript
import { DiscountFixedRepeatDuration } from "@polar-sh/sdk/models/components";

let value: DiscountFixedRepeatDuration = {
  duration: "forever",
  durationInMonths: 167032,
  type: "fixed",
  amount: 894050,
  currency: "Solomon Islands Dollar",
  createdAt: new Date("2024-12-13T05:18:10.863Z"),
  modifiedAt: new Date("2022-03-01T07:50:15.091Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  name: "<value>",
  code: "<value>",
  startsAt: new Date("2024-11-17T09:06:12.283Z"),
  endsAt: new Date("2023-04-27T13:25:12.871Z"),
  maxRedemptions: 604338,
  redemptionsCount: 569742,
  organizationId: "<value>",
  products: [
    {
      createdAt: new Date("2022-06-04T04:41:38.622Z"),
      modifiedAt: new Date("2024-03-12T06:58:02.887Z"),
      id: "<value>",
      name: "<value>",
      description: "altruistic deed second",
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
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `metadata`                                                                                    | Record<string, *components.DiscountFixedRepeatDurationMetadata*>                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the discount. Will be displayed to the customer when the discount is applied.         |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Code customers can use to apply the discount during checkout.                                 |
| `startsAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp after which the discount is redeemable.                                             |
| `endsAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp after which the discount is no longer redeemable.                                   |
| `maxRedemptions`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | Maximum number of times the discount can be redeemed.                                         |
| `redemptionsCount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of times the discount has been redeemed.                                               |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The organization ID.                                                                          |
| `products`                                                                                    | [components.DiscountProduct](../../models/components/discountproduct.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |