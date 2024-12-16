# Customer

A customer in an organization.

## Example Usage

```typescript
import { Customer } from "@polar-sh/sdk/models/components";

let value: Customer = {
  createdAt: new Date("2023-09-26T01:20:40.326Z"),
  modifiedAt: new Date("2023-06-09T00:23:35.182Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  email: "Skylar31@gmail.com",
  emailVerified: false,
  name: "<value>",
  billingAddress: {
    country: "Israel",
  },
  taxId: [
    "kr_brn",
  ],
  organizationId: "<value>",
  avatarUrl: "https://shameful-backburn.name/",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `metadata`                                                                                    | Record<string, *components.CustomerMetadata*>                                                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `emailVerified`                                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `billingAddress`                                                                              | [components.Address](../../models/components/address.md)                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxId`                                                                                       | *components.CustomerTaxId*[]                                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `avatarUrl`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |