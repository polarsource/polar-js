# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2024-09-01T06:14:13.897Z"),
      modifiedAt: new Date("2024-09-18T22:39:55.324Z"),
      id: "<value>",
      status: "open",
      clientSecret: "<value>",
      url: "https://infamous-appliance.name",
      expiresAt: new Date("2022-05-08T21:46:59.571Z"),
      successUrl: "https://likable-exterior.org/",
      embedOrigin: "<value>",
      amount: 315591,
      taxAmount: 822577,
      currency: "UAE Dirham",
      subtotalAmount: 949209,
      totalAmount: 54329,
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
      customerEmail: "Albin_Bechtelar-Heller32@gmail.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Democratic Republic of the Congo",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": false,
      },
      product: {
        createdAt: new Date("2023-02-19T14:14:08.755Z"),
        modifiedAt: new Date("2024-06-18T00:47:07.924Z"),
        id: "<value>",
        name: "<value>",
        description: "ha cap than times thankfully lost fooey late",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-08-16T05:27:11.731Z"),
            modifiedAt: new Date("2022-03-23T09:50:56.423Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-05-13T02:15:57.626Z"),
            modifiedAt: new Date("2024-07-25T14:24:23.868Z"),
            id: "<value>",
            type: "github_repository",
            description: "like um clonk",
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
            path: "/usr/include",
            mimeType: "<value>",
            size: 58312,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-08-13T14:34:33.232Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-08-29T16:35:03.394Z"),
            sizeReadable: "<value>",
            publicUrl: "https://sizzling-technician.org/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-10-10T14:33:56.119Z"),
        modifiedAt: new Date("2022-02-25T08:29:39.215Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 272025,
        recurringInterval: "year",
      },
      discount: {
        duration: "once",
        type: "fixed",
        basisPoints: 194538,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-07-07T18:19:06.566Z"),
            modifiedAt: new Date("2024-09-12T13:15:58.455Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 715345,
          required: false,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 572670,
    maxPage: 328580,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |