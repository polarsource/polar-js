# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-12-06T11:25:38.185Z"),
        modifiedAt: new Date("2024-10-29T13:21:33.515Z"),
        id: "<value>",
        imageUrl: "https://fussy-responsibility.com",
        imageUrlDark: "https://untrue-lieu.org",
        text: "<value>",
        linkUrl: "https://monstrous-metal.org/",
      },
    ],
    pagination: {
      totalCount: 707682,
      maxPage: 594815,
    },
    dimensions: [
      65709,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |