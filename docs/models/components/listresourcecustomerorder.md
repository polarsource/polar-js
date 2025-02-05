# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2023-11-02T17:00:24.297Z"),
      modifiedAt: new Date("2025-06-09T01:32:18.992Z"),
      id: "<value>",
      amount: 287750,
      taxAmount: 73957,
      currency: "Convertible Marks",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2023-06-13T18:10:23.570Z"),
        modifiedAt: new Date("2024-03-08T00:49:25.499Z"),
        id: "<value>",
        name: "<value>",
        description: "decisive firsthand pish quaintly",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-08-11T06:09:30.010Z"),
            modifiedAt: new Date("2024-02-29T04:01:52.904Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 738230,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-07-16T02:10:57.222Z"),
            modifiedAt: new Date("2025-07-11T20:54:23.054Z"),
            id: "<value>",
            type: "license_keys",
            description: "wonderful knavishly forenenst although inculcate gee",
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
            path: "/opt/bin",
            mimeType: "<value>",
            size: 982213,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-08-14T06:57:51.565Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-10-27T01:41:34.978Z"),
            sizeReadable: "<value>",
            publicUrl: "https://hollow-basket.info/",
          },
        ],
        organization: {
          createdAt: new Date("2023-09-27T06:28:40.601Z"),
          modifiedAt: new Date("2024-10-28T23:19:43.392Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://frail-management.net",
          bio: "<value>",
          company: "Roberts Group",
          blog: "<value>",
          location: "<value>",
          email: "Dorian.Goldner47@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 349963,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 896497,
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
        createdAt: new Date("2025-02-15T22:24:33.253Z"),
        modifiedAt: new Date("2024-08-03T05:37:09.894Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 474320,
        recurringInterval: "month",
      },
      subscription: {
        createdAt: new Date("2025-11-19T15:09:26.906Z"),
        modifiedAt: new Date("2025-07-14T02:36:39.601Z"),
        id: "<value>",
        amount: 820374,
        currency: "Tanzanian Shilling",
        recurringInterval: "year",
        status: "incomplete",
        currentPeriodStart: new Date("2025-11-30T18:08:12.857Z"),
        currentPeriodEnd: new Date("2025-10-20T08:31:50.564Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-02-01T21:36:44.416Z"),
        startedAt: new Date("2023-11-17T01:02:55.807Z"),
        endsAt: new Date("2023-01-02T05:13:35.742Z"),
        endedAt: new Date("2024-06-16T12:06:28.738Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_complex",
        customerCancellationComment: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 993982,
    maxPage: 132915,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |