# OrderOutput

## Example Usage

```typescript
import { OrderOutput } from "@polar-sh/sdk/models/components";

let value: OrderOutput = {
  createdAt: new Date("2023-09-14T01:40:13.089Z"),
  modifiedAt: new Date("2023-06-07T13:46:59.076Z"),
  id: "<value>",
  amount: 621883,
  taxAmount: 528742,
  currency: "Kuwaiti Dinar",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  user: {
    id: "<value>",
    email: "Chasity7@hotmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "<value>",
  },
  product: {
    createdAt: new Date("2024-04-25T16:14:24.819Z"),
    modifiedAt: new Date("2023-08-20T03:18:40.071Z"),
    id: "<value>",
    name: "<value>",
    description: "Virtual analyzing process improvement",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2022-08-29T07:55:29.814Z"),
    modifiedAt: new Date("2024-05-14T18:51:09.710Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    priceAmount: 144240,
    recurringInterval: "year",
  },
  subscription: {
    createdAt: new Date("2023-12-27T02:08:18.453Z"),
    modifiedAt: new Date("2022-03-06T16:32:50.796Z"),
    id: "<value>",
    amount: 810982,
    currency: "Norwegian Krone",
    recurringInterval: "year",
    status: "canceled",
    currentPeriodStart: new Date("2023-09-07T23:43:29.550Z"),
    currentPeriodEnd: new Date("2024-07-05T20:32:13.341Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-11-01T17:50:00.486Z"),
    endedAt: new Date("2023-08-23T10:58:27.936Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.OrderUser](../../models/components/orderuser.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.OrderProduct](../../models/components/orderproduct.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPrice`                                                                                | *components.ProductPriceOutput*                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.OrderSubscription](../../models/components/ordersubscription.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |