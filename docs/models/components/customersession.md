# CustomerSession

A customer session that can be used to authenticate as a customer.

## Example Usage

```typescript
import { CustomerSession } from "@polar-sh/sdk/models/components";

let value: CustomerSession = {
  createdAt: new Date("2023-02-02T05:55:21.427Z"),
  modifiedAt: new Date("2023-04-22T14:18:59.007Z"),
  id: "<value>",
  token: "<value>",
  expiresAt: new Date("2024-12-07T04:48:23.043Z"),
  customerId: "<value>",
  customer: {
    createdAt: new Date("2023-08-31T05:51:37.577Z"),
    modifiedAt: new Date("2024-06-02T04:49:52.259Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    email: "Araceli34@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Tonga",
    },
    taxId: [
      "sv_nit",
    ],
    organizationId: "<value>",
    avatarUrl: "https://staid-awareness.net/",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `token`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [components.Customer](../../models/components/customer.md)                                    | :heavy_check_mark:                                                                            | A customer in an organization.                                                                |