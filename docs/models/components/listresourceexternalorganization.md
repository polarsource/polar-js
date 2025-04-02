# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components/listresourceexternalorganization.js";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "7e2f00dc-337f-4add-b29f-17cf16c9e189",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://liquid-newsstand.com",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Armstrong, O'Connell and Lakin",
      blog: "<value>",
      location: "<value>",
      email: "Carter_Stiedemann@hotmail.com",
      twitterUsername: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
  ],
  pagination: {
    totalCount: 682402,
    maxPage: 881543,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |