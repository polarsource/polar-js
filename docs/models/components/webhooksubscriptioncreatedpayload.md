# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2023-07-31T21:34:52.600Z"),
    modifiedAt: new Date("2022-09-25T19:36:57.431Z"),
    id: "<value>",
    amount: 330422,
    currency: "Pound Sterling",
    recurringInterval: "month",
    status: "past_due",
    currentPeriodStart: new Date("2024-07-12T13:06:18.566Z"),
    currentPeriodEnd: new Date("2024-04-24T06:18:14.536Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-09-28T06:11:19.187Z"),
    endedAt: new Date("2023-10-05T14:17:24.216Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Raymundo_Bashirian67@yahoo.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://impeccable-interior.biz/",
    },
    product: {
      createdAt: new Date("2023-07-20T04:11:44.002Z"),
      modifiedAt: new Date("2024-09-05T03:00:40.973Z"),
      id: "<value>",
      name: "<value>",
      description:
        "mozzarella cricket help knowledgeably whoever aha yarmulke contrast",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-10-02T08:39:37.015Z"),
          modifiedAt: new Date("2024-05-19T10:16:04.212Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 320837,
          maximumAmount: 986116,
          presetAmount: 666499,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-05-23T13:04:23.905Z"),
          modifiedAt: new Date("2024-09-24T17:09:33.132Z"),
          id: "<value>",
          type: "ads",
          description:
            "private whoa rapidly how subdued legal wildly clamor sun duh",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/opt/include",
          mimeType: "<value>",
          size: 759924,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-12-28T06:54:24.691Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-01-02T05:30:50.844Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2022-12-24T14:14:54.996Z"),
      modifiedAt: new Date("2024-03-29T18:50:11.175Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionCreatedPayloadType](../../models/components/webhooksubscriptioncreatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |