# CustomerBenefitGrantLicenseKeys

## Example Usage

```typescript
import { CustomerBenefitGrantLicenseKeys } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantLicenseKeys = {
  createdAt: new Date("2022-10-27T02:34:14.358Z"),
  modifiedAt: new Date("2024-11-24T10:53:11.837Z"),
  id: "<value>",
  grantedAt: new Date("2023-03-02T11:20:38.154Z"),
  revokedAt: new Date("2024-05-05T05:07:58.692Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  benefit: {
    createdAt: new Date("2024-06-06T17:57:40.054Z"),
    modifiedAt: new Date("2023-11-12T15:37:06.563Z"),
    id: "<value>",
    description:
      "inasmuch transparency oddly yahoo before needily phooey as gosh",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2022-01-25T17:10:29.427Z"),
      modifiedAt: new Date("2023-06-27T19:14:57.655Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://courteous-innovation.biz/",
      bio: "<value>",
      company: "Hoeger and Sons",
      blog: "<value>",
      location: "<value>",
      email: "Wilburn_King42@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 6677,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 275606,
      profileSettings: {},
      featureSettings: {},
    },
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 864197,
        timeframe: "month",
      },
      activations: {
        limit: 4650,
        enableCustomerAdmin: false,
      },
      limitUsage: 787928,
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