# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2024-03-01T07:32:00.160Z"),
      modifiedAt: new Date("2023-10-16T13:56:30.312Z"),
      id: "<value>",
      imageUrl: "https://extra-large-daughter.info/",
      imageUrlDark: "https://forsaken-recommendation.name/",
      text: "<value>",
      linkUrl: "https://silky-airbus.name",
    },
  ],
  pagination: {
    totalCount: 438417,
    maxPage: 361300,
  },
  dimensions: [
    992382,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |