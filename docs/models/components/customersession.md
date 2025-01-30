# CustomerSession

A customer session that can be used to authenticate as a customer.

## Example Usage

```typescript
import { CustomerSession } from "@polar-sh/sdk/models/components/customersession.js";

let value: CustomerSession = {
  createdAt: new Date("2025-10-04T02:51:01.618Z"),
  modifiedAt: new Date("2025-06-15T05:16:58.669Z"),
  id: "<value>",
  token: "<value>",
  expiresAt: new Date("2023-09-02T16:34:40.356Z"),
  customerPortalUrl: "https://svelte-pecan.biz/",
  customerId: "<value>",
  customer: {
    createdAt: new Date("2025-08-10T13:22:12.445Z"),
    modifiedAt: new Date("2025-09-17T22:21:07.335Z"),
    id: "<value>",
    metadata: {
      "key": 984631,
    },
    email: "Ryan.Wilderman9@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "New Caledonia",
    },
    taxId: [
      "au_arn",
    ],
    organizationId: "<value>",
    avatarUrl: "https://spiffy-lift.info/",
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