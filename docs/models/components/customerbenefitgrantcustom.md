# CustomerBenefitGrantCustom

## Example Usage

```typescript
import { CustomerBenefitGrantCustom } from "@polar-sh/sdk/models/components/customerbenefitgrantcustom.js";

let value: CustomerBenefitGrantCustom = {
  createdAt: new Date("2024-11-17T01:23:25.583Z"),
  modifiedAt: new Date("2025-12-10T17:33:07.669Z"),
  id: "<value>",
  grantedAt: new Date("2024-12-16T07:56:31.600Z"),
  revokedAt: new Date("2024-04-18T16:54:50.994Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: true,
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
    createdAt: new Date("2025-06-16T12:13:12.228Z"),
    modifiedAt: new Date("2026-01-08T16:08:00.921Z"),
    type: "custom",
    description:
      "coincide who at presume worriedly quash furthermore quickly forenenst now",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
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
      note: "<value>",
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Creation timestamp of the object.                                                                  |
| `modifiedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Last modification timestamp of the object.                                                         |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the object.                                                                              |
| `grantedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `revokedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `customerId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `memberId`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `benefitId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `subscriptionId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `orderId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `isGranted`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `isRevoked`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `error`                                                                                            | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `customer`                                                                                         | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `benefit`                                                                                          | [components.BenefitCustomSubscriber](../../models/components/benefitcustomsubscriber.md)           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `properties`                                                                                       | [components.BenefitGrantCustomProperties](../../models/components/benefitgrantcustomproperties.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |