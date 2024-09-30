# OrderOutput

## Example Usage

```typescript
import { OrderOutput } from "@polar-sh/sdk/models/components";

let value: OrderOutput = {
  createdAt: new Date("2023-05-28T04:43:05.121Z"),
  modifiedAt: new Date("2024-09-07T10:36:08.764Z"),
  id: "<value>",
  amount: 729926,
  taxAmount: 866387,
  currency: "Indian Rupee",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  user: {
    id: "<value>",
    email: "Solon.Ortiz@yahoo.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://neighboring-negotiation.org/",
  },
  product: {
    createdAt: new Date("2024-01-12T20:25:11.096Z"),
    modifiedAt: new Date("2024-02-22T06:35:51.585Z"),
    id: "<value>",
    name: "<value>",
    description: "but pro boo rudely hastily hm for impure stage whereas",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2022-07-09T06:31:28.422Z"),
    modifiedAt: new Date("2024-12-29T18:54:48.908Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    minimumAmount: 192181,
    maximumAmount: 700751,
    presetAmount: 462072,
    recurringInterval: "month",
  },
  subscription: {
    createdAt: new Date("2022-03-31T01:33:21.843Z"),
    modifiedAt: new Date("2024-10-15T15:41:01.316Z"),
    id: "<value>",
    amount: 744543,
    currency: "Kyat",
    recurringInterval: "month",
    status: "incomplete",
    currentPeriodStart: new Date("2024-04-26T19:47:00.321Z"),
    currentPeriodEnd: new Date("2022-12-09T06:42:10.165Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-08-23T14:07:24.267Z"),
    endedAt: new Date("2022-07-08T20:28:56.674Z"),
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