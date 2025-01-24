# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutcreatedpayload.js";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2024-08-20T04:36:26.084Z"),
    modifiedAt: new Date("2024-04-09T07:48:57.030Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "succeeded",
    clientSecret: "<value>",
    url: "https://unique-veto.info/",
    expiresAt: new Date("2025-05-17T17:32:07.447Z"),
    successUrl: "https://oddball-translation.com",
    embedOrigin: "<value>",
    amount: 87129,
    taxAmount: 20218,
    currency: "Manat",
    subtotalAmount: 778157,
    totalAmount: 870013,
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
      country: "Virgin Islands, U.S.",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {
      "key": "<value>",
    },
    metadata: {
      "key": false,
    },
    product: {
      createdAt: new Date("2024-05-20T18:45:11.321Z"),
      modifiedAt: new Date("2025-05-05T11:02:22.031Z"),
      id: "<value>",
      name: "<value>",
      description: "phew typewriter gadzooks",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-12-12T17:01:38.434Z"),
          modifiedAt: new Date("2024-02-03T15:02:53.228Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 570197,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-12-19T06:11:07.571Z"),
          modifiedAt: new Date("2023-04-22T20:11:12.127Z"),
          id: "<value>",
          type: "ads",
          description: "opposite because furiously unless",
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
          path: "/sbin",
          mimeType: "<value>",
          size: 265389,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-07-27T11:31:00.474Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-04-13T23:00:40.302Z"),
          sizeReadable: "<value>",
          publicUrl: "https://vengeful-farmer.net",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-11-14T04:32:16.328Z"),
      modifiedAt: new Date("2023-07-20T18:39:56.110Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      amount: 677817,
      currency: "Euro",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-11-20T13:24:26.967Z"),
          modifiedAt: new Date("2023-09-30T15:12:09.673Z"),
          id: "<value>",
          metadata: {
            "key": 592042,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {
            options: [
              {
                value: "<value>",
                label: "<value>",
              },
            ],
          },
        },
        order: 572252,
        required: false,
      },
    ],
    customerMetadata: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |