# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-11-16T13:14:05.219Z"),
        modifiedAt: new Date("2022-08-16T10:24:53.845Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        clientSecret: "<value>",
        successUrl: "https://firsthand-t-shirt.com",
        productPriceId: "<value>",
        productPrice: {
          createdAt: new Date("2024-12-03T09:17:23.978Z"),
          modifiedAt: new Date("2024-02-07T21:27:34.191Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 841816,
        },
        url: "https://live-omelet.name",
      },
    ],
    pagination: {
      totalCount: 469384,
      maxPage: 759451,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |