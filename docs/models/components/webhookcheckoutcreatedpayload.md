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
    returnUrl: "https://obedient-diagram.net/",
    embedOrigin: "<value>",
    amount: 250844,
    discountAmount: 463878,
    netAmount: 206139,
    taxAmount: 386453,
    totalAmount: 335376,
    currency: "Sri Lanka Rupee",
    activeTrialInterval: "day",
    activeTrialIntervalCount: 340427,
    trialEnd: null,
    organizationId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    allowDiscountCodes: true,
    requireBillingAddress: false,
    isDiscountApplicable: false,
    isFreeProductPrice: true,
    isPaymentRequired: false,
    isPaymentSetupRequired: false,
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
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    billingAddressFields: {
      country: "required",
      state: "optional",
      city: "required",
      postalCode: "optional",
      line1: "required",
      line2: "disabled",
    },
    trialInterval: "week",
    trialIntervalCount: 566113,
    metadata: {},
    externalCustomerId: "<id>",
    customerExternalId: "<id>",
    products: [],
    product: {
      id: "<value>",
      createdAt: new Date("2025-12-07T10:38:50.125Z"),
      modifiedAt: null,
      trialInterval: "month",
      trialIntervalCount: 407173,
      name: "<value>",
      description: "etch even obnoxiously so among um yippee afore aboard",
      recurringInterval: "year",
      recurringIntervalCount: 795596,
      isRecurring: false,
      isArchived: true,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-01-07T15:57:16.017Z"),
          modifiedAt: new Date("2023-05-21T12:07:36.569Z"),
          id: "<value>",
          amountType: "custom",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "week",
          priceCurrency: "<value>",
          minimumAmount: 391090,
          maximumAmount: 763945,
          presetAmount: 233268,
          legacy: true,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2024-07-18T20:58:15.548Z"),
          modifiedAt: new Date("2023-12-09T12:16:31.978Z"),
          type: "discord",
          description: "watery flight fellow",
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
          path: "/home/user/dir",
          mimeType: "<value>",
          size: 691319,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-08-25T14:34:40.991Z"),
          version: null,
          service: "product_media",
          isUploaded: true,
          createdAt: new Date("2024-12-23T02:36:38.280Z"),
          sizeReadable: "<value>",
          publicUrl: "https://ultimate-popularity.com",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-08-12T05:28:37.379Z"),
      modifiedAt: new Date("2024-02-26T03:31:00.440Z"),
      id: "<value>",
      amountType: "free",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "week",
      legacy: true,
    },
    discount: {
      duration: "once",
      type: "percentage",
      amount: 1000,
      currency: "usd",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-10-09T02:00:40.564Z"),
          modifiedAt: new Date("2025-12-28T07:21:00.728Z"),
          id: "<value>",
          metadata: {},
          type: "select",
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {
            options: [
              {
                value: "<value>",
                label: "<value>",
              },
            ],
          },
        },
        order: 922916,
        required: false,
      },
    ],
    customerMetadata: {
      "key": 41984,
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | checkout.created                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Checkout](../../models/components/checkout.md)                                    | :heavy_check_mark:                                                                            | Checkout session data retrieved using an access token.                                        |                                                                                               |