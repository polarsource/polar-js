# OwnerCreate

Schema for creating an owner member during customer creation.

## Example Usage

```typescript
import { OwnerCreate } from "@polar-sh/sdk/models/components/ownercreate.js";

let value: OwnerCreate = {
  email: "member@example.com",
  name: "Jane Doe",
  externalId: "usr_1337",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `email`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | The email address of the member.                                               | member@example.com                                                             |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | Jane Doe                                                                       |
| `externalId`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | The ID of the member in your system. This must be unique within the customer.  | usr_1337                                                                       |