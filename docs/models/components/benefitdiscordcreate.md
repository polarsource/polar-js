# BenefitDiscordCreate

## Example Usage

```typescript
import { BenefitDiscordCreate } from "@polar-sh/sdk/models/components/benefitdiscordcreate.js";

let value: BenefitDiscordCreate = {
  description: "an emergent see",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  properties: {
    guildToken: "<value>",
    roleId: "<id>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The description of the benefit. Will be displayed on products having this benefit.                     |                                                                                                        |
| `organizationId`                                                                                       | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The ID of the organization owning the benefit. **Required unless you use an organization token.**      | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                   |
| `properties`                                                                                           | [components.BenefitDiscordCreateProperties](../../models/components/benefitdiscordcreateproperties.md) | :heavy_check_mark:                                                                                     | Properties to create a benefit of type `discord`.                                                      |                                                                                                        |