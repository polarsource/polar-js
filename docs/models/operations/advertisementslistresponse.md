# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-10-01T07:24:57.730Z"),
        modifiedAt: new Date("2022-10-12T06:39:45.765Z"),
        id: "<value>",
        imageUrl: "https://lawful-millet.org",
        imageUrlDark: "https://total-fort.org",
        text: "<value>",
        linkUrl: "https://internal-amnesty.net",
      },
    ],
    pagination: {
      totalCount: 502106,
      maxPage: 786189,
    },
    dimensions: [
      748023,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |