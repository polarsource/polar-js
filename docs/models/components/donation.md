# Donation

## Example Usage

```typescript
import { Donation } from "@polar-sh/sdk/models/components";

let value: Donation = {
  createdAt: new Date("2022-09-07T18:02:16.007Z"),
  modifiedAt: new Date("2022-07-08T02:37:07.585Z"),
  id: "<value>",
  amount: 513511,
  currency: "CFA Franc BCEAO",
  message: "<value>",
  donor: {
    id: "<value>",
    name: "<value>",
    avatarUrl: "https://gleaming-disconnection.net",
    isPersonal: false,
  },
  email: "Adonis.Lemke@hotmail.com",
  issue: {
    id: "86772c48-4ddf-45ed-892b-fd107ebfaec8",
    number: 130833,
    title: "<value>",
    state: "closed",
    issueCreatedAt: new Date("2023-02-09T20:00:38.933Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "94eefe99-f5a7-45e9-8702-8f7ade52f8e4",
      isPrivate: false,
      name: "MyOrg",
      description:
        "emotional guilt wheel mmm neaten inasmuch fedora furthermore hence consequently",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "dcba3a1d-37ec-4078-9d91-6af6f876966f",
        name: "<value>",
        avatarUrl: "https://meaty-density.org",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Conroy, Torp and Donnelly",
        blog: "<value>",
        location: "<value>",
        email: "Tomasa67@yahoo.com",
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