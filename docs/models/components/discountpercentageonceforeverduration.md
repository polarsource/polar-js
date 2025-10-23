# DiscountPercentageOnceForeverDuration

Schema for a percentage discount that is applied once or forever.

## Example Usage

```typescript
import { DiscountPercentageOnceForeverDuration } from "@polar-sh/sdk/models/components/discountpercentageonceforeverduration.js";

let value: DiscountPercentageOnceForeverDuration = {
  duration: "repeating",
  type: "fixed",
  basisPoints: 1000,
  createdAt: new Date("2023-11-06T17:56:21.046Z"),
  modifiedAt: new Date("2023-05-17T21:52:37.548Z"),
  id: "<value>",
  metadata: {
    "key": 713621,
  },
  name: "<value>",
  code: "<value>",
  startsAt: null,
  endsAt: new Date("2023-12-14T00:06:50.256Z"),
  maxRedemptions: 195391,
  redemptionsCount: 409445,
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      metadata: {
        "key": 168262,
      },
      id: "<value>",
      createdAt: new Date("2024-11-19T12:32:14.789Z"),
      modifiedAt: new Date("2023-04-10T12:42:12.296Z"),
      trialInterval: "year",
      trialIntervalCount: 718871,
      name: "<value>",
      description:
        "shinny psst cram usefully buttery aggressive bestride conservative sympathetically",
      recurringInterval: "day",
      recurringIntervalCount: 432858,
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `duration`                                                                                                                        | [components.DiscountDuration](../../models/components/discountduration.md)                                                        | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |                                                                                                                                   |
| `type`                                                                                                                            | [components.DiscountType](../../models/components/discounttype.md)                                                                | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |                                                                                                                                   |
| `basisPoints`                                                                                                                     | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | Discount percentage in basis points. A basis point is 1/100th of a percent. For example, 1000 basis points equals a 10% discount. | 1000                                                                                                                              |
| `createdAt`                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                     | :heavy_check_mark:                                                                                                                | Creation timestamp of the object.                                                                                                 |                                                                                                                                   |
| `modifiedAt`                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                     | :heavy_check_mark:                                                                                                                | Last modification timestamp of the object.                                                                                        |                                                                                                                                   |
| `id`                                                                                                                              | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The ID of the object.                                                                                                             |                                                                                                                                   |
| `metadata`                                                                                                                        | Record<string, *components.DiscountPercentageOnceForeverDurationMetadata*>                                                        | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |                                                                                                                                   |
| `name`                                                                                                                            | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | Name of the discount. Will be displayed to the customer when the discount is applied.                                             |                                                                                                                                   |
| `code`                                                                                                                            | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | Code customers can use to apply the discount during checkout.                                                                     |                                                                                                                                   |
| `startsAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                     | :heavy_check_mark:                                                                                                                | Timestamp after which the discount is redeemable.                                                                                 |                                                                                                                                   |
| `endsAt`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                     | :heavy_check_mark:                                                                                                                | Timestamp after which the discount is no longer redeemable.                                                                       |                                                                                                                                   |
| `maxRedemptions`                                                                                                                  | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | Maximum number of times the discount can be redeemed.                                                                             |                                                                                                                                   |
| `redemptionsCount`                                                                                                                | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | Number of times the discount has been redeemed.                                                                                   |                                                                                                                                   |
| `organizationId`                                                                                                                  | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The organization ID.                                                                                                              | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                              |
| `products`                                                                                                                        | [components.DiscountProduct](../../models/components/discountproduct.md)[]                                                        | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |                                                                                                                                   |