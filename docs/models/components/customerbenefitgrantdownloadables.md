# CustomerBenefitGrantDownloadables

## Example Usage

```typescript
import { CustomerBenefitGrantDownloadables } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantDownloadables = {
  createdAt: new Date("2024-01-07T21:12:58.857Z"),
  modifiedAt: new Date("2024-10-28T12:14:30.511Z"),
  id: "<value>",
  grantedAt: new Date("2024-01-27T14:58:29.591Z"),
  revokedAt: new Date("2023-09-06T06:23:05.578Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  benefit: {
    createdAt: new Date("2022-06-22T06:14:18.657Z"),
    modifiedAt: new Date("2024-10-06T12:45:51.755Z"),
    id: "<value>",
    description:
      "conservation reassemble blacken boastfully until hence cafe scale populist ick",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2022-10-27T02:34:14.358Z"),
      modifiedAt: new Date("2024-11-24T10:53:11.837Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://sparse-sideboard.name/",
      bio: "<value>",
      company: "McLaughlin, Mills and Connelly",
      blog: "<value>",
      location: "<value>",
      email: "Candido.Hamill@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 844540,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 496921,
      profileSettings: {},
      featureSettings: {},
    },
    properties: {
      activeFiles: [
        "<value>",
      ],
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Creation timestamp of the object.                                                                                |
| `modifiedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Last modification timestamp of the object.                                                                       |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the object.                                                                                            |
| `grantedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `revokedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customerId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `benefitId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `subscriptionId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `orderId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `isGranted`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `isRevoked`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `benefit`                                                                                                        | [components.BenefitDownloadablesSubscriber](../../models/components/benefitdownloadablessubscriber.md)           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `properties`                                                                                                     | [components.BenefitGrantDownloadablesProperties](../../models/components/benefitgrantdownloadablesproperties.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |