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
          "key": 775587,
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
                createdAt: new Date("2025-02-09T22:12:43.257Z"),
                modifiedAt: new Date("2024-05-18T10:19:46.071Z"),
                id: "<value>",
                type: "meter_credit",
                description: "utter only pish annually",
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
                size: 23811,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-05-12T08:05:31.380Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-02-28T01:46:25.032Z"),
                sizeReadable: "<value>",
                publicUrl: "https://far-flung-gray.biz",
              },
            ],
          },
        ],
        discount: {
          duration: "forever",
          type: "percentage",
          amount: 360795,
          currency: "Euro",
          createdAt: new Date("2024-11-22T06:38:49.384Z"),
          modifiedAt: new Date("2024-12-24T16:32:29.212Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-09-20T14:46:45.403Z"),
          endsAt: new Date("2024-03-27T20:41:43.368Z"),
          maxRedemptions: 669723,
          redemptionsCount: 857803,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2024-09-09T02:42:16.204Z"),
          modifiedAt: new Date("2023-08-14T10:34:16.555Z"),
          id: "<value>",
          name: "<value>",
          description: "busy meh goodwill restfully",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-06-12T13:45:39.917Z"),
              modifiedAt: new Date("2023-04-11T07:19:28.505Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 103292,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-04-16T15:19:44.782Z"),
              modifiedAt: new Date("2023-08-17T05:49:57.407Z"),
              id: "<value>",
              type: "discord",
              description: "cruelty frizzy possession",
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
              path: "/sys",
              mimeType: "<value>",
              size: 712614,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-12-22T00:40:27.003Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-02-22T16:33:10.371Z"),
              sizeReadable: "<value>",
              publicUrl: "https://shocked-rawhide.org",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-09-03T23:42:52.175Z"),
          modifiedAt: new Date("2024-05-28T19:57:00.839Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 379385,
          maximumAmount: 270703,
          presetAmount: 83363,
        },
        url: "https://low-popularity.org",
      },
    ],
    pagination: {
      totalCount: 642406,
      maxPage: 943121,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |