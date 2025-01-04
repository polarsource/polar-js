# OrderCustomer

## Example Usage

```typescript
import { OrderCustomer } from "@polar-sh/sdk/models/components";

let value: OrderCustomer = {
  createdAt: new Date("2025-06-04T02:09:29.897Z"),
  modifiedAt: new Date("2023-02-25T21:41:46.505Z"),
  id: "<value>",
  metadata: {
    "key": 502453,
  },
  email: "Caleigh98@gmail.com",
  emailVerified: false,
  name: "<value>",
  billingAddress: {
    country: "Botswana",
  },
  taxId: [
    "cl_tin",
  ],
  organizationId: "<value>",
  avatarUrl: "https://small-creator.name/",
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