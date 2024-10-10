# PolarCheckoutSchemasCheckout

Checkout session data retrieved using an access token.

## Example Usage

```typescript
import { PolarCheckoutSchemasCheckout } from "@polar-sh/sdk/models/components";

let value: PolarCheckoutSchemasCheckout = {
  createdAt: new Date("2023-05-18T06:28:04.134Z"),
  modifiedAt: new Date("2024-10-11T08:44:45.015Z"),
  id: "<value>",
  status: "failed",
  clientSecret: "<value>",
  expiresAt: new Date("2024-12-10T05:43:15.244Z"),
  successUrl: "https://shadowy-attraction.org",
  amount: 473319,
  taxAmount: 60997,
  currency: "Zambian Kwacha",
  totalAmount: 570377,
  productId: "<value>",
  productPriceId: "<value>",
  isPaymentRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "Aisha_Deckow@yahoo.com",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "Argentina",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {},
  metadata: {
    "key": "<value>",
  },
  url: "https://well-lit-approach.com",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Creation timestamp of the object.                                                              |
| `modifiedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Last modification timestamp of the object.                                                     |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the object.                                                                          |
| `paymentProcessor`                                                                             | [components.PolarEnumsPaymentProcessor](../../models/components/polarenumspaymentprocessor.md) | :heavy_check_mark:                                                                             | Payment processor used.                                                                        |
| `status`                                                                                       | [components.CheckoutStatus](../../models/components/checkoutstatus.md)                         | :heavy_check_mark:                                                                             | Status of the checkout session.                                                                |
| `clientSecret`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | Client secret used to update and complete the checkout session from the client.                |
| `expiresAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Expiration date and time of the checkout session.                                              |
| `successUrl`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | URL where the customer will be redirected after a successful payment.                          |
| `amount`                                                                                       | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `taxAmount`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | Computed tax amount to pay in cents.                                                           |
| `currency`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | Currency code of the checkout session.                                                         |
| `totalAmount`                                                                                  | *number*                                                                                       | :heavy_check_mark:                                                                             | Total amount to pay in cents.                                                                  |
| `productId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the product to checkout.                                                                 |
| `productPriceId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the product price to checkout.                                                           |
| `isPaymentRequired`                                                                            | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Whether the checkout requires payment. Useful to detect free products.                         |
| `customerId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `customerName`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `customerEmail`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `customerIpAddress`                                                                            | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `customerBillingAddress`                                                                       | [components.Address](../../models/components/address.md)                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `customerTaxId`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `paymentProcessorMetadata`                                                                     | [components.PaymentProcessorMetadata](../../models/components/paymentprocessormetadata.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *string*>                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `url`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |