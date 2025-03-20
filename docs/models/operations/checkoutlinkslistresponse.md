# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-05T18:42:13.785Z"),
        modifiedAt: new Date("2024-05-11T08:23:35.719Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://trusting-creature.info",
        label: "<value>",
        allowDiscountCodes: false,
        discountId: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2024-02-09T06:07:31.660Z"),
            modifiedAt: new Date("2023-12-16T01:31:03.204Z"),
            id: "<value>",
            name: "<value>",
            description: "catch while not near plus",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2025-07-21T04:58:32.121Z"),
                modifiedAt: new Date("2024-07-28T02:04:35.206Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                recurringInterval: "year",
              },
            ],
            benefits: [
              {
                createdAt: new Date("2023-11-01T12:11:22.808Z"),
                modifiedAt: new Date("2024-05-12T06:41:43.348Z"),
                id: "<value>",
                type: "github_repository",
                description: "but enroll beep waterlogged",
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
                path: "/srv",
                mimeType: "<value>",
                size: 650820,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-04-11T21:20:03.730Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-05-29T17:09:46.819Z"),
                sizeReadable: "<value>",
                publicUrl: "https://separate-larva.name/",
              },
            ],
          },
        ],
        discount: {
          duration: "once",
          durationInMonths: 553429,
          type: "percentage",
          basisPoints: 969802,
          createdAt: new Date("2025-07-17T03:26:21.549Z"),
          modifiedAt: new Date("2025-05-01T07:54:25.841Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-06-24T03:54:04.496Z"),
          endsAt: new Date("2024-11-30T18:56:12.156Z"),
          maxRedemptions: 949695,
          redemptionsCount: 993936,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2025-05-17T20:33:59.866Z"),
          modifiedAt: new Date("2024-10-25T00:19:43.987Z"),
          id: "<value>",
          name: "<value>",
          description:
            "distant fast stake hoof about or especially bashfully upbeat independence",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-03-26T19:04:41.729Z"),
              modifiedAt: new Date("2023-09-24T16:09:38.127Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 18593,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-03-17T07:09:44.048Z"),
              modifiedAt: new Date("2023-09-29T18:10:57.735Z"),
              id: "<value>",
              type: "license_keys",
              description: "aw handsome so",
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
              path: "/home/user",
              mimeType: "<value>",
              size: 946799,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-02-03T03:30:35.812Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-04-16T03:14:15.692Z"),
              sizeReadable: "<value>",
              publicUrl: "https://tricky-subsidy.com/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-06-23T15:03:40.986Z"),
          modifiedAt: new Date("2024-03-02T07:36:35.852Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
        },
        url: "https://worst-bandwidth.net",
      },
    ],
    pagination: {
      totalCount: 417831,
      maxPage: 375180,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |