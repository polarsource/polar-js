# CheckoutUpdatePublic

Update an existing checkout session using the client secret.

## Example Usage

```typescript
import { CheckoutUpdatePublic } from "@polar-sh/sdk/models/components/checkoutupdatepublic.js";

let value: CheckoutUpdatePublic = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `customFieldData`                                                                           | Record<string, *components.CheckoutUpdatePublicCustomFieldData*>                            | :heavy_minus_sign:                                                                          | Key-value object storing custom field values.                                               |
| `productPriceId`                                                                            | *string*                                                                                    | :heavy_minus_sign:                                                                          | ID of the product price to checkout. Must correspond to a price linked to the same product. |
| `amount`                                                                                    | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `customerName`                                                                              | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `customerEmail`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `customerBillingAddress`                                                                    | [components.Address](../../models/components/address.md)                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `customerTaxId`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `discountCode`                                                                              | *string*                                                                                    | :heavy_minus_sign:                                                                          | Discount code to apply to the checkout.                                                     |