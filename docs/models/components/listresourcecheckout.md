# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2024-10-28T11:31:56.911Z"),
      modifiedAt: new Date("2023-09-16T16:37:59.200Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "succeeded",
      clientSecret: "<value>",
      url: "https://unaware-hydrolyze.info/",
      expiresAt: new Date("2023-08-12T17:54:50.405Z"),
      successUrl: "https://worthy-mountain.name",
      embedOrigin: "<value>",
      amount: 288489,
      taxAmount: 325851,
      currency: "Costa Rican Colon",
      subtotalAmount: 514602,
      totalAmount: 147974,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      allowDiscountCodes: false,
      isDiscountApplicable: false,
      isFreeProductPrice: false,
      isPaymentRequired: false,
      isPaymentSetupRequired: false,
      isPaymentFormRequired: false,
      customerId: "<value>",
      customerName: "<value>",
      customerEmail: "<value>",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Nauru",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
      },
      metadata: {
        "key": 624312,
      },
      product: {
        createdAt: new Date("2023-03-19T12:14:28.421Z"),
        modifiedAt: new Date("2025-08-26T22:14:14.011Z"),
        id: "<value>",
        name: "<value>",
        description: "out scarification optimal fowl boggle bowed",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-01-03T12:45:05.812Z"),
            modifiedAt: new Date("2024-05-17T23:11:42.440Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-06-21T19:10:18.665Z"),
            modifiedAt: new Date("2023-11-15T02:07:42.804Z"),
            id: "<value>",
            type: "downloadables",
            description: "after abaft whereas",
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
            path: "/etc/ppp",
            mimeType: "<value>",
            size: 112517,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-09-19T10:31:49.778Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-02-05T21:05:30.503Z"),
            sizeReadable: "<value>",
            publicUrl: "https://amazing-rubric.net",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-03-19T00:42:58.835Z"),
        modifiedAt: new Date("2025-12-29T00:34:10.069Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 477797,
      },
      discount: {
        duration: "once",
        type: "percentage",
        basisPoints: 504097,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-01-21T08:41:14.953Z"),
            modifiedAt: new Date("2025-09-04T01:03:05.967Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 731671,
          required: false,
        },
      ],
      customerMetadata: {
        "key": false,
      },
    },
  ],
  pagination: {
    totalCount: 310285,
    maxPage: 789945,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |