# CustomerSession

A customer session that can be used to authenticate as a customer.

## Example Usage

```typescript
import { CustomerSession } from "@polar-sh/sdk/models/components";

let value: CustomerSession = {
  createdAt: new Date("2023-09-02T17:34:26.813Z"),
  modifiedAt: new Date("2025-01-04T04:06:45.165Z"),
  id: "<value>",
  token: "<value>",
  expiresAt: new Date("2025-05-20T00:02:58.462Z"),
  customerPortalUrl: "https://glass-rawhide.biz/",
  customerId: "<value>",
  customer: {
    createdAt: new Date("2025-08-12T00:35:57.398Z"),
    modifiedAt: new Date("2023-11-19T02:09:16.945Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    email: "Elinore_Greenholt@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Trinidad and Tobago",
    },
    taxId: [
      "<id>",
    ],
    organizationId: "<value>",
    avatarUrl: "https://sniveling-fork.net",
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