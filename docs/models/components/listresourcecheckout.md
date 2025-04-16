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
      subtotalAmount: 693515,
      metadata: {
        "key": 3346.11,
      },
      customerExternalId: "<id>",
      products: [
        {
          createdAt: new Date("2024-09-04T04:47:52.343Z"),
          modifiedAt: new Date("2023-08-12T14:27:06.165Z"),
          id: "<value>",
          name: "<value>",
          description:
            "meander apparatus per dulcimer underneath after junior taxicab tool",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-07-30T14:34:32.723Z"),
              modifiedAt: new Date("2023-09-24T06:24:36.652Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 659843,
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2023-08-13T01:32:50.426Z"),
              modifiedAt: new Date("2024-06-17T21:55:49.924Z"),
              metadata: {
                "key": false,
              },
              type: "github_repository",
              description: "millet elastic draft tool",
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
              path: "/usr/bin",
              mimeType: "<value>",
              size: 586100,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-04-16T10:45:10.208Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-07-28T10:37:05.600Z"),
              sizeReadable: "<value>",
              publicUrl: "https://bulky-bungalow.biz",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2023-10-24T07:33:53.184Z"),
        modifiedAt: new Date("2025-07-28T08:37:12.823Z"),
        id: "<value>",
        name: "<value>",
        description: "overplay fake while not diligently",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-12-24T12:42:50.908Z"),
            modifiedAt: new Date("2024-11-05T15:45:31.229Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 517497,
            maximumAmount: 380220,
            presetAmount: 191015,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2023-05-08T12:45:38.459Z"),
            modifiedAt: new Date("2023-08-24T21:34:16.535Z"),
            metadata: {
              "key": 8326.53,
            },
            type: "downloadables",
            description: "throughout obediently pfft bobble",
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
            path: "/etc",
            mimeType: "<value>",
            size: 182711,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-12-20T03:40:24.645Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-03-31T16:23:44.219Z"),
            sizeReadable: "<value>",
            publicUrl: "https://yummy-median.com/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-01-31T14:34:19.644Z"),
        modifiedAt: new Date("2025-10-27T14:40:18.733Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        unitAmount: "<value>",
        capAmount: 6484,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
      discount: {
        duration: "repeating",
        type: "fixed",
        amount: 27348,
        currency: "CFA Franc BCEAO",
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-08-07T18:26:43.814Z"),
            modifiedAt: new Date("2023-01-17T16:46:59.172Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 605021,
          required: false,
        },
      ],
      customerMetadata: {
        "key": 484453,
      },
    },
  ],
  pagination: {
    totalCount: 297689,
    maxPage: 522680,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |