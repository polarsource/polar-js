# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components";

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
    customerEmail: "Pinkie.Sauer63@hotmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "United States of America",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {
      "key": "<value>",
    },
    metadata: {
      "key": 414662,
    },
    product: {
      createdAt: new Date("2023-10-17T22:52:14.955Z"),
      modifiedAt: new Date("2025-04-28T13:26:34.681Z"),
      id: "<value>",
      name: "<value>",
      description: "over cuckoo canter even along rim",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-05-12T17:39:01.246Z"),
          modifiedAt: new Date("2023-11-21T13:40:18.320Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 118727,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-03-30T00:46:25.708Z"),
          modifiedAt: new Date("2023-03-12T07:20:08.678Z"),
          id: "<value>",
          type: "downloadables",
          description: "rally wherever minus runny rough agreeable beneath",
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
          path: "/selinux",
          mimeType: "<value>",
          size: 590873,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-09-21T11:03:04.845Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-12-16T21:47:39.716Z"),
          sizeReadable: "<value>",
          publicUrl: "https://intrepid-technician.info",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2025-06-02T14:07:36.077Z"),
      modifiedAt: new Date("2025-02-10T11:05:07.085Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    discount: {
      duration: "repeating",
      durationInMonths: 998848,
      type: "fixed",
      basisPoints: 868126,
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-11-05T15:40:43.604Z"),
          modifiedAt: new Date("2023-05-16T16:57:38.984Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 807319,
        required: false,
      },
    ],
    customerMetadata: {
      "key": 407183,
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |