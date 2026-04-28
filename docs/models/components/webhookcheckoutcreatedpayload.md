# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutcreatedpayload.js";

let value: WebhookCheckoutCreatedPayload = {
  type: "checkout.created",
  timestamp: new Date("2025-06-17T23:01:40.328Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2024-08-19T15:49:44.498Z"),
    modifiedAt: new Date("2025-03-18T23:27:57.994Z"),
    paymentProcessor: "stripe",
    status: "failed",
    clientSecret: "<value>",
    url: "https://leading-vibraphone.org",
    expiresAt: new Date("2026-04-27T02:23:43.493Z"),
    successUrl: "https://interesting-video.name",
    returnUrl: "https://obedient-diagram.net/",
    embedOrigin: "<value>",
    amount: 250844,
    discountAmount: 463878,
    netAmount: 206139,
    taxAmount: 386453,
    taxBehavior: "exclusive",
    totalAmount: 683905,
    currency: "Congolese Franc",
    allowTrial: true,
    activeTrialInterval: null,
    activeTrialIntervalCount: 717055,
    trialEnd: new Date("2024-05-02T10:46:33.063Z"),
    organizationId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: null,
    allowDiscountCodes: false,
    requireBillingAddress: false,
    isDiscountApplicable: true,
    isFreeProductPrice: true,
    isPaymentRequired: false,
    isPaymentSetupRequired: false,
    isPaymentFormRequired: true,
    customerId: "<value>",
    isBusinessCustomer: true,
    customerName: "<value>",
    customerEmail: "<value>",
    customerIpAddress: null,
    customerBillingName: "<value>",
    customerBillingAddress: {
      country: "US",
    },
    customerTaxId: null,
    paymentProcessorMetadata: {
      "key": "<value>",
    },
    billingAddressFields: {
      country: "disabled",
      state: "optional",
      city: "required",
      postalCode: "required",
      line1: "disabled",
      line2: "optional",
    },
    trialInterval: null,
    trialIntervalCount: 342455,
    metadata: {},
    externalCustomerId: "<id>",
    products: [
      {
        id: "<value>",
        createdAt: new Date("2025-02-13T04:30:30.659Z"),
        modifiedAt: new Date("2026-06-05T00:30:49.100Z"),
        trialInterval: "day",
        trialIntervalCount: 895059,
        name: "<value>",
        description:
          "rationalize well grimy unscramble pish excitedly er bleakly",
        visibility: "private",
        recurringInterval: "year",
        recurringIntervalCount: 769170,
        isRecurring: true,
        isArchived: true,
        organizationId: "<value>",
        prices: [],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2024-10-10T05:16:33.838Z"),
            modifiedAt: new Date("2026-02-25T08:33:06.239Z"),
            type: "feature_flag",
            description: "sushi fortunately gigantic soybean tomorrow um where",
            selectable: false,
            deletable: false,
            isDeleted: false,
            organizationId: "<value>",
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/libexec",
            mimeType: "<value>",
            size: 238122,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2026-06-12T01:48:20.505Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: true,
            createdAt: new Date("2026-06-20T18:25:36.529Z"),
            sizeReadable: "<value>",
            publicUrl: "https://sophisticated-affect.biz",
          },
        ],
      },
    ],
    product: {
      id: "<value>",
      createdAt: new Date("2024-06-12T00:35:39.464Z"),
      modifiedAt: new Date("2025-01-11T18:03:02.675Z"),
      trialInterval: "month",
      trialIntervalCount: null,
      name: "<value>",
      description:
        "powerful fortunately rust butter frugal while rarely intervention father",
      visibility: "private",
      recurringInterval: "month",
      recurringIntervalCount: 81826,
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
      prices: [],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2024-10-10T05:16:33.838Z"),
          modifiedAt: new Date("2026-02-25T08:33:06.239Z"),
          type: "feature_flag",
          description: "sushi fortunately gigantic soybean tomorrow um where",
          selectable: false,
          deletable: false,
          isDeleted: false,
          organizationId: "<value>",
        },
      ],
      medias: [],
    },
    productPrice: {
      createdAt: new Date("2026-08-14T14:38:29.688Z"),
      modifiedAt: new Date("2024-01-14T17:49:48.960Z"),
      id: "<value>",
      source: "catalog",
      amountType: "custom",
      priceCurrency: "<value>",
      taxBehavior: "exclusive",
      isArchived: true,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      minimumAmount: 608480,
      maximumAmount: 520276,
      presetAmount: 912592,
      legacy: true,
    },
    prices: {
      "key": [
        {
          createdAt: new Date("2025-10-18T19:17:56.937Z"),
          modifiedAt: new Date("2024-06-09T02:59:39.597Z"),
          id: "<value>",
          source: "catalog",
          amountType: "free",
          priceCurrency: "<value>",
          taxBehavior: "location",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          legacy: true,
        },
      ],
    },
    discount: {
      duration: "forever",
      type: "fixed",
      basisPoints: 1000,
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2026-07-16T19:04:19.230Z"),
          modifiedAt: new Date("2025-02-05T20:03:25.495Z"),
          id: "<value>",
          metadata: {
            "key": 6988.1,
          },
          type: "text",
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 235618,
        required: true,
      },
    ],
    customerMetadata: {
      "key": 350556,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"checkout.created"*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           | checkout.created                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Checkout](../../models/components/checkout.md)                                    | :heavy_check_mark:                                                                            | Checkout session data retrieved using an access token.                                        |                                                                                               |