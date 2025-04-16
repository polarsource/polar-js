# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2024-03-11T02:59:33.614Z"),
      modifiedAt: new Date("2024-03-29T23:14:03.744Z"),
      id: "<value>",
      amount: 451500,
      currency: "Surinam Dollar",
      recurringInterval: "year",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2024-08-10T18:13:26.660Z"),
      currentPeriodEnd: new Date("2023-04-12T06:47:40.524Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-12-23T10:43:11.589Z"),
      startedAt: new Date("2025-06-14T17:06:06.978Z"),
      endsAt: new Date("2023-12-26T14:12:43.086Z"),
      endedAt: new Date("2023-02-12T19:10:30.424Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "missing_features",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-08-26T10:45:27.151Z"),
        modifiedAt: new Date("2023-04-22T21:32:32.069Z"),
        id: "<value>",
        name: "<value>",
        description:
          "structure in low runway enfold suburban phony lest unknown insignificant",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-05-08T05:59:03.649Z"),
            modifiedAt: new Date("2025-06-05T00:32:47.556Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 250192,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2024-07-04T14:44:38.499Z"),
            modifiedAt: new Date("2025-06-20T00:53:11.661Z"),
            metadata: {
              "key": 760233,
            },
            type: "custom",
            description:
              "closely drat beside joyful silk shy so wee paltry yowza",
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
            size: 302745,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-04-10T01:43:39.769Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-01-31T19:46:34.979Z"),
            sizeReadable: "<value>",
            publicUrl: "https://mealy-intent.com/",
          },
        ],
        organization: {
          createdAt: new Date("2023-10-26T12:02:47.462Z"),
          modifiedAt: new Date("2025-05-23T13:20:54.103Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://stark-bran.net/",
          email: "Angelita.Franecki@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "other",
              url: "https://cuddly-jump.com",
            },
          ],
          detailsSubmittedAt: new Date("2024-11-17T12:32:04.882Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Macejkovic, Pagac and Howell",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
        },
      },
      price: {
        createdAt: new Date("2024-10-24T12:47:11.969Z"),
        modifiedAt: new Date("2025-01-13T14:59:18.410Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 197531,
      },
      prices: [
        {
          createdAt: new Date("2024-03-11T16:05:59.611Z"),
          modifiedAt: new Date("2025-08-18T04:32:34.984Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
        },
      ],
      meters: [
        {
          createdAt: new Date("2025-02-14T06:11:40.740Z"),
          modifiedAt: new Date("2023-03-26T08:53:50.000Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
          meter: {
            createdAt: new Date("2025-05-06T18:06:32.590Z"),
            modifiedAt: new Date("2024-09-09T13:30:31.935Z"),
            id: "<value>",
            name: "<value>",
          },
        },
      ],
    },
  ],
  pagination: {
    totalCount: 741911,
    maxPage: 99450,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |