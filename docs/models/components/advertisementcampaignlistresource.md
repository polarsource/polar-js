# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2023-08-21T00:23:22.376Z"),
      modifiedAt: new Date("2025-01-19T23:07:05.447Z"),
      id: "<value>",
      imageUrl: "https://unfortunate-hygienic.net",
      imageUrlDark: "https://gifted-outset.com/",
      text: "<value>",
      linkUrl: "https://colossal-sanity.biz",
    },
  ],
  pagination: {
    totalCount: 732906,
    maxPage: 404758,
  },
  dimensions: [
    747629,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |