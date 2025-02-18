# CustomerSession

A customer session that can be used to authenticate as a customer.

## Example Usage

```typescript
import { CustomerSession } from "@polar-sh/sdk/models/components/customersession.js";

let value: CustomerSession = {
  createdAt: new Date("2023-10-27T08:26:38.601Z"),
  modifiedAt: new Date("2025-11-07T05:30:16.112Z"),
  id: "<value>",
  token: "<value>",
  expiresAt: new Date("2023-12-07T05:12:12.503Z"),
  customerPortalUrl: "https://whole-postbox.net",
  customerId: "<value>",
  customer: {
    createdAt: new Date("2025-05-08T14:16:36.701Z"),
    modifiedAt: new Date("2024-12-13T07:57:37.315Z"),
    id: "<value>",
    metadata: {
      "key": 233989,
    },
    email: "Luna.Hirthe85@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Malaysia",
    },
    taxId: [
      "<id>",
    ],
    organizationId: "<value>",
    avatarUrl: "https://puzzled-rosemary.name",
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