# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2023-03-06T03:42:09.340Z"),
    modifiedAt: new Date("2024-05-30T19:12:44.124Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "open",
    clientSecret: "<value>",
    url: "https://wordy-hierarchy.org/",
    expiresAt: new Date("2023-05-09T13:52:06.961Z"),
    successUrl: "https://impractical-guard.net/",
    embedOrigin: "<value>",
    amount: 344718,
    taxAmount: 713767,
    currency: "New Zealand Dollar",
    subtotalAmount: 399161,
    totalAmount: 431760,
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
    customerEmail: "Anthony_OKeefe53@yahoo.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Hong Kong",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": 321043,
    },
    product: {
      createdAt: new Date("2023-02-02T19:48:48.046Z"),
      modifiedAt: new Date("2025-03-19T00:44:08.150Z"),
      id: "<value>",
      name: "<value>",
      description: "although misfire breastplate",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-03-13T21:40:13.537Z"),
          modifiedAt: new Date("2025-07-27T11:29:19.064Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 162120,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-04-27T16:58:28.709Z"),
          modifiedAt: new Date("2024-05-15T05:23:49.944Z"),
          id: "<value>",
          type: "custom",
          description: "ambitious hefty flawless doubtfully",
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
          path: "/sys",
          mimeType: "<value>",
          size: 81369,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-08-24T13:24:20.223Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-02-27T16:53:19.075Z"),
          sizeReadable: "<value>",
          publicUrl: "https://mediocre-eternity.name",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-10-20T20:36:49.558Z"),
      modifiedAt: new Date("2025-08-19T15:05:51.902Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 371919,
      maximumAmount: 1383,
      presetAmount: 247685,
    },
    discount: {
      duration: "repeating",
      durationInMonths: 458503,
      type: "fixed",
      amount: 336102,
      currency: "Hryvnia",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-12-23T02:40:59.586Z"),
          modifiedAt: new Date("2024-02-17T21:48:08.230Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 791880,
        required: false,
      },
    ],
    customerMetadata: {
      "key": false,
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |