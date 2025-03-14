# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2024-09-06T14:58:25.094Z"),
      modifiedAt: new Date("2024-03-31T03:18:40.389Z"),
      id: "<value>",
      subtotalAmount: 112155,
      discountAmount: 583960,
      netAmount: 441445,
      amount: 671066,
      taxAmount: 300422,
      totalAmount: 402510,
      refundedAmount: 308016,
      refundedTaxAmount: 200932,
      currency: "Liberian Dollar",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2025-06-27T17:39:57.169Z"),
        modifiedAt: new Date("2023-02-07T17:42:25.899Z"),
        id: "<value>",
        name: "<value>",
        description: "accidentally fatherly aw whoa see sweet",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-07-24T03:40:16.074Z"),
            modifiedAt: new Date("2023-08-13T04:52:57.760Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 817278,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-03-21T22:06:52.162Z"),
            modifiedAt: new Date("2024-05-27T06:39:03.949Z"),
            id: "<value>",
            type: "github_repository",
            description: "up wobbly what boohoo till so",
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
            size: 695515,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-09-27T09:38:02.312Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-06-22T15:02:43.515Z"),
            sizeReadable: "<value>",
            publicUrl: "https://superior-accountability.com",
          },
        ],
        organization: {
          createdAt: new Date("2024-06-19T18:06:49.644Z"),
          modifiedAt: new Date("2025-07-07T19:41:40.406Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://diligent-sideboard.info",
          email: "Emerson2@yahoo.com",
          website: "<value>",
          socials: [
            {
              platform: "instagram",
              url: "https://sturdy-steak.biz/",
            },
          ],
          detailsSubmittedAt: new Date("2025-01-18T07:26:54.119Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Ernser Group",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 964786,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 34675,
          profileSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2024-01-01T21:33:09.750Z"),
        modifiedAt: new Date("2023-09-24T08:14:03.791Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 650540,
        maximumAmount: 999795,
        presetAmount: 837802,
      },
      subscription: {
        createdAt: new Date("2024-04-09T09:28:04.302Z"),
        modifiedAt: new Date("2025-01-17T03:28:04.444Z"),
        id: "<value>",
        amount: 588469,
        currency: "Balboa",
        recurringInterval: "month",
        status: "active",
        currentPeriodStart: new Date("2023-03-25T18:54:20.052Z"),
        currentPeriodEnd: new Date("2023-09-12T06:10:57.363Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-03-14T02:44:36.501Z"),
        startedAt: new Date("2023-06-21T18:31:02.392Z"),
        endsAt: new Date("2023-06-24T19:09:59.837Z"),
        endedAt: new Date("2023-07-15T09:20:19.722Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_complex",
        customerCancellationComment: "<value>",
        priceId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2024-05-10T20:26:56.364Z"),
          modifiedAt: new Date("2024-11-12T18:42:06.711Z"),
          id: "<value>",
          label: "<value>",
          amount: 980988,
          taxAmount: 606981,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 225265,
    maxPage: 265407,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |