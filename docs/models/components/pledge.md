# Pledge

## Example Usage

```typescript
import { Pledge } from "@polar-sh/sdk/models/components/pledge.js";

let value: Pledge = {
  createdAt: new Date("2025-07-29T19:53:24.866Z"),
  modifiedAt: new Date("2024-03-16T06:19:45.604Z"),
  id: "<value>",
  amount: 115870,
  currency: "Serbian Dinar",
  state: "created",
  type: "pay_on_completion",
  issue: {
    id: "9f34eb7b-6628-44a6-bdc2-9b81865953b3",
    platform: "github",
    number: 979161,
    title: "<value>",
    state: "open",
    issueCreatedAt: new Date("2025-06-09T09:10:09.556Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "2cf842e5-766c-4eaf-b39a-bc5e24794e71",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description:
        "pupil transom stale and hmph now boo aw smoothly absentmindedly",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "d7fe8a54-2817-45c6-be3e-9184ba16e6b1",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://wee-luck.net",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Rempel, Mayert and Hilll",
        blog: "<value>",
        location: "<value>",
        email: "Holly.Senger74@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2025-08-29T10:57:12.925Z"),
        modifiedAt: new Date("2025-01-02T01:33:43.374Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://favorite-contrail.name/",
        bio: "<value>",
        company: "Roberts and Sons",
        blog: "<value>",
        location: "<value>",
        email: "Mabel_Baumbach36@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 472280,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 91668,
        profileSettings: {},
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
      },
    },
    pledgeBadgeCurrentlyEmbedded: false,
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_check_mark:                                                                                                                                          | Creation timestamp of the object.                                                                                                                           |
| `modifiedAt`                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_check_mark:                                                                                                                                          | Last modification timestamp of the object.                                                                                                                  |
| `id`                                                                                                                                                        | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | The ID of the object.                                                                                                                                       |
| `amount`                                                                                                                                                    | *number*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | Amount pledged towards the issue                                                                                                                            |
| `currency`                                                                                                                                                  | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `state`                                                                                                                                                     | [components.PledgeState](../../models/components/pledgestate.md)                                                                                            | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `type`                                                                                                                                                      | [components.PledgeType](../../models/components/pledgetype.md)                                                                                              | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `refundedAt`                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_minus_sign:                                                                                                                                          | If and when the pledge was refunded to the pledger                                                                                                          |
| `scheduledPayoutAt`                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_minus_sign:                                                                                                                                          | When the payout is scheduled to be made to the maintainers behind the issue. Disputes must be made before this date.                                        |
| `issue`                                                                                                                                                     | [components.Issue](../../models/components/issue.md)                                                                                                        | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `pledger`                                                                                                                                                   | [components.Pledger](../../models/components/pledger.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                          | The user or organization that made this pledge                                                                                                              |
| `hostedInvoiceUrl`                                                                                                                                          | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | URL of invoice for this pledge                                                                                                                              |
| `authedCanAdminSender`                                                                                                                                      | *boolean*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                          | If the currently authenticated subject can perform admin actions on behalf of the maker of the peldge                                                       |
| `authedCanAdminReceived`                                                                                                                                    | *boolean*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                          | If the currently authenticated subject can perform admin actions on behalf of the receiver of the peldge                                                    |
| `createdBy`                                                                                                                                                 | [components.Pledger](../../models/components/pledger.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                          | For pledges made by an organization, or on behalf of an organization. This is the user that made the pledge. Only visible for members of said organization. |