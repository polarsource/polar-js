# ListResourceUserSubscription

## Example Usage

```typescript
import { ListResourceUserSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceUserSubscription = {
  items: [
    {
      createdAt: new Date("2023-04-02T14:53:00.063Z"),
      modifiedAt: new Date("2023-08-18T16:34:38.040Z"),
      id: "<value>",
      amount: 521914,
      currency: "Rupiah",
      recurringInterval: "year",
      status: "incomplete",
      currentPeriodStart: new Date("2022-02-08T22:48:14.333Z"),
      currentPeriodEnd: new Date("2023-04-06T14:30:06.008Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-09-09T18:38:44.004Z"),
      endedAt: new Date("2022-11-01T05:11:03.107Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      checkoutId: "<value>",
      product: {
        createdAt: new Date("2022-07-08T20:25:28.116Z"),
        modifiedAt: new Date("2024-10-14T07:35:36.976Z"),
        id: "<value>",
        name: "<value>",
        description: "zowie above vivaciously wonderfully",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-12-13T15:44:37.740Z"),
            modifiedAt: new Date("2024-03-11T19:46:55.808Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            priceAmount: 199673,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-11-29T00:32:22.656Z"),
            modifiedAt: new Date("2024-12-17T20:16:52.685Z"),
            id: "<value>",
            description: "likely shocked yahoo however",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              paidArticles: false,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/local/src",
            mimeType: "<value>",
            size: 901842,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-01-21T06:06:28.878Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-11-19T05:08:45.306Z"),
            sizeReadable: "<value>",
            publicUrl: "https://hairy-pecan.biz",
          },
        ],
      },
      price: {
        createdAt: new Date("2024-10-08T20:41:24.877Z"),
        modifiedAt: new Date("2023-11-10T00:43:35.009Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 208826,
        maximumAmount: 682430,
        presetAmount: 768361,
        recurringInterval: "month",
      },
    },
  ],
  pagination: {
    totalCount: 559209,
    maxPage: 681953,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.UserSubscription](../../models/components/usersubscription.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |