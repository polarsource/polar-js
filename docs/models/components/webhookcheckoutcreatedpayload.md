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
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2023-01-17T05:41:07.045Z"),
        modifiedAt: new Date("2025-06-22T03:29:32.806Z"),
        id: "<value>",
        name: "<value>",
        description: "proliferate onto weep singe",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2023-11-27T19:18:37.761Z"),
            modifiedAt: new Date("2024-10-18T19:17:56.937Z"),
            type: "license_keys",
            description: "of siege geez happily",
            selectable: false,
            deletable: true,
            organizationId: "<value>",
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/include",
            mimeType: "<value>",
            size: 496688,
            storageVersion: null,
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-02-05T19:40:37.393Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-11-17T07:41:12.479Z"),
            sizeReadable: "<value>",
            publicUrl: "https://lumpy-baseboard.biz/",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2023-02-27T10:18:19.791Z"),
      modifiedAt: new Date("2025-04-09T07:15:26.385Z"),
      id: "<value>",
      name: "<value>",
      description:
        "better consequently sans geez spirit sonar advancement dispense innocently phooey",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: true,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-12-14T02:33:27.051Z"),
          modifiedAt: new Date("2024-11-07T04:34:37.967Z"),
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
          createdAt: new Date("2023-11-27T19:18:37.761Z"),
          modifiedAt: new Date("2024-10-18T19:17:56.937Z"),
          type: "license_keys",
          description: "of siege geez happily",
          selectable: false,
          deletable: true,
          organizationId: "<value>",
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/include",
          mimeType: "<value>",
          size: 496688,
          storageVersion: null,
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-02-05T19:40:37.393Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-11-17T07:41:12.479Z"),
          sizeReadable: "<value>",
          publicUrl: "https://lumpy-baseboard.biz/",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-04-20T03:39:52.683Z"),
      modifiedAt: new Date("2023-06-19T08:49:22.688Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 791445,
      maximumAmount: 243908,
      presetAmount: 858429,
    },
    discount: {
      duration: "once",
      type: "fixed",
      amount: 26350,
      currency: "Nuevo Sol",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-07-23T02:45:03.879Z"),
          modifiedAt: new Date("2024-01-21T15:54:46.328Z"),
          id: "<value>",
          metadata: {
            "key": 9117.92,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 755385,
        required: true,
      },
    ],
    customerMetadata: {},
    customerBillingAddressFields: {
      country: false,
      state: true,
      city: false,
      postalCode: false,
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