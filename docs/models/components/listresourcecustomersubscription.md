# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
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
      userId: "<value>",
      product: {
        createdAt: new Date("2024-02-23T17:59:07.811Z"),
        modifiedAt: new Date("2025-05-10T23:33:33.951Z"),
        id: "<value>",
        name: "<value>",
        description:
          "mmm teeming geez homeschool absentmindedly versus wherever",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-10-17T14:31:38.262Z"),
            modifiedAt: new Date("2023-01-07T20:04:09.783Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 168362,
            maximumAmount: 202257,
            presetAmount: 220715,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-06-06T00:17:15.191Z"),
            modifiedAt: new Date("2023-06-06T20:01:07.651Z"),
            id: "<value>",
            type: "license_keys",
            description: "zowie nor fit wretched mob hefty",
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
            path: "/private/tmp",
            mimeType: "<value>",
            size: 466235,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-11-17T08:36:55.539Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-04-22T13:46:31.465Z"),
            sizeReadable: "<value>",
            publicUrl: "https://unused-reporter.biz",
          },
        ],
        organization: {
          createdAt: new Date("2024-04-10T23:07:03.367Z"),
          modifiedAt: new Date("2024-12-07T23:04:13.096Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://cute-jacket.name/",
          email: "Leopold.Heidenreich20@yahoo.com",
          website: "<value>",
          socials: [
            {
              platform: "instagram",
              url: "https://cheap-labourer.com/",
            },
          ],
          detailsSubmittedAt: new Date("2024-03-17T02:39:34.219Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Kutch, Gerhold and Murphy",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 144941,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 930498,
          profileSettings: {},
        },
      },
      price: {
        createdAt: new Date("2023-04-18T01:10:45.728Z"),
        modifiedAt: new Date("2025-10-12T04:57:23.597Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 171866,
      },
      prices: [
        {
          createdAt: new Date("2023-10-10T12:16:52.345Z"),
          modifiedAt: new Date("2024-01-31T12:03:59.290Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          unitAmount: 262400,
          includedUnits: 558907,
          capAmount: 831639,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
      ],
    },
  ],
  pagination: {
    totalCount: 400361,
    maxPage: 280175,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |