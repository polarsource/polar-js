# CustomerSession

A customer session that can be used to authenticate as a customer.

## Example Usage

```typescript
import { CustomerSession } from "@polar-sh/sdk/models/components";

let value: CustomerSession = {
  createdAt: new Date("2022-09-02T17:34:26.813Z"),
  modifiedAt: new Date("2024-01-05T04:06:45.165Z"),
  id: "<value>",
  token: "<value>",
  expiresAt: new Date("2024-05-20T00:02:58.462Z"),
  customerId: "<value>",
  customer: {
    createdAt: new Date("2023-03-25T04:03:25.121Z"),
    modifiedAt: new Date("2022-12-16T02:34:06.572Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    email: "Sarai.Bechtelar@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Faroe Islands",
    },
    taxId: [
      "vn_tin",
    ],
    organizationId: "<value>",
    avatarUrl: "https://untimely-extension.net",
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