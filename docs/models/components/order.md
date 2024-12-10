# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components";

let value: Order = {
  createdAt: new Date("2024-04-10T01:42:23.126Z"),
  modifiedAt: new Date("2022-12-11T18:32:09.426Z"),
  id: "<value>",
  metadata: {
    "key": 517326,
  },
  amount: 484966,
  taxAmount: 901163,
  currency: "Tugrik",
  billingReason: "subscription_update",
  billingAddress: {
    country: "Qatar",
  },
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  user: {
    id: "<value>",
    email: "Oma.Turner33@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://sugary-equal.com/",
  },
  product: {
    createdAt: new Date("2022-12-28T23:20:38.785Z"),
    modifiedAt: new Date("2024-06-11T00:18:11.711Z"),
    id: "<value>",
    name: "<value>",
    description: "incidentally cop questioningly blacken",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2022-07-13T10:38:23.731Z"),
    modifiedAt: new Date("2024-10-26T07:41:18.790Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
  },
  discount: {
    duration: "repeating",
    type: "fixed",
    basisPoints: 534908,
    createdAt: new Date("2022-11-15T02:41:04.241Z"),
    modifiedAt: new Date("2022-11-30T08:58:52.513Z"),
    id: "<value>",
    metadata: {
      "key": 921719,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-06-01T13:39:37.646Z"),
    endsAt: new Date("2024-03-04T10:33:16.366Z"),
    maxRedemptions: 559174,
    redemptionsCount: 922299,
    organizationId: "<value>",
  },
  subscription: {
    metadata: {
      "key": 873833,
    },
    createdAt: new Date("2024-07-03T01:03:11.378Z"),
    modifiedAt: new Date("2022-08-23T08:43:29.864Z"),
    id: "<value>",
    amount: 771226,
    currency: "Afghani",
    recurringInterval: "month",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2023-07-10T12:31:23.736Z"),
    currentPeriodEnd: new Date("2024-03-18T14:11:08.034Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-04-18T01:16:45.009Z"),
    endedAt: new Date("2023-07-19T08:30:48.959Z"),
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
| `billingAddress`                                                                              | [components.Address](../../models/components/address.md)                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
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