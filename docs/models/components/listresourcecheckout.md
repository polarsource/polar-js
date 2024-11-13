# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2022-06-05T03:18:14.991Z"),
      modifiedAt: new Date("2024-04-15T20:33:21.883Z"),
      id: "<value>",
      status: "confirmed",
      clientSecret: "<value>",
      url: "https://grim-coast.biz",
      expiresAt: new Date("2022-03-05T03:05:50.686Z"),
      successUrl: "https://silent-stool.net",
      embedOrigin: "<value>",
      amount: 167786,
      taxAmount: 735959,
      currency: "Tugrik",
      totalAmount: 108673,
      productId: "<value>",
      productPriceId: "<value>",
      isPaymentRequired: false,
      customerId: "<value>",
      customerName: "<value>",
      customerEmail: "Sterling9@hotmail.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Venezuela",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": "<value>",
      },
      product: {
        createdAt: new Date("2023-06-10T09:07:09.454Z"),
        modifiedAt: new Date("2022-04-27T05:09:55.285Z"),
        id: "<value>",
        name: "<value>",
        description: "highlight ouch thyme override bah zowie",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-04-13T13:33:13.010Z"),
            modifiedAt: new Date("2024-09-05T19:40:25.993Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-01-22T23:18:37.610Z"),
            modifiedAt: new Date("2023-03-02T13:30:13.678Z"),
            id: "<value>",
            description: "atop beneficial ugh ravage warped so obediently",
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
            path: "/boot",
            mimeType: "<value>",
            size: 714830,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-11-10T12:13:29.060Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-02-17T11:30:13.324Z"),
            sizeReadable: "<value>",
            publicUrl: "https://milky-whack.info/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-10-14T00:00:36.097Z"),
        modifiedAt: new Date("2022-07-14T00:14:45.565Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-11-18T13:27:48.229Z"),
            modifiedAt: new Date("2024-06-01T22:41:03.562Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 500101,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 208959,
    maxPage: 854604,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `items`                                                                                              | [components.PolarCheckoutSchemasCheckout](../../models/components/polarcheckoutschemascheckout.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `pagination`                                                                                         | [components.Pagination](../../models/components/pagination.md)                                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |