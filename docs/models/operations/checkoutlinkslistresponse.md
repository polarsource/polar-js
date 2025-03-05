# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-24T10:58:16.071Z"),
        modifiedAt: new Date("2024-11-12T23:45:49.092Z"),
        id: "<value>",
        metadata: {
          "key": 472275,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://turbulent-railway.org/",
        label: "<value>",
        allowDiscountCodes: false,
        discountId: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2024-03-03T15:13:15.380Z"),
            modifiedAt: new Date("2024-11-06T12:13:20.149Z"),
            id: "<value>",
            name: "<value>",
            description: "inquisitively instead rule until judgementally per",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2024-01-21T09:24:32.337Z"),
                modifiedAt: new Date("2025-07-08T00:54:55.530Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "month",
                priceCurrency: "<value>",
                priceAmount: 796190,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2023-06-05T07:11:09.514Z"),
                modifiedAt: new Date("2025-06-18T14:19:42.669Z"),
                id: "<value>",
                type: "github_repository",
                description:
                  "ew ack at ack freight lest limping inasmuch second-hand",
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
                path: "/Applications",
                mimeType: "<value>",
                size: 43142,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-09-25T04:26:26.242Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2025-04-30T06:42:07.737Z"),
                sizeReadable: "<value>",
                publicUrl: "https://unsightly-tomography.net/",
              },
            ],
          },
        ],
        discount: {
          duration: "forever",
          type: "fixed",
          basisPoints: 938959,
          createdAt: new Date("2023-11-08T15:01:16.630Z"),
          modifiedAt: new Date("2023-07-20T11:05:10.084Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-10-16T06:44:39.899Z"),
          endsAt: new Date("2025-11-12T13:45:13.664Z"),
          maxRedemptions: 829550,
          redemptionsCount: 290981,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2024-12-30T20:40:29.283Z"),
          modifiedAt: new Date("2024-10-28T02:42:52.450Z"),
          id: "<value>",
          name: "<value>",
          description: "whereas trial ha handy synergy biodegrade",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-12-19T20:55:47.008Z"),
              modifiedAt: new Date("2025-06-09T19:38:34.690Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-12-08T04:00:01.010Z"),
              modifiedAt: new Date("2024-09-22T18:18:43.782Z"),
              id: "<value>",
              type: "github_repository",
              description: "frizz rise part however apud busily",
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
              size: 324973,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-08-31T14:32:10.601Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-02-08T04:51:02.525Z"),
              sizeReadable: "<value>",
              publicUrl: "https://able-reconsideration.biz/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-03-24T09:25:58.925Z"),
          modifiedAt: new Date("2023-02-03T19:50:34.797Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
        },
        url: "https://grounded-sprinkles.name",
      },
    ],
    pagination: {
      totalCount: 293016,
      maxPage: 136542,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |