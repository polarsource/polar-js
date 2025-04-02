# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2025-03-09T20:13:31.276Z"),
      modifiedAt: new Date("2024-04-27T10:46:43.536Z"),
      id: "<value>",
      status: "refunded",
      paid: true,
      subtotalAmount: 474816,
      discountAmount: 53613,
      netAmount: 321482,
      amount: 82913,
      taxAmount: 760315,
      totalAmount: 477590,
      refundedAmount: 407162,
      refundedTaxAmount: 760929,
      currency: "Nuevo Sol",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-03-28T22:44:50.176Z"),
        modifiedAt: new Date("2023-05-27T18:03:05.713Z"),
        id: "<value>",
        name: "<value>",
        description: "unlike clearly beneath carefully oh readily",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-03-31T12:33:05.474Z"),
            modifiedAt: new Date("2024-06-08T17:30:09.345Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 677492,
            maximumAmount: 319975,
            presetAmount: 765552,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-04-30T03:38:37.774Z"),
            modifiedAt: new Date("2024-10-07T23:37:13.021Z"),
            id: "<value>",
            type: "downloadables",
            description: "unethically vicinity aggravating seemingly provided",
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
            path: "/usr/lib",
            mimeType: "<value>",
            size: 217602,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-05-17T14:59:44.284Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-06-20T20:13:03.820Z"),
            sizeReadable: "<value>",
            publicUrl: "https://far-flung-ocelot.info",
          },
        ],
        organization: {
          createdAt: new Date("2024-04-27T16:09:54.349Z"),
          modifiedAt: new Date("2025-07-26T06:29:32.744Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://great-technologist.biz",
          email: "Patrick62@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "other",
              url: "https://unsightly-wriggler.name",
            },
          ],
          detailsSubmittedAt: new Date("2023-10-04T07:45:54.450Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "O'Connell, Bednar and Dickens",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 238583,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 245022,
          profileSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2023-09-12T11:37:04.367Z"),
        modifiedAt: new Date("2023-07-01T10:58:17.419Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
      },
      subscription: {
        createdAt: new Date("2024-01-05T00:44:03.803Z"),
        modifiedAt: new Date("2023-11-04T15:24:50.946Z"),
        id: "<value>",
        amount: 719819,
        currency: "Ouguiya",
        recurringInterval: "month",
        status: "past_due",
        currentPeriodStart: new Date("2023-12-07T08:29:54.913Z"),
        currentPeriodEnd: new Date("2025-03-23T12:44:05.239Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-06-19T21:50:51.021Z"),
        startedAt: new Date("2023-06-04T10:07:51.925Z"),
        endsAt: new Date("2023-07-20T12:08:42.008Z"),
        endedAt: new Date("2024-08-27T10:00:00.988Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "missing_features",
        customerCancellationComment: "<value>",
        priceId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2024-02-23T17:59:07.811Z"),
          modifiedAt: new Date("2025-05-10T23:33:33.951Z"),
          id: "<value>",
          label: "<value>",
          amount: 555985,
          taxAmount: 877261,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 688039,
    maxPage: 153814,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |