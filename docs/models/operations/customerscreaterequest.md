# CustomersCreateRequest

## Example Usage

```typescript
import { CustomersCreateRequest } from "@polar-sh/sdk/models/operations/customerscreate.js";

let value: CustomersCreateRequest = {
  customerCreate: {
    externalId: "usr_1337",
    email: "customer@example.com",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    owner: {
      email: "member@example.com",
      name: "Jane Doe",
      externalId: "usr_1337",
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `includeMembers`                                                       | *boolean*                                                              | :heavy_minus_sign:                                                     | Include members in the response. Only populated when set to true.      |
| `customerCreate`                                                       | [components.CustomerCreate](../../models/components/customercreate.md) | :heavy_check_mark:                                                     | N/A                                                                    |