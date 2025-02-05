# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2024-04-07T18:37:14.280Z"),
      modifiedAt: new Date("2024-12-04T06:57:20.808Z"),
      id: "<value>",
      amount: 496702,
      currency: "Armenian Dram",
      recurringInterval: "year",
      status: "unpaid",
      currentPeriodStart: new Date("2024-10-19T06:21:31.750Z"),
      currentPeriodEnd: new Date("2024-09-28T03:10:30.785Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-07-04T11:41:05.814Z"),
      startedAt: new Date("2025-07-01T18:58:52.929Z"),
      endsAt: new Date("2023-07-24T16:26:37.343Z"),
      endedAt: new Date("2024-04-07T20:09:24.360Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "unused",
      customerCancellationComment: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2025-03-16T09:04:21.592Z"),
        modifiedAt: new Date("2025-07-14T10:46:58.301Z"),
        id: "<value>",
        name: "<value>",
        description: "by amongst amid before",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-10-30T16:04:35.456Z"),
            modifiedAt: new Date("2024-12-30T18:24:30.633Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 270530,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-03-30T12:54:31.192Z"),
            modifiedAt: new Date("2023-10-01T15:47:39.560Z"),
            id: "<value>",
            type: "ads",
            description:
              "apud hefty bakeware why carefree dependable squeaky freely",
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
            path: "/usr/bin",
            mimeType: "<value>",
            size: 156405,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-07-13T10:03:43.619Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-08-01T05:59:09.495Z"),
            sizeReadable: "<value>",
            publicUrl: "https://elastic-unique.biz",
          },
        ],
        organization: {
          createdAt: new Date("2023-12-05T15:57:48.116Z"),
          modifiedAt: new Date("2024-04-29T05:57:00.820Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://last-cd.org",
          bio: "<value>",
          company: "Thompson - Senger",
          blog: "<value>",
          location: "<value>",
          email: "Emanuel_Becker15@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 230393,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 278619,
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
        createdAt: new Date("2024-12-14T03:39:36.370Z"),
        modifiedAt: new Date("2024-12-04T16:26:10.535Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 855156,
        maximumAmount: 36726,
        presetAmount: 557712,
      },
    },
  ],
  pagination: {
    totalCount: 385941,
    maxPage: 789265,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |