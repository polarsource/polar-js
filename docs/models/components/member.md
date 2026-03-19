# Member

A member of a customer.

## Example Usage

```typescript
import { Member } from "@polar-sh/sdk/models/components/member.js";

let value: Member = {
  id: "<value>",
  createdAt: new Date("2026-07-16T23:20:52.758Z"),
  modifiedAt: new Date("2025-10-27T19:33:03.848Z"),
  customerId: "<value>",
  email: "member@example.com",
  name: "Jane Doe",
  externalId: "usr_1337",
  role: "billing_manager",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the member.                                                                         |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the customer this member belongs to.                                                |                                                                                               |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The email address of the member.                                                              | member@example.com                                                                            |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the member.                                                                       | Jane Doe                                                                                      |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the member in your system. This must be unique within the customer.                 | usr_1337                                                                                      |
| `role`                                                                                        | [components.MemberRole](../../models/components/memberrole.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |