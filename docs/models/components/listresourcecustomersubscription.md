# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2024-09-20T13:21:44.003Z"),
      modifiedAt: new Date("2023-09-04T07:30:51.531Z"),
      id: "<value>",
      amount: 677383,
      currency: "Uzbekistan Sum",
      recurringInterval: "month",
      status: "incomplete",
      currentPeriodStart: new Date("2025-10-26T14:19:18.817Z"),
      currentPeriodEnd: new Date("2024-08-24T18:04:57.857Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-06-30T15:06:40.008Z"),
      startedAt: new Date("2025-11-03T00:52:46.065Z"),
      endsAt: new Date("2025-08-16T20:34:49.918Z"),
      endedAt: new Date("2024-07-24T08:00:42.998Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "other",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-04-24T18:34:12.157Z"),
        modifiedAt: new Date("2023-10-01T16:51:40.339Z"),
        id: "<value>",
        name: "<value>",
        description:
          "molasses boohoo enchanting if councilman blend hm woot colon",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-04-18T21:02:57.554Z"),
            modifiedAt: new Date("2025-06-07T19:35:38.599Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 46738,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-12-03T22:36:50.794Z"),
            modifiedAt: new Date("2025-11-27T19:52:31.566Z"),
            id: "<value>",
            type: "license_keys",
            description: "lazily before tomorrow ew up",
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
            size: 12476,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-08-22T20:14:42.910Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-05-13T14:09:00.250Z"),
            sizeReadable: "<value>",
            publicUrl: "https://discrete-casket.org",
          },
        ],
        organization: {
          createdAt: new Date("2023-02-09T03:20:07.090Z"),
          modifiedAt: new Date("2023-02-03T02:22:02.680Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://outlying-compromise.net/",
          email: "Jessie_Spinka@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "linkedin",
              url: "https://marvelous-birdcage.biz/",
            },
          ],
          detailsSubmittedAt: new Date("2025-09-30T13:17:31.050Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Ullrich Inc",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 937611,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 945871,
          profileSettings: {},
        },
      },
      price: {
        createdAt: new Date("2025-08-27T14:08:51.409Z"),
        modifiedAt: new Date("2025-09-25T21:09:30.950Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 291293,
      },
      prices: [
        {
          createdAt: new Date("2025-03-03T10:19:31.167Z"),
          modifiedAt: new Date("2025-05-28T18:41:41.885Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 817366,
    maxPage: 110989,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |