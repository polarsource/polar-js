# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutupdatedpayload.js";

let value: WebhookCheckoutUpdatedPayload = {
  type: "checkout.updated",
  timestamp: new Date("2025-10-28T04:36:13.190Z"),
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
    totalAmount: 335376,
    currency: "Sri Lanka Rupee",
    allowTrial: true,
    activeTrialInterval: "week",
    activeTrialIntervalCount: null,
    trialEnd: new Date("2026-02-24T21:23:50.809Z"),
    organizationId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    allowDiscountCodes: false,
    requireBillingAddress: false,
    isDiscountApplicable: true,
    isFreeProductPrice: false,
    isPaymentRequired: false,
    isPaymentSetupRequired: true,
    isPaymentFormRequired: true,
    customerId: "<value>",
    isBusinessCustomer: false,
    customerName: "<value>",
    customerEmail: "<value>",
    customerIpAddress: "<value>",
    customerBillingName: "<value>",
    customerBillingAddress: {
      country: "US",
    },
    customerTaxId: null,
    paymentProcessorMetadata: {},
    billingAddressFields: {
      country: "disabled",
      state: "disabled",
      city: "required",
      postalCode: "disabled",
      line1: "optional",
      line2: "required",
    },
    trialInterval: "day",
    trialIntervalCount: 74188,
    metadata: {
      "key": 408625,
    },
    externalCustomerId: "<id>",
    products: [
      {
        id: "<value>",
        createdAt: new Date("2026-02-09T15:59:15.006Z"),
        modifiedAt: null,
        trialInterval: "year",
        trialIntervalCount: 851994,
        name: "<value>",
        description:
          "times alienated during boring gasp yippee following machine recklessly",
        visibility: "public",
        recurringInterval: "year",
        recurringIntervalCount: 320194,
        isRecurring: true,
        isArchived: false,
        organizationId: "<value>",
        prices: [],
        benefits: [],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/private/tmp",
            mimeType: "<value>",
            size: 16733,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2026-12-06T15:49:55.309Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: true,
            createdAt: new Date("2025-07-11T05:48:37.631Z"),
            sizeReadable: "<value>",
            publicUrl: "https://impressionable-viability.com/",
          },
        ],
      },
    ],
    product: {
      id: "<value>",
      createdAt: new Date("2025-11-05T07:16:06.790Z"),
      modifiedAt: new Date("2025-08-20T16:04:10.991Z"),
      trialInterval: "week",
      trialIntervalCount: 157339,
      name: "<value>",
      description:
        "thoroughly cautiously however competent distorted gosh incidentally legislature tall across",
      visibility: "draft",
      recurringInterval: "week",
      recurringIntervalCount: 770994,
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2026-06-21T11:29:42.298Z"),
          modifiedAt: null,
          id: "<value>",
          source: "ad_hoc",
          amountType: "fixed",
          priceCurrency: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceAmount: 409197,
          legacy: true,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-12-27T23:35:38.610Z"),
          modifiedAt: new Date("2025-09-14T06:36:06.854Z"),
          type: "license_keys",
          description: "content react replacement",
          selectable: true,
          deletable: false,
          organizationId: "<value>",
        },
      ],
      medias: [],
    },
    prices: {
      "key": [],
      "key1": [
        {
          createdAt: new Date("2024-09-15T04:01:38.817Z"),
          modifiedAt: new Date("2026-10-12T08:11:53.251Z"),
          id: "<value>",
          source: "catalog",
          amountType: "custom",
          priceCurrency: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          minimumAmount: 817045,
          maximumAmount: 990670,
          presetAmount: 662822,
          legacy: true,
        },
      ],
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 1000,
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [],
    customerMetadata: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"checkout.updated"*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           | checkout.updated                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Checkout](../../models/components/checkout.md)                                    | :heavy_check_mark:                                                                            | Checkout session data retrieved using an access token.                                        |                                                                                               |