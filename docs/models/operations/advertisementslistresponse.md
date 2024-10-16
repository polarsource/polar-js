# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-05-21T07:27:39.514Z"),
        modifiedAt: new Date("2023-10-02T04:18:15.215Z"),
        id: "<value>",
        imageUrl: "https://disloyal-vanadyl.biz/",
        imageUrlDark: "https://flowery-understanding.net",
        text: "<value>",
        linkUrl: "https://squiggly-cafe.info/",
      },
    ],
    pagination: {
      totalCount: 221218,
      maxPage: 683727,
    },
    dimensions: [
      102446,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |