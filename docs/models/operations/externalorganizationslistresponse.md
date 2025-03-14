# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations/externalorganizationslist.js";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "ea360183-2fa0-442f-8498-e052c6d8f75b",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://bare-quinoa.net",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Tillman - Borer",
        blog: "<value>",
        location: "<value>",
        email: "Taya_Mante22@hotmail.com",
        twitterUsername: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
    ],
    pagination: {
      totalCount: 833518,
      maxPage: 90496,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |