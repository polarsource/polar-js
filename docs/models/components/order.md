# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components";

let value: Order = {
  createdAt: new Date("2023-01-10T11:57:03.157Z"),
  modifiedAt: new Date("2023-11-26T22:49:11.497Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  amount: 94400,
  taxAmount: 210237,
  currency: "Fiji Dollar",
  billingReason: "subscription_update",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  user: {
    id: "<value>",
    email: "Sofia_Raynor89@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://handy-gown.name",
  },
  product: {
    createdAt: new Date("2022-05-24T18:23:37.331Z"),
    modifiedAt: new Date("2023-01-29T03:53:24.003Z"),
    id: "<value>",
    name: "<value>",
    description:
      "without besides viciously impostor youthfully implode ick sans in aha",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2022-12-01T01:22:38.683Z"),
    modifiedAt: new Date("2023-05-04T04:09:06.657Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 774266,
    maximumAmount: 668154,
    presetAmount: 110903,
  },
  discount: {
    duration: "once",
    type: "percentage",
    basisPoints: 738626,
    createdAt: new Date("2022-03-30T18:38:41.678Z"),
    modifiedAt: new Date("2022-09-30T01:25:20.761Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-02-10T15:00:52.531Z"),
    endsAt: new Date("2024-06-20T15:53:40.277Z"),
    maxRedemptions: 66755,
    redemptionsCount: 165357,
    organizationId: "<value>",
  },
  subscription: {
    metadata: {
      "key": "<value>",
    },
    createdAt: new Date("2023-11-15T23:48:29.716Z"),
    modifiedAt: new Date("2024-12-04T06:04:24.285Z"),
    id: "<value>",
    amount: 822732,
    currency: "Costa Rican Colon",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2023-06-23T19:46:45.718Z"),
    currentPeriodEnd: new Date("2024-09-22T14:10:48.963Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-10-07T14:09:54.362Z"),
    endedAt: new Date("2022-05-31T09:09:47.828Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `metadata`                                                                                    | Record<string, *components.OrderMetadata*>                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customFieldData`                                                                             | [components.OrderCustomFieldData](../../models/components/ordercustomfielddata.md)            | :heavy_minus_sign:                                                                            | Key-value object storing custom field values.                                                 |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `billingReason`                                                                               | [components.OrderBillingReason](../../models/components/orderbillingreason.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discountId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkoutId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.OrderUser](../../models/components/orderuser.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.OrderProduct](../../models/components/orderproduct.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPrice`                                                                                | *components.ProductPrice*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discount`                                                                                    | *components.OrderDiscount*                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.OrderSubscription](../../models/components/ordersubscription.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |