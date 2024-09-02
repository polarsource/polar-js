# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
    items: [
        {
            createdAt: new Date("2023-10-21T00:43:02.324Z"),
            modifiedAt: new Date("2024-12-01T09:39:29.562Z"),
            id: "<value>",
            imageUrl: "https://talkative-volcano.org",
            imageUrlDark: "http://quarrelsome-professional.info",
            text: "<value>",
            linkUrl: "https://reasonable-lever.name",
        },
    ],
    pagination: {
        totalCount: 333965,
        maxPage: 29100,
    },
    dimensions: [790840],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |