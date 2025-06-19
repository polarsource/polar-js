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
    customerBillingAddressFields: {
      country: true,
      state: false,
      city: false,
      postalCode: true,
      line1: true,
      line2: false,
    },
    metadata: {
      "key": "<value>",
    },
    externalCustomerId: "<id>",
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2025-07-05T05:38:23.285Z"),
        modifiedAt: null,
        id: "<value>",
        name: "<value>",
        description: "onto weep singe etch even obnoxiously so among",
        recurringInterval: "month",
        isRecurring: true,
        isArchived: true,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-12-01T18:31:54.424Z"),
            modifiedAt: new Date("2023-12-25T10:39:29.185Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 924447,
            maximumAmount: 179279,
            presetAmount: 379836,
          },
        ],
        benefits: [],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/X11R6",
            mimeType: "<value>",
            size: 327832,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: null,
            version: "<value>",
            isUploaded: true,
            createdAt: new Date("2023-11-10T03:13:37.813Z"),
            sizeReadable: "<value>",
            publicUrl: "https://warlike-tinderbox.com",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2025-01-02T11:48:03.532Z"),
      modifiedAt: new Date("2024-04-15T06:23:21.766Z"),
      id: "<value>",
      name: "<value>",
      description:
        "continually amidst gentle quadruple ha bah pace alive noisily gad",
      recurringInterval: "month",
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-10-13T08:04:59.823Z"),
          modifiedAt: new Date("2023-10-04T16:45:40.402Z"),
          id: "<value>",
          isArchived: true,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 433616,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-08-22T09:43:58.793Z"),
          modifiedAt: new Date("2023-02-16T00:22:02.887Z"),
          type: "custom",
          description: "inside any judgementally grown consequently naturally",
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
          path: "/usr/X11R6",
          mimeType: "<value>",
          size: 327832,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: null,
          version: "<value>",
          isUploaded: true,
          createdAt: new Date("2023-11-10T03:13:37.813Z"),
          sizeReadable: "<value>",
          publicUrl: "https://warlike-tinderbox.com",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2024-11-15T05:22:29.213Z"),
      modifiedAt: new Date("2025-01-30T09:46:51.047Z"),
      id: "<value>",
      isArchived: true,
      productId: "<value>",
      type: "recurring",
      recurringInterval: null,
      priceCurrency: "<value>",
      minimumAmount: null,
      maximumAmount: 761134,
      presetAmount: 545920,
    },
    discount: {
      duration: "repeating",
      type: "percentage",
      amount: 855249,
      currency: "Bahraini Dinar",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [],
    customerMetadata: {},
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | checkout.created                                           |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |                                                            |