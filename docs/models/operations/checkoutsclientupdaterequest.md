# CheckoutsClientUpdateRequest

## Example Usage

```typescript
import { CheckoutsClientUpdateRequest } from "@polar-sh/sdk/models/operations/checkoutsclientupdate.js";

let value: CheckoutsClientUpdateRequest = {
  clientSecret: "<value>",
  checkoutUpdatePublic: {
    customerBillingAddress: {
      country: "FR",
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `clientSecret`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | The checkout session client secret.                                                |
| `checkoutUpdatePublic`                                                             | [components.CheckoutUpdatePublic](../../models/components/checkoutupdatepublic.md) | :heavy_check_mark:                                                                 | N/A                                                                                |