# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2024-01-05T12:52:43.202Z"),
      modifiedAt: new Date("2022-08-06T10:10:02.781Z"),
      id: "<value>",
      amount: 920259,
      currency: "Belize Dollar",
      recurringInterval: "year",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2024-10-29T14:44:49.718Z"),
      currentPeriodEnd: new Date("2022-12-22T14:47:06.400Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2023-10-09T05:48:00.559Z"),
      endedAt: new Date("2022-05-22T22:36:52.681Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      metadata: {
        "key": 608836,
      },
      customer: {
        createdAt: new Date("2024-04-24T16:23:33.210Z"),
        modifiedAt: new Date("2023-09-03T13:06:12.088Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        email: "Elias97@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Zambia",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://damaged-hexagon.name",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Alex44@yahoo.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2022-10-23T06:03:23.045Z"),
        modifiedAt: new Date("2023-11-07T01:27:54.679Z"),
        id: "<value>",
        name: "<value>",
        description:
          "yum pace chainstay archive hmph blindly and foolishly horn",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": false,
        },
        prices: [
          {
            createdAt: new Date("2024-11-07T20:33:08.048Z"),
            modifiedAt: new Date("2022-04-11T09:48:38.635Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 271782,
            maximumAmount: 346394,
            presetAmount: 853503,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-11-30T23:12:05.956Z"),
            modifiedAt: new Date("2024-08-14T07:54:23.604Z"),
            id: "<value>",
            description: "farmer reluctantly allegation",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              archived: {
                "key": false,
              },
              files: [
                "<value>",
              ],
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/var/spool",
            mimeType: "<value>",
            size: 762184,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-01-07T20:44:43.574Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-09-15T06:36:44.176Z"),
            sizeReadable: "<value>",
            publicUrl: "https://giving-gallery.org/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-03-23T13:46:19.980Z"),
              modifiedAt: new Date("2022-06-21T20:48:34.925Z"),
              id: "<value>",
              metadata: {
                "key": 493734,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 591232,
            required: false,
          },
        ],
      },
      price: {
        createdAt: new Date("2024-08-01T16:15:19.431Z"),
        modifiedAt: new Date("2022-09-10T01:03:30.449Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      discount: {
        duration: "forever",
        type: "percentage",
        amount: 396197,
        currency: "Rand",
        createdAt: new Date("2023-10-18T06:30:37.569Z"),
        modifiedAt: new Date("2022-08-20T12:38:00.388Z"),
        id: "<value>",
        metadata: {
          "key": 640046,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-01-01T05:38:26.098Z"),
        endsAt: new Date("2023-12-01T07:03:06.217Z"),
        maxRedemptions: 189614,
        redemptionsCount: 208310,
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 241463,
    maxPage: 732994,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |