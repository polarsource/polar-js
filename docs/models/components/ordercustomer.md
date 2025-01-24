# OrderCustomer

## Example Usage

```typescript
import { OrderCustomer } from "@polar-sh/sdk/models/components";

let value: OrderCustomer = {
  createdAt: new Date("2023-01-06T19:40:31.772Z"),
  modifiedAt: new Date("2023-01-13T10:41:07.081Z"),
  id: "<value>",
  metadata: {
    "key": 83291,
  },
  email: "Virgil.Corwin94@gmail.com",
  emailVerified: false,
  name: "<value>",
  billingAddress: {
    country: "Christmas Island",
  },
  taxId: [
    "br_cnpj",
  ],
  organizationId: "<value>",
  avatarUrl: "https://witty-paintwork.name/",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `metadata`                                                                                    | Record<string, *components.OrderCustomerMetadata*>                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `emailVerified`                                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `billingAddress`                                                                              | [components.Address](../../models/components/address.md)                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxId`                                                                                       | *components.OrderCustomerTaxId*[]                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `avatarUrl`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |