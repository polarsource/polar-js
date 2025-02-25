# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2025-07-30T22:25:36.191Z"),
      modifiedAt: new Date("2023-04-25T12:59:08.238Z"),
      id: "<value>",
      amount: 581340,
      taxAmount: 458572,
      currency: "Zambian Kwacha",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2025-10-23T22:09:03.351Z"),
        modifiedAt: new Date("2023-07-24T01:54:16.556Z"),
        id: "<value>",
        name: "<value>",
        description: "unto following minus",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-07-26T18:20:38.027Z"),
            modifiedAt: new Date("2025-08-31T14:58:16.646Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 378965,
            maximumAmount: 93067,
            presetAmount: 36508,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-11-04T20:15:57.653Z"),
            modifiedAt: new Date("2025-04-15T14:34:09.142Z"),
            id: "<value>",
            type: "discord",
            description: "crossly sprinkles when how",
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
            path: "/etc/periodic",
            mimeType: "<value>",
            size: 980456,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-06-18T02:36:52.418Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-01-17T15:11:03.432Z"),
            sizeReadable: "<value>",
            publicUrl: "https://dead-skean.org/",
          },
        ],
        organization: {
          createdAt: new Date("2025-08-04T14:36:30.490Z"),
          modifiedAt: new Date("2023-10-04T20:58:06.474Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://mean-saloon.org/",
          bio: "<value>",
          company: "Bartoletti, Bahringer and Murray",
          blog: "<value>",
          location: "<value>",
          email: "Lenora75@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 477640,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 508633,
          profileSettings: {},
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
        },
      },
      productPrice: {
        createdAt: new Date("2025-06-13T03:38:49.737Z"),
        modifiedAt: new Date("2023-02-23T21:20:36.645Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 551733,
        maximumAmount: 414871,
        presetAmount: 26965,
      },
      subscription: {
        createdAt: new Date("2025-07-03T02:02:56.645Z"),
        modifiedAt: new Date("2023-11-14T23:31:26.880Z"),
        id: "<value>",
        amount: 364789,
        currency: "North Korean Won",
        recurringInterval: "year",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2024-06-30T14:06:00.507Z"),
        currentPeriodEnd: new Date("2025-10-11T05:12:55.893Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-08-10T01:37:49.523Z"),
        startedAt: new Date("2024-08-26T10:02:28.026Z"),
        endsAt: new Date("2025-12-02T12:41:20.649Z"),
        endedAt: new Date("2024-06-09T19:47:10.644Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 37980,
    maxPage: 523917,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |