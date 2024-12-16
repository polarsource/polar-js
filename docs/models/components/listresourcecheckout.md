# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2023-08-03T00:03:08.625Z"),
      modifiedAt: new Date("2023-12-02T16:19:30.816Z"),
      id: "<value>",
      status: "succeeded",
      clientSecret: "<value>",
      url: "https://lovable-earth.biz",
      expiresAt: new Date("2024-10-03T19:13:09.978Z"),
      successUrl: "https://grim-pomelo.name/",
      embedOrigin: "<value>",
      amount: 433219,
      taxAmount: 104232,
      currency: "Pula",
      subtotalAmount: 696523,
      totalAmount: 483697,
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
      customerEmail: "Garnett_Paucek7@yahoo.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Bahrain",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": "<value>",
      },
      product: {
        createdAt: new Date("2024-04-30T12:02:00.102Z"),
        modifiedAt: new Date("2024-07-21T15:37:23.186Z"),
        id: "<value>",
        name: "<value>",
        description: "handy ew ew svelte contravene till",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-12-25T14:56:54.919Z"),
            modifiedAt: new Date("2023-07-28T06:25:49.081Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 759383,
            maximumAmount: 24739,
            presetAmount: 191117,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-06-30T12:33:10.822Z"),
            modifiedAt: new Date("2022-03-25T20:38:42.925Z"),
            id: "<value>",
            type: "ads",
            description: "nearly failing ew",
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
            path: "/var",
            mimeType: "<value>",
            size: 688951,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-01-23T04:47:20.654Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-01-29T02:45:28.314Z"),
            sizeReadable: "<value>",
            publicUrl: "https://stylish-tomography.com/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2022-08-04T01:57:53.457Z"),
        modifiedAt: new Date("2024-07-07T16:18:32.623Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      discount: {
        duration: "once",
        type: "percentage",
        basisPoints: 215865,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-06-04T09:11:48.275Z"),
            modifiedAt: new Date("2024-03-03T17:17:02.302Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {
              options: [
                {
                  value: "<value>",
                  label: "<value>",
                },
              ],
            },
          },
          order: 952546,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 204489,
    maxPage: 220384,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |