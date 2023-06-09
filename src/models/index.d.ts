import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerQualifications = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Qualifications, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly password?: string | null;
  readonly untitledfield?: string | null;
  readonly Acquisitiondate?: string | null;
  readonly QualificationsName?: string | null;
  readonly Point?: string | null;
  readonly EffectiveDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQualifications = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Qualifications, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly password?: string | null;
  readonly untitledfield?: string | null;
  readonly Acquisitiondate?: string | null;
  readonly QualificationsName?: string | null;
  readonly Point?: string | null;
  readonly EffectiveDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Qualifications = LazyLoading extends LazyLoadingDisabled ? EagerQualifications : LazyQualifications

export declare const Qualifications: (new (init: ModelInit<Qualifications>) => Qualifications) & {
  copyOf(source: Qualifications, mutator: (draft: MutableModel<Qualifications>) => MutableModel<Qualifications> | void): Qualifications;
}