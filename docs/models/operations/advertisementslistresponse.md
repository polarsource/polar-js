# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
    result: {
        items: [
            {
                createdAt: new Date("2022-11-01T09:06:32.789Z"),
                modifiedAt: new Date("2022-12-16T03:38:16.047Z"),
                id: "<value>",
                imageUrl: "http://quarrelsome-square.com",
                imageUrlDark: "https://sandy-spruce.biz",
                text: "<value>",
                linkUrl: "http://delightful-graph.name",
            },
        ],
        pagination: {
            totalCount: 552822,
            maxPage: 20107,
        },
        dimensions: [164940],
    },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |