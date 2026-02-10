# CustomersUpdateExternalRequest

## Example Usage

```typescript
import { CustomersUpdateExternalRequest } from "@polar-sh/sdk/models/operations/customersupdateexternal.js";

let value: CustomersUpdateExternalRequest = {
  externalId: "<id>",
  customerUpdateExternalID: {
    email: "customer@example.com",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    locale: "en",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `externalId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | The customer external ID.                                                                  |
| `customerUpdateExternalID`                                                                 | [components.CustomerUpdateExternalID](../../models/components/customerupdateexternalid.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |