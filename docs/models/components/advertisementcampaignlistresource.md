# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components/advertisementcampaignlistresource.js";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2024-02-09T00:05:44.146Z"),
      modifiedAt: new Date("2024-12-04T15:42:27.623Z"),
      id: "<value>",
      imageUrl: "https://forsaken-platter.org/",
      imageUrlDark: "https://mixed-cake.com",
      text: "<value>",
      linkUrl: "https://acceptable-jellyfish.net",
    },
  ],
  pagination: {
    totalCount: 209963,
    maxPage: 459564,
  },
  dimensions: [
    493061,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |