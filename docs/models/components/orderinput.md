# OrderInput

## Example Usage

```typescript
import { OrderInput } from "@polar-sh/sdk/models/components";

let value: OrderInput = {
  createdAt: new Date("2024-03-09T22:14:24.718Z"),
  modifiedAt: new Date("2023-09-16T20:07:51.073Z"),
  id: "<value>",
  amount: 789036,
  taxAmount: 830197,
  currency: "Tunisian Dinar",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  user: {
    id: "<value>",
    email: "Helene.Ondricka@yahoo.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "<value>",
  },
  product: {
    createdAt: new Date("2024-12-18T05:29:23.891Z"),
    modifiedAt: new Date("2022-01-15T23:11:30.521Z"),
    id: "<value>",
    name: "<value>",
    description: "Polarised object-oriented definition",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2024-09-30T13:19:56.386Z"),
    modifiedAt: new Date("2022-01-22T01:52:48.321Z"),
    id: "<value>",
    isArchived: false,
  },
  subscription: {
    createdAt: new Date("2023-09-17T13:55:01.446Z"),
    modifiedAt: new Date("2022-11-19T22:28:47.872Z"),
    id: "<value>",
    amount: 849029,
    currency: "Nepalese Rupee",
    recurringInterval: "year",
    status: "incomplete",
    currentPeriodStart: new Date("2023-08-16T02:01:14.366Z"),
    currentPeriodEnd: new Date("2023-11-24T13:36:23.997Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-11-13T16:19:02.583Z"),
    endedAt: new Date("2023-10-04T05:10:54.402Z"),
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
| `productPrice`                                                                                | *components.ProductPriceInput*                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.OrderSubscription](../../models/components/ordersubscription.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |