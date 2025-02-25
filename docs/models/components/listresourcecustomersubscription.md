# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2024-06-03T07:51:56.631Z"),
      modifiedAt: new Date("2023-03-13T13:45:54.118Z"),
      id: "<value>",
      amount: 612307,
      currency: "Dominican Peso",
      recurringInterval: "month",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2024-12-02T23:06:12.612Z"),
      currentPeriodEnd: new Date("2025-06-16T13:01:42.846Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-07-29T23:06:59.334Z"),
      startedAt: new Date("2025-04-25T21:39:19.049Z"),
      endsAt: new Date("2024-08-22T01:57:47.832Z"),
      endedAt: new Date("2024-09-01T04:24:59.727Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2023-01-17T15:41:24.386Z"),
        modifiedAt: new Date("2024-09-04T22:30:35.769Z"),
        id: "<value>",
        name: "<value>",
        description:
          "doting gerbil huzzah dapper solemnly where versus machine",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-07-14T00:41:20.047Z"),
            modifiedAt: new Date("2024-08-11T20:27:07.720Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-11-06T05:51:47.281Z"),
            modifiedAt: new Date("2023-04-17T22:03:33.923Z"),
            id: "<value>",
            type: "ads",
            description: "think plan boo barring paltry",
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
            path: "/var/mail",
            mimeType: "<value>",
            size: 88826,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-05-02T16:32:25.486Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-02-15T10:18:46.962Z"),
            sizeReadable: "<value>",
            publicUrl: "https://striking-quit.name/",
          },
        ],
        organization: {
          createdAt: new Date("2025-10-01T09:57:00.337Z"),
          modifiedAt: new Date("2024-03-09T08:42:18.565Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://blaring-quart.biz/",
          bio: "<value>",
          company: "Kessler Group",
          blog: "<value>",
          location: "<value>",
          email: "Alexander27@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 463504,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 583257,
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
        createdAt: new Date("2024-08-06T20:26:04.230Z"),
        modifiedAt: new Date("2023-08-15T06:07:54.440Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 46843,
      },
    },
  ],
  pagination: {
    totalCount: 645688,
    maxPage: 641713,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |