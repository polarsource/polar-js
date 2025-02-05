# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2025-01-14T23:41:16.557Z"),
      modifiedAt: new Date("2024-12-24T17:17:57.453Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "expired",
      clientSecret: "<value>",
      url: "https://frizzy-necklace.net",
      expiresAt: new Date("2025-02-04T18:30:24.992Z"),
      successUrl: "https://monstrous-sailor.biz/",
      embedOrigin: "<value>",
      amount: 221298,
      taxAmount: 484987,
      currency: "Lebanese Pound",
      subtotalAmount: 23472,
      totalAmount: 581946,
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
        country: "Indonesia",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
      },
      metadata: {
        "key": 914824,
      },
      product: {
        createdAt: new Date("2024-01-01T02:20:17.002Z"),
        modifiedAt: new Date("2023-04-29T04:30:50.569Z"),
        id: "<value>",
        name: "<value>",
        description: "gracefully geez bustling sweet",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-07-22T18:34:54.272Z"),
            modifiedAt: new Date("2024-08-18T23:28:00.562Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 254226,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-05-10T08:15:00.850Z"),
            modifiedAt: new Date("2023-02-18T22:59:57.571Z"),
            id: "<value>",
            type: "discord",
            description:
              "off splurge emulsify gee recompense eggplant midst crumble quirkily",
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
            path: "/boot",
            mimeType: "<value>",
            size: 817418,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-02-17T19:07:11.758Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-03-13T05:34:44.227Z"),
            sizeReadable: "<value>",
            publicUrl: "https://grounded-eternity.biz",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-10-28T11:31:56.911Z"),
        modifiedAt: new Date("2023-09-16T16:37:59.200Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      discount: {
        duration: "once",
        type: "percentage",
        basisPoints: 446326,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-08-12T17:54:50.405Z"),
            modifiedAt: new Date("2024-11-05T14:24:16.309Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 589101,
          required: false,
        },
      ],
      customerMetadata: {
        "key": 288489,
      },
    },
  ],
  pagination: {
    totalCount: 325851,
    maxPage: 196355,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |