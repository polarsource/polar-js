# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components/listresourcecheckout.js";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2023-10-19T20:54:38.500Z"),
      modifiedAt: new Date("2025-11-10T21:53:44.732Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "expired",
      clientSecret: "<value>",
      url: "https://busy-fowl.net",
      expiresAt: new Date("2024-01-26T08:10:24.945Z"),
      successUrl: "https://made-up-hierarchy.net",
      embedOrigin: "<value>",
      amount: 275495,
      discountAmount: 715146,
      netAmount: 210725,
      taxAmount: 887156,
      totalAmount: 913544,
      currency: "Cape Verde Escudo",
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
        country: "SE",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
      },
      metadata: {
        "key": 5363.46,
      },
      customerExternalId: "<id>",
      products: [
        {
          createdAt: new Date("2024-01-02T17:36:14.350Z"),
          modifiedAt: new Date("2024-09-04T04:47:52.343Z"),
          id: "<value>",
          name: "<value>",
          description: "indeed barring concrete um",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-09-08T08:57:23.761Z"),
              modifiedAt: new Date("2023-01-17T15:50:29.162Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 882654,
              maximumAmount: 486763,
              presetAmount: 632408,
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2025-05-10T06:32:16.376Z"),
              modifiedAt: new Date("2024-05-10T04:40:56.406Z"),
              type: "discord",
              description:
                "huzzah upright roundabout rudely among millet elastic",
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
              path: "/private/tmp",
              mimeType: "<value>",
              size: 760121,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-07-12T05:47:29.863Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-12-14T06:22:35.975Z"),
              sizeReadable: "<value>",
              publicUrl: "https://wealthy-divine.org/",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2023-01-05T19:03:35.199Z"),
        modifiedAt: new Date("2025-01-28T09:28:09.661Z"),
        id: "<value>",
        name: "<value>",
        description: "tinted however overplay fake",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-11-26T22:05:55.921Z"),
            modifiedAt: new Date("2023-01-06T10:52:34.643Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2023-03-09T11:02:40.163Z"),
            modifiedAt: new Date("2025-01-04T12:38:45.703Z"),
            type: "custom",
            description: "midst regularly celebrate",
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
            path: "/home/user",
            mimeType: "<value>",
            size: 646308,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-07-01T14:06:08.451Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-07-21T20:20:00.329Z"),
            sizeReadable: "<value>",
            publicUrl: "https://little-bench.net/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-10-23T18:30:39.059Z"),
        modifiedAt: new Date("2025-06-13T22:25:10.289Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
      },
      discount: {
        duration: "repeating",
        durationInMonths: 940122,
        type: "fixed",
        basisPoints: 534981,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-05-30T17:34:30.834Z"),
            modifiedAt: new Date("2023-07-21T14:44:50.643Z"),
            id: "<value>",
            metadata: {
              "key": 2811.21,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {
              options: [
                {
                  value: "<value>",
                  label: "<value>",
                },
              ],
            },
          },
          order: 595851,
          required: false,
        },
      ],
      customerMetadata: {
        "key": "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 314491,
    maxPage: 982317,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |