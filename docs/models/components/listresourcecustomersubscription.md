# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2025-08-09T17:41:19.042Z"),
      modifiedAt: new Date("2023-01-17T20:08:34.631Z"),
      id: "<value>",
      amount: 668237,
      currency: "Norwegian Krone",
      recurringInterval: "year",
      status: "canceled",
      currentPeriodStart: new Date("2025-03-14T08:51:44.284Z"),
      currentPeriodEnd: new Date("2023-04-28T17:13:50.999Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-02-17T11:36:04.308Z"),
      startedAt: new Date("2025-06-27T16:57:19.473Z"),
      endsAt: new Date("2023-01-14T10:34:47.404Z"),
      endedAt: new Date("2023-12-17T10:05:59.361Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2023-01-21T14:23:10.713Z"),
        modifiedAt: new Date("2025-08-10T01:54:29.277Z"),
        id: "<value>",
        name: "<value>",
        description:
          "plagiarise gigantic shady that voluntarily behind machine",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-11-08T19:03:18.551Z"),
            modifiedAt: new Date("2024-02-23T17:59:07.811Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 555985,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-08-19T11:27:16.475Z"),
            modifiedAt: new Date("2025-01-24T02:09:42.913Z"),
            id: "<value>",
            type: "custom",
            description: "first ha burgeon",
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
            path: "/lost+found",
            mimeType: "<value>",
            size: 400653,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-03-22T03:14:40.106Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-11-29T21:24:18.009Z"),
            sizeReadable: "<value>",
            publicUrl: "https://chubby-comparison.com/",
          },
        ],
        organization: {
          createdAt: new Date("2023-07-12T15:10:29.510Z"),
          modifiedAt: new Date("2023-01-06T17:26:28.158Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://oblong-wriggler.info/",
          email: "Corine36@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "youtube",
              url: "https://teeming-coil.info/",
            },
          ],
          detailsSubmittedAt: new Date("2023-04-04T14:22:24.111Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Thiel - Cummings",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 202257,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 220715,
          profileSettings: {},
        },
      },
      price: {
        createdAt: new Date("2025-08-13T06:17:28.680Z"),
        modifiedAt: new Date("2024-04-02T02:58:06.798Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 245463,
        maximumAmount: 904911,
        presetAmount: 584995,
      },
      prices: [
        {
          createdAt: new Date("2025-09-27T13:25:44.103Z"),
          modifiedAt: new Date("2023-08-13T11:19:58.638Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 630536,
          maximumAmount: 277094,
          presetAmount: 177892,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 605091,
    maxPage: 456372,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |