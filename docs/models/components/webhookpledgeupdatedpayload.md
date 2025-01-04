# WebhookPledgeUpdatedPayload

Sent when a pledge is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookPledgeUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookPledgeUpdatedPayload = {
  data: {
    createdAt: new Date("2025-03-31T22:39:21.658Z"),
    modifiedAt: new Date("2024-12-14T20:02:36.523Z"),
    id: "<value>",
    amount: 62736,
    currency: "Jordanian Dinar",
    state: "cancelled",
    type: "pay_on_completion",
    issue: {
      id: "b1d8f8cf-b950-466d-83b0-ea64296be4a6",
      platform: "github",
      number: 615433,
      title: "<value>",
      state: "open",
      issueCreatedAt: new Date("2023-01-16T01:02:59.626Z"),
      needsConfirmationSolved: false,
      funding: {},
      repository: {
        id: "71a88eeb-9401-4539-b86c-bb806770a408",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "igloo although lively",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "2b7e0d2e-580b-43ea-b442-c74fc9c1a5bf",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://silver-instance.biz",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Pagac - Conroy",
          blog: "<value>",
          location: "<value>",
          email: "Manuela47@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-08-03T01:37:55.590Z"),
          modifiedAt: new Date("2025-03-13T11:02:48.884Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://mixed-strait.biz",
          bio: "<value>",
          company: "Trantow LLC",
          blog: "<value>",
          location: "<value>",
          email: "Damaris_Hane@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 617670,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 736436,
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

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `data`                                                 | [components.Pledge](../../models/components/pledge.md) | :heavy_check_mark:                                     | N/A                                                    |