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
    allowTrial: true,
    activeTrialInterval: "week",
    activeTrialIntervalCount: null,
    trialEnd: new Date("2025-02-24T21:23:50.809Z"),
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
      country: "required",
      state: "optional",
      city: "required",
      postalCode: "disabled",
      line1: "optional",
      line2: "optional",
    },
    trialInterval: "month",
    trialIntervalCount: 348622,
    metadata: {
      "key": "<value>",
    },
    externalCustomerId: "<id>",
    customerExternalId: "<id>",
    products: [],
    product: {
      id: "<value>",
      createdAt: new Date("2024-10-23T03:41:04.579Z"),
      modifiedAt: new Date("2024-03-22T06:17:10.752Z"),
      trialInterval: "year",
      trialIntervalCount: 990670,
      name: "<value>",
      description: "crafty of siege geez happily ugh vanish ouch",
      recurringInterval: "year",
      recurringIntervalCount: null,
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-09-12T21:51:12.650Z"),
          modifiedAt: null,
          type: "meter_credit",
          description:
            "median dependency outside unique cautiously solidly meh times",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
        },
      ],
      medias: [],
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