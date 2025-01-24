# CustomerPortalCustomer

## Example Usage

```typescript
import { CustomerPortalCustomer } from "@polar-sh/sdk/models/components/customerportalcustomer.js";

let value: CustomerPortalCustomer = {
  createdAt: new Date("2023-11-09T16:56:29.548Z"),
  modifiedAt: new Date("2024-04-13T17:45:46.632Z"),
  id: "<value>",
  email: "May.Spinka@yahoo.com",
  emailVerified: false,
  name: "<value>",
  billingAddress: {
    country: "Samoa",
  },
  taxId: [
    "<id>",
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