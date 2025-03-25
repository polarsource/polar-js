# CustomersUpdateRequest

## Example Usage

```typescript
import { CustomersUpdateRequest } from "@polar-sh/sdk/models/operations/customersupdate.js";

let value: CustomersUpdateRequest = {
  id: "<value>",
  customerUpdate: {
    externalId: "usr_1337",
    email: "customer@example.com",
    name: "John Doe",
    billingAddress: {
      country: "SE",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The customer ID.                                                       |
| `customerUpdate`                                                       | [components.CustomerUpdate](../../models/components/customerupdate.md) | :heavy_check_mark:                                                     | N/A                                                                    |