# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2023-05-20T15:53:22.635Z"),
      modifiedAt: new Date("2023-01-20T08:35:02.035Z"),
      status: "pending",
      paid: true,
      subtotalAmount: 95401,
      discountAmount: 172160,
      netAmount: 590618,
      amount: 614593,
      taxAmount: 710994,
      totalAmount: 332443,
      refundedAmount: 908041,
      refundedTaxAmount: 252369,
      currency: "Uzbekistan Sum",
      billingReason: "subscription_create",
      billingName: "<value>",
      billingAddress: {
        country: "US",
      },
      isInvoiceGenerated: true,
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      subscriptionId: null,
      checkoutId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2025-10-03T15:28:24.829Z"),
        modifiedAt: new Date("2023-11-16T06:21:02.029Z"),
        id: "<value>",
        name: "<value>",
        description:
          "as however almighty mid claw procrastinate self-confidence proofread grade",
        recurringInterval: "month",
        isRecurring: true,
        isArchived: true,
        organizationId: "<value>",
        prices: [],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2025-02-28T01:09:21.212Z"),
            modifiedAt: new Date("2023-02-15T16:10:30.309Z"),
            type: "downloadables",
            description:
              "drowse whoever until continually amidst gentle quadruple",
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
            path: "/private",
            mimeType: "<value>",
            size: 782007,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: null,
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-07-08T02:43:14.288Z"),
            sizeReadable: "<value>",
            publicUrl: "https://aged-fellow.net",
          },
        ],
        organization: {
          createdAt: new Date("2024-07-11T02:04:41.072Z"),
          modifiedAt: new Date("2025-11-26T13:33:51.948Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://french-lid.com",
          email: "Hannah_Price@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "youtube",
              url: "https://expert-elevation.org",
            },
          ],
          detailsSubmittedAt: new Date("2025-12-07T19:21:48.818Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
        },
      },
      subscription: {
        createdAt: new Date("2025-11-26T02:12:01.065Z"),
        modifiedAt: new Date("2024-04-26T02:48:59.389Z"),
        id: "<value>",
        amount: 162332,
        currency: "Cordoba Oro",
        recurringInterval: "year",
        status: "unpaid",
        currentPeriodStart: new Date("2023-07-08T08:21:02.517Z"),
        currentPeriodEnd: new Date("2025-09-06T18:49:12.695Z"),
        cancelAtPeriodEnd: true,
        canceledAt: new Date("2025-09-10T09:16:21.463Z"),
        startedAt: new Date("2025-08-19T12:31:37.057Z"),
        endsAt: new Date("2025-11-06T17:52:28.201Z"),
        endedAt: new Date("2024-11-23T23:29:50.024Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "missing_features",
        customerCancellationComment: "<value>",
      },
      items: [
        {
          createdAt: new Date("2025-09-26T23:45:02.094Z"),
          modifiedAt: null,
          id: "<value>",
          label: "<value>",
          amount: 475844,
          taxAmount: 549894,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 47105,
    maxPage: 607201,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |