# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-08-02T18:40:01.314Z"),
        modifiedAt: new Date("2024-05-28T04:41:45.730Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        clientSecret: "<value>",
        successUrl: "https://fantastic-doorpost.net/",
        productPriceId: "<value>",
        productPrice: {
          createdAt: new Date("2022-01-12T14:26:50.258Z"),
          modifiedAt: new Date("2024-11-23T13:27:52.601Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 962024,
          maximumAmount: 217552,
          presetAmount: 41346,
        },
        url: "https://well-documented-thread.name",
      },
    ],
    pagination: {
      totalCount: 303549,
      maxPage: 329961,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |