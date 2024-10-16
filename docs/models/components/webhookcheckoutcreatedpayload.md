# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2024-11-15T08:05:56.849Z"),
    modifiedAt: new Date("2024-12-26T16:52:12.542Z"),
    id: "<value>",
    status: "confirmed",
    clientSecret: "<value>",
    expiresAt: new Date("2022-09-21T21:39:25.434Z"),
    successUrl: "https://shoddy-interior.biz",
    amount: 822093,
    taxAmount: 829115,
    currency: "Kyat",
    totalAmount: 601560,
    productId: "<value>",
    productPriceId: "<value>",
    isPaymentRequired: false,
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "Otha_Abbott@yahoo.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Guatemala",
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