# CustomerPortalCustomer

## Example Usage

```typescript
import { CustomerPortalCustomer } from "@polar-sh/sdk/models/components";

let value: CustomerPortalCustomer = {
  createdAt: new Date("2023-06-09T10:36:15.974Z"),
  modifiedAt: new Date("2025-07-08T23:51:54.681Z"),
  id: "<value>",
  email: "Jerome.Corkery@gmail.com",
  emailVerified: false,
  name: "<value>",
  billingAddress: {
    country: "Guinea-Bissau",
  },
  taxId: [
    "my_sst",
  ],
  oauthAccounts: {
    "key": {
      accountId: "<id>",
      accountUsername: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Creation timestamp of the object.                                                                              |
| `modifiedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Last modification timestamp of the object.                                                                     |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the object.                                                                                          |
| `email`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `emailVerified`                                                                                                | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `billingAddress`                                                                                               | [components.Address](../../models/components/address.md)                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `taxId`                                                                                                        | *components.CustomerPortalCustomerTaxId*[]                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `oauthAccounts`                                                                                                | Record<string, [components.CustomerPortalOAuthAccount](../../models/components/customerportaloauthaccount.md)> | :heavy_check_mark:                                                                                             | N/A                                                                                                            |