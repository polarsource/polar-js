# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2023-11-16T09:23:24.153Z"),
      modifiedAt: new Date("2024-01-17T15:00:59.946Z"),
      id: "<value>",
      amount: 382920,
      currency: "Cuban Peso",
      recurringInterval: "month",
      status: "active",
      currentPeriodStart: new Date("2023-05-21T17:17:39.998Z"),
      currentPeriodEnd: new Date("2023-05-01T12:37:32.096Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-07-08T00:24:34.770Z"),
      startedAt: new Date("2023-02-22T05:02:59.403Z"),
      endsAt: new Date("2024-03-17T02:39:34.219Z"),
      endedAt: new Date("2025-03-31T13:21:21.860Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "other",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-07-01T20:45:28.973Z"),
        modifiedAt: new Date("2023-10-09T19:48:17.819Z"),
        id: "<value>",
        name: "<value>",
        description:
          "whose circa trick programme squeaky inure premeditation nor",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-11-04T10:50:11.739Z"),
            modifiedAt: new Date("2023-09-22T11:44:15.291Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 174942,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-12-05T00:00:18.378Z"),
            modifiedAt: new Date("2023-09-05T05:45:56.563Z"),
            id: "<value>",
            type: "downloadables",
            description:
              "unless heartache heartfelt hmph er including aggressive",
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
            path: "/usr",
            mimeType: "<value>",
            size: 241178,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-12-08T16:49:01.680Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-02-21T13:36:12.093Z"),
            sizeReadable: "<value>",
            publicUrl: "https://eminent-planula.org",
          },
        ],
        organization: {
          createdAt: new Date("2024-01-02T17:03:51.334Z"),
          modifiedAt: new Date("2023-03-11T18:33:07.848Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://neighboring-sonata.org",
          email: "Josue_Kessler-Friesen88@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "tiktok",
              url: "https://torn-detective.name/",
            },
          ],
          detailsSubmittedAt: new Date("2023-05-23T18:01:37.769Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "O'Connell - Fahey",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 756640,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 184194,
          profileSettings: {},
        },
      },
      price: {
        createdAt: new Date("2025-02-15T17:16:46.367Z"),
        modifiedAt: new Date("2024-07-24T14:04:05.326Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 228344,
        maximumAmount: 575748,
        presetAmount: 263839,
      },
      prices: [
        {
          createdAt: new Date("2023-09-08T04:02:06.778Z"),
          modifiedAt: new Date("2024-11-09T09:39:27.651Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 186041,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 898720,
    maxPage: 435822,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |