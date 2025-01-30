# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2024-04-04T11:52:53.437Z"),
      modifiedAt: new Date("2025-01-01T05:21:21.151Z"),
      id: "<value>",
      amount: 9143,
      taxAmount: 538556,
      currency: "Pound Sterling",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-01-03T04:14:52.159Z"),
        modifiedAt: new Date("2024-04-19T19:40:49.785Z"),
        id: "<value>",
        name: "<value>",
        description: "runway schlep atomize wilted for nucleotidase",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-04-02T15:04:46.624Z"),
            modifiedAt: new Date("2023-05-15T08:58:24.746Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 574906,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-03-22T03:07:22.809Z"),
            modifiedAt: new Date("2024-05-11T13:10:25.231Z"),
            id: "<value>",
            type: "license_keys",
            description:
              "these fathom opposite physically intently briefly tough",
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
            path: "/usr/share",
            mimeType: "<value>",
            size: 186220,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-05-19T15:18:16.482Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-03-02T23:25:37.864Z"),
            sizeReadable: "<value>",
            publicUrl: "https://orange-reboot.name",
          },
        ],
        organization: {
          createdAt: new Date("2024-10-16T21:08:22.533Z"),
          modifiedAt: new Date("2023-02-10T13:48:36.795Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://sturdy-elver.net/",
          bio: "<value>",
          company: "Mann, Braun and Bergstrom",
          blog: "<value>",
          location: "<value>",
          email: "Tiana_Jones49@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 695287,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 918408,
          profileSettings: {},
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
        },
      },
      productPrice: {
        createdAt: new Date("2025-07-01T18:58:52.929Z"),
        modifiedAt: new Date("2023-07-24T16:26:37.343Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      subscription: {
        createdAt: new Date("2024-04-07T20:09:24.360Z"),
        modifiedAt: new Date("2025-06-16T22:04:20.447Z"),
        id: "<value>",
        amount: 734834,
        currency: "Pa'anga",
        recurringInterval: "month",
        status: "active",
        currentPeriodStart: new Date("2025-02-16T00:18:19.556Z"),
        currentPeriodEnd: new Date("2025-03-11T06:09:41.890Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-03-20T16:45:23.582Z"),
        startedAt: new Date("2025-02-19T06:52:44.896Z"),
        endsAt: new Date("2024-11-17T08:18:48.207Z"),
        endedAt: new Date("2024-01-18T09:48:34.643Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "missing_features",
        customerCancellationComment: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 29009,
    maxPage: 391990,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |