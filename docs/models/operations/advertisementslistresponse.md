# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-09-10T00:03:37.019Z"),
        modifiedAt: new Date("2024-11-20T14:19:41.572Z"),
        id: "<value>",
        imageUrl: "https://dense-programme.name/",
        imageUrlDark: "https://chubby-monasticism.info/",
        text: "<value>",
        linkUrl: "https://frivolous-gym.biz",
      },
    ],
    pagination: {
      totalCount: 200932,
      maxPage: 508014,
    },
    dimensions: [
      829139,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |