# CheckoutConfirmStripe

Confirm a checkout session using a Stripe confirmation token.

## Example Usage

```typescript
import { CheckoutConfirmStripe } from "@polar-sh/sdk/models/components";

let value: CheckoutConfirmStripe = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `productPriceId`                                                                            | *string*                                                                                    | :heavy_minus_sign:                                                                          | ID of the product price to checkout. Must correspond to a price linked to the same product. |
| `amount`                                                                                    | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `customerName`                                                                              | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `customerEmail`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `customerBillingAddress`                                                                    | [components.Address](../../models/components/address.md)                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `customerTaxId`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `confirmationTokenId`                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | ID of the Stripe confirmation token. Required for fixed prices and custom prices.           |