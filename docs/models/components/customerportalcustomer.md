# CustomerPortalCustomer

## Example Usage

```typescript
import { CustomerPortalCustomer } from "@polar-sh/sdk/models/components/customerportalcustomer.js";

let value: CustomerPortalCustomer = {
  createdAt: new Date("2025-03-26T01:16:01.791Z"),
  modifiedAt: new Date("2023-08-28T00:22:05.181Z"),
  id: "<value>",
  email: "Dorian.Goldner47@yahoo.com",
  emailVerified: false,
  name: "<value>",
  billingAddress: {
    country: "SE",
  },
  taxId: [
    "FR61954506077",
    "eu_vat",
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Creation timestamp of the object.                                                                              |                                                                                                                |
| `modifiedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Last modification timestamp of the object.                                                                     |                                                                                                                |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the object.                                                                                          |                                                                                                                |
| `email`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `emailVerified`                                                                                                | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `billingAddress`                                                                                               | [components.Address](../../models/components/address.md)                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `taxId`                                                                                                        | *components.CustomerPortalCustomerTaxId*[]                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            | [<br/>"911144442",<br/>"us_ein"<br/>]                                                                          |
| `oauthAccounts`                                                                                                | Record<string, [components.CustomerPortalOAuthAccount](../../models/components/customerportaloauthaccount.md)> | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |