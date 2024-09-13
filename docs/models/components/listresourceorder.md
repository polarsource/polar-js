# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2022-05-09T13:59:52.753Z"),
      modifiedAt: new Date("2022-12-23T07:54:05.553Z"),
      id: "<value>",
      amount: 107004,
      taxAmount: 583404,
      currency: "Cordoba Oro",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      user: {
        id: "<value>",
        email: "Nathanial.Weimann93@hotmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "<value>",
      },
      product: {
        createdAt: new Date("2023-10-16T10:44:14.107Z"),
        modifiedAt: new Date("2024-12-13T20:02:37.326Z"),
        id: "<value>",
        name: "<value>",
        description: "Total foreground productivity",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "individual",
        isHighlighted: false,
      },
      productPrice: {
        createdAt: new Date("2022-06-11T23:57:33.459Z"),
        modifiedAt: new Date("2024-04-18T10:24:49.909Z"),
        id: "<value>",
        priceAmount: 684935,
        priceCurrency: "<value>",
        isArchived: false,
      },
      subscription: {
        createdAt: new Date("2022-07-27T05:06:14.785Z"),
        modifiedAt: new Date("2023-12-21T19:27:59.096Z"),
        id: "<value>",
        status: "unpaid",
        currentPeriodStart: new Date("2024-08-02T19:41:40.359Z"),
        currentPeriodEnd: new Date("2022-01-10T18:55:40.734Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-04-17T14:16:27.861Z"),
        endedAt: new Date("2022-04-09T21:29:18.097Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 497777,
    maxPage: 619183,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `items`                                                            | [components.OrderOutput](../../models/components/orderoutput.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `pagination`                                                       | [components.Pagination](../../models/components/pagination.md)     | :heavy_check_mark:                                                 | N/A                                                                |