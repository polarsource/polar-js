# CustomerCreate

## Example Usage

```typescript
import { CustomerCreate } from "@polar-sh/sdk/models/components";

let value: CustomerCreate = {
  email: "Easton_Kunde@yahoo.com",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `email`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `billingAddress`                                                                                   | [components.Address](../../models/components/address.md)                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `taxId`                                                                                            | *components.CustomerCreateTaxId*[]                                                                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `organizationId`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The ID of the organization owning the customer. **Required unless you use an organization token.** |