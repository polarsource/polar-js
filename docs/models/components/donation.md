# Donation

## Example Usage

```typescript
import { Donation } from "@polar-sh/sdk/models/components";

let value: Donation = {
  createdAt: new Date("2024-04-13T22:58:10.181Z"),
  modifiedAt: new Date("2023-02-17T17:56:53.516Z"),
  id: "<value>",
  amount: 172249,
  currency: "Turkish Lira",
  message: "<value>",
  donor: {
    id: "<value>",
    name: "<value>",
    avatarUrl: "https://medium-anticodon.com/",
    isPersonal: false,
  },
  email: "Jessy.Reilly30@gmail.com",
  issue: {
    id: "be78cdc4-1398-4816-80a3-b802eed95fe0",
    number: 543049,
    title: "<value>",
    state: "closed",
    issueCreatedAt: new Date("2023-05-25T11:06:48.802Z"),
    needsConfirmationSolved: false,
    funding: {},
    repository: {
      id: "263c8628-9ab0-4652-8507-8721cb4afd42",
      isPrivate: false,
      name: "MyOrg",
      description: "jaggedly kissingly forenenst marathon um uh-huh kissingly",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "82e629a6-0a32-4d87-8c79-6e9eec8a3edc",
        name: "<value>",
        avatarUrl: "https://upright-sideboard.org/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Gerhold and Sons",
        blog: "<value>",
        location: "<value>",
        email: "Eliezer.Tillman@yahoo.com",
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