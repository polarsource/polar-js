# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-02-06T22:09:25.531Z"),
        modifiedAt: new Date("2025-11-26T01:34:54.964Z"),
        id: "<value>",
        metadata: {
          "key": 7755.87,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://super-effector.info",
        label: "<value>",
        allowDiscountCodes: false,
        discountId: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2023-11-30T18:35:20.224Z"),
            modifiedAt: new Date("2025-11-03T10:44:59.331Z"),
            id: "<value>",
            name: "<value>",
            description:
              "hence yet once mockingly where drive impressionable issue yippee above",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2025-03-10T19:45:47.510Z"),
                modifiedAt: new Date("2023-12-05T12:06:08.343Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "year",
              },
            ],
            benefits: [
              {
                id: "<value>",
                createdAt: new Date("2025-02-09T22:12:43.257Z"),
                modifiedAt: new Date("2024-05-18T10:19:46.071Z"),
                metadata: {
                  "key": false,
                },
                type: "discord",
                description:
                  "all till tired absentmindedly earth opposite drab",
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
                path: "/lib",
                mimeType: "<value>",
                size: 164300,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2023-07-16T05:14:48.398Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-02-21T00:33:32.798Z"),
                sizeReadable: "<value>",
                publicUrl: "https://strong-siege.com/",
              },
            ],
          },
        ],
        discount: {
          duration: "once",
          durationInMonths: 154985,
          type: "percentage",
          amount: 123616,
          currency: "Russian Ruble",
          createdAt: new Date("2024-06-20T22:27:54.169Z"),
          modifiedAt: new Date("2023-09-30T05:12:41.329Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-03-02T01:24:18.760Z"),
          endsAt: new Date("2023-04-18T19:07:58.784Z"),
          maxRedemptions: 639300,
          redemptionsCount: 903325,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2024-02-27T02:33:19.115Z"),
          modifiedAt: new Date("2025-12-05T09:08:53.432Z"),
          id: "<value>",
          name: "<value>",
          description: "meh even testify trustworthy instead oxidise madly now",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-10-30T15:51:09.273Z"),
              modifiedAt: new Date("2024-02-22T21:13:11.302Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2024-08-19T19:09:47.456Z"),
              modifiedAt: new Date("2024-01-11T03:34:59.855Z"),
              metadata: {
                "key": 1549.49,
              },
              type: "downloadables",
              description: "husk indeed verbally",
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
              path: "/root",
              mimeType: "<value>",
              size: 720608,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-06-10T21:03:51.201Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-11-02T06:06:02.609Z"),
              sizeReadable: "<value>",
              publicUrl: "https://great-hoof.info",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-05-23T19:19:18.700Z"),
          modifiedAt: new Date("2025-02-13T11:40:48.981Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 601593,
        },
        url: "https://bony-palate.org",
      },
    ],
    pagination: {
      totalCount: 7062,
      maxPage: 909706,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |