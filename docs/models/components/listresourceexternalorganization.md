# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "9333704b-9db0-4975-bfa4-81b5220cb746",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://ample-cutover.name/",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Braun - Price",
      blog: "<value>",
      location: "<value>",
      email: "Uriah.Gorczany@yahoo.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
  ],
  pagination: {
    totalCount: 369722,
    maxPage: 800407,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |