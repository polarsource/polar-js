# CheckoutsClientConfirmRequest

## Example Usage

```typescript
import { CheckoutsClientConfirmRequest } from "@polar-sh/sdk/models/operations/checkoutsclientconfirm.js";

let value: CheckoutsClientConfirmRequest = {
  clientSecret: "<value>",
  checkoutConfirmStripe: {
    customerName: "John Doe",
    customerBillingAddress: {
      country: "US",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `clientSecret`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | The checkout session client secret.                                                  |
| `checkoutConfirmStripe`                                                              | [components.CheckoutConfirmStripe](../../models/components/checkoutconfirmstripe.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |