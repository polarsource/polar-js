# ListResourceUserSubscription

## Example Usage

```typescript
import { ListResourceUserSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceUserSubscription = {
  items: [
    {
      createdAt: new Date("2023-01-01T19:50:19.256Z"),
      modifiedAt: new Date("2023-07-20T18:55:51.097Z"),
      id: "<value>",
      amount: 700872,
      currency: "Lebanese Pound",
      recurringInterval: "year",
      status: "trialing",
      currentPeriodStart: new Date("2022-01-31T18:49:35.545Z"),
      currentPeriodEnd: new Date("2023-04-13T01:30:33.992Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-04-04T03:54:32.981Z"),
      endedAt: new Date("2022-12-19T23:19:10.766Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      product: {
        createdAt: new Date("2024-12-15T17:30:31.626Z"),
        modifiedAt: new Date("2024-07-28T15:50:46.966Z"),
        id: "<value>",
        name: "<value>",
        description: "quickly giving until before",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-07-06T07:18:59.972Z"),
            modifiedAt: new Date("2022-04-10T19:29:52.339Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 950706,
            maximumAmount: 732896,
            presetAmount: 518728,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-07-12T12:59:47.341Z"),
            modifiedAt: new Date("2023-04-19T15:42:37.374Z"),
            id: "<value>",
            type: "ads",
            description:
              "blissfully drat incidentally cosset storyboard noted grounded",
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
            path: "/mnt",
            mimeType: "<value>",
            size: 214506,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-03-28T00:30:26.035Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-11-17T18:41:58.866Z"),
            sizeReadable: "<value>",
            publicUrl: "https://essential-awareness.com",
          },
        ],
        organization: {
          createdAt: new Date("2024-03-20T09:23:48.962Z"),
          modifiedAt: new Date("2022-07-26T07:48:42.795Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://aged-cinder.org/",
          bio: "<value>",
          company: "Wilkinson - Cruickshank",
          blog: "<value>",
          location: "<value>",
          email: "Sandy5@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 841562,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 85797,
          profileSettings: {},
          featureSettings: {},
        },
      },
      price: {
        createdAt: new Date("2023-06-24T07:23:57.344Z"),
        modifiedAt: new Date("2023-09-15T16:42:20.598Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 679797,
    maxPage: 266727,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.UserSubscription](../../models/components/usersubscription.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |