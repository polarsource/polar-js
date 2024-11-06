# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-09-20T09:43:49.938Z"),
        modifiedAt: new Date("2022-09-04T08:32:34.245Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        clientSecret: "<value>",
        successUrl: "https://noxious-pronoun.org",
        productPriceId: "<value>",
        productPrice: {
          createdAt: new Date("2022-01-08T23:31:11.246Z"),
          modifiedAt: new Date("2022-02-06T14:44:43.529Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
        url: "https://expert-dusk.biz/",
      },
    ],
    pagination: {
      totalCount: 728948,
      maxPage: 569196,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |