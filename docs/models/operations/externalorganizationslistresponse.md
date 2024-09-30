# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "a48120f0-291e-4bf8-b48e-84e5035d775e",
        name: "<value>",
        avatarUrl: "https://huge-vibration.net",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Frami, Emmerich and Cummerata",
        blog: "<value>",
        location: "<value>",
        email: "Eldred_Kunde84@hotmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    ],
    pagination: {
      totalCount: 426904,
      maxPage: 842855,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |