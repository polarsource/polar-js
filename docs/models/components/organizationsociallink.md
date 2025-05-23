# OrganizationSocialLink

## Example Usage

```typescript
import { OrganizationSocialLink } from "@polar-sh/sdk/models/components/organizationsociallink.js";

let value: OrganizationSocialLink = {
  platform: "facebook",
  url: "https://homely-monasticism.org",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `platform`                                                                                       | [components.OrganizationSocialPlatforms](../../models/components/organizationsocialplatforms.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `url`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | The URL to the organization profile                                                              |