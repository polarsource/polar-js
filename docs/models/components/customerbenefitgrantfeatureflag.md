# CustomerBenefitGrantFeatureFlag

## Example Usage

```typescript
import { CustomerBenefitGrantFeatureFlag } from "@polar-sh/sdk/models/components/customerbenefitgrantfeatureflag.js";

let value: CustomerBenefitGrantFeatureFlag = {
  createdAt: new Date("2024-08-28T20:11:59.181Z"),
  modifiedAt: null,
  id: "<value>",
  grantedAt: new Date("2024-08-29T07:54:18.256Z"),
  revokedAt: new Date("2025-11-22T10:02:14.734Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: true,
  isRevoked: true,
  customer: {
    createdAt: new Date("2024-10-05T17:24:11.012Z"),
    modifiedAt: new Date("2024-12-27T23:55:37.070Z"),
    id: "<value>",
    email: "Javonte_Bradtke81@yahoo.com",
    emailVerified: true,
    name: null,
    billingName: "<value>",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    oauthAccounts: {},
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-10-04T20:32:44.950Z"),
    modifiedAt: new Date("2025-09-25T16:16:12.273Z"),
    type: "feature_flag",
    description: "considering kiddingly direct or",
    selectable: false,
    deletable: true,
    isDeleted: false,
    organizationId: "<value>",
    metadata: {
      "key": 36145,
    },
    organization: {
      createdAt: new Date("2026-08-25T19:07:42.873Z"),
      modifiedAt: new Date("2025-12-26T12:35:13.942Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: null,
      prorationBehavior: "reset",
      allowCustomerUpdates: false,
    },
    properties: {},
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
| `benefit`                                                                                                    | [components.BenefitFeatureFlagSubscriber](../../models/components/benefitfeatureflagsubscriber.md)           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | [components.BenefitGrantFeatureFlagProperties](../../models/components/benefitgrantfeatureflagproperties.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |