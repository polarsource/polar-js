# CustomersUpdateExternalRequest

## Example Usage

```typescript
import { CustomersUpdateExternalRequest } from "@polar-sh/sdk/models/operations/customersupdateexternal.js";

let value: CustomersUpdateExternalRequest = {
  externalId: "<id>",
  customerUpdate: {
    externalId: "usr_1337",
    email: "customer@example.com",
    name: "John Doe",
    billingAddress: {
      country: "SE",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `externalId`                                                           | *string*                                                               | :heavy_check_mark:                                                     | The customer external ID.                                              |
| `customerUpdate`                                                       | [components.CustomerUpdate](../../models/components/customerupdate.md) | :heavy_check_mark:                                                     | N/A                                                                    |