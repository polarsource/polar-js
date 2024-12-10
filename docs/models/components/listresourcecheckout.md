# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2022-07-31T07:38:02.828Z"),
      modifiedAt: new Date("2023-05-25T01:30:05.067Z"),
      id: "<value>",
      status: "expired",
      clientSecret: "<value>",
      url: "https://aggravating-middle.name",
      expiresAt: new Date("2024-12-18T17:37:50.504Z"),
      successUrl: "https://minor-electronics.com",
      embedOrigin: "<value>",
      amount: 240781,
      taxAmount: 847436,
      currency: "Rand",
      subtotalAmount: 701054,
      totalAmount: 603854,
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
      customerEmail: "Mabel.Hills97@yahoo.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Russian Federation",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": 64760,
      },
      product: {
        createdAt: new Date("2023-01-31T14:30:14.581Z"),
        modifiedAt: new Date("2022-05-21T02:56:06.369Z"),
        id: "<value>",
        name: "<value>",
        description: "hm angrily posh",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-08-03T07:01:35.853Z"),
            modifiedAt: new Date("2023-03-11T20:41:59.793Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 735432,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-01-01T08:03:47.357Z"),
            modifiedAt: new Date("2022-01-19T11:56:59.634Z"),
            id: "<value>",
            type: "license_keys",
            description: "blushing loyally baptise yum",
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
            path: "/Applications",
            mimeType: "<value>",
            size: 240572,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-02-23T07:16:31.361Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-02-19T14:14:08.755Z"),
            sizeReadable: "<value>",
            publicUrl: "https://short-term-monster.com",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2022-10-13T03:45:21.275Z"),
        modifiedAt: new Date("2023-10-22T22:32:58.315Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 706780,
        maximumAmount: 467504,
        presetAmount: 641831,
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        amount: 772987,
        currency: "Brunei Dollar",
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-01-30T02:00:47.187Z"),
            modifiedAt: new Date("2023-07-27T10:07:41.065Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 60659,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 616016,
    maxPage: 796892,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |