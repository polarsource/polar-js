# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-11-26T18:57:13.016Z"),
        modifiedAt: new Date("2023-10-13T06:16:43.259Z"),
        id: "<value>",
        metadata: {
          "key": 256699,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://impish-gerbil.biz/",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2023-01-25T01:58:27.894Z"),
          modifiedAt: new Date("2025-06-04T02:31:56.023Z"),
          id: "<value>",
          name: "<value>",
          description: "how morning worriedly tomography leap convoke",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-11-06T05:51:47.281Z"),
              modifiedAt: new Date("2023-04-17T22:03:33.923Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 230217,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-11-24T22:52:55.481Z"),
              modifiedAt: new Date("2024-01-31T22:05:16.754Z"),
              id: "<value>",
              type: "custom",
              description: "upliftingly gently now except",
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
              path: "/var/log",
              mimeType: "<value>",
              size: 559050,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-06-27T17:48:54.867Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-10-12T08:07:34.700Z"),
              sizeReadable: "<value>",
              publicUrl: "https://brilliant-sauerkraut.com",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-03-06T20:44:33.604Z"),
          modifiedAt: new Date("2024-10-13T21:17:48.489Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
        discount: {
          duration: "once",
          durationInMonths: 71654,
          type: "percentage",
          amount: 259370,
          currency: "Kwacha",
          createdAt: new Date("2024-04-26T19:48:43.329Z"),
          modifiedAt: new Date("2023-09-12T10:08:53.512Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-02-03T09:03:46.147Z"),
          endsAt: new Date("2025-01-22T12:24:34.947Z"),
          maxRedemptions: 749167,
          redemptionsCount: 83514,
          organizationId: "<value>",
        },
        url: "https://vague-information.name/",
      },
    ],
    pagination: {
      totalCount: 773835,
      maxPage: 855312,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |