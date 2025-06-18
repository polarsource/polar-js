# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutcreatedpayload.js";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2024-06-17T23:01:40.328Z"),
    modifiedAt: new Date("2025-09-11T03:11:17.221Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "confirmed",
    clientSecret: "<value>",
    url: "https://petty-independence.org",
    expiresAt: new Date("2025-11-27T18:34:09.514Z"),
    successUrl: "https://super-horde.org",
    embedOrigin: "<value>",
    amount: 112135,
    discountAmount: 449681,
    netAmount: 564684,
    taxAmount: 723360,
    totalAmount: 750787,
    currency: "Egyptian Pound",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    allowDiscountCodes: true,
    requireBillingAddress: false,
    isDiscountApplicable: true,
    isFreeProductPrice: true,
    isPaymentRequired: false,
    isPaymentSetupRequired: false,
    isPaymentFormRequired: true,
    customerId: "<value>",
    isBusinessCustomer: true,
    customerName: null,
    customerEmail: "<value>",
    customerIpAddress: "<value>",
    customerBillingName: "<value>",
    customerBillingAddress: {
      country: "US",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {
      "key": "<value>",
      "key1": "<value>",
    },
    metadata: {},
    externalCustomerId: "<id>",
    customerExternalId: "<id>",
    products: [],
    product: {
      createdAt: new Date("2023-06-20T19:01:29.811Z"),
      modifiedAt: new Date("2025-12-11T20:38:00.359Z"),
      id: "<value>",
      name: "<value>",
      description:
        "after midst adrenalin miserly unless likewise sophisticated clinking",
      recurringInterval: "year",
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-12-06T11:20:59.061Z"),
          modifiedAt: new Date("2023-12-07T09:01:09.070Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-02-28T01:09:21.212Z"),
          modifiedAt: new Date("2023-02-15T16:10:30.309Z"),
          type: "downloadables",
          description:
            "drowse whoever until continually amidst gentle quadruple",
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
          path: "/private",
          mimeType: "<value>",
          size: 782007,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: null,
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-07-08T02:43:14.288Z"),
          sizeReadable: "<value>",
          publicUrl: "https://aged-fellow.net",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2025-12-28T07:21:00.728Z"),
      modifiedAt: new Date("2025-11-15T05:31:49.462Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 879932,
    },
    discount: {
      duration: "repeating",
      type: "percentage",
      basisPoints: 693707,
      id: "<value>",
      name: "<value>",
      code: null,
    },
    subscriptionId: "<value>",
    attachedCustomFields: [],
    customerMetadata: {
      "key": "<value>",
    },
    customerBillingAddressFields: {
      country: false,
      state: true,
      city: false,
      postalCode: true,
      line1: true,
      line2: true,
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | checkout.created                                           |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |                                                            |