# RepositoryProfileSettings

## Example Usage

```typescript
import { RepositoryProfileSettings } from "@polar-sh/sdk/models/components/repositoryprofilesettings.js";

let value: RepositoryProfileSettings = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `description`                             | *string*                                  | :heavy_minus_sign:                        | A description of the repository           |
| `coverImageUrl`                           | *string*                                  | :heavy_minus_sign:                        | A URL to a cover image                    |
| `featuredOrganizations`                   | *string*[]                                | :heavy_minus_sign:                        | A list of featured organizations          |
| `highlightedSubscriptionTiers`            | *string*[]                                | :heavy_minus_sign:                        | A list of highlighted subscription tiers  |
| `links`                                   | *string*[]                                | :heavy_minus_sign:                        | A list of links related to the repository |