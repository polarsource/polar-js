# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2022-12-11T23:41:00.245Z"),
    modifiedAt: new Date("2024-08-23T22:10:48.974Z"),
    id: "<value>",
    status: "expired",
    clientSecret: "<value>",
    expiresAt: new Date("2024-06-20T13:02:49.294Z"),
    successUrl: "https://weighty-avalanche.biz/",
    amount: 24886,
    taxAmount: 959355,
    currency: "Australian Dollar",
    totalAmount: 349003,
    productId: "<value>",
    productPriceId: "<value>",
    isPaymentRequired: false,
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "Emory37@yahoo.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Rwanda",
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
| `data`                                                                                                       | [components.PolarCheckoutSchemasCheckoutInput](../../models/components/polarcheckoutschemascheckoutinput.md) | :heavy_check_mark:                                                                                           | Checkout session data retrieved using an access token.                                                       |