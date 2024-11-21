# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2024-04-27T04:38:56.421Z"),
      modifiedAt: new Date("2022-05-05T15:41:13.291Z"),
      id: "<value>",
      status: "confirmed",
      clientSecret: "<value>",
      url: "https://mixed-bran.com",
      expiresAt: new Date("2023-11-07T03:41:27.826Z"),
      successUrl: "https://yummy-metabolite.biz",
      embedOrigin: "<value>",
      amount: 405076,
      taxAmount: 106639,
      currency: "Jamaican Dollar",
      subtotalAmount: 840168,
      totalAmount: 390200,
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
      customerEmail: "Cassandre.Pollich81@gmail.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Marshall Islands",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": "<value>",
      },
      product: {
        createdAt: new Date("2024-01-30T15:45:00.257Z"),
        modifiedAt: new Date("2023-02-16T17:45:29.595Z"),
        id: "<value>",
        name: "<value>",
        description:
          "unless tattered hourly or huzzah vanish obnoxiously beside eternity",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-07-07T18:19:06.566Z"),
            modifiedAt: new Date("2024-09-12T13:15:58.455Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 770755,
            maximumAmount: 715345,
            presetAmount: 572670,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-10-11T15:40:30.871Z"),
            modifiedAt: new Date("2022-08-02T09:03:13.181Z"),
            id: "<value>",
            type: "articles",
            description: "best-seller teeming anneal masquerade",
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
            path: "/bin",
            mimeType: "<value>",
            size: 344026,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-10-14T16:34:12.050Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-03-04T12:22:36.931Z"),
            sizeReadable: "<value>",
            publicUrl: "https://curly-tuxedo.info/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-09-20T10:21:04.413Z"),
        modifiedAt: new Date("2022-05-20T04:35:09.735Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      discount: {
        duration: "repeating",
        durationInMonths: 404610,
        type: "percentage",
        basisPoints: 424886,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-04-16T03:53:33.652Z"),
            modifiedAt: new Date("2024-03-26T21:37:08.155Z"),
            id: "<value>",
            metadata: {
              "key": 455640,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 464806,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 298444,
    maxPage: 265724,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |