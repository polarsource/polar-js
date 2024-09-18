# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2022-08-13T14:18:45.126Z"),
      modifiedAt: new Date("2024-01-13T02:49:01.847Z"),
      id: "<value>",
      imageUrl: "http://portly-politics.name",
      imageUrlDark: "https://fatherly-marksman.com",
      text: "<value>",
      linkUrl: "http://thrifty-anise.name",
    },
  ],
  pagination: {
    totalCount: 710337,
    maxPage: 299643,
  },
  dimensions: [
    7884,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |