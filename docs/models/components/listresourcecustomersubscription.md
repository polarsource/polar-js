# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2024-12-23T03:00:33.841Z"),
      modifiedAt: new Date("2023-03-31T10:39:08.699Z"),
      id: "<value>",
      amount: 437446,
      currency: "Mexican Peso",
      recurringInterval: "year",
      status: "canceled",
      currentPeriodStart: new Date("2024-12-23T09:19:29.671Z"),
      currentPeriodEnd: new Date("2024-12-06T11:34:56.016Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-06-18T05:00:51.297Z"),
      startedAt: new Date("2023-01-23T12:47:00.295Z"),
      endsAt: new Date("2025-11-17T20:17:43.057Z"),
      endedAt: new Date("2024-04-16T13:35:33.229Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "missing_features",
      customerCancellationComment: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-06-20T14:53:55.894Z"),
        modifiedAt: new Date("2025-10-27T13:33:53.166Z"),
        id: "<value>",
        name: "<value>",
        description:
          "which well madly generally haversack tense intently mispronounce tired carelessly",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-03-20T07:59:36.852Z"),
            modifiedAt: new Date("2025-08-26T01:26:53.760Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 916878,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-09-28T16:24:17.935Z"),
            modifiedAt: new Date("2024-01-03T00:29:55.711Z"),
            id: "<value>",
            type: "discord",
            description:
              "vanish elegantly when however whoever heavily because fencing maul",
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
            size: 981644,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-09-30T19:05:33.452Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-02-05T01:40:30.252Z"),
            sizeReadable: "<value>",
            publicUrl: "https://prestigious-cauliflower.name/",
          },
        ],
        organization: {
          createdAt: new Date("2023-01-11T07:21:09.672Z"),
          modifiedAt: new Date("2025-03-23T21:42:53.607Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://small-poppy.info/",
          bio: "<value>",
          company: "Borer LLC",
          blog: "<value>",
          location: "<value>",
          email: "Ray_Dibbert@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 26965,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 834020,
          profileSettings: {},
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
        },
      },
      price: {
        createdAt: new Date("2024-08-20T05:45:34.061Z"),
        modifiedAt: new Date("2023-09-22T01:42:46.171Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 925381,
      },
    },
  ],
  pagination: {
    totalCount: 201704,
    maxPage: 550564,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |