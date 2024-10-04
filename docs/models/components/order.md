# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components";

let value: Order = {
  createdAt: new Date("2023-12-25T07:57:58.923Z"),
  modifiedAt: new Date("2024-08-04T03:31:14.965Z"),
  id: "<value>",
  amount: 32623,
  taxAmount: 941845,
  currency: "Uganda Shilling",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  user: {
    id: "<value>",
    email: "Ludwig.Schneider29@hotmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://digital-premier.info",
  },
  product: {
    createdAt: new Date("2022-02-06T11:47:57.029Z"),
    modifiedAt: new Date("2022-03-31T01:33:21.843Z"),
    id: "<value>",
    name: "<value>",
    description:
      "cutlet respectful furthermore as notwithstanding where snowplow modulo handy meaningfully",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2024-09-05T03:00:40.973Z"),
    modifiedAt: new Date("2023-11-22T10:29:11.218Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    minimumAmount: 369529,
    maximumAmount: 860443,
    presetAmount: 695723,
    recurringInterval: "year",
  },
  subscription: {
    createdAt: new Date("2023-07-21T02:29:37.778Z"),
    modifiedAt: new Date("2022-04-07T06:27:56.731Z"),
    id: "<value>",
    amount: 592935,
    currency: "Iranian Rial",
    recurringInterval: "year",
    status: "incomplete",
    currentPeriodStart: new Date("2024-05-11T15:36:51.992Z"),
    currentPeriodEnd: new Date("2023-07-16T02:29:30.643Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-06-29T16:47:50.583Z"),
    endedAt: new Date("2022-08-15T15:59:22.837Z"),
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
| `productPrice`                                                                                | *components.ProductPrice*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.OrderSubscription](../../models/components/ordersubscription.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |