# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations/externalorganizationslist.js";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "6ebb2ec0-e8bd-435c-85ad-c9e46cca29f4",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://personal-attraction.org/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Turcotte, O'Connell and Bartell",
        blog: "<value>",
        location: "<value>",
        email: "Ari.Bednar@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    ],
    pagination: {
      totalCount: 776876,
      maxPage: 783242,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |