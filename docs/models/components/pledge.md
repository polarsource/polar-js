# Pledge

## Example Usage

```typescript
import { Pledge } from "@polar-sh/sdk/models/components/pledge.js";

let value: Pledge = {
  createdAt: new Date("2024-11-14T13:37:18.232Z"),
  modifiedAt: new Date("2025-11-20T23:33:22.526Z"),
  id: "<value>",
  amount: 191101,
  currency: "Falkland Islands Pound",
  state: "cancelled",
  type: "pay_directly",
  issue: {
    id: "7b66284a-6dc2-49b8-b186-5953b3cf7c2c",
    platform: "github",
    number: 517023,
    title: "<value>",
    state: "open",
    issueCreatedAt: new Date("2023-06-26T06:22:26.978Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "e5766cea-f39a-4bc5-8e24-794e71df589c",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description:
        "bah serene woefully marksman brr unabashedly heighten although joshingly",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "0d7fe8a5-4281-475c-86e3-e9184ba16e6b",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://meager-understanding.name",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Witting, Rempel and Mayert",
        blog: "<value>",
        location: "<value>",
        email: "Allison18@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      internalOrganization: {
        createdAt: new Date("2023-02-11T04:04:23.784Z"),
        modifiedAt: new Date("2025-08-29T10:57:12.925Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://insidious-doing.biz",
        email: "Halle.Ullrich@yahoo.com",
        website: "<value>",
        socials: [
          {
            platform: "x",
            url: "https://heavy-adult.info",
          },
        ],
        detailsSubmittedAt: new Date("2023-04-11T11:15:31.566Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
        bio: "<value>",
        company: "Kutch and Sons",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 880428,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 713934,
        profileSettings: {},
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