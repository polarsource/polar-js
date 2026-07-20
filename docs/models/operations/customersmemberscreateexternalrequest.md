# CustomersMembersCreateExternalRequest

## Example Usage

```typescript
import { CustomersMembersCreateExternalRequest } from "@polar-sh/sdk/models/operations/customersmemberscreateexternal.js";

let value: CustomersMembersCreateExternalRequest = {
  externalId: "<id>",
  memberCreateFromCustomer: {
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `externalId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | The customer external ID.                                                                  |
| `memberCreateFromCustomer`                                                                 | [components.MemberCreateFromCustomer](../../models/components/membercreatefromcustomer.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |