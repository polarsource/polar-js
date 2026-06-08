import type { CostMetadataInput } from "../models/components/costmetadatainput.js";
import type { EventMetadataInput } from "../models/components/eventmetadatainput.js";
import type { EventsIngestResponse } from "../models/components/eventsingestresponse.js";
import type { LLMMetadata } from "../models/components/llmmetadata.js";
import type { RequestOptions } from "../lib/sdks.js";

export type CustomerIdentifier =
  | { externalCustomerId: string; customerId?: never }
  | { customerId: string; externalCustomerId?: never };

export type SendEventOptions = {
  name: string;
  externalId?: string;
  parentId?: string;
  cost?: CostMetadataInput;
  llm?: LLMMetadata;
  metadata?: Record<string, EventMetadataInput>;
} & CustomerIdentifier;

export type SpanEventOptions = {
  name: string;
  externalId?: string;
  cost?: CostMetadataInput;
  llm?: LLMMetadata;
  metadata?: Record<string, EventMetadataInput>;
};

export type WithSpanOptions = {
  name: string;
  externalId: string;
  metadata?: Record<string, EventMetadataInput>;
} & CustomerIdentifier;

export interface EventsSpanClient {
  sendEvents(
    events: Array<SpanEventOptions>,
    requestOptions?: RequestOptions,
  ): Promise<EventsIngestResponse>;
}
