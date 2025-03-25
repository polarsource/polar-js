# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2025-12-28T07:19:49.051Z"),
      modifiedAt: new Date("2024-09-14T18:23:33.106Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://cavernous-haversack.org/",
      label: "<value>",
      allowDiscountCodes: false,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2024-03-03T15:48:47.598Z"),
          modifiedAt: new Date("2023-02-26T16:47:59.921Z"),
          id: "<value>",
          name: "<value>",
          description: "if jam-packed tuxedo dreary",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-05-13T02:15:57.626Z"),
              modifiedAt: new Date("2025-07-25T14:24:23.868Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 25791,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-08-15T00:21:25.165Z"),
              modifiedAt: new Date("2023-06-18T13:38:20.506Z"),
              id: "<value>",
              type: "github_repository",
              description:
                "athwart meanwhile mid tousle around gorgeous considering culture good-natured",
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
              path: "/etc/ppp",
              mimeType: "<value>",
              size: 606817,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-05-25T16:14:36.352Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-07-26T23:09:04.804Z"),
              sizeReadable: "<value>",
              publicUrl: "https://terrible-dash.info/",
            },
          ],
        },
      ],
      discount: {
        duration: "repeating",
        type: "fixed",
        basisPoints: 499455,
        createdAt: new Date("2023-02-02T09:52:45.117Z"),
        modifiedAt: new Date("2024-01-13T01:15:41.261Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-03-03T12:22:36.931Z"),
        endsAt: new Date("2023-11-26T18:41:57.166Z"),
        maxRedemptions: 159739,
        redemptionsCount: 941731,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      productId: "<value>",
      productPriceId: "<value>",
      product: {
        createdAt: new Date("2024-04-15T11:45:01.652Z"),
        modifiedAt: new Date("2024-11-30T00:45:45.135Z"),
        id: "<value>",
        name: "<value>",
        description:
          "excepting beneath thump exasperation meh snappy gosh consequently per minus",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-12-17T11:55:53.035Z"),
            modifiedAt: new Date("2024-11-07T14:14:27.402Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 28751,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-09-25T11:24:04.477Z"),
            modifiedAt: new Date("2024-05-11T07:16:04.376Z"),
            id: "<value>",
            type: "license_keys",
            description: "circa duh politely amongst next explode blindly",
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
            path: "/etc/namedb",
            mimeType: "<value>",
            size: 587466,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-07-20T18:40:18.501Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-04-24T12:36:59.831Z"),
            sizeReadable: "<value>",
            publicUrl: "https://favorite-hawk.org",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-03-28T01:33:27.085Z"),
        modifiedAt: new Date("2024-05-04T14:22:26.737Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
      },
      url: "https://heavy-swordfish.com",
    },
  ],
  pagination: {
    totalCount: 252835,
    maxPage: 897389,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |