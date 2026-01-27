# CustomersDeleteExternalRequest

## Example Usage

```typescript
import { CustomersDeleteExternalRequest } from "@polar-sh/sdk/models/operations/customersdeleteexternal.js";

let value: CustomersDeleteExternalRequest = {
  externalId: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `externalId`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | The customer external ID.                                                 |
| `anonymize`                                                               | *boolean*                                                                 | :heavy_minus_sign:                                                        | If true, also anonymize the customer's personal data for GDPR compliance. |