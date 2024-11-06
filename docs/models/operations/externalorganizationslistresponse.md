# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "beb2725e-e459-4f24-bd7e-2855765ebb49",
        name: "<value>",
        avatarUrl: "https://grown-rust.net",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Streich - Kiehn",
        blog: "<value>",
        location: "<value>",
        email: "Isidro.Mraz@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    ],
    pagination: {
      totalCount: 401428,
      maxPage: 416692,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |