# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-02-16T00:15:32.715Z"),
      modifiedAt: new Date("2024-01-10T10:45:06.401Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      clientSecret: "<value>",
      successUrl: "https://scientific-tentacle.net/",
      productPriceId: "<value>",
      productPrice: {
        createdAt: new Date("2024-09-05T00:05:28.311Z"),
        modifiedAt: new Date("2023-06-21T17:32:39.701Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 407877,
      },
      url: "https://earnest-fishery.net",
    },
  ],
  pagination: {
    totalCount: 563474,
    maxPage: 762279,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |