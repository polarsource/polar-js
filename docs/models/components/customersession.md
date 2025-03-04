# CustomerSession

A customer session that can be used to authenticate as a customer.

## Example Usage

```typescript
import { CustomerSession } from "@polar-sh/sdk/models/components/customersession.js";

let value: CustomerSession = {
  createdAt: new Date("2023-10-09T08:12:15.828Z"),
  modifiedAt: new Date("2024-06-07T06:20:48.185Z"),
  id: "<value>",
  token: "<value>",
  expiresAt: new Date("2024-03-13T14:18:20.001Z"),
  customerPortalUrl: "https://frilly-airbus.net/",
  customerId: "<value>",
  customer: {
    createdAt: new Date("2024-05-09T07:07:25.624Z"),
    modifiedAt: new Date("2023-10-12T16:44:39.135Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    externalId: "<id>",
    email: "Uriel.Gislason@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Cape Verde",
    },
    taxId: [
      "hr_oib",
    ],
    organizationId: "<value>",
    avatarUrl: "https://outstanding-charlatan.com",
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