# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2025-06-07T11:46:11.561Z"),
      modifiedAt: new Date("2025-06-29T03:29:33.064Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "failed",
      clientSecret: "<value>",
      url: "https://dependent-makeover.biz/",
      expiresAt: new Date("2025-05-10T08:15:00.850Z"),
      successUrl: "https://instructive-sauerkraut.com/",
      embedOrigin: "<value>",
      amount: 686979,
      taxAmount: 231063,
      currency: "Brazilian Real",
      subtotalAmount: 307887,
      totalAmount: 19336,
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
        country: "Netherlands",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
      },
      metadata: {
        "key": "<value>",
      },
      product: {
        createdAt: new Date("2025-12-25T02:34:45.807Z"),
        modifiedAt: new Date("2023-04-18T05:33:58.255Z"),
        id: "<value>",
        name: "<value>",
        description:
          "meanwhile whoa and shabby vulgarise geez worth hearten eek for",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-10-07T15:41:56.971Z"),
            modifiedAt: new Date("2024-12-15T23:17:13.004Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-11-13T04:25:08.475Z"),
            modifiedAt: new Date("2023-12-24T03:11:43.574Z"),
            id: "<value>",
            type: "ads",
            description:
              "considering out scarification optimal fowl boggle bowed",
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
            path: "/opt/bin",
            mimeType: "<value>",
            size: 977776,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-01-03T12:45:05.812Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-05-17T23:11:42.440Z"),
            sizeReadable: "<value>",
            publicUrl: "https://superb-elevator.net/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-12-16T23:24:22.047Z"),
        modifiedAt: new Date("2025-06-04T17:43:22.991Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 402947,
        maximumAmount: 69878,
        presetAmount: 708387,
        recurringInterval: "month",
      },
      discount: {
        duration: "forever",
        durationInMonths: 741743,
        type: "fixed",
        amount: 104097,
        currency: "Somoni",
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-08-14T22:50:28.709Z"),
            modifiedAt: new Date("2023-04-27T17:18:40.571Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 166229,
          required: false,
        },
      ],
      customerMetadata: {
        "key": "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 794779,
    maxPage: 810982,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |