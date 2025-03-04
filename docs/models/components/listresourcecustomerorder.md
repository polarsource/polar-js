# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2024-09-09T00:03:37.019Z"),
      modifiedAt: new Date("2025-11-20T14:19:41.572Z"),
      id: "<value>",
      amount: 118154,
      taxAmount: 182269,
      currency: "Serbian Dinar",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-09-06T14:58:25.094Z"),
        modifiedAt: new Date("2024-03-31T03:18:40.389Z"),
        id: "<value>",
        name: "<value>",
        description: "around worth woot",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-10-16T19:09:53.500Z"),
            modifiedAt: new Date("2023-12-17T07:57:57.986Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 670162,
            maximumAmount: 637764,
            presetAmount: 261646,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-08-14T13:06:25.159Z"),
            modifiedAt: new Date("2025-08-01T06:03:05.754Z"),
            id: "<value>",
            type: "discord",
            description: "why repeatedly plait",
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
            path: "/home",
            mimeType: "<value>",
            size: 204565,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-06-16T07:11:59.696Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-06-14T17:40:30.188Z"),
            sizeReadable: "<value>",
            publicUrl: "https://likable-hornet.info/",
          },
        ],
        organization: {
          createdAt: new Date("2023-09-07T15:49:18.214Z"),
          modifiedAt: new Date("2023-08-28T05:51:37.779Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://raw-waist.com",
          bio: "<value>",
          company: "Runolfsson, Legros and O'Hara",
          blog: "<value>",
          location: "<value>",
          email: "Juliet7@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 973876,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 390729,
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
        createdAt: new Date("2025-10-03T01:06:50.719Z"),
        modifiedAt: new Date("2023-07-20T01:30:01.199Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 438702,
      },
      subscription: {
        createdAt: new Date("2023-07-28T05:51:28.616Z"),
        modifiedAt: new Date("2024-10-16T09:54:58.570Z"),
        id: "<value>",
        amount: 746187,
        currency: "Falkland Islands Pound",
        recurringInterval: "month",
        status: "incomplete",
        currentPeriodStart: new Date("2023-10-07T04:35:39.202Z"),
        currentPeriodEnd: new Date("2025-06-26T22:47:48.743Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-04-19T15:27:13.958Z"),
        startedAt: new Date("2023-07-31T11:43:53.522Z"),
        endsAt: new Date("2023-11-07T20:47:35.531Z"),
        endedAt: new Date("2024-01-19T12:24:53.517Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "low_quality",
        customerCancellationComment: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 539528,
    maxPage: 569477,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |