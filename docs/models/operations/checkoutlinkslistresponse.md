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
        requireBillingAddress: false,
        discountId: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            metadata: {
              "key": 946577,
            },
            createdAt: new Date("2025-11-14T00:45:33.755Z"),
            modifiedAt: new Date("2023-08-10T04:49:11.109Z"),
            id: "<value>",
            name: "<value>",
            description:
              "editor airport ack tuber acclaimed hm cultivated round exploration",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2023-05-30T06:04:04.812Z"),
                modifiedAt: new Date("2023-02-17T18:17:50.207Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                type: "recurring",
                recurringInterval: "month",
                priceCurrency: "<value>",
                priceAmount: 889429,
              },
            ],
            benefits: [
              {
                id: "<value>",
                createdAt: new Date("2025-03-10T19:45:47.510Z"),
                modifiedAt: new Date("2023-12-05T12:06:08.343Z"),
                type: "meter_credit",
                description:
                  "seafood upliftingly juicy yellowish joyfully bah indelible doubtfully",
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
                size: 469920,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2025-06-05T23:42:21.333Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2025-06-06T21:07:20.168Z"),
                sizeReadable: "<value>",
                publicUrl: "https://good-natured-climb.com/",
              },
            ],
          },
        ],
        discount: {
          duration: "once",
          type: "percentage",
          basisPoints: 489905,
          createdAt: new Date("2023-09-30T05:12:41.329Z"),
          modifiedAt: new Date("2023-08-27T20:13:42.327Z"),
          id: "<value>",
          metadata: {
            "key": 983.55,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-12-01T16:09:04.896Z"),
          endsAt: new Date("2025-09-17T01:03:34.671Z"),
          maxRedemptions: 385134,
          redemptionsCount: 975713,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        url: "https://thin-amendment.com",
      },
    ],
    pagination: {
      totalCount: 29780,
      maxPage: 671239,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |