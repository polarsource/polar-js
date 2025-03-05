# CustomerUpdate

## Example Usage

```typescript
import { CustomerUpdate } from "@polar-sh/sdk/models/components/customerupdate.js";

let value: CustomerUpdate = {
  externalId: "usr_1337",
  email: "customer@example.com",
  name: "John Doe",
  billingAddress: {
    country: "FR",
  },
  taxId: [
    "FR61954506077",
    "eu_vat",
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `metadata`                                                                                                         | Record<string, *components.CustomerUpdateMetadata*>                                                                | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `externalId`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The ID of the customer in your system. This must be unique within the organization. Once set, it can't be updated. | usr_1337                                                                                                           |
| `email`                                                                                                            | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The email address of the customer. This must be unique within the organization.                                    | customer@example.com                                                                                               |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The name of the customer.                                                                                          | John Doe                                                                                                           |
| `billingAddress`                                                                                                   | [components.Address](../../models/components/address.md)                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `taxId`                                                                                                            | *components.CustomerUpdateTaxId*[]                                                                                 | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                | [<br/>"911144442",<br/>"us_ein"<br/>]                                                                              |