# MemberCreateFromCustomer

Schema for creating a new member nested under a customer.

The customer is taken from the URL path, so it's not part of the body.

## Example Usage

```typescript
import { MemberCreateFromCustomer } from "@polar-sh/sdk/models/components/membercreatefromcustomer.js";

let value: MemberCreateFromCustomer = {
  email: "member@example.com",
  name: "Jane Doe",
  externalId: "usr_1337",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `email`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The email address of the member.                                                                             | member@example.com                                                                                           |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | Jane Doe                                                                                                     |
| `externalId`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The ID of the member in your system. This must be unique within the customer.                                | usr_1337                                                                                                     |
| `role`                                                                                                       | [components.Role](../../models/components/role.md)                                                           | :heavy_minus_sign:                                                                                           | The role of the member within the customer. To assign or transfer ownership, use the member update endpoint. | member                                                                                                       |