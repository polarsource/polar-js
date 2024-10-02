# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2024-07-28T14:21:16.823Z"),
      modifiedAt: new Date("2023-07-18T10:45:52.901Z"),
      id: "<value>",
      imageUrl: "https://mediocre-pliers.org",
      imageUrlDark: "https://uncommon-configuration.net/",
      text: "<value>",
      linkUrl: "https://granular-velocity.org",
    },
  ],
  pagination: {
    totalCount: 285557,
    maxPage: 202683,
  },
  dimensions: [
    358990,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |