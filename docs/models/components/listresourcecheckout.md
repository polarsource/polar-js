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
        "key": 334611,
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
              createdAt: new Date("2023-08-13T01:32:50.426Z"),
              modifiedAt: new Date("2024-06-17T21:55:49.924Z"),
              id: "<value>",
              type: "license_keys",
              description: "guest remarkable versus ack bulky",
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
              path: "/etc/defaults",
              mimeType: "<value>",
              size: 183678,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-10-24T07:33:53.184Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-07-28T08:37:12.823Z"),
              sizeReadable: "<value>",
              publicUrl: "https://orderly-fork.name/",
            },
          ],
        },
      ],
      product: {
        createdAt: new Date("2023-11-14T10:10:53.080Z"),
        modifiedAt: new Date("2025-02-02T15:35:18.251Z"),
        id: "<value>",
        name: "<value>",
        description: "unselfish unlike daintily",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-09-09T09:57:00.537Z"),
            modifiedAt: new Date("2024-09-09T14:31:32.319Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 172644,
            maximumAmount: 674706,
            presetAmount: 931131,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-02-03T01:41:33.067Z"),
            modifiedAt: new Date("2024-12-24T12:42:50.908Z"),
            id: "<value>",
            type: "downloadables",
            description:
              "pry whenever suffocate gee a boom hm cow nightlife prance",
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
            path: "/private/var",
            mimeType: "<value>",
            size: 271010,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-12-11T18:33:39.319Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-01-10T13:27:13.998Z"),
            sizeReadable: "<value>",
            publicUrl: "https://lovable-possession.net/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-11-18T21:42:11.803Z"),
        modifiedAt: new Date("2023-01-18T15:03:21.345Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        basisPoints: 896435,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-01-08T06:21:14.768Z"),
            modifiedAt: new Date("2024-07-28T08:10:35.846Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 13865,
          required: false,
        },
      ],
      customerMetadata: {
        "key": 502726,
      },
    },
  ],
  pagination: {
    totalCount: 662411,
    maxPage: 648659,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Checkout](../../models/components/checkout.md)[]   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |