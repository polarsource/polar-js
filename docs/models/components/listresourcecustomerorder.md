# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2025-12-04T04:19:44.915Z"),
      modifiedAt: new Date("2024-10-01T15:03:40.978Z"),
      id: "<value>",
      status: "refunded",
      paid: true,
      subtotalAmount: 907834,
      discountAmount: 895473,
      netAmount: 455838,
      amount: 682564,
      taxAmount: 677807,
      totalAmount: 296454,
      refundedAmount: 163285,
      refundedTaxAmount: 568794,
      currency: "Kwanza",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2025-06-20T21:24:41.888Z"),
        modifiedAt: new Date("2025-04-13T15:31:57.389Z"),
        id: "<value>",
        name: "<value>",
        description: "quarterly thankfully oddly yum yet dislocate an ack",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-02-04T17:41:38.707Z"),
            modifiedAt: new Date("2025-04-11T05:49:26.732Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-08-28T00:24:16.627Z"),
            modifiedAt: new Date("2023-01-24T23:25:23.825Z"),
            id: "<value>",
            type: "downloadables",
            description: "unless retention pish brr though",
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
            size: 405705,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-06-24T23:14:48.977Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-06-26T03:55:38.342Z"),
            sizeReadable: "<value>",
            publicUrl: "https://alert-marksman.info/",
          },
        ],
        organization: {
          createdAt: new Date("2023-03-11T22:36:19.945Z"),
          modifiedAt: new Date("2024-07-21T07:02:26.933Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://yearly-relative.info/",
          email: "Bartholome.Okuneva@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "youtube",
              url: "https://quick-witted-papa.net",
            },
          ],
          detailsSubmittedAt: new Date("2023-01-23T12:47:00.295Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Graham Inc",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 940297,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 918904,
          profileSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2023-11-10T10:11:55.405Z"),
        modifiedAt: new Date("2025-06-27T14:30:01.915Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 869122,
      },
      subscription: {
        createdAt: new Date("2025-09-17T22:21:07.335Z"),
        modifiedAt: new Date("2024-11-26T20:48:32.076Z"),
        id: "<value>",
        amount: 984631,
        currency: "Kyat",
        recurringInterval: "year",
        status: "trialing",
        currentPeriodStart: new Date("2025-11-09T11:10:59.812Z"),
        currentPeriodEnd: new Date("2024-02-01T21:53:59.428Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-04-20T02:33:09.911Z"),
        startedAt: new Date("2023-06-20T00:38:57.696Z"),
        endsAt: new Date("2024-11-25T06:19:18.187Z"),
        endedAt: new Date("2025-04-09T20:59:12.712Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "customer_service",
        customerCancellationComment: "<value>",
        priceId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2024-05-29T14:03:31.641Z"),
          modifiedAt: new Date("2025-05-09T11:46:57.173Z"),
          id: "<value>",
          label: "<value>",
          amount: 526984,
          taxAmount: 418870,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 176942,
    maxPage: 113639,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |