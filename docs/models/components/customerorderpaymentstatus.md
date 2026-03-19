# CustomerOrderPaymentStatus

Payment status for an order.

## Example Usage

```typescript
import { CustomerOrderPaymentStatus } from "@polar-sh/sdk/models/components/customerorderpaymentstatus.js";

let value: CustomerOrderPaymentStatus = {
  status: "<value>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `status`                         | *string*                         | :heavy_check_mark:               | Current payment status.          |
| `error`                          | *string*                         | :heavy_minus_sign:               | Error message if payment failed. |