# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2025-12-22T20:46:15.878Z"),
      modifiedAt: new Date("2023-05-20T15:53:22.635Z"),
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
      billingReason: "subscription_create",
      billingAddress: {
        country: "FR",
      },
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-05-31T12:38:58.045Z"),
        modifiedAt: new Date("2024-02-29T16:11:09.166Z"),
        id: "<value>",
        name: "<value>",
        description: "below gee than elementary",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-03-18T03:28:52.944Z"),
            modifiedAt: new Date("2024-08-10T08:03:27.333Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 729383,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2024-12-28T01:50:28.210Z"),
            modifiedAt: new Date("2024-09-01T17:40:05.914Z"),
            type: "github_repository",
            description: "sonnet atop experience",
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
            path: "/tmp",
            mimeType: "<value>",
            size: 566755,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-03-13T01:55:58.867Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-05-13T02:59:27.247Z"),
            sizeReadable: "<value>",
            publicUrl: "https://quarrelsome-hydrolyse.biz",
          },
        ],
        organization: {
          createdAt: new Date("2023-05-19T07:14:51.645Z"),
          modifiedAt: new Date("2023-08-11T02:16:27.726Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://hungry-cruelty.biz/",
          email: "Javonte34@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "instagram",
              url: "https://damp-octave.name/",
            },
          ],
          detailsSubmittedAt: new Date("2025-10-22T14:36:45.718Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
        },
      },
      subscription: {
        createdAt: new Date("2024-04-25T00:52:48.048Z"),
        modifiedAt: new Date("2025-09-06T18:49:12.695Z"),
        id: "<value>",
        amount: 407509,
        currency: "Mexican Peso",
        recurringInterval: "year",
        status: "canceled",
        currentPeriodStart: new Date("2025-08-19T12:31:37.057Z"),
        currentPeriodEnd: new Date("2024-07-25T01:03:46.818Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-11-06T17:52:28.201Z"),
        startedAt: new Date("2025-09-06T02:36:50.793Z"),
        endsAt: new Date("2024-11-23T23:29:50.024Z"),
        endedAt: new Date("2024-09-18T00:00:47.893Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "switched_service",
        customerCancellationComment: "<value>",
      },
      items: [
        {
          createdAt: new Date("2023-09-30T05:04:46.307Z"),
          modifiedAt: new Date("2023-12-12T17:15:19.456Z"),
          id: "<value>",
          label: "<value>",
          amount: 343185,
          taxAmount: 796484,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 169740,
    maxPage: 805617,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |