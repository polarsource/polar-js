# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2024-09-16T16:26:01.820Z"),
      modifiedAt: new Date("2023-02-25T00:32:40.607Z"),
      id: "<value>",
      amount: 884662,
      currency: "Venezuelan bolívar",
      recurringInterval: "year",
      status: "active",
      currentPeriodStart: new Date("2023-11-16T06:10:32.593Z"),
      currentPeriodEnd: new Date("2023-04-06T21:56:28.637Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-08-21T18:01:23.530Z"),
      startedAt: new Date("2025-03-03T10:19:31.167Z"),
      endsAt: new Date("2025-05-28T18:41:41.885Z"),
      endedAt: new Date("2025-04-22T21:31:15.045Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "unused",
      customerCancellationComment: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2023-05-02T15:28:19.816Z"),
        modifiedAt: new Date("2024-01-06T18:04:00.281Z"),
        id: "<value>",
        name: "<value>",
        description:
          "tomorrow bah toward psst furthermore as because bell amidst",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-05-16T07:21:18.933Z"),
            modifiedAt: new Date("2024-06-03T07:51:56.631Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 612307,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-09-20T20:36:21.607Z"),
            modifiedAt: new Date("2024-02-21T12:26:05.830Z"),
            id: "<value>",
            type: "ads",
            description:
              "advertisement considering now disposer wound amongst psst nauseate",
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
            path: "/usr/include",
            mimeType: "<value>",
            size: 941748,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-04-05T15:51:26.855Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-04-25T07:49:56.848Z"),
            sizeReadable: "<value>",
            publicUrl: "https://lined-minister.info/",
          },
        ],
        organization: {
          createdAt: new Date("2024-06-18T20:31:13.886Z"),
          modifiedAt: new Date("2023-05-19T22:17:21.271Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://unsteady-concentration.name/",
          bio: "<value>",
          company: "White - Boyle",
          blog: "<value>",
          location: "<value>",
          email: "Elijah.Boyer@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 159937,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 917179,
          profileSettings: {},
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
        },
      },
      price: {
        createdAt: new Date("2025-03-19T19:05:17.881Z"),
        modifiedAt: new Date("2025-12-26T04:13:50.574Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    },
  ],
  pagination: {
    totalCount: 619491,
    maxPage: 260299,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |