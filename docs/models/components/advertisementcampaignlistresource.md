# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2024-01-06T16:42:23.865Z"),
      modifiedAt: new Date("2024-05-26T02:27:18.532Z"),
      id: "<value>",
      imageUrl: "https://limping-gym.name",
      imageUrlDark: "https://spiteful-thyme.net/",
      text: "<value>",
      linkUrl: "https://svelte-complication.org",
    },
  ],
  pagination: {
    totalCount: 657186,
    maxPage: 420927,
  },
  dimensions: [
    888024,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |