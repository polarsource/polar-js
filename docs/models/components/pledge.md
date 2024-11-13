# Pledge

## Example Usage

```typescript
import { Pledge } from "@polar-sh/sdk/models/components";

let value: Pledge = {
  createdAt: new Date("2024-11-20T14:57:47.889Z"),
  modifiedAt: new Date("2023-02-13T09:46:48.968Z"),
  id: "<value>",
  amount: 630837,
  currency: "Som",
  state: "pending",
  type: "pay_directly",
  issue: {
    id: "97028f7a-de52-4f8e-841e-67f69b34bc34",
    number: 384833,
    title: "<value>",
    state: "closed",
    issueCreatedAt: new Date("2023-03-16T20:51:34.627Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "c09ff90d-b0cb-4188-ae78-88dfe3d50817",
      isPrivate: false,
      name: "MyOrg",
      description:
        "cork lavish suffice quantify archive regularly yippee enraged whoever",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "934ab942-a322-4bbe-949e-37ff87f93898",
        name: "<value>",
        avatarUrl: "https://trivial-cantaloupe.com/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Batz - Stiedemann",
        blog: "<value>",
        location: "<value>",
        email: "Boris86@hotmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2024-03-22T22:29:10.462Z"),
        modifiedAt: new Date("2022-07-02T13:20:48.734Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://digital-sonnet.info/",
        bio: "<value>",
        company: "Altenwerth - Gottlieb",
        blog: "<value>",
        location: "<value>",
        email: "Alexandria_Beer@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 221139,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 338526,
        profileSettings: {},
        featureSettings: {},
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