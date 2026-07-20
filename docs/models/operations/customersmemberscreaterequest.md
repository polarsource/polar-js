# CustomersMembersCreateRequest

## Example Usage

```typescript
import { CustomersMembersCreateRequest } from "@polar-sh/sdk/models/operations/customersmemberscreate.js";

let value: CustomersMembersCreateRequest = {
  id: "<value>",
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
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The customer ID.                                                                           |
| `memberCreateFromCustomer`                                                                 | [components.MemberCreateFromCustomer](../../models/components/membercreatefromcustomer.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |