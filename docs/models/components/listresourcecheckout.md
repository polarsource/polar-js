# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2024-05-07T05:35:16.378Z"),
      modifiedAt: new Date("2024-09-20T00:42:57.803Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "failed",
      clientSecret: "<value>",
      url: "https://ill-councilman.info/",
      expiresAt: new Date("2023-05-18T21:21:15.558Z"),
      successUrl: "https://noted-opera.biz",
      embedOrigin: "<value>",
      amount: 432356,
      taxAmount: 41429,
      currency: "Argentine Peso",
      subtotalAmount: 309463,
      totalAmount: 489143,
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
      customerEmail: "Nina_Roob63@hotmail.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Ethiopia",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": 813932,
      },
      product: {
        createdAt: new Date("2024-03-18T00:45:59.898Z"),
        modifiedAt: new Date("2025-11-25T21:42:37.967Z"),
        id: "<value>",
        name: "<value>",
        description: "boyfriend cruel so ethical than lawmaker considering out",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-06-08T15:08:25.512Z"),
            modifiedAt: new Date("2025-04-13T12:39:06.195Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 325517,
            maximumAmount: 792152,
            presetAmount: 782688,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-07-28T16:37:36.522Z"),
            modifiedAt: new Date("2024-12-17T02:52:59.182Z"),
            id: "<value>",
            type: "discord",
            description: "only dilate paintwork",
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
            path: "/usr/libexec",
            mimeType: "<value>",
            size: 84703,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-02-24T04:43:08.800Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-12-07T15:23:54.021Z"),
            sizeReadable: "<value>",
            publicUrl: "https://lavish-instance.net/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-01-03T09:52:28.755Z"),
        modifiedAt: new Date("2024-06-21T20:41:18.482Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      discount: {
        duration: "forever",
        durationInMonths: 69878,
        type: "percentage",
        basisPoints: 13223,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-06-30T04:04:20.139Z"),
            modifiedAt: new Date("2025-03-23T22:47:32.575Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 104097,
          required: false,
        },
      ],
      customerMetadata: {
        "key": false,
      },
    },
  ],
  pagination: {
    totalCount: 9822,
    maxPage: 873132,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |