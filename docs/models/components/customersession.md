# CustomerSession

A customer session that can be used to authenticate as a customer.

## Example Usage

```typescript
import { CustomerSession } from "@polar-sh/sdk/models/components";

let value: CustomerSession = {
  createdAt: new Date("2024-07-07T12:53:51.135Z"),
  modifiedAt: new Date("2023-11-08T11:19:47.753Z"),
  id: "<value>",
  token: "<value>",
  expiresAt: new Date("2023-10-04T00:53:50.240Z"),
  customerPortalUrl: "https://blushing-mouser.info",
  customerId: "<value>",
  customer: {
    createdAt: new Date("2024-06-22T22:06:31.167Z"),
    modifiedAt: new Date("2025-06-01T03:35:11.920Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    email: "Emelie67@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Zimbabwe",
    },
    taxId: [
      "jp_cn",
    ],
    organizationId: "<value>",
    avatarUrl: "https://smart-incandescence.biz",
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
| `customerPortalUrl`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [components.Customer](../../models/components/customer.md)                                    | :heavy_check_mark:                                                                            | A customer in an organization.                                                                |