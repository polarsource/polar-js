# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2024-01-07T10:24:38.476Z"),
      modifiedAt: new Date("2024-06-12T02:00:00.189Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "expired",
      clientSecret: "<value>",
      url: "https://self-assured-tinderbox.net",
      expiresAt: new Date("2023-04-28T10:21:01.587Z"),
      successUrl: "https://indelible-disposer.name",
      embedOrigin: "<value>",
      amount: 302190,
      taxAmount: 530856,
      currency: "Mauritius Rupee",
      subtotalAmount: 529067,
      totalAmount: 10686,
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
        country: "Greece",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
      },
      metadata: {
        "key": false,
      },
      product: {
        createdAt: new Date("2024-01-16T04:44:34.885Z"),
        modifiedAt: new Date("2024-07-12T06:43:06.103Z"),
        id: "<value>",
        name: "<value>",
        description: "on brave whoa down ugh",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-02-04T17:55:16.587Z"),
            modifiedAt: new Date("2025-04-14T16:58:20.839Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 806504,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-04-07T08:31:51.847Z"),
            modifiedAt: new Date("2025-09-20T05:01:32.162Z"),
            id: "<value>",
            type: "license_keys",
            description:
              "handy into so beside worth aha viciously strange woot afterwards",
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
            path: "/System",
            mimeType: "<value>",
            size: 332909,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-12-25T02:34:45.807Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-04-18T05:33:58.255Z"),
            sizeReadable: "<value>",
            publicUrl: "https://mammoth-carboxyl.org",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-09-26T18:12:09.961Z"),
        modifiedAt: new Date("2024-05-07T05:35:16.378Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 573020,
        maximumAmount: 919676,
        presetAmount: 284514,
        recurringInterval: "month",
      },
      discount: {
        duration: "forever",
        type: "fixed",
        amount: 548083,
        currency: "Pataca",
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-09-10T11:11:20.378Z"),
            modifiedAt: new Date("2024-04-18T20:40:59.134Z"),
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
          order: 40256,
          required: false,
        },
      ],
      customerMetadata: {
        "key": "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 489143,
    maxPage: 692974,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |