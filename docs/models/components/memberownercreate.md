# MemberOwnerCreate

Schema for creating an owner member during customer creation.

## Example Usage

```typescript
import { MemberOwnerCreate } from "@polar-sh/sdk/models/components/memberownercreate.js";

let value: MemberOwnerCreate = {
  email: "member@example.com",
  name: "Jane Doe",
  externalId: "usr_1337",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `email`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | The email address of the member.                                               | member@example.com                                                             |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | Jane Doe                                                                       |
| `externalId`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | The ID of the member in your system. This must be unique within the customer.  | usr_1337                                                                       |