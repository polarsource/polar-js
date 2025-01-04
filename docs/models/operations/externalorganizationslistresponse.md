# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "222879f9-343c-471d-b69f-98ee7aa4290d",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://velvety-vein.info",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Wiza, Stehr and O'Keefe",
        blog: "<value>",
        location: "<value>",
        email: "Nash12@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    ],
    pagination: {
      totalCount: 394467,
      maxPage: 951520,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |