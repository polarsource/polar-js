# LicenseKeyWithActivations

## Example Usage

```typescript
import { LicenseKeyWithActivations } from "@polar-sh/sdk/models/components";

let value: LicenseKeyWithActivations = {
  id: "<value>",
  organizationId: "<value>",
  userId: "<value>",
  user: {
    id: "<value>",
    publicName: "<value>",
    email: "Domenico18@gmail.com",
    avatarUrl: "https://remorseful-gerbil.name/",
  },
  benefitId: "<value>",
  key: "<key>",
  displayKey: "<value>",
  status: "revoked",
  limitActivations: 612688,
  usage: 722729,
  limitUsage: 663909,
  validations: 762104,
  lastValidatedAt: new Date("2022-06-10T08:23:28.124Z"),
  expiresAt: new Date("2022-04-14T01:23:42.431Z"),
  activations: [
    {
      id: "<value>",
      licenseKeyId: "<value>",
      label: "<value>",
      meta: {},
      createdAt: new Date("2023-01-07T10:24:38.476Z"),
      modifiedAt: new Date("2023-06-13T02:00:00.189Z"),
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.LicenseKeyUser](../../models/components/licensekeyuser.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `benefitId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The benefit ID.                                                                               |
| `key`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `displayKey`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.LicenseKeyStatus](../../models/components/licensekeystatus.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `limitActivations`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usage`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `limitUsage`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `validations`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastValidatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activations`                                                                                 | [components.LicenseKeyActivationBase](../../models/components/licensekeyactivationbase.md)[]  | :heavy_check_mark:                                                                            | N/A                                                                                           |