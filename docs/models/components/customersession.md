# CustomerSession

A customer session that can be used to authenticate as a customer.

## Example Usage

```typescript
import { CustomerSession } from "@polar-sh/sdk/models/components";

let value: CustomerSession = {
  createdAt: new Date("2025-01-18T07:26:54.119Z"),
  modifiedAt: new Date("2023-05-12T18:42:21.049Z"),
  id: "<value>",
  token: "<value>",
  expiresAt: new Date("2024-02-29T05:46:31.262Z"),
  customerPortalUrl: "https://exotic-viability.com/",
  customerId: "<value>",
  customer: {
    createdAt: new Date("2024-08-26T14:28:00.674Z"),
    modifiedAt: new Date("2024-11-28T11:57:24.137Z"),
    id: "<value>",
    metadata: {
      "key": 243014,
    },
    email: "Cecilia42@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Monaco",
    },
    taxId: [
      "do_rcn",
    ],
    organizationId: "<value>",
    avatarUrl: "https://blushing-density.info",
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