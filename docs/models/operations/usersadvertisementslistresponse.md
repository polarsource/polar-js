# UsersAdvertisementsListResponse

## Example Usage

```typescript
import { UsersAdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersAdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-09-29T22:44:12.638Z"),
        modifiedAt: new Date("2023-05-05T01:16:52.859Z"),
        id: "<value>",
        userId: "<value>",
        views: 244498,
        clicks: 252366,
        imageUrl: "https://stingy-meander.name/",
        imageUrlDark: "https://bogus-interchange.info",
        text: "<value>",
        linkUrl: "https://dead-colonialism.info",
      },
    ],
    pagination: {
      totalCount: 606217,
      maxPage: 302802,
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [components.ListResourceUserAdvertisementCampaign](../../models/components/listresourceuseradvertisementcampaign.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |