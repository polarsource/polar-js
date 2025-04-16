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
            createdAt: new Date("2024-07-04T14:44:38.499Z"),
            modifiedAt: new Date("2025-06-20T00:53:11.661Z"),
            id: "<value>",
            type: "discord",
            description:
              "boo coil anti unknown brr pleased fortunately mid impressionable",
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
            path: "/usr/sbin",
            mimeType: "<value>",
            size: 593429,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-11-26T11:28:59.050Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-09-01T11:43:31.742Z"),
            sizeReadable: "<value>",
            publicUrl: "https://exhausted-import.net",
          },
        ],
        organization: {
          createdAt: new Date("2023-06-05T14:22:16.192Z"),
          modifiedAt: new Date("2024-02-12T00:01:30.244Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://small-fraudster.info/",
          email: "Jaron2@yahoo.com",
          website: "<value>",
          socials: [
            {
              platform: "x",
              url: "https://comfortable-bar.name",
            },
          ],
          detailsSubmittedAt: new Date("2023-09-27T02:24:48.308Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Heathcote, Treutel and Runolfsdottir",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
        },
      },
      price: {
        createdAt: new Date("2023-01-07T06:44:17.748Z"),
        modifiedAt: new Date("2024-11-17T12:32:04.882Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 740568,
      },
      prices: [
        {
          createdAt: new Date("2024-02-29T13:35:40.295Z"),
          modifiedAt: new Date("2024-12-24T18:46:40.369Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
        },
      ],
      meters: [
        {
          createdAt: new Date("2025-01-13T14:59:18.410Z"),
          modifiedAt: new Date("2024-08-27T05:19:39.196Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
          meter: {
            createdAt: new Date("2024-05-27T10:45:07.579Z"),
            modifiedAt: new Date("2023-08-05T11:51:35.465Z"),
            id: "<value>",
            name: "<value>",
          },
        },
      ],
    },
  ],
  pagination: {
    totalCount: 555299,
    maxPage: 539869,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |