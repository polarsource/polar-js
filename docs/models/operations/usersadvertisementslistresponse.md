# UsersAdvertisementsListResponse

## Example Usage

```typescript
import { UsersAdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersAdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-11T12:47:58.088Z"),
        modifiedAt: new Date("2024-08-11T14:46:30.188Z"),
        id: "<value>",
        userId: "<value>",
        views: 978619,
        clicks: 473608,
        imageUrl: "https://starry-initialise.name",
        imageUrlDark: "https://rash-butcher.net",
        text: "<value>",
        linkUrl: "https://oily-cephalopod.name",
      },
    ],
    pagination: {
      totalCount: 944669,
      maxPage: 758616,
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [components.ListResourceUserAdvertisementCampaign](../../models/components/listresourceuseradvertisementcampaign.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |