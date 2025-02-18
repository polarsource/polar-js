# Pledge

## Example Usage

```typescript
import { Pledge } from "@polar-sh/sdk/models/components/pledge.js";

let value: Pledge = {
  createdAt: new Date("2025-06-01T14:18:08.175Z"),
  modifiedAt: new Date("2025-12-09T03:51:03.988Z"),
  id: "<value>",
  amount: 441239,
  currency: "Lilangeni",
  state: "created",
  type: "pay_directly",
  issue: {
    id: "f842e576-6cea-4f39-9abc-5e24794e71df",
    platform: "github",
    number: 554644,
    title: "<value>",
    state: "closed",
    issueCreatedAt: new Date("2025-05-28T13:50:11.934Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "2db09079-ae4d-47ac-bbca-cee5f0973818",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description: "gloss gadzooks sorrowful whale",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "910560d7-fe8a-4542-8817-5c6e3e9184ba",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://unhappy-hamburger.net/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Stroman - Kuvalis",
        blog: "<value>",
        location: "<value>",
        email: "Kale_Witting@hotmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2023-02-16T14:34:47.648Z"),
        modifiedAt: new Date("2024-04-19T01:40:56.401Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://superb-cop-out.net/",
        bio: "<value>",
        company: "Torphy - Orn",
        blog: "<value>",
        location: "<value>",
        email: "Dimitri74@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 295651,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 649901,
        profileSettings: {},
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "invoice",
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