# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2024-11-11T13:52:42.697Z"),
      modifiedAt: new Date("2023-05-09T03:26:26.188Z"),
      id: "<value>",
      amount: 588222,
      currency: "Netherlands Antillian Guilder",
      recurringInterval: "month",
      status: "incomplete",
      currentPeriodStart: new Date("2023-11-10T03:19:35.166Z"),
      currentPeriodEnd: new Date("2025-09-12T00:09:48.443Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-08-21T04:25:21.569Z"),
      startedAt: new Date("2025-05-07T15:08:34.450Z"),
      endsAt: new Date("2024-03-10T10:40:48.230Z"),
      endedAt: new Date("2024-02-09T15:36:42.368Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "unused",
      customerCancellationComment: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-03-28T06:43:43.157Z"),
        modifiedAt: new Date("2025-12-12T17:13:53.718Z"),
        id: "<value>",
        name: "<value>",
        description: "apropos underplay since aha",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-07-10T18:47:54.602Z"),
            modifiedAt: new Date("2025-06-27T17:39:57.169Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 34432,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-04-04T07:16:34.900Z"),
            modifiedAt: new Date("2024-11-25T22:09:52.331Z"),
            id: "<value>",
            type: "license_keys",
            description: "woot outside behind",
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
            size: 20512,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-05-14T05:19:16.057Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-07-10T09:38:33.519Z"),
            sizeReadable: "<value>",
            publicUrl: "https://wonderful-mortise.com",
          },
        ],
        organization: {
          createdAt: new Date("2024-05-16T23:08:38.509Z"),
          modifiedAt: new Date("2025-05-08T05:53:08.264Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://french-pigpen.biz/",
          bio: "<value>",
          company: "Schinner, Simonis and Lubowitz",
          blog: "<value>",
          location: "<value>",
          email: "Libbie_Doyle@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 467406,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 429753,
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
        createdAt: new Date("2025-07-01T17:25:22.386Z"),
        modifiedAt: new Date("2025-01-01T02:55:36.953Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 975779,
        recurringInterval: "month",
      },
    },
  ],
  pagination: {
    totalCount: 923446,
    maxPage: 765578,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |