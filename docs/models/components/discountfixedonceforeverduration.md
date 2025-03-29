# DiscountFixedOnceForeverDuration

Schema for a fixed amount discount that is applied once or forever.

## Example Usage

```typescript
import { DiscountFixedOnceForeverDuration } from "@polar-sh/sdk/models/components/discountfixedonceforeverduration.js";

let value: DiscountFixedOnceForeverDuration = {
  duration: "once",
  type: "fixed",
  amount: 169632,
  currency: "Kyat",
  createdAt: new Date("2025-07-14T14:46:19.316Z"),
  modifiedAt: new Date("2024-06-28T15:00:27.569Z"),
  id: "<value>",
  metadata: {
    "key": 927111,
  },
  name: "<value>",
  code: "<value>",
  startsAt: new Date("2023-05-27T16:46:38.890Z"),
  endsAt: new Date("2024-06-10T10:18:55.444Z"),
  maxRedemptions: 761411,
  redemptionsCount: 897924,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      createdAt: new Date("2025-10-13T20:20:07.426Z"),
      modifiedAt: new Date("2023-05-03T18:10:14.633Z"),
      id: "<value>",
      name: "<value>",
      description: "yahoo before needily phooey as gosh on",
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
| `type`                                                                                        | [components.DiscountType](../../models/components/discounttype.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `metadata`                                                                                    | Record<string, *components.DiscountFixedOnceForeverDurationMetadata*>                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the discount. Will be displayed to the customer when the discount is applied.         |                                                                                               |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Code customers can use to apply the discount during checkout.                                 |                                                                                               |
| `startsAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp after which the discount is redeemable.                                             |                                                                                               |
| `endsAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp after which the discount is no longer redeemable.                                   |                                                                                               |
| `maxRedemptions`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | Maximum number of times the discount can be redeemed.                                         |                                                                                               |
| `redemptionsCount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of times the discount has been redeemed.                                               |                                                                                               |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The organization ID.                                                                          | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                          |
| `products`                                                                                    | [components.DiscountProduct](../../models/components/discountproduct.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |