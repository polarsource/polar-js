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
                minimumAmount: 889429,
                maximumAmount: 729766,
                presetAmount: 308854,
              },
            ],
            benefits: [
              {
                id: "<value>",
                createdAt: new Date("2025-08-06T19:15:58.323Z"),
                modifiedAt: new Date("2025-02-09T22:12:43.257Z"),
                type: "github_repository",
                description:
                  "portly brr hollow accidentally disk dramatize tinted institute eek along",
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
                path: "/tmp",
                mimeType: "<value>",
                size: 903325,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-02-27T02:33:19.115Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2025-12-05T09:08:53.432Z"),
                sizeReadable: "<value>",
                publicUrl: "https://thin-amendment.com",
              },
            ],
          },
        ],
        discount: {
          duration: "repeating",
          type: "percentage",
          amount: 492314,
          currency: "Guyana Dollar",
          createdAt: new Date("2024-06-12T13:45:39.917Z"),
          modifiedAt: new Date("2023-04-11T07:19:28.505Z"),
          id: "<value>",
          metadata: {
            "key": 1032.92,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-04-16T15:19:44.782Z"),
          endsAt: new Date("2023-08-17T05:49:57.407Z"),
          maxRedemptions: 201786,
          redemptionsCount: 63321,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        url: "https://unaware-carboxyl.biz",
      },
    ],
    pagination: {
      totalCount: 916011,
      maxPage: 596091,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |