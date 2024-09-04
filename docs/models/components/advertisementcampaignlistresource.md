# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
    items: [
        {
            createdAt: new Date("2022-11-14T14:15:52.743Z"),
            modifiedAt: new Date("2024-02-02T00:22:56.064Z"),
            id: "<value>",
            imageUrl: "https://quick-witted-reactant.org",
            imageUrlDark: "http://adorable-cruelty.name",
            text: "<value>",
            linkUrl: "http://outlying-watercress.name",
        },
    ],
    pagination: {
        totalCount: 833819,
        maxPage: 962771,
    },
    dimensions: [914791],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |