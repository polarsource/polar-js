# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutupdatedpayload.js";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2023-06-24T10:10:57.419Z"),
    modifiedAt: new Date("2024-10-25T20:38:50.367Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "open",
    clientSecret: "<value>",
    url: "https://private-sightseeing.info",
    expiresAt: new Date("2025-09-29T16:33:31.185Z"),
    successUrl: "https://frail-provider.info/",
    embedOrigin: "<value>",
    amount: 172951,
    discountAmount: 107210,
    netAmount: 817339,
    taxAmount: 473143,
    totalAmount: 882284,
    currency: "Saudi Riyal",
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
    subtotalAmount: 373511,
    metadata: {
      "key": 889060,
    },
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2025-03-19T01:22:32.739Z"),
        modifiedAt: new Date("2023-01-06T15:32:36.859Z"),
        id: "<value>",
        name: "<value>",
        description:
          "ick discourse besides forsaken coordinated married aside before",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-04-16T17:02:36.383Z"),
            modifiedAt: new Date("2025-08-04T08:43:55.043Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-02-08T05:42:05.758Z"),
            modifiedAt: new Date("2024-01-11T04:58:25.949Z"),
            id: "<value>",
            type: "downloadables",
            description: "serpentine along consequently incidentally cop",
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
            path: "/Network",
            mimeType: "<value>",
            size: 480061,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-07-26T07:18:50.610Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-07-24T13:15:12.012Z"),
            sizeReadable: "<value>",
            publicUrl: "https://electric-onset.com",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2024-05-18T00:44:35.528Z"),
      modifiedAt: new Date("2023-12-20T06:39:40.985Z"),
      id: "<value>",
      name: "<value>",
      description: "voluntarily positively upbeat merge mozzarella",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-02-18T04:43:47.150Z"),
          modifiedAt: new Date("2025-08-21T22:55:59.122Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-02-03T14:30:29.574Z"),
          modifiedAt: new Date("2023-09-03T22:58:32.332Z"),
          id: "<value>",
          type: "license_keys",
          description:
            "devastation spanish boldly cauliflower horst miserably normal",
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
          size: 418637,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-01-06T19:40:31.772Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-01-13T10:41:07.081Z"),
          sizeReadable: "<value>",
          publicUrl: "https://bouncy-atrium.org",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-01-01T17:28:17.780Z"),
      modifiedAt: new Date("2025-10-29T01:37:46.884Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 691508,
    },
    discount: {
      duration: "once",
      type: "percentage",
      amount: 639463,
      currency: "Moroccan Dirham",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-04-28T20:28:23.222Z"),
          modifiedAt: new Date("2023-06-04T11:44:43.665Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 861123,
        required: false,
      },
    ],
    customerMetadata: {
      "key": 42906,
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | checkout.updated                                           |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |                                                            |