# ListResourceUserSubscription

## Example Usage

```typescript
import { ListResourceUserSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceUserSubscription = {
  items: [
    {
      createdAt: new Date("2024-08-29T10:57:12.925Z"),
      modifiedAt: new Date("2024-01-03T01:33:43.374Z"),
      id: "<value>",
      amount: 422444,
      currency: "Ethiopian Birr",
      recurringInterval: "month",
      status: "past_due",
      currentPeriodStart: new Date("2023-03-26T14:55:05.183Z"),
      currentPeriodEnd: new Date("2024-03-25T08:28:26.995Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-09-20T19:47:52.089Z"),
      endedAt: new Date("2022-11-21T00:49:05.762Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      checkoutId: "<value>",
      product: {
        createdAt: new Date("2023-12-14T06:58:44.385Z"),
        modifiedAt: new Date("2023-04-09T07:17:04.384Z"),
        id: "<value>",
        name: "<value>",
        description: "into accompany ack",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-07-05T22:22:10.952Z"),
            modifiedAt: new Date("2022-02-17T14:46:59.933Z"),
            id: "<value>",
            isArchived: false,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-07-02T02:28:44.314Z"),
            modifiedAt: new Date("2023-05-06T20:10:59.426Z"),
            id: "<value>",
            type: "custom",
            description:
              "overstay consequently anenst when inasmuch ectoderm where oof",
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
            path: "/usr/libexec",
            mimeType: "<value>",
            size: 565559,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-03-28T02:30:19.833Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-05-29T06:59:46.200Z"),
            sizeReadable: "<value>",
            publicUrl: "https://apt-planula.com/",
          },
        ],
      },
      price: {
        createdAt: new Date("2024-09-03T20:35:51.119Z"),
        modifiedAt: new Date("2023-10-30T20:42:04.012Z"),
        id: "<value>",
        isArchived: false,
        recurringInterval: "month",
      },
    },
  ],
  pagination: {
    totalCount: 474056,
    maxPage: 667620,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.UserSubscription](../../models/components/usersubscription.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |