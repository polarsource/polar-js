# CustomerBenefitGrantLicenseKeys

## Example Usage

```typescript
import { CustomerBenefitGrantLicenseKeys } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantLicenseKeys = {
  createdAt: new Date("2024-07-08T23:51:54.681Z"),
  modifiedAt: new Date("2022-01-25T17:10:29.427Z"),
  id: "<value>",
  grantedAt: new Date("2023-06-27T19:14:57.655Z"),
  revokedAt: new Date("2022-03-21T17:23:21.308Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  benefit: {
    createdAt: new Date("2022-06-09T23:08:32.328Z"),
    modifiedAt: new Date("2023-05-25T23:05:32.713Z"),
    id: "<value>",
    description: "limply near underneath midst",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2022-09-30T10:42:40.243Z"),
      modifiedAt: new Date("2024-06-17T16:49:17.447Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://adolescent-citizen.info/",
      bio: "<value>",
      company: "Nolan - Donnelly",
      blog: "<value>",
      location: "<value>",
      email: "Adele.Hansen98@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 898686,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 686368,
      profileSettings: {},
      featureSettings: {},
    },
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 958567,
        timeframe: "day",
      },
      activations: {
        limit: 878661,
        enableCustomerAdmin: false,
      },
      limitUsage: 577773,
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
| `benefit`                                                                                                    | [components.BenefitLicenseKeysSubscriber](../../models/components/benefitlicensekeyssubscriber.md)           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | [components.BenefitGrantLicenseKeysProperties](../../models/components/benefitgrantlicensekeysproperties.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |