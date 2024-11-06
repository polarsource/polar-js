# Donation

## Example Usage

```typescript
import { Donation } from "@polar-sh/sdk/models/components";

let value: Donation = {
  createdAt: new Date("2024-11-17T07:20:20.409Z"),
  modifiedAt: new Date("2024-10-12T09:58:31.166Z"),
  id: "<value>",
  amount: 969138,
  currency: "Mauritius Rupee",
  message: "<value>",
  donor: {
    id: "<value>",
    name: "<value>",
    avatarUrl: "https://descriptive-coordination.org/",
    isPersonal: false,
  },
  email: "Genesis_Bashirian@gmail.com",
  issue: {
    id: "2f681442-e30f-4fbd-b21d-55bc91501b42",
    number: 820355,
    title: "<value>",
    state: "closed",
    issueCreatedAt: new Date("2022-12-23T20:27:41.424Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "2ded418c-fe00-4a29-90b6-cb781aad03a8",
      isPrivate: false,
      name: "MyOrg",
      description: "once any lest",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "b681b8fd-55a7-48f1-89a3-9c4f27b78705",
        name: "<value>",
        avatarUrl: "https://lively-hamburger.net",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Jerde Group",
        blog: "<value>",
        location: "<value>",
        email: "Claudine.Thompson43@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2024-09-06T20:33:57.388Z"),
        modifiedAt: new Date("2022-03-29T04:02:08.271Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://winding-tinderbox.com",
        bio: "<value>",
        company: "Breitenberg - Jakubowski",
        blog: "<value>",
        location: "<value>",
        email: "Caterina.Heller29@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 419990,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 410248,
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `donor`                                                                                       | *components.Donor*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `issue`                                                                                       | [components.Issue](../../models/components/issue.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |