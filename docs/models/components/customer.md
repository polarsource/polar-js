# Customer

A customer in an organization.

## Example Usage

```typescript
import { Customer } from "@polar-sh/sdk/models/components";

let value: Customer = {
  createdAt: new Date("2023-09-26T10:14:13.562Z"),
  modifiedAt: new Date("2025-05-25T13:03:12.980Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  email: "Mae_Olson30@hotmail.com",
  emailVerified: false,
  name: "<value>",
  billingAddress: {
    country: "Northern Mariana Islands",
  },
  taxId: [
    "is_vat",
  ],
  organizationId: "<value>",
  avatarUrl: "https://enlightened-marathon.info/",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `metadata`                                                                                    | Record<string, *components.CustomerMetadata1*>                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `emailVerified`                                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `billingAddress`                                                                              | [components.Address](../../models/components/address.md)                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxId`                                                                                       | *components.CustomerTaxId*[]                                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `avatarUrl`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |