# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-07-11T04:31:02.339Z"),
      modifiedAt: new Date("2023-06-21T19:25:27.760Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      clientSecret: "<value>",
      successUrl: "https://misguided-issue.org/",
      productPriceId: "<value>",
      productPrice: {
        createdAt: new Date("2022-05-26T00:10:38.237Z"),
        modifiedAt: new Date("2023-03-02T19:11:22.399Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
      url: "https://discrete-developmental.net/",
    },
  ],
  pagination: {
    totalCount: 943491,
    maxPage: 127155,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |