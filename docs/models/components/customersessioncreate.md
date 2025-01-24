# CustomerSessionCreate

Schema for creating a customer session.

## Example Usage

```typescript
import { CustomerSessionCreate } from "@polar-sh/sdk/models/components/customersessioncreate.js";

let value: CustomerSessionCreate = {
  customerId: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `customerId`                                | *string*                                    | :heavy_check_mark:                          | ID of the customer to create a session for. |