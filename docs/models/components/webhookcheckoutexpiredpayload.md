# WebhookCheckoutExpiredPayload

Sent when a checkout expires.

This event fires when a checkout reaches its expiration time without being completed.
Developers can use this to send reminder emails or track checkout abandonment.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutExpiredPayload } from "@polar-sh/sdk/models/components/webhookcheckoutexpiredpayload.js";

let value: WebhookCheckoutExpiredPayload = {
  type: "checkout.expired",
  timestamp: new Date("2026-02-02T01:55:39.012Z"),
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
    paymentMethodType: "<value>",
    paymentProcessorMetadata: {},
    billingAddressFields: {
      country: "optional",
      state: "required",
      city: "required",
      postalCode: "disabled",
      line1: "optional",
      line2: "disabled",
    },
    trialInterval: "week",
    trialIntervalCount: 646815,
    metadata: {
      "key": 348622,
    },
    externalCustomerId: "<id>",
    products: [],
    product: {
      id: "<value>",
      createdAt: new Date("2026-03-18T10:51:44.563Z"),
      modifiedAt: new Date("2025-07-09T19:59:35.997Z"),
      trialInterval: "month",
      trialIntervalCount: 98258,
      name: "<value>",
      description: "seagull mmm once lest aha suddenly cycle",
      visibility: "draft",
      recurringInterval: "year",
      recurringIntervalCount: 848883,
      meterInterval: "week",
      meterIntervalCount: 907112,
      isRecurring: true,
      isArchived: true,
      organizationId: "<value>",
      prices: [],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2024-01-22T00:59:04.968Z"),
          modifiedAt: new Date("2024-05-30T13:40:06.041Z"),
          type: "github_repository",
          description:
            "cautiously however competent distorted gosh incidentally legislature tall across",
          selectable: true,
          deletable: true,
          isDeleted: true,
          organizationId: "<value>",
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var/yp",
          mimeType: "<value>",
          size: 772025,
          storageVersion: null,
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-10-14T04:04:24.781Z"),
          version: "<value>",
          service: "product_media",
          isUploaded: false,
          createdAt: new Date("2026-03-20T16:38:16.465Z"),
          sizeReadable: "<value>",
          publicUrl: "https://esteemed-coal.com",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2025-10-23T03:41:04.579Z"),
      modifiedAt: new Date("2025-03-22T06:17:10.752Z"),
      id: "<value>",
      source: "ad_hoc",
      amountType: "custom",
      priceCurrency: "<value>",
      taxBehavior: "inclusive",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      minimumAmount: 662822,
      maximumAmount: 613924,
      presetAmount: 693495,
      legacy: true,
    },
    prices: {
      "key": [],
      "key1": [],
      "key2": [
        {
          createdAt: new Date("2026-04-30T00:30:08.633Z"),
          modifiedAt: new Date("2025-11-10T16:03:20.404Z"),
          id: "<value>",
          source: "catalog",
          amountType: "custom",
          priceCurrency: "<value>",
          taxBehavior: "inclusive",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          minimumAmount: 350556,
          maximumAmount: 52686,
          presetAmount: 580181,
          legacy: true,
        },
      ],
    },
    discount: {
      duration: "repeating",
      durationInMonths: 229904,
      type: "percentage",
      basisPoints: 1000,
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"checkout.expired"*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           | checkout.expired                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Checkout](../../models/components/checkout.md)                                    | :heavy_check_mark:                                                                            | Checkout session data retrieved using an access token.                                        |                                                                                               |