# CardPaymentMetadata

Additional metadata for a card payment method.

## Example Usage

```typescript
import { CardPaymentMetadata } from "@polar-sh/sdk/models/components/cardpaymentmetadata.js";

let value: CardPaymentMetadata = {
  brand: "visa",
  last4: "4242",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `brand`                                     | *string*                                    | :heavy_check_mark:                          | The brand of the card used for the payment. | **Example 1:** visa<br/>**Example 2:** amex |
| `last4`                                     | *string*                                    | :heavy_check_mark:                          | The last 4 digits of the card number.       | 4242                                        |