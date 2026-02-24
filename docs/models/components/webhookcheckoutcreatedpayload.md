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
    totalAmount: 335376,
    currency: "Sri Lanka Rupee",
    allowTrial: true,
    activeTrialInterval: "week",
    activeTrialIntervalCount: null,
    trialEnd: new Date("2026-02-24T21:23:50.809Z"),
    organizationId: "<value>",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    allowDiscountCodes: false,
    requireBillingAddress: true,
    isDiscountApplicable: false,
    isFreeProductPrice: false,
    isPaymentRequired: true,
    isPaymentSetupRequired: true,
    isPaymentFormRequired: false,
    customerId: "<value>",
    isBusinessCustomer: true,
    customerName: "<value>",
    customerEmail: "<value>",
    customerIpAddress: "<value>",
    customerBillingName: "<value>",
    customerBillingAddress: null,
    customerTaxId: "<id>",
    paymentProcessorMetadata: {
      "key": "<value>",
      "key1": "<value>",
    },
    billingAddressFields: {
      country: "disabled",
      state: "required",
      city: "disabled",
      postalCode: "optional",
      line1: "required",
      line2: "required",
    },
    trialInterval: null,
    trialIntervalCount: 74188,
    metadata: {
      "key": 408625,
    },
    externalCustomerId: "<id>",
    customerExternalId: "<id>",
    products: [],
    product: {
      id: "<value>",
      createdAt: new Date("2025-07-24T21:53:52.155Z"),
      modifiedAt: new Date("2025-01-13T05:38:51.042Z"),
      trialInterval: "month",
      trialIntervalCount: 689302,
      name: "<value>",
      description: "because mediocre vice alive content react replacement",
      visibility: "private",
      recurringInterval: "week",
      recurringIntervalCount: 410201,
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
      prices: [],
      benefits: [],
      medias: [],
    },
    productPrice: {
      createdAt: new Date("2026-12-07T10:38:50.125Z"),
      modifiedAt: null,
      id: "<value>",
      source: "catalog",
      amountType: "free",
      priceCurrency: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      legacy: true,
    },
    prices: {
      "key": [
        {
          createdAt: new Date("2026-09-27T04:49:04.694Z"),
          modifiedAt: new Date("2024-10-31T21:29:00.114Z"),
          id: "<value>",
          source: "ad_hoc",
          amountType: "seat_based",
          priceCurrency: "<value>",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          seatTiers: {
            tiers: [
              {
                minSeats: 834838,
                pricePerSeat: 337669,
              },
            ],
            minimumSeats: 958690,
            maximumSeats: 665075,
          },
        },
      ],
      "key1": [],
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
          createdAt: new Date("2024-09-17T23:34:10.111Z"),
          modifiedAt: new Date("2025-04-12T21:32:26.120Z"),
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
        order: 797456,
        required: false,
      },
    ],
    customerMetadata: {},
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"checkout.created"*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           | checkout.created                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Checkout](../../models/components/checkout.md)                                    | :heavy_check_mark:                                                                            | Checkout session data retrieved using an access token.                                        |                                                                                               |