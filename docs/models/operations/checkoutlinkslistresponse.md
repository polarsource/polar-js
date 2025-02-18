# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-10-21T00:08:43.378Z"),
        modifiedAt: new Date("2023-05-19T20:14:27.762Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://reasonable-chainstay.name",
        label: "<value>",
        allowDiscountCodes: false,
        discountId: "<value>",
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2024-02-16T06:49:59.233Z"),
            modifiedAt: new Date("2024-08-17T22:48:03.415Z"),
            id: "<value>",
            name: "<value>",
            description: "whenever obsess failing out gah see",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2023-04-24T04:35:22.434Z"),
                modifiedAt: new Date("2023-05-15T16:46:43.352Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                type: "one_time",
                recurringInterval: "month",
                priceCurrency: "<value>",
                priceAmount: 936498,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2024-07-29T03:29:40.213Z"),
                modifiedAt: new Date("2024-02-21T13:16:50.894Z"),
                id: "<value>",
                type: "license_keys",
                description:
                  "masterpiece phooey riser patiently pfft mmm as instead",
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
                path: "/var",
                mimeType: "<value>",
                size: 576197,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2025-12-11T04:34:09.367Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2025-11-12T16:42:19.718Z"),
                sizeReadable: "<value>",
                publicUrl: "https://heavy-tentacle.info",
              },
            ],
          },
        ],
        discount: {
          duration: "forever",
          type: "fixed",
          basisPoints: 907238,
          createdAt: new Date("2023-03-23T19:41:16.996Z"),
          modifiedAt: new Date("2024-07-09T19:11:31.461Z"),
          id: "<value>",
          metadata: {
            "key": 956371,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-07-06T01:12:48.398Z"),
          endsAt: new Date("2023-11-17T22:22:54.572Z"),
          maxRedemptions: 465478,
          redemptionsCount: 856407,
          organizationId: "<value>",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2023-01-13T07:49:36.676Z"),
          modifiedAt: new Date("2025-04-25T00:35:45.705Z"),
          id: "<value>",
          name: "<value>",
          description: "forenenst aside valentine heavily nor woot subtle",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-04-13T05:31:32.532Z"),
              modifiedAt: new Date("2024-03-26T12:38:41.209Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 331884,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-12-17T18:43:03.479Z"),
              modifiedAt: new Date("2024-04-22T12:03:00.119Z"),
              id: "<value>",
              type: "license_keys",
              description: "bungalow cheerfully how gosh where devoted around",
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
              path: "/opt/bin",
              mimeType: "<value>",
              size: 742259,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-11-14T23:52:31.916Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-03-18T06:35:46.583Z"),
              sizeReadable: "<value>",
              publicUrl: "https://emotional-flame.name",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-09-07T17:50:46.509Z"),
          modifiedAt: new Date("2025-08-05T06:29:12.813Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
        url: "https://trusty-overload.name/",
      },
    ],
    pagination: {
      totalCount: 587098,
      maxPage: 514487,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |