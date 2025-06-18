# CustomerSessionCustomerExternalIDCreate

Schema for creating a customer session using an external customer ID.

## Example Usage

```typescript
import { CustomerSessionCustomerExternalIDCreate } from "@polar-sh/sdk/models/components/customersessioncustomerexternalidcreate.js";

let value: CustomerSessionCustomerExternalIDCreate = {
  externalCustomerId: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `externalCustomerId`                                 | *string*                                             | :heavy_check_mark:                                   | External ID of the customer to create a session for. |