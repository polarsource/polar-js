# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2023-02-02T01:48:16.382Z"),
      modifiedAt: new Date("2025-11-09T15:45:51.130Z"),
      id: "<value>",
      amount: 409388,
      taxAmount: 579240,
      currency: "CFA Franc BEAC",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-09-23T07:45:05.288Z"),
        modifiedAt: new Date("2023-07-08T20:56:24.426Z"),
        id: "<value>",
        name: "<value>",
        description:
          "the brr and alligator blah analyse descriptive seemingly allegation than",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-05-04T16:07:59.078Z"),
            modifiedAt: new Date("2023-05-07T19:23:08.899Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-09-17T07:42:16.227Z"),
            modifiedAt: new Date("2025-05-28T22:32:34.498Z"),
            id: "<value>",
            type: "github_repository",
            description: "by whoa sympathetically",
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
            size: 939396,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-05-07T19:57:45.944Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-02-04T23:31:05.359Z"),
            sizeReadable: "<value>",
            publicUrl: "https://powerful-doubter.net",
          },
        ],
        organization: {
          createdAt: new Date("2023-12-27T16:35:41.661Z"),
          modifiedAt: new Date("2023-05-23T15:05:57.835Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://quiet-divine.org/",
          bio: "<value>",
          company: "Buckridge, Luettgen and Wisoky",
          blog: "<value>",
          location: "<value>",
          email: "Savannah.Reinger82@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 685114,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 644904,
          profileSettings: {},
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
        },
      },
      productPrice: {
        createdAt: new Date("2024-11-05T05:19:19.160Z"),
        modifiedAt: new Date("2023-07-21T17:04:02.439Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
      },
      subscription: {
        createdAt: new Date("2023-12-08T00:59:54.749Z"),
        modifiedAt: new Date("2025-01-20T02:39:15.832Z"),
        id: "<value>",
        amount: 950003,
        currency: "Sri Lanka Rupee",
        recurringInterval: "year",
        status: "unpaid",
        currentPeriodStart: new Date("2024-02-15T09:23:09.263Z"),
        currentPeriodEnd: new Date("2023-02-20T17:18:53.516Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-04-05T14:50:43.468Z"),
        startedAt: new Date("2025-03-16T13:11:08.169Z"),
        endsAt: new Date("2023-11-29T08:43:46.201Z"),
        endedAt: new Date("2023-10-22T23:11:32.871Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_expensive",
        customerCancellationComment: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 156405,
    maxPage: 843449,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |