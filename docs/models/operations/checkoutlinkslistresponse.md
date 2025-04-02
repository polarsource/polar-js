# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-23T23:40:26.806Z"),
        modifiedAt: new Date("2025-05-08T05:54:32.042Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://submissive-guidance.org",
        label: "<value>",
        allowDiscountCodes: false,
        discountId: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2024-11-27T12:35:34.929Z"),
            modifiedAt: new Date("2024-08-26T08:54:42.652Z"),
            id: "<value>",
            name: "<value>",
            description:
              "event agreement prejudge excitedly supposing gastropod rewrite",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2023-01-16T08:08:55.874Z"),
                modifiedAt: new Date("2024-11-24T18:41:39.768Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "year",
                priceCurrency: "<value>",
                priceAmount: 380775,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2025-09-17T19:32:20.666Z"),
                modifiedAt: new Date("2025-10-28T07:26:11.639Z"),
                id: "<value>",
                type: "github_repository",
                description:
                  "enthusiastically worldly lightly when preside geez after",
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
                path: "/etc/defaults",
                mimeType: "<value>",
                size: 357399,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2025-08-24T18:21:39.946Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-02-10T22:14:56.342Z"),
                sizeReadable: "<value>",
                publicUrl: "https://wavy-pneumonia.info/",
              },
            ],
          },
        ],
        discount: {
          duration: "repeating",
          type: "fixed",
          basisPoints: 555511,
          createdAt: new Date("2025-03-23T12:41:31.929Z"),
          modifiedAt: new Date("2025-12-09T06:26:42.930Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-05-16T22:42:08.565Z"),
          endsAt: new Date("2023-05-31T17:10:56.042Z"),
          maxRedemptions: 571477,
          redemptionsCount: 515412,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2025-01-15T04:11:12.465Z"),
          modifiedAt: new Date("2024-07-21T04:42:20.435Z"),
          id: "<value>",
          name: "<value>",
          description: "adjudge down beyond zowie",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-03-01T23:12:30.244Z"),
              modifiedAt: new Date("2025-04-17T17:25:51.291Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 794851,
              maximumAmount: 448389,
              presetAmount: 339357,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-07-25T09:39:53.212Z"),
              modifiedAt: new Date("2024-08-17T15:09:29.883Z"),
              id: "<value>",
              type: "github_repository",
              description:
                "bakeware yahoo guilty insistent instead past beautifully ah",
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
              path: "/net",
              mimeType: "<value>",
              size: 391849,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-05-02T10:31:29.677Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-11-19T20:22:16.810Z"),
              sizeReadable: "<value>",
              publicUrl: "https://concerned-aircraft.com/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-06-15T01:54:27.733Z"),
          modifiedAt: new Date("2024-06-27T16:13:50.864Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 682379,
          maximumAmount: 507290,
          presetAmount: 173868,
        },
        url: "https://stained-declaration.com",
      },
    ],
    pagination: {
      totalCount: 816886,
      maxPage: 514085,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |