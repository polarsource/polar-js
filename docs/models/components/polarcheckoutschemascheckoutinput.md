# PolarCheckoutSchemasCheckoutInput

Checkout session data retrieved using an access token.

## Example Usage

```typescript
import { PolarCheckoutSchemasCheckoutInput } from "@polar-sh/sdk/models/components";

let value: PolarCheckoutSchemasCheckoutInput = {
  createdAt: new Date("2024-07-14T10:08:03.967Z"),
  modifiedAt: new Date("2024-03-18T12:35:36.869Z"),
  id: "<value>",
  status: "open",
  clientSecret: "<value>",
  expiresAt: new Date("2023-03-24T06:29:34.406Z"),
  successUrl: "https://stormy-derby.com/",
  amount: 660769,
  taxAmount: 219095,
  currency: "Kyat",
  totalAmount: 161205,
  productId: "<value>",
  productPriceId: "<value>",
  isPaymentRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "Willie.Spencer@hotmail.com",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "Republic of Korea",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {},
  metadata: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Creation timestamp of the object.                                                              |
| `modifiedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Last modification timestamp of the object.                                                     |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the object.                                                                          |
| `paymentProcessor`                                                                             | [components.PolarEnumsPaymentProcessor](../../models/components/polarenumspaymentprocessor.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [components.CheckoutStatus](../../models/components/checkoutstatus.md)                         | :heavy_check_mark:                                                                             | N/A                                                                                            |
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