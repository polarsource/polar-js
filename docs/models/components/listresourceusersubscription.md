# ListResourceUserSubscription

## Example Usage

```typescript
import { ListResourceUserSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceUserSubscription = {
  items: [
    {
      createdAt: new Date("2024-04-22T02:58:17.524Z"),
      modifiedAt: new Date("2022-12-18T13:17:08.954Z"),
      id: "<value>",
      amount: 559209,
      currency: "Zloty",
      recurringInterval: "month",
      status: "unpaid",
      currentPeriodStart: new Date("2023-05-10T13:43:53.738Z"),
      currentPeriodEnd: new Date("2024-12-09T17:05:31.658Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-07-27T18:33:03.482Z"),
      endedAt: new Date("2023-06-15T05:10:45.704Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      checkoutId: "<value>",
      product: {
        createdAt: new Date("2022-07-01T18:36:52.222Z"),
        modifiedAt: new Date("2022-01-12T03:47:46.867Z"),
        id: "<value>",
        name: "<value>",
        description: "pleasing overconfidently why frequent",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-01-09T23:21:30.384Z"),
            modifiedAt: new Date("2022-07-11T14:54:03.454Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 936059,
            maximumAmount: 29435,
            presetAmount: 100976,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-10-22T16:34:22.700Z"),
            modifiedAt: new Date("2022-12-02T08:07:08.018Z"),
            id: "<value>",
            description: "sans jaggedly like majestically because",
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
            path: "/usr/libexec",
            mimeType: "<value>",
            size: 256742,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-08-14T11:19:43.984Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-06-08T06:27:42.005Z"),
            sizeReadable: "<value>",
            publicUrl: "https://major-waist.info",
          },
        ],
      },
      price: {
        createdAt: new Date("2024-03-26T00:46:41.552Z"),
        modifiedAt: new Date("2023-04-25T01:39:48.783Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 418788,
        recurringInterval: "month",
      },
    },
  ],
  pagination: {
    totalCount: 305278,
    maxPage: 860383,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.UserSubscription](../../models/components/usersubscription.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |