# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2024-12-05T11:25:38.185Z"),
      modifiedAt: new Date("2025-10-29T13:21:33.515Z"),
      id: "<value>",
      status: "partially_refunded",
      paid: true,
      subtotalAmount: 308664,
      discountAmount: 754148,
      netAmount: 121606,
      amount: 506349,
      taxAmount: 908773,
      totalAmount: 524620,
      refundedAmount: 946712,
      refundedTaxAmount: 381771,
      currency: "Moroccan Dirham",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-09-16T04:00:31.324Z"),
        modifiedAt: new Date("2025-11-18T16:55:51.845Z"),
        id: "<value>",
        name: "<value>",
        description: "gosh whoever clear for disloyal apropos underplay since",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-04-28T19:46:45.023Z"),
            modifiedAt: new Date("2025-01-05T11:43:34.285Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 402510,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-12-04T14:03:50.051Z"),
            modifiedAt: new Date("2023-08-09T05:18:54.394Z"),
            id: "<value>",
            type: "github_repository",
            description:
              "deeply pish that versus bonfire respray decide deplore whenever",
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
            path: "/rescue",
            mimeType: "<value>",
            size: 653252,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-07-07T00:56:00.393Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-08-01T06:43:02.119Z"),
            sizeReadable: "<value>",
            publicUrl: "https://wobbly-punctuation.com",
          },
        ],
        organization: {
          createdAt: new Date("2025-02-24T14:49:29.759Z"),
          modifiedAt: new Date("2025-12-03T08:49:56.716Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://ashamed-railway.biz/",
          email: "Chris.Bailey@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "tiktok",
              url: "https://complicated-carnival.biz/",
            },
          ],
          detailsSubmittedAt: new Date("2025-06-26T22:47:48.743Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Graham - Heller",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 203956,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 539528,
          profileSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2025-02-01T06:48:50.620Z"),
        modifiedAt: new Date("2023-09-27T09:38:02.312Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        unitAmount: 825635,
        includedUnits: 7439,
        capAmount: 23427,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
      subscription: {
        createdAt: new Date("2024-06-19T18:06:49.644Z"),
        modifiedAt: new Date("2025-07-07T19:41:40.406Z"),
        id: "<value>",
        amount: 925340,
        currency: "Colombian Peso",
        recurringInterval: "year",
        status: "trialing",
        currentPeriodStart: new Date("2024-12-15T13:27:34.684Z"),
        currentPeriodEnd: new Date("2023-12-12T20:01:19.784Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-05-19T01:33:52.237Z"),
        startedAt: new Date("2025-02-14T11:16:19.506Z"),
        endsAt: new Date("2023-12-04T15:27:18.312Z"),
        endedAt: new Date("2023-02-02T13:50:21.161Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
        priceId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2024-04-14T23:01:39.719Z"),
          modifiedAt: new Date("2023-04-19T20:11:24.529Z"),
          id: "<value>",
          label: "<value>",
          amount: 812427,
          taxAmount: 848605,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 301350,
    maxPage: 682765,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |