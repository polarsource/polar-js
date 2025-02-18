# DiscountFixedRepeatDuration

Schema for a fixed amount discount that is applied on every invoice
for a certain number of months.

## Example Usage

```typescript
import { DiscountFixedRepeatDuration } from "@polar-sh/sdk/models/components/discountfixedrepeatduration.js";

let value: DiscountFixedRepeatDuration = {
  duration: "forever",
  durationInMonths: 537614,
  type: "fixed",
  amount: 717070,
  currency: "Guyana Dollar",
  createdAt: new Date("2023-02-09T02:03:36.402Z"),
  modifiedAt: new Date("2024-09-01T13:07:23.352Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  name: "<value>",
  code: "<value>",
  startsAt: new Date("2025-03-30T19:29:14.034Z"),
  endsAt: new Date("2023-07-08T06:05:15.080Z"),
  maxRedemptions: 845105,
  redemptionsCount: 760910,
  organizationId: "<value>",
  products: [
    {
      createdAt: new Date("2024-02-17T17:56:53.516Z"),
      modifiedAt: new Date("2023-07-08T18:50:43.868Z"),
      id: "<value>",
      name: "<value>",
      description:
        "mostly substantiate bravely anesthetize unto agile crest put phooey",
      recurringInterval: "month",
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