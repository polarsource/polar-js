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
      requireBillingAddress: false,
      isDiscountApplicable: false,
      isFreeProductPrice: false,
      isPaymentRequired: false,
      isPaymentSetupRequired: false,
      isPaymentFormRequired: false,
      customerId: "<value>",
      isBusinessCustomer: false,
      customerName: "<value>",
      customerEmail: "<value>",
      customerIpAddress: "<value>",
      customerBillingName: "<value>",
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
              priceAmount: 882654,
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2024-06-17T11:48:54.347Z"),
              modifiedAt: new Date("2024-11-24T02:52:03.483Z"),
              type: "license_keys",
              description: "lest hmph whoever unfortunately slink phew",
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
              size: 573857,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-08-02T20:04:15.869Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-10-22T17:10:25.847Z"),
              sizeReadable: "<value>",
              publicUrl: "https://perky-sonar.net/",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2023-08-28T10:13:16.907Z"),
        modifiedAt: new Date("2024-06-03T02:14:31.608Z"),
        id: "<value>",
        name: "<value>",
        description:
          "after outrageous freely possession yearly yuck cruelly tempting pivot",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-02-21T17:18:12.201Z"),
            modifiedAt: new Date("2023-07-29T08:28:06.616Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2024-12-09T08:29:16.197Z"),
            modifiedAt: new Date("2025-07-01T14:06:08.451Z"),
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
      customerBillingAddressFields: {
        country: false,
        state: false,
        city: false,
        postalCode: false,
        line1: false,
        line2: false,
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