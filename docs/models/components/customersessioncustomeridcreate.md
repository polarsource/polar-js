# CustomerSessionCustomerIDCreate

Schema for creating a customer session using a customer ID.

## Example Usage

```typescript
import { CustomerSessionCustomerIDCreate } from "@polar-sh/sdk/models/components/customersessioncustomeridcreate.js";

let value: CustomerSessionCustomerIDCreate = {
  customerId: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `customerId`                                | *string*                                    | :heavy_check_mark:                          | ID of the customer to create a session for. |