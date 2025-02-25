# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations/advertisementslist.js";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-08-30T02:29:01.777Z"),
        modifiedAt: new Date("2023-10-15T09:45:27.346Z"),
        id: "<value>",
        imageUrl: "https://nocturnal-maintainer.org",
        imageUrlDark: "https://black-flint.com/",
        text: "<value>",
        linkUrl: "https://writhing-signature.net",
      },
    ],
    pagination: {
      totalCount: 645225,
      maxPage: 575514,
    },
    dimensions: [
      567790,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |