# UsersAdvertisementsListResponse

## Example Usage

```typescript
import { UsersAdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersAdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-06T01:32:10.356Z"),
        modifiedAt: new Date("2024-02-17T02:28:07.481Z"),
        id: "<value>",
        userId: "<value>",
        views: 954334,
        clicks: 351936,
        imageUrl: "https://soggy-formation.name",
        imageUrlDark: "https://turbulent-cantaloupe.biz/",
        text: "<value>",
        linkUrl: "https://impractical-replacement.name/",
      },
    ],
    pagination: {
      totalCount: 487676,
      maxPage: 545,
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [components.ListResourceUserAdvertisementCampaign](../../models/components/listresourceuseradvertisementcampaign.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |