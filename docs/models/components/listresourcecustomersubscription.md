# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2024-08-05T09:35:38.556Z"),
      modifiedAt: new Date("2025-12-29T19:44:24.118Z"),
      id: "<value>",
      amount: 895939,
      currency: "Zambian Kwacha",
      recurringInterval: "month",
      status: "active",
      currentPeriodStart: new Date("2024-05-11T06:37:59.391Z"),
      currentPeriodEnd: new Date("2025-02-07T20:02:50.033Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-03-02T22:52:48.220Z"),
      startedAt: new Date("2024-04-03T12:26:13.360Z"),
      endsAt: new Date("2024-07-31T06:01:27.827Z"),
      endedAt: new Date("2024-05-25T08:30:10.056Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "unused",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-06-25T20:58:19.998Z"),
        modifiedAt: new Date("2025-01-13T03:01:55.717Z"),
        id: "<value>",
        name: "<value>",
        description:
          "er even jovially armchair collaborate pfft nor since remark",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-04-10T01:39:52.504Z"),
            modifiedAt: new Date("2025-10-22T20:05:01.882Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-05-11T09:25:22.123Z"),
            modifiedAt: new Date("2023-02-13T14:07:36.704Z"),
            id: "<value>",
            type: "discord",
            description: "tighten gracefully pfft",
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
            size: 174942,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-12-05T00:00:18.378Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-09-05T05:45:56.563Z"),
            sizeReadable: "<value>",
            publicUrl: "https://near-taro.com",
          },
        ],
        organization: {
          createdAt: new Date("2023-07-27T10:55:02.173Z"),
          modifiedAt: new Date("2025-04-19T19:23:02.816Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://black-and-white-pressure.com/",
          email: "Joan41@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "instagram",
              url: "https://optimal-sightseeing.name",
            },
          ],
          detailsSubmittedAt: new Date("2024-02-01T09:53:39.231Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Barrows, D'Amore and Murphy",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 743422,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 852356,
          profileSettings: {},
        },
      },
      price: {
        createdAt: new Date("2025-10-05T03:54:29.465Z"),
        modifiedAt: new Date("2024-04-06T08:26:53.676Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        unitAmount: 928743,
        includedUnits: 997164,
        capAmount: 734579,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
      prices: [
        {
          createdAt: new Date("2023-02-14T21:08:31.136Z"),
          modifiedAt: new Date("2024-03-25T08:40:52.618Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 514627,
    maxPage: 224876,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |