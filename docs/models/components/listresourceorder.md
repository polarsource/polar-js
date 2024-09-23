# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2022-12-19T13:56:02.962Z"),
      modifiedAt: new Date("2023-04-13T13:07:34.313Z"),
      id: "<value>",
      amount: 24548,
      taxAmount: 388333,
      currency: "Bahraini Dinar",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      user: {
        id: "<value>",
        email: "Rey_Bode83@yahoo.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "<value>",
      },
      product: {
        createdAt: new Date("2024-04-15T01:42:53.846Z"),
        modifiedAt: new Date("2024-09-03T06:39:55.329Z"),
        id: "<value>",
        name: "<value>",
        description: "Self-enabling attitude-oriented Graphic Interface",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2023-11-07T08:04:38.587Z"),
        modifiedAt: new Date("2023-02-26T03:55:17.766Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 703407,
        maximumAmount: 353075,
        presetAmount: 154425,
        recurringInterval: "month",
      },
      subscription: {
        createdAt: new Date("2024-08-27T05:15:52.024Z"),
        modifiedAt: new Date("2024-11-16T13:14:05.219Z"),
        id: "<value>",
        amount: 207512,
        currency: "Surinam Dollar",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2022-07-01T10:30:42.476Z"),
        currentPeriodEnd: new Date("2023-12-31T21:24:34.925Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-04-03T07:05:35.185Z"),
        endedAt: new Date("2024-12-03T09:17:23.978Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 700634,
    maxPage: 841816,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `items`                                                            | [components.OrderOutput](../../models/components/orderoutput.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `pagination`                                                       | [components.Pagination](../../models/components/pagination.md)     | :heavy_check_mark:                                                 | N/A                                                                |