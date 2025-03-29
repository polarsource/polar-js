# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-03-09T18:41:33.269Z"),
        modifiedAt: new Date("2025-04-05T11:02:13.055Z"),
        id: "<value>",
        metadata: {
          "key": 229620,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://burdensome-extension.info",
        label: "<value>",
        allowDiscountCodes: false,
        discountId: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        products: [
          {
            createdAt: new Date("2023-03-24T21:36:20.596Z"),
            modifiedAt: new Date("2023-04-11T13:38:20.751Z"),
            id: "<value>",
            name: "<value>",
            description:
              "because ouch huzzah as athwart linear black-and-white",
            recurringInterval: "month",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            prices: [
              {
                createdAt: new Date("2024-11-03T22:36:44.749Z"),
                modifiedAt: new Date("2024-09-25T23:30:42.781Z"),
                id: "<value>",
                isArchived: false,
                productId: "<value>",
                type: "one_time",
                recurringInterval: "month",
                priceCurrency: "<value>",
                priceAmount: 590263,
              },
            ],
            benefits: [
              {
                createdAt: new Date("2024-08-11T23:33:26.694Z"),
                modifiedAt: new Date("2023-02-03T06:58:47.877Z"),
                id: "<value>",
                type: "github_repository",
                description: "ew enchanted boohoo",
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
                path: "/usr/ports",
                mimeType: "<value>",
                size: 953569,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2025-07-31T18:45:52.930Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2025-05-03T09:22:14.264Z"),
                sizeReadable: "<value>",
                publicUrl: "https://grounded-climb.name/",
              },
            ],
          },
        ],
        discount: {
          duration: "forever",
          durationInMonths: 823358,
          type: "fixed",
          basisPoints: 348475,
          createdAt: new Date("2023-05-20T07:17:08.284Z"),
          modifiedAt: new Date("2023-01-15T00:21:06.203Z"),
          id: "<value>",
          metadata: {
            "key": 822056,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-01-15T04:46:55.730Z"),
          endsAt: new Date("2025-06-16T14:19:23.344Z"),
          maxRedemptions: 690067,
          redemptionsCount: 439322,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        productId: "<value>",
        productPriceId: "<value>",
        product: {
          createdAt: new Date("2023-02-16T17:54:06.987Z"),
          modifiedAt: new Date("2025-02-16T15:16:15.959Z"),
          id: "<value>",
          name: "<value>",
          description: "cruel alarmed that since ah since if",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-02-11T10:33:11.446Z"),
              modifiedAt: new Date("2023-07-17T13:20:20.864Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-04-30T14:22:23.092Z"),
              modifiedAt: new Date("2025-07-19T20:57:55.786Z"),
              id: "<value>",
              type: "discord",
              description:
                "mythology moist boohoo mount unless festival putrid than fence",
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
              path: "/private/var",
              mimeType: "<value>",
              size: 638494,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-11-06T20:46:11.720Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-12-25T08:28:55.931Z"),
              sizeReadable: "<value>",
              publicUrl: "https://pertinent-yeast.org",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-12-18T03:14:52.802Z"),
          modifiedAt: new Date("2024-01-02T15:29:27.341Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
        },
        url: "https://quintessential-substitution.net/",
      },
    ],
    pagination: {
      totalCount: 225926,
      maxPage: 366503,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |