# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-12T09:43:43.520Z"),
        modifiedAt: new Date("2023-05-04T16:20:22.517Z"),
        id: "<value>",
        metadata: {
          "key": 524360,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://clueless-amnesty.com/",
        label: "<value>",
        allowDiscountCodes: false,
        discountId: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2023-05-04T08:17:46.684Z"),
            modifiedAt: new Date("2023-01-31T20:16:34.095Z"),
            id: "<value>",
            name: "<value>",
            description: "gah kinase overstay chasuble fond hence duh under",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2025-04-27T21:03:32.009Z"),
                modifiedAt: new Date("2025-09-03T08:24:49.706Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "year",
              },
            ],
            benefits: [
              {
                createdAt: new Date("2023-12-02T22:50:28.892Z"),
                modifiedAt: new Date("2024-08-18T01:08:38.338Z"),
                id: "<value>",
                type: "github_repository",
                description: "black sizzling as gloom",
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
                path: "/usr/bin",
                mimeType: "<value>",
                size: 306656,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2025-05-07T01:27:41.869Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-05-29T05:39:46.656Z"),
                sizeReadable: "<value>",
                publicUrl: "https://torn-suv.info",
              },
            ],
          },
        ],
        discount: {
          duration: "repeating",
          durationInMonths: 180725,
          type: "fixed",
          amount: 65863,
          currency: "Ethiopian Birr",
          createdAt: new Date("2023-07-31T07:22:42.631Z"),
          modifiedAt: new Date("2025-10-16T06:12:38.743Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-10-26T10:45:59.169Z"),
          endsAt: new Date("2023-10-19T11:10:35.066Z"),
          maxRedemptions: 210450,
          redemptionsCount: 569799,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2024-11-28T12:00:31.762Z"),
          modifiedAt: new Date("2025-10-21T00:16:38.642Z"),
          id: "<value>",
          name: "<value>",
          description: "meh ouch furthermore which deform confound the",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-02-16T06:49:59.233Z"),
              modifiedAt: new Date("2024-08-17T22:48:03.415Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 736037,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-02-14T07:01:21.736Z"),
              modifiedAt: new Date("2023-06-29T23:12:14.451Z"),
              id: "<value>",
              type: "github_repository",
              description: "afore homeschool beautifully gah oof amidst pro",
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
              path: "/mnt",
              mimeType: "<value>",
              size: 594031,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-08-31T13:57:01.327Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-03-24T13:54:51.732Z"),
              sizeReadable: "<value>",
              publicUrl: "https://total-masterpiece.com/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-12-22T04:25:05.928Z"),
          modifiedAt: new Date("2023-09-30T15:08:58.341Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 58999,
          maximumAmount: 569731,
          presetAmount: 549314,
        },
        url: "https://personal-coordination.name",
      },
    ],
    pagination: {
      totalCount: 761400,
      maxPage: 17920,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |