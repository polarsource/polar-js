# CustomerSession

A customer session that can be used to authenticate as a customer.

## Example Usage

```typescript
import { CustomerSession } from "@polar-sh/sdk/models/components/customersession.js";

let value: CustomerSession = {
  createdAt: new Date("2023-01-18T13:41:31.922Z"),
  modifiedAt: new Date("2023-12-01T20:12:04.141Z"),
  id: "<value>",
  token: "<value>",
  expiresAt: new Date("2025-08-15T21:46:11.495Z"),
  customerPortalUrl: "https://urban-corporation.net",
  customerId: "<value>",
  customer: {
    createdAt: new Date("2024-06-23T10:56:58.862Z"),
    modifiedAt: new Date("2023-10-16T10:23:17.202Z"),
    id: "<value>",
    metadata: {
      "key": 610021,
    },
    externalId: "<id>",
    email: "Noemie36@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Kazakhstan",
    },
    taxId: [
      "kz_bin",
    ],
    organizationId: "<value>",
    avatarUrl: "https://nocturnal-scarification.info",
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