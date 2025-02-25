# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-10-17T13:52:01.332Z"),
        modifiedAt: new Date("2024-02-03T17:10:11.638Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://second-hand-integer.com/",
        label: "<value>",
        allowDiscountCodes: false,
        discountId: "<value>",
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2025-09-21T07:58:16.205Z"),
            modifiedAt: new Date("2023-03-23T19:41:16.996Z"),
            id: "<value>",
            name: "<value>",
            description:
              "achieve scuttle brr ingratiate slight challenge sweetly",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2024-03-27T12:47:48.745Z"),
                modifiedAt: new Date("2024-04-16T13:11:25.335Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "month",
              },
            ],
            benefits: [
              {
                createdAt: new Date("2025-08-17T15:46:01.256Z"),
                modifiedAt: new Date("2024-08-09T09:24:30.662Z"),
                id: "<value>",
                type: "downloadables",
                description:
                  "yum option sustenance edge best-seller cruelly than boohoo gymnast enchanted",
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
                path: "/usr/sbin",
                mimeType: "<value>",
                size: 815722,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-03-14T09:51:08.850Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2025-08-15T17:29:43.529Z"),
                sizeReadable: "<value>",
                publicUrl: "https://nervous-morning.name",
              },
            ],
          },
        ],
        discount: {
          duration: "forever",
          type: "fixed",
          basisPoints: 228069,
          createdAt: new Date("2024-07-15T02:36:01.008Z"),
          modifiedAt: new Date("2023-11-30T01:51:54.122Z"),
          id: "<value>",
          metadata: {
            "key": 103848,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-09-20T12:01:51.716Z"),
          endsAt: new Date("2025-12-09T01:45:15.580Z"),
          maxRedemptions: 270122,
          redemptionsCount: 885829,
          organizationId: "<value>",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2023-01-22T23:47:18.210Z"),
          modifiedAt: new Date("2024-04-21T19:17:53.692Z"),
          id: "<value>",
          name: "<value>",
          description:
            "rule consequently oh pivot dwell versus bashfully tennis well-to-do",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-11-18T17:39:49.893Z"),
              modifiedAt: new Date("2023-02-27T19:15:42.668Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-08-03T11:04:00.708Z"),
              modifiedAt: new Date("2024-03-15T11:46:35.816Z"),
              id: "<value>",
              type: "downloadables",
              description: "quarterly even canter",
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
              path: "/opt",
              mimeType: "<value>",
              size: 882085,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-02-10T22:14:56.342Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-05-28T23:35:18.391Z"),
              sizeReadable: "<value>",
              publicUrl: "https://rigid-heartbeat.net",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-08-31T20:10:03.642Z"),
          modifiedAt: new Date("2025-03-23T12:41:31.929Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 457980,
        },
        url: "https://old-lay.net/",
      },
    ],
    pagination: {
      totalCount: 517515,
      maxPage: 227250,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |