# OrderOutput

## Example Usage

```typescript
import { OrderOutput } from "@polar-sh/sdk/models/components";

let value: OrderOutput = {
    createdAt: new Date("2023-11-10T14:59:03.400Z"),
    modifiedAt: new Date("2023-09-29T20:46:44.522Z"),
    id: "<value>",
    amount: 382440,
    taxAmount: 241557,
    currency: "Bermudian Dollar (customarily known as Bermuda Dollar)",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    user: {
        id: "<value>",
        email: "Winifred.Stokes27@gmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "<value>",
    },
    product: {
        createdAt: new Date("2023-05-31T19:12:43.878Z"),
        modifiedAt: new Date("2023-06-03T14:47:27.947Z"),
        id: "<value>",
        name: "<value>",
        description: "Cross-group homogeneous hub",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "individual",
        isHighlighted: false,
    },
    productPrice: {
        createdAt: new Date("2024-11-26T02:47:19.604Z"),
        modifiedAt: new Date("2023-04-10T09:10:19.089Z"),
        id: "<value>",
        priceAmount: 99958,
        priceCurrency: "<value>",
        isArchived: false,
        recurringInterval: "year",
    },
    subscription: {
        createdAt: new Date("2022-02-13T10:57:56.431Z"),
        modifiedAt: new Date("2022-05-09T13:52:07.193Z"),
        id: "<value>",
        status: "active",
        currentPeriodStart: new Date("2022-10-25T07:00:52.665Z"),
        currentPeriodEnd: new Date("2023-05-18T06:02:41.929Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-03-19T13:21:51.599Z"),
        endedAt: new Date("2022-09-15T20:21:14.010Z"),
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