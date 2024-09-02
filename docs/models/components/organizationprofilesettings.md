# OrganizationProfileSettings

## Example Usage

```typescript
import { OrganizationProfileSettings } from "@polar-sh/sdk/models/components";

let value: OrganizationProfileSettings = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | A description of the organization                                                                                  |
| `featuredProjects`                                                                                                 | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | A list of featured projects                                                                                        |
| `featuredOrganizations`                                                                                            | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | A list of featured organizations                                                                                   |
| `links`                                                                                                            | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | A list of links associated with the organization                                                                   |
| `subscribe`                                                                                                        | [components.OrganizationSubscribePromoteSettings](../../models/components/organizationsubscribepromotesettings.md) | :heavy_minus_sign:                                                                                                 | Subscription promotion settings                                                                                    |