# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutcreatedpayload.js";

let value: WebhookCheckoutCreatedPayload = {
  type: "checkout.created",
  timestamp: new Date("2024-06-17T23:01:40.328Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2023-08-20T15:49:44.498Z"),
    modifiedAt: new Date("2024-03-18T23:27:57.994Z"),
    paymentProcessor: "stripe",
    status: "failed",
    clientSecret: "<value>",
    url: "https://leading-vibraphone.org",
    expiresAt: new Date("2025-04-27T02:23:43.493Z"),
    successUrl: "https://interesting-video.name",
    embedOrigin: "<value>",
    amount: 449681,
    discountAmount: 564684,
    netAmount: 247095,
    taxAmount: 750787,
    totalAmount: 250844,
    currency: "Won",
    activeTrialInterval: "month",
    activeTrialIntervalCount: 335376,
    trialEnd: new Date("2025-01-19T13:26:10.538Z"),
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    allowDiscountCodes: false,
    requireBillingAddress: true,
    isDiscountApplicable: true,
    isFreeProductPrice: true,
    isPaymentRequired: false,
    isPaymentSetupRequired: false,
    isPaymentFormRequired: true,
    customerId: "<value>",
    isBusinessCustomer: false,
    customerName: null,
    customerEmail: "<value>",
    customerIpAddress: "<value>",
    customerBillingName: null,
    customerBillingAddress: {
      country: "US",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    billingAddressFields: {
      country: "required",
      state: "disabled",
      city: "required",
      postalCode: "disabled",
      line1: "disabled",
      line2: "required",
    },
    trialInterval: "month",
    trialIntervalCount: null,
    metadata: {},
    externalCustomerId: null,
    customerExternalId: "<id>",
    products: [],
    product: {
      id: "<value>",
      createdAt: new Date("2024-03-23T20:28:23.610Z"),
      modifiedAt: new Date("2024-09-12T11:02:22.469Z"),
      trialInterval: "week",
      trialIntervalCount: 101690,
      name: "<value>",
      description:
        "singe etch even obnoxiously so among um yippee afore aboard",
      recurringInterval: "year",
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-02-25T00:31:36.186Z"),
          modifiedAt: new Date("2023-01-07T15:57:16.017Z"),
          id: "<value>",
          amountType: "free",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "day",
          legacy: true,
        },
      ],
      benefits: [],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/sbin",
          mimeType: "<value>",
          size: 498972,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-09-13T15:53:42.753Z"),
          version: "<value>",
          service: "product_media",
          isUploaded: false,
          createdAt: new Date("2024-08-06T00:24:30.544Z"),
          sizeReadable: "<value>",
          publicUrl: "https://enchanting-bell.net/",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2024-03-14T18:12:50.745Z"),
      modifiedAt: new Date("2025-07-21T22:16:04.637Z"),
      id: "<value>",
      amountType: "metered_unit",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      unitAmount: "<value>",
      capAmount: 698139,
      meterId: "<value>",
      meter: {
        id: "<value>",
        name: "<value>",
      },
    },
    discount: {
      duration: "once",
      durationInMonths: 142636,
      type: "percentage",
      amount: 505578,
      currency: "Balboa",
      id: "<value>",
      name: "<value>",
      code: null,
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-07-24T07:04:35.503Z"),
          modifiedAt: new Date("2025-01-27T16:26:36.069Z"),
          id: "<value>",
          metadata: {},
          type: "text",
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 758601,
        required: true,
      },
    ],
    customerMetadata: {},
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | checkout.created                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Checkout](../../models/components/checkout.md)                                    | :heavy_check_mark:                                                                            | Checkout session data retrieved using an access token.                                        |                                                                                               |