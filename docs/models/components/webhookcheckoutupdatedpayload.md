# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutupdatedpayload.js";

let value: WebhookCheckoutUpdatedPayload = {
  type: "checkout.updated",
  timestamp: new Date("2024-10-28T04:36:13.190Z"),
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
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    allowDiscountCodes: false,
    requireBillingAddress: false,
    isDiscountApplicable: true,
    isFreeProductPrice: false,
    isPaymentRequired: false,
    isPaymentSetupRequired: true,
    isPaymentFormRequired: false,
    customerId: "<value>",
    isBusinessCustomer: true,
    customerName: "<value>",
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
      country: "disabled",
      state: "required",
      city: "required",
      postalCode: "optional",
      line1: "required",
      line2: "optional",
    },
    trialInterval: null,
    trialIntervalCount: 342455,
    metadata: {},
    externalCustomerId: "<id>",
    customerExternalId: "<id>",
    products: [],
    product: {
      id: "<value>",
      createdAt: new Date("2024-01-18T02:09:51.323Z"),
      modifiedAt: new Date("2023-04-22T10:52:36.893Z"),
      trialInterval: "year",
      trialIntervalCount: null,
      name: "<value>",
      description: "unwieldy stupendous drat gummy mmm embody above",
      recurringInterval: "month",
      recurringIntervalCount: 570037,
      isRecurring: false,
      isArchived: true,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-06-19T23:33:39.565Z"),
          modifiedAt: null,
          id: "<value>",
          amountType: "fixed",
          isArchived: true,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 936645,
          legacy: true,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2023-01-24T18:47:57.919Z"),
          modifiedAt: new Date("2025-10-21T11:30:14.929Z"),
          type: "github_repository",
          description:
            "mockingly despite aw guidance defensive once at understated admonish",
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
          path: "/home/user",
          mimeType: "<value>",
          size: 715587,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: null,
          version: "<value>",
          service: "product_media",
          isUploaded: false,
          createdAt: new Date("2025-12-06T11:20:59.061Z"),
          sizeReadable: "<value>",
          publicUrl: "https://gaseous-markup.net",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2025-12-28T07:21:00.728Z"),
      modifiedAt: new Date("2025-11-15T05:31:49.462Z"),
      id: "<value>",
      amountType: "fixed",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 879932,
      legacy: true,
    },
    discount: {
      duration: "once",
      type: "fixed",
      amount: 1000,
      currency: "usd",
      id: "<value>",
      name: "<value>",
      code: null,
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
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | checkout.updated                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Checkout](../../models/components/checkout.md)                                    | :heavy_check_mark:                                                                            | Checkout session data retrieved using an access token.                                        |                                                                                               |