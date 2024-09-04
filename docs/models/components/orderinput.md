# OrderInput

## Example Usage

```typescript
import { OrderInput } from "@polar-sh/sdk/models/components";

let value: OrderInput = {
    createdAt: new Date("2022-06-08T13:57:21.253Z"),
    modifiedAt: new Date("2022-01-01T14:21:40.383Z"),
    id: "<value>",
    amount: 168042,
    taxAmount: 425402,
    currency: "Convertible Marks",
    userId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    subscriptionId: "<value>",
    user: {
        id: "<value>",
        email: "Diego_Durgan@gmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "<value>",
    },
    product: {
        createdAt: new Date("2022-04-07T17:16:54.121Z"),
        modifiedAt: new Date("2022-08-25T01:50:03.891Z"),
        id: "<value>",
        name: "<value>",
        description: "Phased systematic paradigm",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "business",
        isHighlighted: false,
    },
    productPrice: {
        createdAt: new Date("2022-06-24T10:10:57.619Z"),
        modifiedAt: new Date("2023-01-10T23:35:06.289Z"),
        id: "<value>",
        priceAmount: 605712,
        priceCurrency: "<value>",
        isArchived: false,
    },
    subscription: {
        createdAt: new Date("2024-03-08T01:34:54.088Z"),
        modifiedAt: new Date("2022-05-07T18:22:11.271Z"),
        id: "<value>",
        status: "past_due",
        currentPeriodStart: new Date("2024-03-08T18:22:12.262Z"),
        currentPeriodEnd: new Date("2024-07-25T11:42:59.521Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-11-30T15:48:28.105Z"),
        endedAt: new Date("2023-08-31T20:17:14.873Z"),
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