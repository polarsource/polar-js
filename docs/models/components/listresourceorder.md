# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
    items: [
        {
            createdAt: new Date("2024-10-28T02:19:14.729Z"),
            modifiedAt: new Date("2024-07-18T13:44:51.693Z"),
            id: "<value>",
            amount: 52508,
            taxAmount: 935833,
            currency: "Norwegian Krone",
            userId: "<value>",
            productId: "<value>",
            productPriceId: "<value>",
            subscriptionId: "<value>",
            user: {
                id: "<value>",
                email: "Sim.Jacobs21@hotmail.com",
                publicName: "<value>",
                githubUsername: "<value>",
                avatarUrl: "<value>",
            },
            product: {
                createdAt: new Date("2022-06-11T23:57:33.459Z"),
                modifiedAt: new Date("2024-04-18T10:24:49.909Z"),
                id: "<value>",
                name: "<value>",
                description: "Public-key coherent monitoring",
                isRecurring: false,
                isArchived: false,
                organizationId: "<value>",
                type: "business",
                isHighlighted: false,
            },
            productPrice: {
                createdAt: new Date("2022-01-10T18:55:40.734Z"),
                modifiedAt: new Date("2022-04-17T14:16:27.861Z"),
                id: "<value>",
                priceAmount: 90233,
                priceCurrency: "<value>",
                isArchived: false,
                recurringInterval: "month",
            },
            subscription: {
                createdAt: new Date("2023-11-10T14:59:03.400Z"),
                modifiedAt: new Date("2023-09-29T20:46:44.522Z"),
                id: "<value>",
                status: "trialing",
                currentPeriodStart: new Date("2022-09-22T17:54:58.970Z"),
                currentPeriodEnd: new Date("2022-04-16T19:59:24.257Z"),
                cancelAtPeriodEnd: false,
                startedAt: new Date("2022-07-05T06:02:39.098Z"),
                endedAt: new Date("2024-12-15T11:41:08.386Z"),
                userId: "<value>",
                productId: "<value>",
                priceId: "<value>",
            },
        },
    ],
    pagination: {
        totalCount: 859581,
        maxPage: 896582,
    },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `items`                                                            | [components.OrderOutput](../../models/components/orderoutput.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `pagination`                                                       | [components.Pagination](../../models/components/pagination.md)     | :heavy_check_mark:                                                 | N/A                                                                |