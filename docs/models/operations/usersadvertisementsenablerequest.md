# UsersAdvertisementsEnableRequest

## Example Usage

```typescript
import { UsersAdvertisementsEnableRequest } from "@polar-sh/sdk/models/operations";

let value: UsersAdvertisementsEnableRequest = {
    id: "<value>",
    userAdvertisementCampaignEnable: {
        benefitId: "<value>",
    },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The advertisement campaign ID.                                                                           |
| `userAdvertisementCampaignEnable`                                                                        | [components.UserAdvertisementCampaignEnable](../../models/components/useradvertisementcampaignenable.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |