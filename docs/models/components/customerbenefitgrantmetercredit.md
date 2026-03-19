# CustomerBenefitGrantMeterCredit

## Example Usage

```typescript
import { CustomerBenefitGrantMeterCredit } from "@polar-sh/sdk/models/components/customerbenefitgrantmetercredit.js";

let value: CustomerBenefitGrantMeterCredit = {
  createdAt: new Date("2025-04-14T20:11:35.311Z"),
  modifiedAt: new Date("2026-05-18T14:47:11.111Z"),
  id: "<value>",
  grantedAt: new Date("2026-12-27T05:01:17.641Z"),
  revokedAt: new Date("2024-03-31T11:45:01.104Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2024-10-05T17:24:11.012Z"),
    modifiedAt: new Date("2024-12-27T23:55:37.070Z"),
    id: "<value>",
    email: "Greg77@hotmail.com",
    emailVerified: true,
    name: "<value>",
    billingName: null,
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
    type: "individual",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-07-09T03:04:33.155Z"),
    modifiedAt: new Date("2024-06-25T20:31:24.411Z"),
    type: "meter_credit",
    description:
      "yowza er dreamily gadzooks eventually outrun playfully mortally",
    selectable: false,
    deletable: true,
    organizationId: "<value>",
    metadata: {},
    organization: {
      createdAt: new Date("2024-02-09T14:46:30.040Z"),
      modifiedAt: new Date("2025-07-28T16:12:54.009Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://spotless-knight.com/",
      prorationBehavior: "prorate",
      allowCustomerUpdates: true,
    },
    properties: {
      units: 430943,
      rollover: true,
      meterId: "<value>",
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Creation timestamp of the object.                                                                            |
| `modifiedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Last modification timestamp of the object.                                                                   |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the object.                                                                                        |
| `grantedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `revokedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `customerId`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `memberId`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `benefitId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `subscriptionId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `orderId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isGranted`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isRevoked`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `error`                                                                                                      | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                                 | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `customer`                                                                                                   | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)                       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `benefit`                                                                                                    | [components.BenefitMeterCreditSubscriber](../../models/components/benefitmetercreditsubscriber.md)           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | [components.BenefitGrantMeterCreditProperties](../../models/components/benefitgrantmetercreditproperties.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |