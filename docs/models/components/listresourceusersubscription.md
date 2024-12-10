# ListResourceUserSubscription

## Example Usage

```typescript
import { ListResourceUserSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceUserSubscription = {
  items: [
    {
      createdAt: new Date("2024-04-07T19:20:03.652Z"),
      modifiedAt: new Date("2023-09-13T03:37:18.009Z"),
      id: "<value>",
      amount: 332922,
      currency: "CFP Franc",
      recurringInterval: "year",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2022-08-11T03:22:39.673Z"),
      currentPeriodEnd: new Date("2023-01-29T10:53:12.721Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-12-30T23:58:27.812Z"),
      endedAt: new Date("2022-06-25T02:15:10.981Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      product: {
        createdAt: new Date("2024-10-24T09:34:07.674Z"),
        modifiedAt: new Date("2024-08-30T20:05:14.177Z"),
        id: "<value>",
        name: "<value>",
        description: "live spring starboard near duster ack circa zowie boohoo",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-09-09T05:06:45.170Z"),
            modifiedAt: new Date("2024-06-12T17:38:39.918Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 666863,
            maximumAmount: 603551,
            presetAmount: 681824,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-03-12T09:53:29.242Z"),
            modifiedAt: new Date("2022-04-18T04:30:42.882Z"),
            id: "<value>",
            type: "github_repository",
            description: "what over suddenly ack volunteer",
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
            path: "/dev",
            mimeType: "<value>",
            size: 761109,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-08-10T02:00:43.034Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-05-09T02:36:50.803Z"),
            sizeReadable: "<value>",
            publicUrl: "https://glaring-decision.info",
          },
        ],
        organization: {
          createdAt: new Date("2024-12-19T07:26:14.545Z"),
          modifiedAt: new Date("2023-11-25T09:57:01.792Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://worthy-dwell.net/",
          bio: "<value>",
          company: "Ryan - Nolan",
          blog: "<value>",
          location: "<value>",
          email: "Jadon3@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 879923,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 616888,
          profileSettings: {},
          featureSettings: {},
        },
      },
      price: {
        createdAt: new Date("2024-03-31T16:33:43.233Z"),
        modifiedAt: new Date("2023-02-07T00:53:43.703Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 8073,
        maximumAmount: 105518,
        presetAmount: 285340,
        recurringInterval: "month",
      },
    },
  ],
  pagination: {
    totalCount: 364325,
    maxPage: 806428,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.UserSubscription](../../models/components/usersubscription.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |