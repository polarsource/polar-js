# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2023-01-13T06:58:49.050Z"),
      modifiedAt: new Date("2022-10-26T18:02:39.058Z"),
      id: "<value>",
      status: "expired",
      clientSecret: "<value>",
      url: "https://supportive-programme.net/",
      expiresAt: new Date("2024-10-10T22:47:15.949Z"),
      successUrl: "https://white-unique.biz",
      embedOrigin: "<value>",
      amount: 392307,
      taxAmount: 575206,
      currency: "Guarani",
      totalAmount: 464706,
      productId: "<value>",
      productPriceId: "<value>",
      isPaymentRequired: false,
      customerId: "<value>",
      customerName: "<value>",
      customerEmail: "Lonzo31@hotmail.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Bangladesh",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": "<value>",
      },
      product: {
        createdAt: new Date("2024-11-18T10:26:54.805Z"),
        modifiedAt: new Date("2023-06-07T21:49:43.015Z"),
        id: "<value>",
        name: "<value>",
        description: "before bashfully able whenever since coordinated",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-09-10T05:55:09.703Z"),
            modifiedAt: new Date("2023-01-05T14:54:34.065Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 160733,
            maximumAmount: 173052,
            presetAmount: 57599,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-03-26T08:49:10.019Z"),
            modifiedAt: new Date("2024-07-27T23:23:21.475Z"),
            id: "<value>",
            description: "gee from translation onset serene where before soon",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              paidArticles: false,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/dev",
            mimeType: "<value>",
            size: 894398,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-08-29T00:14:02.289Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-02-26T22:59:52.460Z"),
            sizeReadable: "<value>",
            publicUrl: "https://unknown-crocodile.net",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-07-12T02:38:25.234Z"),
        modifiedAt: new Date("2022-05-24T18:23:37.331Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 358724,
        maximumAmount: 940490,
        presetAmount: 180628,
        recurringInterval: "month",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2022-10-01T23:26:22.306Z"),
            modifiedAt: new Date("2022-06-30T14:38:50.223Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 190514,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 985677,
    maxPage: 413308,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `items`                                                                                              | [components.PolarCheckoutSchemasCheckout](../../models/components/polarcheckoutschemascheckout.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `pagination`                                                                                         | [components.Pagination](../../models/components/pagination.md)                                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |