# OrderInput

## Example Usage

```typescript
import { OrderInput } from "@polar-sh/sdk/models/components";

let value: OrderInput = {
    createdAt: new Date("2024-10-18T21:41:24.904Z"),
    modifiedAt: new Date("2022-04-07T17:16:54.121Z"),
    id: "<value>",
    amount: 215398,
    taxAmount: 602229,
    currency: "Venezuelan bolívar",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    user: {
        id: "<value>",
        email: "Providenci34@hotmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "<value>",
    },
    product: {
        createdAt: new Date("2023-10-26T20:38:50.096Z"),
        modifiedAt: new Date("2024-03-08T01:34:54.088Z"),
        id: "<value>",
        name: "<value>",
        description: "Cross-group multi-state parallelism",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "business",
        isHighlighted: false,
    },
    productPrice: {
        createdAt: new Date("2023-08-31T20:17:14.873Z"),
        modifiedAt: new Date("2024-06-08T21:13:55.029Z"),
        id: "<value>",
        priceAmount: 25756,
        priceCurrency: "<value>",
        isArchived: false,
        recurringInterval: "month",
    },
    subscription: {
        createdAt: new Date("2022-03-04T19:45:41.602Z"),
        modifiedAt: new Date("2024-09-29T16:33:31.525Z"),
        id: "<value>",
        status: "incomplete",
        currentPeriodStart: new Date("2022-02-24T02:04:28.850Z"),
        currentPeriodEnd: new Date("2023-07-21T18:46:44.157Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-11-18T00:08:26.950Z"),
        endedAt: new Date("2024-04-07T14:18:46.539Z"),
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