# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2024-08-17T11:52:17.865Z"),
      modifiedAt: new Date("2022-03-22T21:55:35.437Z"),
      id: "<value>",
      imageUrl: "https://secondary-recovery.org/",
      imageUrlDark: "https://gaseous-kiss.net",
      text: "<value>",
      linkUrl: "https://diligent-issue.biz/",
    },
  ],
  pagination: {
    totalCount: 862560,
    maxPage: 586277,
  },
  dimensions: [
    348665,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |