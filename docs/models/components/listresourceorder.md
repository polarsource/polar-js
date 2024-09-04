# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
    items: [
        {
            createdAt: new Date("2024-11-16T18:43:16.578Z"),
            modifiedAt: new Date("2023-04-20T20:57:49.890Z"),
            id: "<value>",
            amount: 117320,
            taxAmount: 325118,
            currency: "Boliviano boliviano",
            userId: "<value>",
            productId: "<value>",
            productPriceId: "<value>",
            subscriptionId: "<value>",
            user: {
                id: "<value>",
                email: "Lambert_Weber84@yahoo.com",
                publicName: "<value>",
                githubUsername: "<value>",
                avatarUrl: "<value>",
            },
            product: {
                createdAt: new Date("2022-02-27T13:10:28.905Z"),
                modifiedAt: new Date("2024-10-22T16:07:37.247Z"),
                id: "<value>",
                name: "<value>",
                description: "Persistent zero defect success",
                isRecurring: false,
                isArchived: false,
                organizationId: "<value>",
                type: "individual",
                isHighlighted: false,
            },
            productPrice: {
                createdAt: new Date("2023-02-21T20:20:12.317Z"),
                modifiedAt: new Date("2022-08-20T20:11:16.082Z"),
                id: "<value>",
                priceAmount: 147808,
                priceCurrency: "<value>",
                isArchived: false,
                recurringInterval: "year",
            },
            subscription: {
                createdAt: new Date("2024-01-21T16:30:55.798Z"),
                modifiedAt: new Date("2022-07-27T05:06:14.785Z"),
                id: "<value>",
                status: "past_due",
                currentPeriodStart: new Date("2024-09-12T00:58:19.414Z"),
                currentPeriodEnd: new Date("2024-08-02T19:41:40.359Z"),
                cancelAtPeriodEnd: false,
                startedAt: new Date("2022-01-10T18:55:40.734Z"),
                endedAt: new Date("2022-04-17T14:16:27.861Z"),
                userId: "<value>",
                productId: "<value>",
                priceId: "<value>",
            },
        },
    ],
    pagination: {
        totalCount: 90233,
        maxPage: 497777,
    },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `items`                                                            | [components.OrderOutput](../../models/components/orderoutput.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `pagination`                                                       | [components.Pagination](../../models/components/pagination.md)     | :heavy_check_mark:                                                 | N/A                                                                |