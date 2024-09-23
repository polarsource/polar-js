# UsersAdvertisementsListResponse

## Example Usage

```typescript
import { UsersAdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersAdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-11T13:41:13.226Z"),
        modifiedAt: new Date("2024-08-23T16:32:18.589Z"),
        id: "<value>",
        userId: "<value>",
        views: 581273,
        clicks: 881736,
        imageUrl: "https://serpentine-knight.org",
        imageUrlDark: "https://insignificant-noon.com",
        text: "<value>",
        linkUrl: "https://quiet-elevator.name/",
      },
    ],
    pagination: {
      totalCount: 428769,
      maxPage: 135474,
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [components.ListResourceUserAdvertisementCampaign](../../models/components/listresourceuseradvertisementcampaign.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |