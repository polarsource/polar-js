# OrderOutput

## Example Usage

```typescript
import { OrderOutput } from "@polar-sh/sdk/models/components";

let value: OrderOutput = {
  createdAt: new Date("2024-09-03T03:43:53.473Z"),
  modifiedAt: new Date("2023-07-18T21:44:35.434Z"),
  id: "<value>",
  amount: 432606,
  taxAmount: 367927,
  currency: "SDR",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  user: {
    id: "<value>",
    email: "Laron_Hauck@yahoo.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "<value>",
  },
  product: {
    createdAt: new Date("2023-10-12T16:29:32.168Z"),
    modifiedAt: new Date("2022-05-27T05:59:26.851Z"),
    id: "<value>",
    name: "<value>",
    description: "Grass-roots asynchronous monitoring",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "individual",
    isHighlighted: false,
  },
  productPrice: {
    createdAt: new Date("2024-06-19T14:29:06.544Z"),
    modifiedAt: new Date("2023-12-24T10:58:40.851Z"),
    id: "<value>",
    priceCurrency: "<value>",
    isArchived: false,
    minimumAmount: 402767,
    maximumAmount: 397257,
    presetAmount: 37565,
  },
  subscription: {
    createdAt: new Date("2024-12-31T05:00:29.484Z"),
    modifiedAt: new Date("2024-12-15T03:45:01.172Z"),
    id: "<value>",
    amount: 351893,
    currency: "Cayman Islands Dollar",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2023-11-30T18:58:30.874Z"),
    currentPeriodEnd: new Date("2024-01-07T13:22:04.726Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-06-10T02:34:07.582Z"),
    endedAt: new Date("2022-10-20T07:11:40.624Z"),
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