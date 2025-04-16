# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2025-12-22T20:46:15.878Z"),
      modifiedAt: new Date("2023-05-20T15:53:22.635Z"),
      id: "<value>",
      status: "refunded",
      paid: true,
      subtotalAmount: 17662,
      discountAmount: 142890,
      netAmount: 95401,
      amount: 172160,
      taxAmount: 590618,
      totalAmount: 614593,
      refundedAmount: 710994,
      refundedTaxAmount: 332443,
      currency: "Uzbekistan Sum",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2023-10-04T14:18:57.229Z"),
        modifiedAt: new Date("2025-09-17T07:23:59.096Z"),
        id: "<value>",
        name: "<value>",
        description: "up arraign but insistent provided apud",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-05-29T14:44:57.810Z"),
            modifiedAt: new Date("2024-05-11T08:19:09.701Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 984078,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2024-04-02T15:56:55.286Z"),
            modifiedAt: new Date("2025-08-08T00:51:16.723Z"),
            metadata: {
              "key": "<value>",
            },
            type: "downloadables",
            description: "eek quarrelsome for brr",
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
            path: "/var/tmp",
            mimeType: "<value>",
            size: 420862,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-04-26T02:48:59.389Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-06-27T21:59:37.778Z"),
            sizeReadable: "<value>",
            publicUrl: "https://menacing-trolley.biz",
          },
        ],
        organization: {
          createdAt: new Date("2024-04-25T00:52:48.048Z"),
          modifiedAt: new Date("2025-09-06T18:49:12.695Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://palatable-technologist.net/",
          email: "Jovani_Trantow@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "github",
              url: "https://growing-secrecy.biz/",
            },
          ],
          detailsSubmittedAt: new Date("2025-06-01T22:56:15.909Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Auer, Quigley and Ebert",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
        },
      },
      productPrice: {
        createdAt: new Date("2025-10-18T18:14:54.362Z"),
        modifiedAt: new Date("2025-02-28T21:35:13.070Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        unitAmount: "<value>",
        capAmount: 979738,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
      subscription: {
        createdAt: new Date("2024-05-23T03:42:10.395Z"),
        modifiedAt: new Date("2023-12-28T02:42:35.130Z"),
        id: "<value>",
        amount: 723571,
        currency: "Surinam Dollar",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2023-06-11T19:55:59.866Z"),
        currentPeriodEnd: new Date("2024-08-19T02:13:57.786Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-08-16T15:41:40.280Z"),
        startedAt: new Date("2025-01-27T06:45:33.027Z"),
        endsAt: new Date("2025-01-25T15:08:21.829Z"),
        endedAt: new Date("2024-11-27T02:42:10.706Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
        priceId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2023-03-03T20:31:16.462Z"),
          modifiedAt: new Date("2023-05-23T07:48:49.592Z"),
          id: "<value>",
          label: "<value>",
          amount: 238038,
          taxAmount: 23723,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 283366,
    maxPage: 499934,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |