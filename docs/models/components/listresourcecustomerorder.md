# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2023-08-20T22:40:34.497Z"),
      modifiedAt: new Date("2023-10-18T09:20:55.521Z"),
      id: "<value>",
      amount: 678571,
      taxAmount: 747040,
      currency: "Mexican Peso",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2023-11-05T10:37:25.746Z"),
        modifiedAt: new Date("2023-07-24T16:49:09.098Z"),
        id: "<value>",
        name: "<value>",
        description: "diver merry neglect arrogantly which nor and reiterate",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-06-13T13:52:47.549Z"),
            modifiedAt: new Date("2023-01-13T15:47:28.412Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 787698,
            maximumAmount: 525954,
            presetAmount: 833729,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-09-03T13:09:52.861Z"),
            modifiedAt: new Date("2024-02-17T21:50:42.420Z"),
            id: "<value>",
            type: "downloadables",
            description:
              "wetly frankly when gloat unearth up brandish uselessly since",
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
            path: "/var/yp",
            mimeType: "<value>",
            size: 527006,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-10-04T20:17:34.089Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-02-12T16:51:53.079Z"),
            sizeReadable: "<value>",
            publicUrl: "https://content-governance.biz",
          },
        ],
        organization: {
          createdAt: new Date("2024-04-01T20:50:24.365Z"),
          modifiedAt: new Date("2025-09-19T23:23:51.226Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://unwieldy-shark.biz/",
          bio: "<value>",
          company: "Hills - Moen",
          blog: "<value>",
          location: "<value>",
          email: "Ward.Moore@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 544779,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 40176,
          profileSettings: {},
          featureSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2023-10-26T20:34:22.774Z"),
        modifiedAt: new Date("2023-03-21T01:09:01.645Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 547611,
      },
      subscription: {
        createdAt: new Date("2024-01-21T14:13:42.501Z"),
        modifiedAt: new Date("2024-02-16T07:53:13.439Z"),
        id: "<value>",
        amount: 789168,
        currency: "Uzbekistan Sum",
        recurringInterval: "month",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2024-06-02T02:39:13.052Z"),
        currentPeriodEnd: new Date("2023-05-04T17:14:22.025Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-02-28T15:29:51.757Z"),
        endedAt: new Date("2023-11-28T02:07:26.226Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 921977,
    maxPage: 198534,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |