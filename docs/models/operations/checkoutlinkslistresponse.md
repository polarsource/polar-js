# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-05-23T07:56:48.531Z"),
        modifiedAt: new Date("2024-04-23T20:28:53.298Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://corny-casket.net",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2023-09-20T15:54:20.278Z"),
          modifiedAt: new Date("2025-02-20T05:29:23.423Z"),
          id: "<value>",
          name: "<value>",
          description: "alive although until",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-12-26T16:17:58.881Z"),
              modifiedAt: new Date("2025-11-06T05:51:47.281Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 97554,
              maximumAmount: 230217,
              presetAmount: 299227,
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-04-16T17:08:57.790Z"),
              modifiedAt: new Date("2023-06-19T12:29:53.961Z"),
              id: "<value>",
              type: "license_keys",
              description: "young that boo noted cheerfully bleach",
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
              path: "/usr/include",
              mimeType: "<value>",
              size: 259370,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-10-03T07:59:59.919Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-04-26T19:48:43.329Z"),
              sizeReadable: "<value>",
              publicUrl: "https://silent-alliance.net/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-11-03T08:03:35.528Z"),
          modifiedAt: new Date("2025-10-09T15:49:23.914Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 463504,
        },
        discount: {
          duration: "repeating",
          type: "percentage",
          basisPoints: 102996,
          createdAt: new Date("2024-08-06T20:26:04.230Z"),
          modifiedAt: new Date("2023-08-15T06:07:54.440Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-10-31T21:20:06.190Z"),
          endsAt: new Date("2023-02-21T08:10:22.238Z"),
          maxRedemptions: 645688,
          redemptionsCount: 641713,
          organizationId: "<value>",
        },
        url: "https://powerless-gradient.org/",
      },
    ],
    pagination: {
      totalCount: 479872,
      maxPage: 824900,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |