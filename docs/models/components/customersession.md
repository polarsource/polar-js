# CustomerSession

A customer session that can be used to authenticate as a customer.

## Example Usage

```typescript
import { CustomerSession } from "@polar-sh/sdk/models/components/customersession.js";

let value: CustomerSession = {
  createdAt: new Date("2024-11-29T23:44:32.134Z"),
  modifiedAt: new Date("2023-10-14T18:21:15.353Z"),
  id: "<value>",
  token: "<value>",
  expiresAt: new Date("2024-08-14T13:06:25.159Z"),
  customerPortalUrl: "https://filthy-airmail.biz",
  customerId: "<value>",
  customer: {
    createdAt: new Date("2025-10-28T00:46:45.109Z"),
    modifiedAt: new Date("2023-01-23T11:33:34.208Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    email: "Meghan.McKenzie-Bogisich78@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Falkland Islands (Malvinas)",
    },
    taxId: [
      "do_rcn",
    ],
    organizationId: "<value>",
    avatarUrl: "https://stale-sonar.name",
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