# BenefitDiscordCreate

## Example Usage

```typescript
import { BenefitDiscordCreate } from "@polar-sh/sdk/models/components";

let value: BenefitDiscordCreate = {
  description: "Triple-buffered client-server policy",
  properties: {
    guildToken: "<value>",
    roleId: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.BenefitDiscordCreateType](../../models/components/benefitdiscordcreatetype.md)             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The description of the benefit. Will be displayed on products having this benefit.                     |
| `organizationId`                                                                                       | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The ID of the organization owning the benefit. **Required unless you use an organization token.**      |
| `properties`                                                                                           | [components.BenefitDiscordCreateProperties](../../models/components/benefitdiscordcreateproperties.md) | :heavy_check_mark:                                                                                     | Properties to create a benefit of type `discord`.                                                      |