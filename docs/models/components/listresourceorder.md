# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2024-12-26T16:52:12.542Z"),
      modifiedAt: new Date("2023-08-29T06:32:45.499Z"),
      id: "<value>",
      amount: 240787,
      taxAmount: 519896,
      currency: "Solomon Islands Dollar",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      user: {
        id: "<value>",
        email: "Donnie_Simonis@yahoo.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://unhappy-abacus.org",
      },
      product: {
        createdAt: new Date("2023-01-13T03:45:06.715Z"),
        modifiedAt: new Date("2023-03-14T10:38:44.143Z"),
        id: "<value>",
        name: "<value>",
        description: "hence without tapioca customise and",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2023-04-12T03:41:23.498Z"),
        modifiedAt: new Date("2023-12-29T22:55:04.311Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 389932,
        recurringInterval: "month",
      },
      subscription: {
        createdAt: new Date("2022-04-16T13:09:43.732Z"),
        modifiedAt: new Date("2023-09-18T23:44:01.372Z"),
        id: "<value>",
        amount: 217338,
        currency: "Bhutanese Ngultrum",
        recurringInterval: "month",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2023-12-15T11:58:40.519Z"),
        currentPeriodEnd: new Date("2022-05-15T23:01:01.438Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-12-26T20:17:31.294Z"),
        endedAt: new Date("2024-08-01T00:30:34.557Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 869369,
    maxPage: 157396,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `items`                                                            | [components.OrderOutput](../../models/components/orderoutput.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `pagination`                                                       | [components.Pagination](../../models/components/pagination.md)     | :heavy_check_mark:                                                 | N/A                                                                |