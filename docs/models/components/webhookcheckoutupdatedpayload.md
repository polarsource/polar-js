# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutupdatedpayload.js";

let value: WebhookCheckoutUpdatedPayload = {
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
    billingAddressFields: {
      country: "required",
      state: "disabled",
      city: "optional",
      postalCode: "required",
      line1: "required",
      line2: "disabled",
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
            createdAt: new Date("2024-02-07T22:55:43.220Z"),
            modifiedAt: new Date("2024-11-14T14:53:16.943Z"),
            id: "<value>",
            isArchived: true,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
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
          createdAt: new Date("2025-07-01T17:33:05.751Z"),
          modifiedAt: new Date("2024-01-06T23:05:27.980Z"),
          id: "<value>",
          isArchived: true,
          productId: "<value>",
          recurringInterval: "year",
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
      createdAt: new Date("2024-01-04T00:58:01.278Z"),
      modifiedAt: new Date("2023-02-10T19:31:41.974Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
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
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | checkout.updated                                           |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |                                                            |