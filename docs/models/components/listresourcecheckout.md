# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2025-01-07T06:50:44.539Z"),
      modifiedAt: new Date("2024-08-05T05:38:05.357Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "failed",
      clientSecret: "<value>",
      url: "https://muffled-exploration.name/",
      expiresAt: new Date("2023-08-11T18:26:01.453Z"),
      successUrl: "https://jealous-hose.net",
      embedOrigin: "<value>",
      amount: 907519,
      discountAmount: 493974,
      netAmount: 771289,
      taxAmount: 143941,
      totalAmount: 252409,
      currency: "Guarani",
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
        country: "FR",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
      },
      subtotalAmount: 117208,
      metadata: {
        "key": "<value>",
      },
      customerExternalId: "<id>",
      products: [
        {
          createdAt: new Date("2025-12-04T20:22:38.087Z"),
          modifiedAt: new Date("2023-04-10T23:52:52.292Z"),
          id: "<value>",
          name: "<value>",
          description: "enchanting painfully er",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-11-04T14:16:30.505Z"),
              modifiedAt: new Date("2024-07-07T15:12:48.113Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 6292,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-11-05T01:06:59.977Z"),
              modifiedAt: new Date("2024-09-21T18:02:02.726Z"),
              id: "<value>",
              type: "github_repository",
              description: "genuine t-shirt where",
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
              path: "/usr/local/src",
              mimeType: "<value>",
              size: 721978,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-12-28T05:16:15.334Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-12-23T08:38:56.825Z"),
              sizeReadable: "<value>",
              publicUrl: "https://stale-permafrost.net/",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2025-12-22T00:38:48.493Z"),
        modifiedAt: new Date("2025-07-05T22:25:57.932Z"),
        id: "<value>",
        name: "<value>",
        description: "accomplished since evil going between when",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-02-20T00:32:42.159Z"),
            modifiedAt: new Date("2025-05-13T05:22:03.123Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-07-12T15:55:58.752Z"),
            modifiedAt: new Date("2025-05-09T07:26:43.620Z"),
            id: "<value>",
            type: "discord",
            description: "earth meh yowza tightly slap whenever",
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
            path: "/usr/obj",
            mimeType: "<value>",
            size: 957425,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-12-26T16:52:12.542Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-08-28T06:32:45.499Z"),
            sizeReadable: "<value>",
            publicUrl: "https://miserable-recommendation.info/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-06-27T17:02:16.887Z"),
        modifiedAt: new Date("2024-08-26T12:14:31.680Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        basisPoints: 2011,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-01-13T03:45:06.715Z"),
            modifiedAt: new Date("2024-03-13T10:38:44.143Z"),
            id: "<value>",
            metadata: {
              "key": 844364,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 736793,
          required: false,
        },
      ],
      customerMetadata: {
        "key": "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 408093,
    maxPage: 2726,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |