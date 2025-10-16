# CustomerSessionCustomerIDCreate

Schema for creating a customer session using a customer ID.

## Example Usage

```typescript
import { CustomerSessionCustomerIDCreate } from "@polar-sh/sdk/models/components/customersessioncustomeridcreate.js";

let value: CustomerSessionCustomerIDCreate = {
  returnUrl: "https://example.com/account",
  customerId: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `returnUrl`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | When set, a back button will be shown in the customer portal to return to this URL. | https://example.com/account                                                         |
| `customerId`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | ID of the customer to create a session for.                                         |                                                                                     |