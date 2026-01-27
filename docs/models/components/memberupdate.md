# MemberUpdate

Schema for updating a member.

## Example Usage

```typescript
import { MemberUpdate } from "@polar-sh/sdk/models/components/memberupdate.js";

let value: MemberUpdate = {
  name: "Jane Doe",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | Jane Doe                                                       |
| `role`                                                         | [components.MemberRole](../../models/components/memberrole.md) | :heavy_minus_sign:                                             | The role of the member within the customer.                    |                                                                |