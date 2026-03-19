# MemberCreate

Schema for creating a new member.

## Example Usage

```typescript
import { MemberCreate } from "@polar-sh/sdk/models/components/membercreate.js";

let value: MemberCreate = {
  customerId: "<value>",
  email: "member@example.com",
  name: "Jane Doe",
  externalId: "usr_1337",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `customerId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | The ID of the customer this member belongs to.                                 |                                                                                |
| `email`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | The email address of the member.                                               | member@example.com                                                             |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | Jane Doe                                                                       |
| `externalId`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | The ID of the member in your system. This must be unique within the customer.  | usr_1337                                                                       |
| `role`                                                                         | [components.MemberRole](../../models/components/memberrole.md)                 | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |