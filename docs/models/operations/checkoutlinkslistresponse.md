# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-05-05T10:12:38.655Z"),
        modifiedAt: new Date("2024-09-02T20:24:49.751Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://excited-joy.biz/",
        label: "<value>",
        allowDiscountCodes: false,
        discountId: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2025-09-02T04:49:10.939Z"),
            modifiedAt: new Date("2023-11-23T07:21:50.293Z"),
            id: "<value>",
            name: "<value>",
            description:
              "before milky loosely mortally whose casket mutate misjudge puritan",
            recurringInterval: "year",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2023-01-10T01:45:38.585Z"),
                modifiedAt: new Date("2024-08-29T13:23:07.720Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                type: "recurring",
                recurringInterval: "year",
              },
            ],
            benefits: [
              {
                createdAt: new Date("2025-07-17T03:26:21.549Z"),
                modifiedAt: new Date("2025-05-01T07:54:25.841Z"),
                id: "<value>",
                type: "discord",
                description: "tasty in nor trolley cleverly cleverly",
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
                path: "/bin",
                mimeType: "<value>",
                size: 688024,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2025-10-24T05:07:27.834Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-08-20T12:45:04.998Z"),
                sizeReadable: "<value>",
                publicUrl: "https://monstrous-beret.org",
              },
            ],
          },
        ],
        discount: {
          duration: "repeating",
          durationInMonths: 7153,
          type: "fixed",
          amount: 204674,
          currency: "Lek",
          createdAt: new Date("2024-01-06T07:16:09.340Z"),
          modifiedAt: new Date("2024-06-28T09:14:44.185Z"),
          id: "<value>",
          metadata: {
            "key": 779613,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-12-18T16:53:07.346Z"),
          endsAt: new Date("2023-02-23T15:46:03.693Z"),
          maxRedemptions: 637470,
          redemptionsCount: 908619,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2024-10-05T15:21:22.324Z"),
          modifiedAt: new Date("2023-09-17T12:32:09.121Z"),
          id: "<value>",
          name: "<value>",
          description: "ravage devastation oh aw handsome",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-09-20T08:07:26.391Z"),
              modifiedAt: new Date("2023-12-02T22:50:28.892Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-08-08T20:48:50.504Z"),
              modifiedAt: new Date("2025-11-03T16:35:05.103Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "sleet suspiciously certainly search whenever whereas poor meh ouch",
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
              path: "/usr/lib",
              mimeType: "<value>",
              size: 729263,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-11-12T23:00:47.114Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-09-28T17:00:32.112Z"),
              sizeReadable: "<value>",
              publicUrl: "https://dependent-dead.org/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-11-22T06:39:10.655Z"),
          modifiedAt: new Date("2023-02-26T21:41:46.341Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
        },
        url: "https://near-divine.com",
      },
    ],
    pagination: {
      totalCount: 655937,
      maxPage: 711278,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |