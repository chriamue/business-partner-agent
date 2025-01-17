/*
 * Copyright (c) 2020-2022 - for information on the respective copyright owner
 * see the NOTICE file and/or the repository at
 * https://github.com/hyperledger-labs/business-partner-agent
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { components } from "backend-types";

// Request types
export type IssueCredentialRequestIndy =
  components["schemas"]["IssueCredentialRequest.IssueIndyCredentialRequest"];

export type IssueCredentialRequestJsonLd =
  components["schemas"]["IssueCredentialRequest.IssueLDCredentialRequest"];

export type IssueOobCredentialRequest =
  components["schemas"]["IssueOOBCredentialRequest"];

export type CredentialOfferRequest =
  components["schemas"]["CredentialOfferRequest"];

export type CreateCredDefRequest =
  components["schemas"]["CreateCredDefRequest"];

export type CreateSchemaRequest = components["schemas"]["CreateSchemaRequest"];

export type AddTagRequest = components["schemas"]["AddTagRequest"];

export type SendMessageRequest = components["schemas"]["SendMessageRequest"];

export type SendProofRequest = components["schemas"]["SendProofRequest"];

export type AddSchemaRequest = components["schemas"]["AddSchemaRequest"];

export type UpdateSchemaRequest = components["schemas"]["UpdateSchemaRequest"];

export type UpdatePartnerRequest =
  components["schemas"]["UpdatePartnerRequest"];

export type DeclineExchangeRequest =
  components["schemas"]["DeclineExchangeRequest"];

export type ApproveProofRequest = components["schemas"]["ApproveProofRequest"];

export type ProofRequestedAttributes =
  components["schemas"]["PresentProofRequest.ProofRequest.ProofRequestedAttributes"];

export type PresentationRequestCredentials =
  components["schemas"]["PresentationRequestCredentialsIndy"];

export type PresentationRequestCredentialsDif =
  components["schemas"]["PresentationRequestCredentialsLD"];

// Data and response types
export type SchemaAPI = components["schemas"]["SchemaAPI"];

export type TagAPI = components["schemas"]["TagAPI"];

export type PartnerAPI = components["schemas"]["PartnerAPI"];

export type AddPartnerRequest = components["schemas"]["AddPartnerRequest"];

export type PartnerCredential =
  components["schemas"]["PartnerAPI.PartnerCredential"];

export type APICreateInvitationResponse =
  components["schemas"]["APICreateInvitationResponse"];

export type CreatePartnerInvitationRequest =
  components["schemas"]["CreatePartnerInvitationRequest"];

export type AcceptInvitationRequest =
  components["schemas"]["AcceptInvitationRequest"];

export type CheckInvitationRequest =
  components["schemas"]["CheckInvitationRequest"];

export type BPAStats = components["schemas"]["BPAStats"];

export type TrustedIssuer = components["schemas"]["TrustedIssuer"];

export type AddTrustedIssuerRequest =
  components["schemas"]["AddTrustedIssuerRequest"];

export type UpdateTrustedIssuerRequest =
  components["schemas"]["UpdateTrustedIssuerRequest"];

export type DIDDocument = components["schemas"]["DIDDocument"];

export type CredDef = components["schemas"]["CredDef"];

export type CredEx = components["schemas"]["CredEx"];

export type Tag = components["schemas"]["Tag"];

export type ActivityType = components["schemas"]["ActivityType"];

export type ActivityItem = components["schemas"]["ActivityItem"];

export type ChatMessage = components["schemas"]["ChatMessage"];

export type AriesProofExchange = components["schemas"]["AriesProofExchange"];

export type ProofTemplate = components["schemas"]["ProofTemplate"];

export type ConnectionState = components["schemas"]["ConnectionState"];

export type AttributeGroupUi = {
  ui: {
    selectedAttributes: Attribute[];
    selectedRestrictionsByTrustedIssuer: SchemaRestrictions[];
    predicateConditionsErrorCount: number;
  };
};

export type PresentationRequestVersion =
  components["schemas"]["PresentationRequestVersion"];

export type MyDocumentAPI = components["schemas"]["MyDocumentAPI"];

export type WalletDocumentRequest =
  components["schemas"]["WalletDocumentRequest"];

export type PaginationCommand = components["schemas"]["PaginationCommand"];

export type CredentialType = components["schemas"]["CredentialType"];

export type AriesCredential = components["schemas"]["AriesCredential"];

export type AttributeGroup = components["schemas"]["AttributeGroup"];

export type Attribute = components["schemas"]["Attribute"];

export type SchemaRestrictions = components["schemas"]["SchemaRestrictions"];

export type ValueCondition = components["schemas"]["ValueCondition"];

export type TAARecord = components["schemas"]["TAAInfo.TAARecord"];

export type TAADigestRequest = components["schemas"]["TAADigestRequest"];

export type WalletCredentialRequest =
  components["schemas"]["WalletCredentialRequest"];

export type RequestCredentialRequest =
  components["schemas"]["RequestCredentialRequest"];

export type RuntimeConfig = components["schemas"]["RuntimeConfig"];

export type CustomSchemaAttribute = {
  defaultAttribute: boolean;
  text: string;
};

// Page response from server
export class Page<T> {
  size?: number;
  totalPages?: number;
  totalSize?: number;
  pageNumber?: number;
  numberOfElements?: number;
  content?: T;
}

// Translates between datatable pagination names and server names, see also PaginationCommand
export class PageOptions {
  page = 1;
  itemsPerPage = 10;
  sortBy: string[] = [];
  sortDesc: boolean[] = [];

  static toUrlSearchParams(options: PageOptions = new PageOptions()) {
    const params = new URLSearchParams();
    const optionKeys = Object.keys(options).length;
    const currentPage = optionKeys > 0 ? Number(options.page) - 1 : 0;
    params.append("page", currentPage.toString());
    if (options.itemsPerPage) {
      params.append("size", options.itemsPerPage.toString());
    }
    if (options.sortBy && options.sortBy.length > 0) {
      params.append("q", String(options.sortBy));
    }
    if (options.sortDesc) {
      params.append("desc", String(options.sortDesc));
    }
    return params;
  }
}
