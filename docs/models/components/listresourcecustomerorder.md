# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2024-11-12T18:42:06.711Z"),
      modifiedAt: new Date("2025-12-11T03:53:45.945Z"),
      id: "<value>",
      status: "refunded",
      paid: true,
      subtotalAmount: 225265,
      discountAmount: 265407,
      netAmount: 197432,
      amount: 776832,
      taxAmount: 496800,
      totalAmount: 113597,
      refundedAmount: 873718,
      refundedTaxAmount: 395697,
      currency: "Metical",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2025-12-04T04:19:44.915Z"),
        modifiedAt: new Date("2024-10-01T15:03:40.978Z"),
        id: "<value>",
        name: "<value>",
        description: "defiantly vice what well for anti powerfully",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-11-08T11:19:47.753Z"),
            modifiedAt: new Date("2023-10-04T00:53:50.240Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 590325,
            maximumAmount: 489133,
            presetAmount: 491716,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-06-01T03:35:11.920Z"),
            modifiedAt: new Date("2023-06-16T15:19:22.874Z"),
            id: "<value>",
            type: "license_keys",
            description: "rich aboard positively whether unexpectedly",
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
            path: "/net",
            mimeType: "<value>",
            size: 888940,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-11-21T05:27:14.477Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-02-15T07:26:21.630Z"),
            sizeReadable: "<value>",
            publicUrl: "https://authentic-ignorance.name/",
          },
        ],
        organization: {
          createdAt: new Date("2024-01-03T09:53:22.412Z"),
          modifiedAt: new Date("2025-11-10T04:27:38.343Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://yellowish-sermon.name",
          email: "Mabelle.Jakubowski49@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "x",
              url: "https://known-baritone.name",
            },
          ],
          detailsSubmittedAt: new Date("2023-05-07T00:58:07.143Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Hickle, Spencer and Brakus",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 877781,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 658874,
          profileSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2024-10-16T01:08:36.559Z"),
        modifiedAt: new Date("2024-11-14T14:40:11.332Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 659114,
      },
      subscription: {
        createdAt: new Date("2024-12-06T11:34:56.016Z"),
        modifiedAt: new Date("2025-06-18T05:00:51.297Z"),
        id: "<value>",
        amount: 20559,
        currency: "CFP Franc",
        recurringInterval: "month",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2024-06-20T14:53:55.894Z"),
        currentPeriodEnd: new Date("2025-10-27T13:33:53.166Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-10-04T02:51:01.618Z"),
        startedAt: new Date("2025-06-15T05:16:58.669Z"),
        endsAt: new Date("2023-09-02T16:34:40.356Z"),
        endedAt: new Date("2023-11-10T10:11:55.405Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "unused",
        customerCancellationComment: "<value>",
        priceId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2024-12-15T19:44:40.318Z"),
          modifiedAt: new Date("2023-09-27T13:10:46.158Z"),
          id: "<value>",
          label: "<value>",
          amount: 869122,
          taxAmount: 904135,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 634915,
    maxPage: 984631,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |