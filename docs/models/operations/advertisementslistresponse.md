# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-02-25T22:53:59.329Z"),
        modifiedAt: new Date("2022-12-30T01:41:47.858Z"),
        id: "<value>",
        imageUrl: "https://webbed-statue.info/",
        imageUrlDark: "https://swift-perp.com/",
        text: "<value>",
        linkUrl: "https://calculating-suitcase.biz",
      },
    ],
    pagination: {
      totalCount: 435353,
      maxPage: 795457,
    },
    dimensions: [
      677509,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |