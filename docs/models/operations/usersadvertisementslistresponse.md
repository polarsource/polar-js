# UsersAdvertisementsListResponse

## Example Usage

```typescript
import { UsersAdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersAdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-01-21T23:00:31.300Z"),
        modifiedAt: new Date("2023-07-22T21:24:45.727Z"),
        id: "<value>",
        userId: "<value>",
        views: 842777,
        clicks: 373216,
        imageUrl: "https://boring-blowgun.biz/",
        imageUrlDark: "https://favorite-basket.com/",
        text: "<value>",
        linkUrl: "https://damp-meadow.net",
      },
    ],
    pagination: {
      totalCount: 456410,
      maxPage: 153369,
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [components.ListResourceUserAdvertisementCampaign](../../models/components/listresourceuseradvertisementcampaign.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |