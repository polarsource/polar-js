# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components/listresourceexternalorganization.js";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "ac44a982-386f-486f-9145-dc4d17a41475",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://aged-swanling.com/",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "O'Reilly - Sporer",
      blog: "<value>",
      location: "<value>",
      email: "Mack2@gmail.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
  ],
  pagination: {
    totalCount: 762184,
    maxPage: 339292,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |