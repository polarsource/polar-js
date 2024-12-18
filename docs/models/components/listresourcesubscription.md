# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2023-07-06T07:10:14.256Z"),
      modifiedAt: new Date("2023-06-20T07:51:26.885Z"),
      id: "<value>",
      amount: 321582,
      currency: "Zloty",
      recurringInterval: "month",
      status: "canceled",
      currentPeriodStart: new Date("2022-02-10T03:13:50.725Z"),
      currentPeriodEnd: new Date("2023-03-02T10:40:57.891Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2023-10-28T14:57:15.731Z"),
      endedAt: new Date("2023-04-11T02:28:22.606Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      metadata: {
        "key": 38800,
      },
      customer: {
        createdAt: new Date("2024-08-08T09:47:23.975Z"),
        modifiedAt: new Date("2022-03-27T02:41:35.039Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Adolf73@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Bangladesh",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://basic-angle.biz/",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Agustin.Schmeler@gmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-08-08T00:51:23.196Z"),
        modifiedAt: new Date("2023-12-26T03:04:40.757Z"),
        id: "<value>",
        name: "<value>",
        description:
          "defendant brown across farmer reluctantly allegation indeed near whoever",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 971752,
        },
        prices: [
          {
            createdAt: new Date("2023-08-04T08:43:53.329Z"),
            modifiedAt: new Date("2023-12-03T11:45:28.906Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 666273,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-07-27T19:36:21.058Z"),
            modifiedAt: new Date("2022-08-17T07:24:06.006Z"),
            id: "<value>",
            description: "hold till yellowish character",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              repositoryOwner: "polarsource",
              repositoryName: "private_repo",
              permission: "triage",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/tmp",
            mimeType: "<value>",
            size: 479139,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-01-14T06:12:45.829Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-12-29T02:23:28.417Z"),
            sizeReadable: "<value>",
            publicUrl: "https://smart-skeleton.biz/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-04-29T17:28:15.276Z"),
              modifiedAt: new Date("2023-03-08T16:00:29.346Z"),
              id: "<value>",
              metadata: {
                "key": 211584,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 493800,
            required: false,
          },
        ],
      },
      price: {
        createdAt: new Date("2024-08-25T15:21:53.101Z"),
        modifiedAt: new Date("2024-01-01T18:30:52.387Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      discount: {
        duration: "forever",
        durationInMonths: 231807,
        type: "fixed",
        basisPoints: 961669,
        createdAt: new Date("2022-04-07T10:12:13.244Z"),
        modifiedAt: new Date("2023-08-04T14:49:09.371Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-08-09T15:14:51.080Z"),
        endsAt: new Date("2022-08-02T04:49:48.526Z"),
        maxRedemptions: 736480,
        redemptionsCount: 165116,
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 938113,
    maxPage: 663325,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |