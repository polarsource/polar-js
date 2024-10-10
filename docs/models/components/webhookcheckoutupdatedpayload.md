# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2024-05-23T09:25:40.012Z"),
    modifiedAt: new Date("2024-12-28T07:19:49.051Z"),
    id: "<value>",
    status: "confirmed",
    clientSecret: "<value>",
    expiresAt: new Date("2022-09-09T12:41:53.591Z"),
    successUrl: "https://cavernous-haversack.org/",
    amount: 390200,
    taxAmount: 51733,
    currency: "Congolese Franc",
    totalAmount: 669678,
    productId: "<value>",
    productPriceId: "<value>",
    isPaymentRequired: false,
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "Clotilde30@hotmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Guinea",
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
| `data`                                                                                                       | [components.PolarCheckoutSchemasCheckoutInput](../../models/components/polarcheckoutschemascheckoutinput.md) | :heavy_check_mark:                                                                                           | Checkout session data retrieved using an access token.                                                       |