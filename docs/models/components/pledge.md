# Pledge

## Example Usage

```typescript
import { Pledge } from "@polar-sh/sdk/models/components/pledge.js";

let value: Pledge = {
  createdAt: new Date("2023-06-06T19:25:18.197Z"),
  modifiedAt: new Date("2023-05-20T22:16:32.498Z"),
  id: "<value>",
  amount: 249052,
  currency: "Lek",
  state: "cancelled",
  type: "pay_directly",
  issue: {
    id: "26939d95-3aa3-49b2-b3d3-3767d47ae059",
    platform: "github",
    number: 697416,
    title: "<value>",
    state: "closed",
    issueCreatedAt: new Date("2024-03-20T11:24:00.186Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "c5130dbf-e5a9-4cea-b0e2-5e6be47ae118",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description: "when lost defrag ha ack",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "7203adeb-d577-4fa9-b6be-ec31cb393d7b",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://flawless-decision.biz",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Koepp - Labadie",
        blog: "<value>",
        location: "<value>",
        email: "Katarina.Schmitt@hotmail.com",
        twitterUsername: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      internalOrganization: {
        createdAt: new Date("2025-12-07T02:41:01.480Z"),
        modifiedAt: new Date("2024-07-24T01:11:35.710Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://unselfish-assist.name",
        email: "Ramiro56@gmail.com",
        website: "<value>",
        socials: [
          {
            platform: "linkedin",
            url: "https://tedious-configuration.com/",
          },
        ],
        detailsSubmittedAt: new Date("2024-05-17T05:06:57.622Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
        bio: "<value>",
        company: "Barrows, Stracke and Schuppe",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 102418,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 193077,
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