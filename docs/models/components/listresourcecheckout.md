# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2024-03-06T08:29:05.090Z"),
      modifiedAt: new Date("2024-10-19T17:10:22.055Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "succeeded",
      clientSecret: "<value>",
      url: "https://other-governance.net",
      expiresAt: new Date("2023-09-21T03:37:48.018Z"),
      successUrl: "https://blaring-skean.com/",
      embedOrigin: "<value>",
      amount: 298797,
      discountAmount: 925633,
      netAmount: 559410,
      taxAmount: 217880,
      totalAmount: 992888,
      currency: "Hryvnia",
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
        country: "US",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
      },
      subtotalAmount: 230285,
      metadata: {
        "key": 198803,
      },
      customerExternalId: "<id>",
      products: [
        {
          createdAt: new Date("2024-08-11T17:55:42.095Z"),
          modifiedAt: new Date("2023-07-01T18:48:05.220Z"),
          id: "<value>",
          name: "<value>",
          description:
            "debut stealthily within footrest flustered as labourer boohoo",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-06-14T03:51:01.506Z"),
              modifiedAt: new Date("2024-10-01T20:58:37.340Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-05-23T21:49:23.366Z"),
              modifiedAt: new Date("2023-10-26T04:43:10.285Z"),
              id: "<value>",
              type: "downloadables",
              description: "nor cop vivaciously",
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
              path: "/usr/share",
              mimeType: "<value>",
              size: 706234,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-10-23T21:46:41.858Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-05-21T15:27:54.009Z"),
              sizeReadable: "<value>",
              publicUrl: "https://accomplished-metabolite.net",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2024-02-24T18:44:40.406Z"),
        modifiedAt: new Date("2025-08-09T05:43:20.222Z"),
        id: "<value>",
        name: "<value>",
        description: "quarrel finally altruistic inside sensitize lest",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-06-16T02:33:31.041Z"),
            modifiedAt: new Date("2023-11-06T01:22:31.085Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-08-28T01:07:17.997Z"),
            modifiedAt: new Date("2023-02-11T10:30:57.987Z"),
            id: "<value>",
            type: "downloadables",
            description: "for at that before exalted nervous",
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
            path: "/sys",
            mimeType: "<value>",
            size: 513534,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-05-07T05:20:25.129Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-08-30T05:42:17.674Z"),
            sizeReadable: "<value>",
            publicUrl: "https://winged-flu.info/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-03-18T12:35:36.869Z"),
        modifiedAt: new Date("2023-07-16T02:04:19.627Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      discount: {
        duration: "repeating",
        type: "fixed",
        amount: 83016,
        currency: "Nuevo Sol",
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-08-24T17:05:53.201Z"),
            modifiedAt: new Date("2023-06-26T16:20:01.687Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 981974,
          required: false,
        },
      ],
      customerMetadata: {
        "key": "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 841413,
    maxPage: 489790,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |