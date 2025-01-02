# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2024-11-29T08:31:54.256Z"),
      modifiedAt: new Date("2024-11-23T01:06:43.392Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "open",
      clientSecret: "<value>",
      url: "https://elegant-avalanche.com",
      expiresAt: new Date("2024-12-20T19:57:52.166Z"),
      successUrl: "https://that-bump.net",
      embedOrigin: "<value>",
      amount: 650918,
      taxAmount: 214929,
      currency: "Solomon Islands Dollar",
      subtotalAmount: 741334,
      totalAmount: 108001,
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
      customerEmail: "Loyce_Runolfsdottir85@gmail.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Romania",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": 519391,
      },
      product: {
        createdAt: new Date("2023-11-08T07:32:04.078Z"),
        modifiedAt: new Date("2023-10-22T21:26:13.900Z"),
        id: "<value>",
        name: "<value>",
        description: "gerbil crafty er if",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-08-02T20:34:34.106Z"),
            modifiedAt: new Date("2023-01-12T17:05:53.623Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 348739,
            maximumAmount: 790463,
            presetAmount: 346895,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-07-12T06:43:06.103Z"),
            modifiedAt: new Date("2024-01-15T21:48:36.807Z"),
            id: "<value>",
            type: "ads",
            description: "now yawningly properly reconsideration",
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
            path: "/home/user/dir",
            mimeType: "<value>",
            size: 227674,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-11-19T03:49:47.610Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-12-15T08:19:30.151Z"),
            sizeReadable: "<value>",
            publicUrl: "https://chilly-editor.com",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-10-05T20:19:18.073Z"),
        modifiedAt: new Date("2023-04-07T08:31:51.847Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      discount: {
        duration: "repeating",
        durationInMonths: 997706,
        type: "percentage",
        basisPoints: 262638,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-01-24T06:51:24.305Z"),
            modifiedAt: new Date("2025-01-14T23:41:16.557Z"),
            id: "<value>",
            metadata: {
              "key": 353121,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 519797,
          required: false,
        },
      ],
      customerMetadata: {
        "key": "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 596791,
    maxPage: 772402,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |