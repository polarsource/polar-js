# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2022-12-15T15:53:19.670Z"),
    modifiedAt: new Date("2024-11-02T21:21:19.468Z"),
    id: "<value>",
    status: "expired",
    clientSecret: "<value>",
    url: "https://clear-cut-dream.biz",
    expiresAt: new Date("2024-02-16T11:29:47.688Z"),
    successUrl: "https://slushy-event.net/",
    embedOrigin: "<value>",
    amount: 366561,
    taxAmount: 426401,
    currency: "Brazilian Real",
    totalAmount: 106842,
    productId: "<value>",
    productPriceId: "<value>",
    isPaymentRequired: false,
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "Lourdes.Conn16@yahoo.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Panama",
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
| `type`                                                                                                       | [components.WebhookCheckoutUpdatedPayloadType](../../models/components/webhookcheckoutupdatedpayloadtype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.PolarCheckoutSchemasCheckout](../../models/components/polarcheckoutschemascheckout.md)           | :heavy_check_mark:                                                                                           | Checkout session data retrieved using an access token.                                                       |