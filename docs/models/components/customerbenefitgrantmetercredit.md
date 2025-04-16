# CustomerBenefitGrantMeterCredit

## Example Usage

```typescript
import { CustomerBenefitGrantMeterCredit } from "@polar-sh/sdk/models/components/customerbenefitgrantmetercredit.js";

let value: CustomerBenefitGrantMeterCredit = {
  createdAt: new Date("2025-05-03T01:40:46.344Z"),
  modifiedAt: new Date("2025-12-06T01:26:55.407Z"),
  id: "<value>",
  grantedAt: new Date("2024-08-19T02:38:27.858Z"),
  revokedAt: new Date("2025-02-04T14:22:46.766Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2023-05-21T14:56:07.287Z"),
    modifiedAt: new Date("2023-07-14T06:34:38.265Z"),
    id: "<value>",
    email: "Sonia.Blanda84@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "FR",
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
  },
  benefit: {
    createdAt: new Date("2025-01-01T07:06:15.468Z"),
    modifiedAt: new Date("2025-10-06T19:40:41.293Z"),
    id: "<value>",
    description:
      "vaguely quarrelsomely rarely for make playfully bobble tightly",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2025-07-09T08:40:21.969Z"),
      modifiedAt: new Date("2024-06-28T19:25:45.361Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://finished-clamp.net",
      email: "Shanelle_Shields76@gmail.com",
      website: "<value>",
      socials: [
        {
          platform: "github",
          url: "https://pertinent-illusion.org",
        },
      ],
      detailsSubmittedAt: new Date("2023-10-26T06:11:55.008Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
      bio: "<value>",
      company: "Turner - Lemke",
      blog: "<value>",
      location: "<value>",
      twitterUsername: "<value>",
    },
    properties: {
      units: 846849,
      meterId: "<value>",
    },
  },
  properties: {
    lastCreditedMeterId: "<id>",
    lastCreditedUnits: 407926,
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