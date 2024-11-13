# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-02-28T16:31:31.253Z"),
      modifiedAt: new Date("2022-12-28T14:16:16.603Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      clientSecret: "<value>",
      successUrl: "https://great-representation.com/",
      productPriceId: "<value>",
      productPrice: {
        createdAt: new Date("2022-11-30T04:59:07.344Z"),
        modifiedAt: new Date("2024-02-21T04:41:02.985Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      url: "https://stormy-league.com",
    },
  ],
  pagination: {
    totalCount: 892340,
    maxPage: 489718,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |