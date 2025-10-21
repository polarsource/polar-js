# CustomerBenefitGrantLicenseKeys

## Example Usage

```typescript
import { CustomerBenefitGrantLicenseKeys } from "@polar-sh/sdk/models/components/customerbenefitgrantlicensekeys.js";

let value: CustomerBenefitGrantLicenseKeys = {
  createdAt: new Date("2023-12-29T05:36:27.136Z"),
  modifiedAt: new Date("2025-08-05T20:48:50.717Z"),
  id: "<value>",
  grantedAt: new Date("2024-08-17T04:16:46.889Z"),
  revokedAt: new Date("2024-10-07T19:01:44.373Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2025-10-07T04:17:24.786Z"),
    modifiedAt: new Date("2025-05-05T02:01:44.871Z"),
    id: "<value>",
    email: "Sedrick_Paucek@hotmail.com",
    emailVerified: true,
    name: "<value>",
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
    createdAt: new Date("2024-06-21T03:24:54.887Z"),
    modifiedAt: new Date("2024-02-08T05:32:59.931Z"),
    type: "license_keys",
    description: "mathematics limited except however father",
    selectable: false,
    deletable: true,
    organizationId: "<value>",
    metadata: {
      "key": true,
    },
    organization: {
      createdAt: new Date("2024-03-27T03:55:24.068Z"),
      modifiedAt: new Date("2025-02-03T21:10:18.351Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://huge-lid.net/",
      email: "Dalton_Anderson49@hotmail.com",
      website: "<value>",
      socials: [],
      status: "under_review",
      detailsSubmittedAt: new Date("2024-02-22T02:01:31.430Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: true,
        allowCustomerUpdates: true,
        prorationBehavior: "invoice",
      },
      notificationSettings: {
        newOrder: false,
        newSubscription: true,
      },
      customerEmailSettings: {
        orderConfirmation: true,
        subscriptionCancellation: true,
        subscriptionConfirmation: true,
        subscriptionCycled: false,
        subscriptionPastDue: true,
        subscriptionRevoked: false,
        subscriptionUncanceled: false,
        subscriptionUpdated: false,
      },
    },
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 84298,
        timeframe: "year",
      },
      activations: {
        limit: 202982,
        enableCustomerAdmin: false,
      },
      limitUsage: 596467,
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
| `benefitId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `subscriptionId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `orderId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isGranted`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isRevoked`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `customer`                                                                                                   | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)                       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `benefit`                                                                                                    | [components.BenefitLicenseKeysSubscriber](../../models/components/benefitlicensekeyssubscriber.md)           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | [components.BenefitGrantLicenseKeysProperties](../../models/components/benefitgrantlicensekeysproperties.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |