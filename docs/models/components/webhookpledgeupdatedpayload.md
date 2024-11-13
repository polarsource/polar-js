# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2023-08-31T03:43:53.251Z"),
    modifiedAt: new Date("2022-07-04T01:30:00.013Z"),
    id: "<value>",
    amount: 168922,
    currency: "Jamaican Dollar",
    state: "disputed",
    type: "pay_upfront",
    issue: {
      id: "7f077b4c-61a0-4b09-9db9-655682ea5fd9",
      number: 369094,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2023-01-11T09:40:17.816Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "39b48cab-3a43-4457-835e-230b870fddec",
        isPrivate: false,
        name: "MyOrg",
        description:
          "um underneath completion before monthly daintily synergy yearn too fervently",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "1b9c64d9-7e56-4429-aeaa-db6c1d88ea14",
          name: "<value>",
          avatarUrl: "https://fat-dividend.net/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Hegmann - Kautzer",
          blog: "<value>",
          location: "<value>",
          email: "Jaden_Witting93@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2022-06-14T13:59:56.674Z"),
          modifiedAt: new Date("2023-12-01T18:54:11.315Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://outrageous-cosset.com/",
          bio: "<value>",
          company: "Nienow Group",
          blog: "<value>",
          location: "<value>",
          email: "Hulda.DAmore89@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 147484,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 518170,
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
| `type`                                                                                                   | [components.WebhookPledgeUpdatedPayloadType](../../models/components/webhookpledgeupdatedpayloadtype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.Pledge](../../models/components/pledge.md)                                                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |