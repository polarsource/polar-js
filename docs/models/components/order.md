# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components";

let value: Order = {
  createdAt: new Date("2023-06-22T00:09:40.274Z"),
  modifiedAt: new Date("2022-07-19T21:06:20.014Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  amount: 704284,
  taxAmount: 841379,
  currency: "UAE Dirham",
  billingReason: "purchase",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  user: {
    id: "<value>",
    email: "Wilton90@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://natural-sarong.biz",
  },
  product: {
    createdAt: new Date("2023-12-03T06:44:12.845Z"),
    modifiedAt: new Date("2024-03-18T13:58:56.966Z"),
    id: "<value>",
    name: "<value>",
    description: "lavish psst ew strange why well-documented poppy",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2022-03-27T05:19:48.158Z"),
    modifiedAt: new Date("2024-07-16T11:44:37.294Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    priceAmount: 241190,
    recurringInterval: "month",
  },
  subscription: {
    metadata: {
      "key": "<value>",
    },
    createdAt: new Date("2023-03-05T09:01:12.508Z"),
    modifiedAt: new Date("2023-11-21T22:00:18.063Z"),
    id: "<value>",
    amount: 586260,
    currency: "Vatu",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2024-02-19T21:52:41.487Z"),
    currentPeriodEnd: new Date("2023-12-29T10:34:57.471Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-04-21T03:44:58.953Z"),
    endedAt: new Date("2023-09-20T09:06:06.239Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
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
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `billingReason`                                                                               | [components.OrderBillingReason](../../models/components/orderbillingreason.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkoutId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.OrderUser](../../models/components/orderuser.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.OrderProduct](../../models/components/orderproduct.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPrice`                                                                                | *components.ProductPrice*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.OrderSubscription](../../models/components/ordersubscription.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |