# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-11-26T04:51:12.762Z"),
        modifiedAt: new Date("2024-08-01T18:58:46.575Z"),
        id: "<value>",
        imageUrl: "https://artistic-premier.org",
        imageUrlDark: "https://happy-case.net",
        text: "<value>",
        linkUrl: "https://calculating-reward.com",
      },
    ],
    pagination: {
      totalCount: 967055,
      maxPage: 615058,
    },
    dimensions: [
      552439,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |