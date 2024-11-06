# Pledge

## Example Usage

```typescript
import { Pledge } from "@polar-sh/sdk/models/components";

let value: Pledge = {
  createdAt: new Date("2024-06-16T22:04:20.447Z"),
  modifiedAt: new Date("2024-03-16T09:04:21.592Z"),
  id: "<value>",
  amount: 844388,
  currency: "Brazilian Real",
  state: "refunded",
  type: "pay_directly",
  issue: {
    id: "b1ba5406-46b2-47c3-9de1-1a8ec81174fa",
    number: 356958,
    title: "<value>",
    state: "open",
    issueCreatedAt: new Date("2022-10-01T15:47:39.560Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "5a2a1ea9-2b3c-4cfc-b58a-4c520a4dc18f",
      isPrivate: false,
      name: "MyOrg",
      description:
        "that form hospitable consequently greedily upside-down consequently bah deploy",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "94351be0-a9ea-4692-8237-418b1b0bf714",
        name: "<value>",
        avatarUrl: "https://delicious-yin.info",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Bergnaum LLC",
        blog: "<value>",
        location: "<value>",
        email: "Devonte_Boyle@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2022-11-13T19:30:07.544Z"),
        modifiedAt: new Date("2022-09-17T06:04:05.728Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://reasonable-seagull.info/",
        bio: "<value>",
        company: "Renner - Glover",
        blog: "<value>",
        location: "<value>",
        email: "Eldred.Kovacek46@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 987015,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 974537,
        donationsEnabled: false,
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