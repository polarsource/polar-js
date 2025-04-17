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
      taxAmount: 172160,
      totalAmount: 590618,
      refundedAmount: 614593,
      refundedTaxAmount: 710994,
      currency: "Guyana Dollar",
      customerId: "<value>",
      productId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2025-09-22T05:05:14.004Z"),
        modifiedAt: new Date("2023-10-04T14:18:57.229Z"),
        id: "<value>",
        name: "<value>",
        description:
          "knowingly besides upon wholly blah brochure sonnet atop experience junior",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-05-29T21:01:39.779Z"),
            modifiedAt: new Date("2024-02-20T16:51:58.506Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 180235,
            maximumAmount: 134396,
            presetAmount: 478876,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2023-07-22T15:34:49.381Z"),
            modifiedAt: new Date("2025-12-01T22:22:56.239Z"),
            type: "downloadables",
            description: "ick some ignorant hence tribe",
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
            path: "/usr/include",
            mimeType: "<value>",
            size: 610021,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-01-04T00:38:22.506Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-12-09T19:00:25.744Z"),
            sizeReadable: "<value>",
            publicUrl: "https://graceful-puritan.net/",
          },
        ],
        organization: {
          createdAt: new Date("2023-04-02T23:51:17.739Z"),
          modifiedAt: new Date("2025-10-19T10:03:42.913Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://neat-sushi.net/",
          email: "Lorine.Bednar-Christiansen2@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "instagram",
              url: "https://tricky-word.net/",
            },
          ],
          detailsSubmittedAt: new Date("2023-11-07T20:31:03.355Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
        },
      },
      subscription: {
        createdAt: new Date("2023-11-15T04:31:41.346Z"),
        modifiedAt: new Date("2024-12-12T11:43:37.707Z"),
        id: "<value>",
        amount: 12557,
        currency: "Sri Lanka Rupee",
        recurringInterval: "year",
        status: "trialing",
        currentPeriodStart: new Date("2024-12-27T08:38:42.442Z"),
        currentPeriodEnd: new Date("2025-09-03T08:24:05.377Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-05-11T11:46:56.022Z"),
        startedAt: new Date("2025-12-04T23:05:53.851Z"),
        endsAt: new Date("2023-04-01T04:55:02.266Z"),
        endedAt: new Date("2025-02-10T14:16:43.016Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "customer_service",
        customerCancellationComment: "<value>",
      },
      items: [
        {
          createdAt: new Date("2025-11-22T14:16:45.492Z"),
          modifiedAt: new Date("2023-06-12T14:39:19.476Z"),
          id: "<value>",
          label: "<value>",
          amount: 44829,
          taxAmount: 165093,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 749224,
    maxPage: 757922,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |