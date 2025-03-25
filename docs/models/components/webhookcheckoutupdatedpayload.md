# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutupdatedpayload.js";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2025-06-17T17:52:12.552Z"),
    modifiedAt: new Date("2023-11-23T19:31:13.111Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "open",
    clientSecret: "<value>",
    url: "https://stylish-character.biz/",
    expiresAt: new Date("2023-03-17T11:04:55.466Z"),
    successUrl: "https://immense-experience.net",
    embedOrigin: "<value>",
    amount: 335977,
    taxAmount: 727772,
    currency: "Lilangeni",
    subtotalAmount: 217663,
    totalAmount: 973819,
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
      country: "US",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {
      "key": "<value>",
    },
    metadata: {
      "key": "<value>",
    },
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2023-07-17T01:20:07.188Z"),
        modifiedAt: new Date("2024-01-14T16:10:50.825Z"),
        id: "<value>",
        name: "<value>",
        description: "nor mmm elevator utter heavily deed",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-06-05T12:07:56.121Z"),
            modifiedAt: new Date("2025-02-15T19:29:46.908Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 520081,
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
    ],
    product: {
      createdAt: new Date("2025-07-30T11:12:19.561Z"),
      modifiedAt: new Date("2023-06-16T14:55:27.064Z"),
      id: "<value>",
      name: "<value>",
      description: "within whether but",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-04-11T20:19:47.022Z"),
          modifiedAt: new Date("2023-01-19T16:45:32.510Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 552439,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-11-21T08:39:51.922Z"),
          modifiedAt: new Date("2025-10-15T12:05:17.265Z"),
          id: "<value>",
          type: "discord",
          description: "as about quietly for graceful grouper at bah poorly",
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
          path: "/opt/share",
          mimeType: "<value>",
          size: 798690,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-10-09T02:34:28.117Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-11-24T20:56:14.878Z"),
          sizeReadable: "<value>",
          publicUrl: "https://low-mortise.org/",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-10-17T02:08:42.808Z"),
      modifiedAt: new Date("2025-11-01T07:26:05.631Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 925395,
      maximumAmount: 664666,
      presetAmount: 423054,
    },
    discount: {
      duration: "forever",
      type: "percentage",
      amount: 649534,
      currency: "Vatu",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-06-13T12:01:45.796Z"),
          modifiedAt: new Date("2025-09-25T22:48:13.771Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 369523,
        required: false,
      },
    ],
    customerMetadata: {
      "key": 560451,
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | checkout.updated                                           |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |                                                            |