/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Qualifications } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QualificationsUpdateFormInputValues = {
    password?: string;
    untitledfield?: string;
    Acquisitiondate?: string;
    QualificationsName?: string;
    Point?: string;
    EffectiveDate?: string;
};
export declare type QualificationsUpdateFormValidationValues = {
    password?: ValidationFunction<string>;
    untitledfield?: ValidationFunction<string>;
    Acquisitiondate?: ValidationFunction<string>;
    QualificationsName?: ValidationFunction<string>;
    Point?: ValidationFunction<string>;
    EffectiveDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QualificationsUpdateFormOverridesProps = {
    QualificationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    untitledfield?: PrimitiveOverrideProps<TextFieldProps>;
    Acquisitiondate?: PrimitiveOverrideProps<TextFieldProps>;
    QualificationsName?: PrimitiveOverrideProps<TextFieldProps>;
    Point?: PrimitiveOverrideProps<TextFieldProps>;
    EffectiveDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QualificationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: QualificationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    qualifications?: Qualifications;
    onSubmit?: (fields: QualificationsUpdateFormInputValues) => QualificationsUpdateFormInputValues;
    onSuccess?: (fields: QualificationsUpdateFormInputValues) => void;
    onError?: (fields: QualificationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QualificationsUpdateFormInputValues) => QualificationsUpdateFormInputValues;
    onValidate?: QualificationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QualificationsUpdateForm(props: QualificationsUpdateFormProps): React.ReactElement;
