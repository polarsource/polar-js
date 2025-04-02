# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2025-06-04T17:00:12.684Z"),
      modifiedAt: new Date("2025-03-06T20:44:33.604Z"),
      id: "<value>",
      amount: 594788,
      currency: "Dong",
      recurringInterval: "month",
      status: "incomplete",
      currentPeriodStart: new Date("2023-03-20T12:47:23.657Z"),
      currentPeriodEnd: new Date("2025-03-04T12:35:03.563Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-10-12T06:28:55.012Z"),
      startedAt: new Date("2024-10-03T07:59:59.919Z"),
      endsAt: new Date("2024-04-26T19:48:43.329Z"),
      endedAt: new Date("2023-09-12T10:08:53.512Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_expensive",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2023-02-03T09:03:46.147Z"),
        modifiedAt: new Date("2025-01-22T12:24:34.947Z"),
        id: "<value>",
        name: "<value>",
        description:
          "splosh parsnip slather loosely hm if hypothesise recommendation",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-11-06T11:09:06.428Z"),
            modifiedAt: new Date("2024-07-25T13:11:02.187Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 300530,
            maximumAmount: 502849,
            presetAmount: 41772,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-06-30T15:21:44.204Z"),
            modifiedAt: new Date("2024-09-15T08:24:23.778Z"),
            id: "<value>",
            type: "custom",
            description:
              "left scent intensely angrily above untried litter phooey who because",
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
            path: "/srv",
            mimeType: "<value>",
            size: 885479,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-03-31T21:19:11.709Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-07-06T08:06:49.685Z"),
            sizeReadable: "<value>",
            publicUrl: "https://cavernous-sesame.name/",
          },
        ],
        organization: {
          createdAt: new Date("2023-09-03T03:57:18.735Z"),
          modifiedAt: new Date("2024-04-17T03:10:33.215Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://rundown-formula.info",
          email: "Carroll.Mraz@yahoo.com",
          website: "<value>",
          socials: [
            {
              platform: "x",
              url: "https://pointless-trench.info/",
            },
          ],
          detailsSubmittedAt: new Date("2023-09-27T02:59:25.428Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Upton - Waters",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 52368,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 747413,
          profileSettings: {},
        },
      },
      price: {
        createdAt: new Date("2024-10-08T21:58:12.889Z"),
        modifiedAt: new Date("2023-12-09T12:07:34.499Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      prices: [
        {
          createdAt: new Date("2023-11-23T16:26:44.289Z"),
          modifiedAt: new Date("2023-05-06T17:34:23.447Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 621095,
    maxPage: 16542,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |