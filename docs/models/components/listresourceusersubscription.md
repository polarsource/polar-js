# ListResourceUserSubscription

## Example Usage

```typescript
import { ListResourceUserSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceUserSubscription = {
  items: [
    {
      createdAt: new Date("2023-02-14T08:50:01.379Z"),
      modifiedAt: new Date("2023-07-20T03:21:03.853Z"),
      id: "<value>",
      amount: 889060,
      currency: "Solomon Islands Dollar",
      recurringInterval: "month",
      status: "past_due",
      currentPeriodStart: new Date("2024-10-04T18:43:22.193Z"),
      currentPeriodEnd: new Date("2024-02-18T15:49:41.873Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-07-13T23:57:36.282Z"),
      endedAt: new Date("2023-06-14T22:27:38.966Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      product: {
        createdAt: new Date("2022-06-03T18:52:21.127Z"),
        modifiedAt: new Date("2023-01-29T11:00:42.485Z"),
        id: "<value>",
        name: "<value>",
        description: "Upgradable upward-trending database",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-11-21T15:56:29.957Z"),
            modifiedAt: new Date("2022-06-11T23:45:58.648Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            priceAmount: 256916,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-09-12T06:16:21.252Z"),
            modifiedAt: new Date("2022-07-23T07:51:45.995Z"),
            id: "<value>",
            type: "discord",
            description: "Function-based dynamic hierarchy",
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
            path: "/opt/sbin",
            mimeType: "<value>",
            size: 357347,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-09-29T19:23:28.113Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-03-12T23:47:56.593Z"),
            sizeReadable: "<value>",
            publicUrl: "<value>",
          },
        ],
      },
      price: {
        createdAt: new Date("2023-09-26T04:04:07.310Z"),
        modifiedAt: new Date("2024-05-03T23:32:08.929Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 795591,
      },
    },
  ],
  pagination: {
    totalCount: 344530,
    maxPage: 770873,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.UserSubscription](../../models/components/usersubscription.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |