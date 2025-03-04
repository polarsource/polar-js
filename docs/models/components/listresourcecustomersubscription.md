# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2023-05-04T10:00:03.073Z"),
      modifiedAt: new Date("2023-07-10T04:52:57.046Z"),
      id: "<value>",
      amount: 165733,
      currency: "Chilean Peso",
      recurringInterval: "month",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2024-09-11T23:56:24.242Z"),
      currentPeriodEnd: new Date("2025-12-23T10:36:50.056Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-03-26T12:43:43.871Z"),
      startedAt: new Date("2025-07-16T06:38:50.927Z"),
      endsAt: new Date("2023-08-18T13:56:15.794Z"),
      endedAt: new Date("2025-10-26T23:42:10.433Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "customer_service",
      customerCancellationComment: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2023-01-30T17:42:43.078Z"),
        modifiedAt: new Date("2024-02-01T19:51:27.876Z"),
        id: "<value>",
        name: "<value>",
        description:
          "whoever cruelly brr finally dispense zealous sentimental superb er even",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-11-01T05:47:42.686Z"),
            modifiedAt: new Date("2023-11-16T09:23:24.153Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 204535,
            maximumAmount: 206932,
            presetAmount: 458569,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-05-21T17:17:39.998Z"),
            modifiedAt: new Date("2023-05-01T12:37:32.096Z"),
            id: "<value>",
            type: "github_repository",
            description: "collaborate pfft nor",
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
            path: "/Library",
            mimeType: "<value>",
            size: 558907,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-06-30T11:25:29.230Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-03-14T19:05:41.928Z"),
            sizeReadable: "<value>",
            publicUrl: "https://vivid-marathon.biz/",
          },
        ],
        organization: {
          createdAt: new Date("2024-01-16T11:15:45.831Z"),
          modifiedAt: new Date("2024-07-03T00:47:42.245Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://animated-programme.net/",
          bio: "<value>",
          company: "Stracke LLC",
          blog: "<value>",
          location: "<value>",
          email: "Tremaine.Hagenes@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 7453,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 737905,
          profileSettings: {},
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
        },
      },
      price: {
        createdAt: new Date("2023-01-17T07:46:40.038Z"),
        modifiedAt: new Date("2025-08-13T20:24:17.767Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 699166,
        maximumAmount: 60670,
        presetAmount: 695717,
      },
    },
  ],
  pagination: {
    totalCount: 84000,
    maxPage: 320788,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |