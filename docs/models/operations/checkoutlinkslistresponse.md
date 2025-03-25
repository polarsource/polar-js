# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-26T12:52:43.228Z"),
        modifiedAt: new Date("2025-07-12T18:48:43.069Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://rundown-bid.name/",
        label: "<value>",
        allowDiscountCodes: false,
        discountId: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2025-04-25T02:53:00.886Z"),
            modifiedAt: new Date("2024-01-05T22:05:37.319Z"),
            id: "<value>",
            name: "<value>",
            description: "sudden affectionate among honored who finally amount",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2024-12-19T19:31:23.901Z"),
                modifiedAt: new Date("2025-01-09T15:37:24.600Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "year",
                priceCurrency: "<value>",
                priceAmount: 921767,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2023-12-08T22:15:02.456Z"),
                modifiedAt: new Date("2024-04-24T01:39:17.236Z"),
                id: "<value>",
                type: "downloadables",
                description: "spectate thunderbolt scram while ah gosh",
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
                path: "/home",
                mimeType: "<value>",
                size: 457429,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2023-03-13T04:21:14.731Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-10-10T17:31:28.059Z"),
                sizeReadable: "<value>",
                publicUrl: "https://grounded-provider.info/",
              },
            ],
          },
        ],
        discount: {
          duration: "forever",
          durationInMonths: 604247,
          type: "fixed",
          amount: 82741,
          currency: "East Caribbean Dollar",
          createdAt: new Date("2023-11-12T22:46:32.535Z"),
          modifiedAt: new Date("2025-04-14T18:10:17.419Z"),
          id: "<value>",
          metadata: {
            "key": 684465,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-02-20T10:21:38.723Z"),
          endsAt: new Date("2025-01-16T08:44:36.237Z"),
          maxRedemptions: 843858,
          redemptionsCount: 763174,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2024-08-22T14:00:46.508Z"),
          modifiedAt: new Date("2023-02-10T15:18:24.208Z"),
          id: "<value>",
          name: "<value>",
          description: "at ugh because ouch huzzah as",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-12-06T07:41:37.087Z"),
              modifiedAt: new Date("2025-09-05T01:23:35.729Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 241368,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-04-09T22:14:51.563Z"),
              modifiedAt: new Date("2025-10-13T07:38:25.603Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "tempting quarrelsomely psst diagram teammate symbolise fly but pace",
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
              path: "/opt/share",
              mimeType: "<value>",
              size: 42651,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-02-16T15:16:15.959Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-09-14T04:07:38.317Z"),
              sizeReadable: "<value>",
              publicUrl: "https://wobbly-republican.info/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-06-19T18:05:51.709Z"),
          modifiedAt: new Date("2024-08-16T09:12:42.386Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 659077,
        },
        url: "https://quick-witted-teriyaki.com",
      },
    ],
    pagination: {
      totalCount: 605796,
      maxPage: 31033,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |