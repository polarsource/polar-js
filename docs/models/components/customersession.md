# CustomerSession

A customer session that can be used to authenticate as a customer.

## Example Usage

```typescript
import { CustomerSession } from "@polar-sh/sdk/models/components/customersession.js";

let value: CustomerSession = {
  createdAt: new Date("2025-11-17T08:36:55.539Z"),
  modifiedAt: new Date("2024-04-22T13:46:31.465Z"),
  id: "<value>",
  token: "<value>",
  expiresAt: new Date("2025-09-28T06:54:26.061Z"),
  customerPortalUrl: "https://similar-cow.info",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-12-07T23:04:13.096Z"),
    modifiedAt: new Date("2023-10-09T10:28:05.599Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "SE",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
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