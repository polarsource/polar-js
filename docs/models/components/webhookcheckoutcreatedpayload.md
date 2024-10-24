# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2024-08-01T00:30:34.557Z"),
    modifiedAt: new Date("2024-08-10T19:52:48.916Z"),
    id: "<value>",
    status: "open",
    clientSecret: "<value>",
    url: "https://unlawful-rationale.org/",
    expiresAt: new Date("2023-03-01T00:50:01.666Z"),
    successUrl: "https://unlined-hornet.net/",
    embedOrigin: "<value>",
    amount: 424591,
    taxAmount: 708007,
    currency: "Naira",
    totalAmount: 441603,
    productId: "<value>",
    productPriceId: "<value>",
    isPaymentRequired: false,
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "Lavina_Pagac96@yahoo.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Christmas Island",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.WebhookCheckoutCreatedPayloadType](../../models/components/webhookcheckoutcreatedpayloadtype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.PolarCheckoutSchemasCheckout](../../models/components/polarcheckoutschemascheckout.md)           | :heavy_check_mark:                                                                                           | Checkout session data retrieved using an access token.                                                       |