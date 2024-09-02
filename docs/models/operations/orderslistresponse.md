# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
    result: {
        items: [
            {
                createdAt: new Date("2022-06-13T19:05:17.541Z"),
                modifiedAt: new Date("2024-09-18T11:51:15.355Z"),
                id: "<value>",
                amount: 868126,
                taxAmount: 37559,
                currency: "Chilean Peso",
                userId: "<value>",
                productId: "<value>",
                productPriceId: "<value>",
                subscriptionId: "<value>",
                user: {
                    id: "<value>",
                    email: "Levi77@yahoo.com",
                    publicName: "<value>",
                    githubUsername: "<value>",
                    avatarUrl: "<value>",
                },
                product: {
                    createdAt: new Date("2024-07-18T10:00:30.280Z"),
                    modifiedAt: new Date("2024-08-05T23:12:19.207Z"),
                    id: "<value>",
                    name: "<value>",
                    description: "Self-enabling fresh-thinking local area network",
                    isRecurring: false,
                    isArchived: false,
                    organizationId: "<value>",
                    type: "free",
                    isHighlighted: false,
                },
                productPrice: {
                    createdAt: new Date("2022-02-06T09:52:53.944Z"),
                    modifiedAt: new Date("2022-03-17T19:22:06.639Z"),
                    id: "<value>",
                    priceAmount: 982575,
                    priceCurrency: "<value>",
                    isArchived: false,
                },
                subscription: {
                    createdAt: new Date("2024-02-04T09:09:59.151Z"),
                    modifiedAt: new Date("2023-02-14T03:02:23.858Z"),
                    id: "<value>",
                    status: "active",
                    currentPeriodStart: new Date("2023-04-06T09:39:44.896Z"),
                    currentPeriodEnd: new Date("2024-03-02T08:57:02.296Z"),
                    cancelAtPeriodEnd: false,
                    startedAt: new Date("2022-02-25T10:40:10.987Z"),
                    endedAt: new Date("2024-08-07T13:19:14.531Z"),
                    userId: "<value>",
                    productId: "<value>",
                    priceId: "<value>",
                },
            },
        ],
        pagination: {
            totalCount: 365496,
            maxPage: 975522,
        },
    },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |