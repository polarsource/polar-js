# PolarCheckoutSchemasCheckout

Checkout session data retrieved using an access token.

## Example Usage

```typescript
import { PolarCheckoutSchemasCheckout } from "@polar-sh/sdk/models/components";

let value: PolarCheckoutSchemasCheckout = {
  createdAt: new Date("2024-02-01T10:56:21.274Z"),
  modifiedAt: new Date("2022-06-23T00:19:14.402Z"),
  id: "<value>",
  status: "failed",
  clientSecret: "<value>",
  expiresAt: new Date("2023-05-05T04:09:38.309Z"),
  successUrl: "https://downright-object.org/",
  amount: 589101,
  taxAmount: 652345,
  currency: "Pound Sterling",
  totalAmount: 325851,
  productId: "<value>",
  productPriceId: "<value>",
  isPaymentRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "Jordi.Mosciski62@gmail.com",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "Thailand",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {},
  metadata: {
    "key": "<value>",
  },
  url: "https://dramatic-knickers.org/",
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
| `url`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |