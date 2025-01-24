# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutupdatedpayload.js";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2023-08-13T14:18:45.582Z"),
    modifiedAt: new Date("2024-01-10T12:01:37.968Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "succeeded",
    clientSecret: "<value>",
    url: "https://neat-ecliptic.com",
    expiresAt: new Date("2025-02-17T12:41:59.818Z"),
    successUrl: "https://honored-lobster.org/",
    embedOrigin: "<value>",
    amount: 89494,
    taxAmount: 405942,
    currency: "Armenian Dram",
    subtotalAmount: 342611,
    totalAmount: 622231,
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
      country: "Estonia",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {
      "key": "<value>",
    },
    metadata: {
      "key": "<value>",
    },
    product: {
      createdAt: new Date("2023-05-07T19:27:28.258Z"),
      modifiedAt: new Date("2024-09-24T13:05:49.123Z"),
      id: "<value>",
      name: "<value>",
      description:
        "venture bus questioningly topsail diligently thigh arraign into",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-02-01T23:01:15.623Z"),
          modifiedAt: new Date("2024-05-30T19:56:59.856Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-12-09T13:28:34.858Z"),
          modifiedAt: new Date("2023-07-11T10:12:51.010Z"),
          id: "<value>",
          type: "ads",
          description:
            "fund positively stylish barge card joshingly overload nor",
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
          path: "/var/tmp",
          mimeType: "<value>",
          size: 423706,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-07-28T09:48:49.789Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-05-09T13:52:06.961Z"),
          sizeReadable: "<value>",
          publicUrl: "https://impractical-guard.net/",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2024-12-01T13:10:19.910Z"),
      modifiedAt: new Date("2024-03-13T11:32:05.153Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 653421,
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-08-11T11:13:21.434Z"),
          modifiedAt: new Date("2023-05-02T01:59:23.739Z"),
          id: "<value>",
          metadata: {
            "key": 405373,
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
        order: 321043,
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