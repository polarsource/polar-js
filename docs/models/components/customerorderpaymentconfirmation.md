# CustomerOrderPaymentConfirmation

Response after confirming a retry payment.

## Example Usage

```typescript
import { CustomerOrderPaymentConfirmation } from "@polar-sh/sdk/models/components/customerorderpaymentconfirmation.js";

let value: CustomerOrderPaymentConfirmation = {
  status: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `status`                                       | *string*                                       | :heavy_check_mark:                             | Payment status after confirmation.             |
| `clientSecret`                                 | *string*                                       | :heavy_minus_sign:                             | Client secret for handling additional actions. |
| `error`                                        | *string*                                       | :heavy_minus_sign:                             | Error message if confirmation failed.          |