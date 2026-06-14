# CustomerBenefitGrantSlackSharedChannel

## Example Usage

```typescript
import { CustomerBenefitGrantSlackSharedChannel } from "@polar-sh/sdk/models/components/customerbenefitgrantslacksharedchannel.js";

let value: CustomerBenefitGrantSlackSharedChannel = {
  createdAt: new Date("2024-07-30T10:44:13.027Z"),
  modifiedAt: new Date("2025-02-20T21:47:31.512Z"),
  id: "<value>",
  grantedAt: new Date("2025-01-27T04:07:08.298Z"),
  revokedAt: new Date("2024-02-17T05:00:49.339Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: null,
  orderId: "<value>",
  isGranted: false,
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
    createdAt: new Date("2024-07-17T03:52:29.172Z"),
    modifiedAt: new Date("2024-11-12T05:48:04.901Z"),
    type: "slack_shared_channel",
    description: "infatuated wherever tightly discrete",
    selectable: true,
    deletable: false,
    isDeleted: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2026-09-21T01:01:26.200Z"),
      modifiedAt: new Date("2024-02-09T14:46:30.040Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://quintessential-battle.net",
      prorationBehavior: "next_period",
      allowCustomerUpdates: true,
    },
    properties: {},
  },
  properties: {},
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | Creation timestamp of the object.                                                                                          |
| `modifiedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | Last modification timestamp of the object.                                                                                 |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the object.                                                                                                      |
| `grantedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `revokedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `customerId`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `memberId`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `benefitId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `subscriptionId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `orderId`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `isGranted`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `isRevoked`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `error`                                                                                                                    | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                                               | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `customer`                                                                                                                 | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)                                     | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `benefit`                                                                                                                  | [components.BenefitSlackSharedChannelSubscriber](../../models/components/benefitslacksharedchannelsubscriber.md)           | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `properties`                                                                                                               | [components.BenefitGrantSlackSharedChannelProperties](../../models/components/benefitgrantslacksharedchannelproperties.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |