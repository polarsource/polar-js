# CheckoutsCustomClientUpdateRequest

## Example Usage

```typescript
import { CheckoutsCustomClientUpdateRequest } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomClientUpdateRequest = {
  clientSecret: "<value>",
  checkoutUpdatePublic: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `clientSecret`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | The checkout session client secret.                                                |
| `checkoutUpdatePublic`                                                             | [components.CheckoutUpdatePublic](../../models/components/checkoutupdatepublic.md) | :heavy_check_mark:                                                                 | N/A                                                                                |