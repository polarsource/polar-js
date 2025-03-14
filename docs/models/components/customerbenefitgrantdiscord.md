# CustomerBenefitGrantDiscord

## Example Usage

```typescript
import { CustomerBenefitGrantDiscord } from "@polar-sh/sdk/models/components/customerbenefitgrantdiscord.js";

let value: CustomerBenefitGrantDiscord = {
  createdAt: new Date("2023-08-04T00:06:38.791Z"),
  modifiedAt: new Date("2025-06-03T16:23:05.334Z"),
  id: "<value>",
  grantedAt: new Date("2025-02-12T12:07:10.324Z"),
  revokedAt: new Date("2023-01-02T16:56:03.229Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2025-04-25T06:20:47.068Z"),
    modifiedAt: new Date("2023-05-03T04:26:31.662Z"),
    id: "<value>",
    email: "Esteban_Abshire@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "FR",
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
  },
  benefit: {
    createdAt: new Date("2025-08-08T14:14:17.299Z"),
    modifiedAt: new Date("2024-07-02T06:17:05.413Z"),
    id: "<value>",
    description:
      "reluctantly whether although imagineer reflecting provided incidentally cleverly off boohoo",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-08-20T19:03:19.052Z"),
      modifiedAt: new Date("2023-11-18T05:51:16.287Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://thorough-minority.name/",
      email: "Christina_Bosco5@yahoo.com",
      website: "<value>",
      socials: [
        {
          platform: "facebook",
          url: "https://sturdy-eggplant.com/",
        },
      ],
      detailsSubmittedAt: new Date("2023-03-16T12:13:00.379Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
      bio: "<value>",
      company: "Donnelly Group",
      blog: "<value>",
      location: "<value>",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 183975,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 298735,
      profileSettings: {},
    },
    properties: {
      guildId: "<id>",
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the object.                                                                                |
| `grantedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `revokedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `customerId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `benefitId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `subscriptionId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `orderId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `isGranted`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `isRevoked`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `customer`                                                                                           | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `benefit`                                                                                            | [components.BenefitDiscordSubscriber](../../models/components/benefitdiscordsubscriber.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `properties`                                                                                         | [components.BenefitGrantDiscordProperties](../../models/components/benefitgrantdiscordproperties.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |