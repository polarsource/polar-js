# WebhookPledgeCreatedPayload

Sent when a new pledge is created. Note that this does mean that the pledge has been paid yet.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookPledgeCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeCreatedPayload = {
  data: {
    createdAt: new Date("2022-11-02T18:35:31.377Z"),
    modifiedAt: new Date("2023-07-19T07:37:54.459Z"),
    id: "<value>",
    amount: 613676,
    currency: "Rufiyaa",
    state: "charge_disputed",
    type: "pay_on_completion",
    issue: {
      id: "346ce0f7-2970-49e7-83a4-e7c0b23d145e",
      number: 616935,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2022-11-13T12:49:49.908Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "78299635-1b05-4e38-82fd-5c9323afce3e",
        isPrivate: false,
        name: "MyOrg",
        description:
          "outflank caring since celsius partially marksman patroller lovely fooey youthful",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "2e0aae32-8f4c-454a-9c09-86c586772c48",
          name: "<value>",
          avatarUrl: "https://swift-unit.info",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Stokes, Marvin and Corkery",
          blog: "<value>",
          location: "<value>",
          email: "Tyrell46@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2024-03-02T17:01:51.399Z"),
          modifiedAt: new Date("2024-12-31T07:50:18.161Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://understated-signature.name",
          bio: "<value>",
          company: "Christiansen - Schultz",
          blog: "<value>",
          location: "<value>",
          email: "Leatha95@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 564017,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 601880,
          profileSettings: {},
          featureSettings: {},
        },
      },
      pledgeBadgeCurrentlyEmbedded: false,
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.WebhookPledgeCreatedPayloadType](../../models/components/webhookpledgecreatedpayloadtype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.Pledge](../../models/components/pledge.md)                                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |