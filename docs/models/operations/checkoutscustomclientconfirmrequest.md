# CheckoutsCustomClientConfirmRequest

## Example Usage

```typescript
import { CheckoutsCustomClientConfirmRequest } from "@polar-sh/sdk/models/operations/checkoutscustomclientconfirm.js";

let value: CheckoutsCustomClientConfirmRequest = {
  clientSecret: "<value>",
  checkoutConfirmStripe: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `clientSecret`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | The checkout session client secret.                                                  |
| `checkoutConfirmStripe`                                                              | [components.CheckoutConfirmStripe](../../models/components/checkoutconfirmstripe.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |