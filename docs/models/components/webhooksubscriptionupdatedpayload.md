# WebhookSubscriptionUpdatedPayload

Sent when a new subscription is updated. This event fires if the subscription is cancelled, both immediately and if the subscription is cancelled at the end of the current period.

**Discord & Slack support:** On cancellation

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUpdatedPayload = {
  data: {
    createdAt: new Date("2022-09-25T08:37:09.478Z"),
    modifiedAt: new Date("2024-03-02T11:27:13.468Z"),
    id: "<value>",
    amount: 112788,
    currency: "Zambian Kwacha",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2023-04-11T07:26:27.442Z"),
    currentPeriodEnd: new Date("2022-11-10T23:09:56.492Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-07-04T17:51:43.386Z"),
    endedAt: new Date("2024-08-21T20:11:48.916Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    user: {
      email: "Jevon.Hauck@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "<value>",
    },
    product: {
      createdAt: new Date("2024-03-14T03:58:08.482Z"),
      modifiedAt: new Date("2022-04-18T16:21:56.604Z"),
      id: "<value>",
      name: "<value>",
      description: "Horizontal tertiary application",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-11-14T13:50:30.123Z"),
          modifiedAt: new Date("2024-07-07T16:43:27.039Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          priceAmount: 935493,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-04-14T11:56:41.335Z"),
          modifiedAt: new Date("2022-01-01T23:45:36.080Z"),
          id: "<value>",
          type: "custom",
          description: "Enhanced homogeneous core",
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
          path: "/usr/share",
          mimeType: "<value>",
          size: 324273,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-10-10T09:16:42.423Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-12-04T08:48:14.783Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2022-11-16T15:59:09.505Z"),
      modifiedAt: new Date("2024-04-30T20:40:52.185Z"),
      id: "<value>",
      isArchived: false,
      priceCurrency: "<value>",
      minimumAmount: 273349,
      maximumAmount: 380583,
      presetAmount: 478576,
      recurringInterval: "year",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionUpdatedPayloadType](../../models/components/webhooksubscriptionupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |