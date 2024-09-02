# OrderOutput

## Example Usage

```typescript
import { OrderOutput } from "@polar-sh/sdk/models/components";

let value: OrderOutput = {
    createdAt: new Date("2022-03-06T03:42:09.347Z"),
    modifiedAt: new Date("2022-10-25T03:22:00.138Z"),
    id: "<value>",
    amount: 470621,
    taxAmount: 473190,
    currency: "Brazilian Real",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    user: {
        id: "<value>",
        email: "Jacques_Lang42@yahoo.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "<value>",
    },
    product: {
        createdAt: new Date("2022-04-20T13:18:31.340Z"),
        modifiedAt: new Date("2024-07-28T09:48:49.849Z"),
        id: "<value>",
        name: "<value>",
        description: "Assimilated background infrastructure",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "free",
        isHighlighted: false,
    },
    productPrice: {
        createdAt: new Date("2023-03-19T13:21:51.599Z"),
        modifiedAt: new Date("2022-09-15T20:21:14.010Z"),
        id: "<value>",
        priceAmount: 399812,
        priceCurrency: "<value>",
        isArchived: false,
    },
    subscription: {
        createdAt: new Date("2022-03-06T12:31:26.254Z"),
        modifiedAt: new Date("2024-01-06T20:04:16.147Z"),
        id: "<value>",
        status: "incomplete",
        currentPeriodStart: new Date("2023-01-13T19:27:55.747Z"),
        currentPeriodEnd: new Date("2024-07-28T00:05:24.116Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-02-22T06:55:25.503Z"),
        endedAt: new Date("2023-03-15T00:51:02.013Z"),
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