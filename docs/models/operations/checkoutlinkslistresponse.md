# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-03-25T20:12:46.170Z"),
        modifiedAt: new Date("2023-02-03T09:03:46.147Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://bouncy-dwell.org",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2024-05-22T23:59:53.614Z"),
          modifiedAt: new Date("2024-10-01T05:59:20.109Z"),
          id: "<value>",
          name: "<value>",
          description:
            "phooey lone frenetically print technologist violin gorgeous if weep",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-08-08T17:52:44.076Z"),
              modifiedAt: new Date("2025-03-31T14:35:59.413Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 493295,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-05-22T18:22:13.947Z"),
              modifiedAt: new Date("2023-01-29T23:31:18.878Z"),
              id: "<value>",
              type: "downloadables",
              description: "snoopy pish depend vamoose diligently",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/usr/libexec",
              mimeType: "<value>",
              size: 389060,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-07-06T08:09:01.868Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-08-01T21:03:06.067Z"),
              sizeReadable: "<value>",
              publicUrl: "https://judicious-foodstuffs.net",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-03-07T06:28:40.969Z"),
          modifiedAt: new Date("2025-03-06T05:27:32.055Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 774186,
          maximumAmount: 132036,
          presetAmount: 883486,
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          type: "percentage",
          basisPoints: 567140,
          createdAt: new Date("2025-02-27T23:03:31.631Z"),
          modifiedAt: new Date("2023-08-31T20:30:50.225Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-07-02T12:50:22.191Z"),
          endsAt: new Date("2023-04-10T04:24:24.827Z"),
          maxRedemptions: 587339,
          redemptionsCount: 885479,
          organizationId: "<value>",
        },
        url: "https://dearest-brook.com/",
      },
    ],
    pagination: {
      totalCount: 802418,
      maxPage: 625656,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |