# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-01T03:35:11.920Z"),
        modifiedAt: new Date("2022-06-16T15:19:22.874Z"),
        id: "<value>",
        imageUrl: "https://gifted-soliloquy.biz",
        imageUrlDark: "https://regal-season.org",
        text: "<value>",
        linkUrl: "https://milky-precedent.net",
      },
    ],
    pagination: {
      totalCount: 460423,
      maxPage: 228869,
    },
    dimensions: [
      218081,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |