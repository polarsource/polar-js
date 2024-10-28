# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2022-06-22T21:29:53.700Z"),
      modifiedAt: new Date("2022-03-20T13:14:56.817Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      clientSecret: "<value>",
      successUrl: "https://boiling-instructor.name",
      productPriceId: "<value>",
      productPrice: {
        createdAt: new Date("2023-10-28T18:33:39.178Z"),
        modifiedAt: new Date("2023-07-05T23:21:00.370Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      url: "https://vain-word.com",
    },
  ],
  pagination: {
    totalCount: 969553,
    maxPage: 803186,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |