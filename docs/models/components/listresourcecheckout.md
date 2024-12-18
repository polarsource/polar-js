# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2024-03-15T06:55:36.691Z"),
      modifiedAt: new Date("2022-03-11T06:32:22.622Z"),
      id: "<value>",
      status: "expired",
      clientSecret: "<value>",
      url: "https://puny-t-shirt.com/",
      expiresAt: new Date("2024-06-13T14:44:19.237Z"),
      successUrl: "https://ample-rubric.name",
      embedOrigin: "<value>",
      amount: 799929,
      taxAmount: 408868,
      currency: "Kina",
      subtotalAmount: 198804,
      totalAmount: 191844,
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
      customerEmail: "Josiane42@yahoo.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Bonaire, Sint Eustatius and Saba",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": "<value>",
      },
      product: {
        createdAt: new Date("2024-01-20T08:30:25.562Z"),
        modifiedAt: new Date("2022-10-06T03:14:11.675Z"),
        id: "<value>",
        name: "<value>",
        description: "astride yahoo lotion daddy",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-05-21T04:29:40.711Z"),
            modifiedAt: new Date("2023-02-27T13:23:36.620Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-06-22T00:09:40.274Z"),
            modifiedAt: new Date("2022-07-19T21:06:20.014Z"),
            id: "<value>",
            type: "downloadables",
            description:
              "but quizzically questionably pale whereas jet likewise miserable captain",
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
            path: "/media",
            mimeType: "<value>",
            size: 692805,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-07-29T22:36:00.302Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-05-25T01:58:48.147Z"),
            sizeReadable: "<value>",
            publicUrl: "https://that-desk.biz/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-10-05T12:58:35.956Z"),
        modifiedAt: new Date("2024-10-09T07:53:41.828Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 681972,
        maximumAmount: 561972,
        presetAmount: 711598,
        recurringInterval: "year",
      },
      discount: {
        duration: "forever",
        durationInMonths: 807291,
        type: "percentage",
        basisPoints: 696477,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2022-11-03T20:32:51.033Z"),
            modifiedAt: new Date("2023-11-30T08:31:54.256Z"),
            id: "<value>",
            metadata: {
              "key": 23910,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 747110,
          required: false,
        },
      ],
      customerMetadata: {
        "key": "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 54490,
    maxPage: 153199,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |