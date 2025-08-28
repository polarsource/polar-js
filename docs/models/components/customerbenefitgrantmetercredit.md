# CustomerBenefitGrantMeterCredit

## Example Usage

```typescript
import { CustomerBenefitGrantMeterCredit } from "@polar-sh/sdk/models/components/customerbenefitgrantmetercredit.js";

let value: CustomerBenefitGrantMeterCredit = {
  createdAt: new Date("2024-04-14T20:11:35.311Z"),
  modifiedAt: new Date("2025-05-18T14:47:11.111Z"),
  id: "<value>",
  grantedAt: new Date("2025-12-27T05:01:17.641Z"),
  revokedAt: new Date("2023-04-01T11:45:01.104Z"),
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
    createdAt: new Date("2023-07-10T03:04:33.155Z"),
    modifiedAt: new Date("2023-06-26T20:31:24.411Z"),
    type: "meter_credit",
    description:
      "yowza er dreamily gadzooks eventually outrun playfully mortally",
    selectable: false,
    deletable: true,
    organizationId: "<value>",
    metadata: {},
    organization: {
      createdAt: new Date("2025-10-05T12:57:48.267Z"),
      modifiedAt: new Date("2025-09-05T05:45:42.406Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://medium-object.org",
      email: "Elena.Barton@hotmail.com",
      website: "<value>",
      socials: [
        {
          platform: "youtube",
          url: "https://expert-elevation.org",
        },
      ],
      status: "denied",
      detailsSubmittedAt: new Date("2024-02-17T13:14:03.864Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
      notificationSettings: {
        newOrder: true,
        newSubscription: false,
      },
    },
    properties: {
      units: 430943,
      rollover: true,
      meterId: "<value>",
    },
  },
  properties: {
    lastCreditedMeterId: "<id>",
    lastCreditedUnits: 736819,
    lastCreditedAt: "<value>",
  },
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
| `benefit`                                                                                                    | [components.BenefitMeterCreditSubscriber](../../models/components/benefitmetercreditsubscriber.md)           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | [components.BenefitGrantMeterCreditProperties](../../models/components/benefitgrantmetercreditproperties.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |