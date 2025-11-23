# CustomersUpdateRequest

## Example Usage

```typescript
import { CustomersUpdateRequest } from "@polar-sh/sdk/models/operations/customersupdate.js";

let value: CustomersUpdateRequest = {
  id: "<value>",
  customerUpdate: {
    email: "customer@example.com",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    externalId: "usr_1337",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The customer ID.                                                       |
| `includeMembers`                                                       | *boolean*                                                              | :heavy_minus_sign:                                                     | Include members in the response. Only populated when set to true.      |
| `customerUpdate`                                                       | [components.CustomerUpdate](../../models/components/customerupdate.md) | :heavy_check_mark:                                                     | N/A                                                                    |