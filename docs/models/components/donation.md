# Donation

## Example Usage

```typescript
import { Donation } from "@polar-sh/sdk/models/components";

let value: Donation = {
  createdAt: new Date("2023-11-23T09:32:09.666Z"),
  modifiedAt: new Date("2023-04-27T22:20:58.886Z"),
  id: "<value>",
  amount: 344722,
  currency: "Tala",
  message: "<value>",
  donor: {
    id: "<value>",
    publicName: "<value>",
    avatarUrl: "https://awful-clavicle.name/",
  },
  email: "Jaeden_Stark36@hotmail.com",
  issue: {
    id: "f8e41e67-f69b-434b-ac34-06e6c09ff90d",
    number: 24681,
    title: "<value>",
    state: "closed",
    issueCreatedAt: new Date("2024-02-28T13:41:03.002Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "188e7888-dfe3-4d50-b817-bd5d095833dc",
      isPrivate: false,
      name: "MyOrg",
      description: "phew poetry tank bicycle left since",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "83fe2e39-e934-4ab9-b42a-322bbe49e37f",
        name: "<value>",
        avatarUrl: "https://key-unblinking.name",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Larson - Marquardt",
        blog: "<value>",
        location: "<value>",
        email: "Gust.Stroman13@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
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