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
      createdAt: new Date("2026-06-03T12:53:20.835Z"),
      modifiedAt: null,
      trialInterval: "day",
      trialIntervalCount: 813898,
      name: "<value>",
      description:
        "brr publicity majority towards opposite than incidentally stiff hm",
      recurringInterval: "year",
      recurringIntervalCount: 736727,
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2024-03-14T00:55:02.549Z"),
          modifiedAt: new Date("2024-09-16T13:02:40.897Z"),
          type: "custom",
          description: "considering speedily for into across extricate",
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
          path: "/opt/bin",
          mimeType: "<value>",
          size: 366381,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-06-28T06:21:21.363Z"),
          version: "<value>",
          service: "product_media",
          isUploaded: false,
          createdAt: new Date("2026-06-12T01:48:20.505Z"),
          sizeReadable: "<value>",
          publicUrl: "https://entire-slipper.org",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2026-12-07T10:38:50.125Z"),
      modifiedAt: null,
      id: "<value>",
      source: "catalog",
      amountType: "free",
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
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          seatTiers: {
            tiers: [
              {
                minSeats: 415895,
                pricePerSeat: 164973,
              },
            ],
            minimumSeats: 562315,
            maximumSeats: 955772,
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
          createdAt: new Date("2024-12-02T03:18:51.837Z"),
          modifiedAt: new Date("2026-09-25T14:22:13.198Z"),
          id: "<value>",
          metadata: {
            "key": 3666.38,
          },
          type: "checkbox",
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 979536,
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
| `type`                                                                                        | *"checkout.updated"*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           | checkout.updated                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Checkout](../../models/components/checkout.md)                                    | :heavy_check_mark:                                                                            | Checkout session data retrieved using an access token.                                        |                                                                                               |