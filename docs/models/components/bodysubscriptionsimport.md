# BodySubscriptionsImport

## Example Usage

```typescript
import { BodySubscriptionsImport } from "@polar-sh/sdk/models/components";
import { openAsBlob } from "node:fs";

let value: BodySubscriptionsImport = {
    file: await openAsBlob("./sample-file"),
    organizationId: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file`                                                                                                                                                                               | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [components.FileT](../../models/components/filet.md) | :heavy_check_mark:                                                                                                                                                                   | CSV file with emails.                                                                                                                                                                |
| `organizationId`                                                                                                                                                                     | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | The organization ID on which to import the subscriptions.                                                                                                                            |