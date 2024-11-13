# BenefitLicenseKeysSubscriber

## Example Usage

```typescript
import { BenefitLicenseKeysSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeysSubscriber = {
  createdAt: new Date("2023-09-24T02:51:12.661Z"),
  modifiedAt: new Date("2022-11-27T05:06:38.850Z"),
  id: "<value>",
  description: "puny zowie lend ew after scoff swiftly",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2023-12-16T20:57:59.104Z"),
      modifiedAt: new Date("2022-11-30T19:27:00.258Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
      properties: {},
    },
  ],
  organization: {
    createdAt: new Date("2022-01-16T00:03:35.865Z"),
    modifiedAt: new Date("2022-08-19T01:44:07.509Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://ornate-drug.info",
    bio: "<value>",
    company: "Champlin Inc",
    blog: "<value>",
    location: "<value>",
    email: "Kari_Hilll6@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 420259,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 896695,
    profileSettings: {},
    featureSettings: {},
  },
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 277569,
      timeframe: "year",
    },
    activations: {
      limit: 928209,
      enableUserAdmin: false,
    },
    limitUsage: 168223,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Creation timestamp of the object.                                                                                      |
| `modifiedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Last modification timestamp of the object.                                                                             |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the benefit.                                                                                                 |
| `type`                                                                                                                 | [components.BenefitLicenseKeysSubscriberType](../../models/components/benefitlicensekeyssubscribertype.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The description of the benefit.                                                                                        |
| `selectable`                                                                                                           | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is selectable when creating a product.                                                             |
| `deletable`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is deletable.                                                                                      |
| `organizationId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the organization owning the benefit.                                                                         |
| `grants`                                                                                                               | [components.BenefitGrantLicenseKeys](../../models/components/benefitgrantlicensekeys.md)[]                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `organization`                                                                                                         | [components.Organization](../../models/components/organization.md)                                                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `properties`                                                                                                           | [components.BenefitLicenseKeysSubscriberProperties](../../models/components/benefitlicensekeyssubscriberproperties.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |