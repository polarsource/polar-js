# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-07-28T01:58:57.741Z"),
        modifiedAt: new Date("2023-02-24T03:14:59.448Z"),
        id: "<value>",
        metadata: {
          "key": 578449,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://confused-mouser.name/",
        label: "<value>",
        allowDiscountCodes: false,
        discountId: "<value>",
        organizationId: "<value>",
        products: [
          {
            createdAt: new Date("2023-02-03T06:58:47.877Z"),
            modifiedAt: new Date("2024-07-19T14:01:53.345Z"),
            id: "<value>",
            name: "<value>",
            description: "ew enchanted boohoo",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2025-05-03T09:22:14.264Z"),
                modifiedAt: new Date("2023-11-15T22:51:34.275Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                type: "one_time",
                recurringInterval: "month",
              },
            ],
            benefits: [
              {
                createdAt: new Date("2024-07-16T00:09:25.695Z"),
                modifiedAt: new Date("2025-06-26T02:00:56.651Z"),
                id: "<value>",
                type: "github_repository",
                description:
                  "forearm gah provided properly provided stint eek until round",
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
                path: "/rescue",
                mimeType: "<value>",
                size: 599107,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2025-02-11T10:33:11.446Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-07-17T13:20:20.864Z"),
                sizeReadable: "<value>",
                publicUrl: "https://faint-cake.org",
              },
            ],
          },
        ],
        discount: {
          duration: "repeating",
          durationInMonths: 723059,
          type: "percentage",
          amount: 611145,
          currency: "Libyan Dinar",
          createdAt: new Date("2024-03-17T00:43:09.766Z"),
          modifiedAt: new Date("2023-01-26T13:28:29.232Z"),
          id: "<value>",
          metadata: {
            "key": 547083,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-02-28T08:58:51.789Z"),
          endsAt: new Date("2023-09-26T19:08:10.033Z"),
          maxRedemptions: 456609,
          redemptionsCount: 729948,
          organizationId: "<value>",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2025-07-21T04:58:32.121Z"),
          modifiedAt: new Date("2024-07-28T02:04:35.206Z"),
          id: "<value>",
          name: "<value>",
          description: "sniff deduct effector siege instructive accompany more",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-05-17T20:33:59.866Z"),
              modifiedAt: new Date("2024-10-25T00:19:43.987Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-07-19T10:51:53.100Z"),
              modifiedAt: new Date("2024-08-04T10:04:31.915Z"),
              id: "<value>",
              type: "discord",
              description: "emotional noon provided whoa fooey",
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
              path: "/usr/share",
              mimeType: "<value>",
              size: 524269,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-03-24T23:13:29.887Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-08-15T07:55:15.803Z"),
              sizeReadable: "<value>",
              publicUrl: "https://whimsical-accountability.info/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-01-06T07:16:09.340Z"),
          modifiedAt: new Date("2024-06-28T09:14:44.185Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 779613,
          maximumAmount: 320897,
          presetAmount: 48957,
        },
        url: "https://untrue-morning.biz",
      },
    ],
    pagination: {
      totalCount: 265645,
      maxPage: 358821,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |