# OrderInput

## Example Usage

```typescript
import { OrderInput } from "@polar-sh/sdk/models/components";

let value: OrderInput = {
  createdAt: new Date("2023-08-05T20:02:30.502Z"),
  modifiedAt: new Date("2023-04-13T06:00:27.724Z"),
  id: "<value>",
  amount: 759464,
  taxAmount: 151150,
  currency: "Swiss Franc",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  user: {
    id: "<value>",
    email: "Marilou98@hotmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://small-plumber.info",
  },
  product: {
    createdAt: new Date("2022-03-29T07:22:04.190Z"),
    modifiedAt: new Date("2022-02-05T06:13:23.209Z"),
    id: "<value>",
    name: "<value>",
    description: "questionably queasily ready an signature abscond",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2024-05-03T15:00:56.296Z"),
    modifiedAt: new Date("2023-03-14T07:48:02.355Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    minimumAmount: 505363,
    maximumAmount: 872509,
    presetAmount: 891243,
    recurringInterval: "month",
  },
  subscription: {
    createdAt: new Date("2024-04-13T03:14:05.640Z"),
    modifiedAt: new Date("2022-09-14T15:45:37.752Z"),
    id: "<value>",
    amount: 175186,
    currency: "Lesotho Loti",
    recurringInterval: "year",
    status: "past_due",
    currentPeriodStart: new Date("2024-08-20T02:38:51.426Z"),
    currentPeriodEnd: new Date("2022-01-30T15:06:46.475Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-11-10T08:00:29.356Z"),
    endedAt: new Date("2024-02-28T05:02:53.225Z"),
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