# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-06T16:40:09.305Z"),
        modifiedAt: new Date("2024-11-03T10:14:15.332Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        clientSecret: "<value>",
        successUrl: "https://upset-birdcage.info/",
        productPriceId: "<value>",
        productPrice: {
          createdAt: new Date("2023-01-16T19:34:44.796Z"),
          modifiedAt: new Date("2023-05-13T18:21:47.587Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 865212,
          recurringInterval: "year",
        },
        url: "https://true-nucleotidase.info",
      },
    ],
    pagination: {
      totalCount: 194194,
      maxPage: 413135,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |