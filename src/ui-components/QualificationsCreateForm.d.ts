/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QualificationsCreateFormInputValues = {
    password?: string;
    untitledfield?: string;
    Acquisitiondate?: string;
    QualificationsName?: string;
    Point?: string;
    EffectiveDate?: string;
};
export declare type QualificationsCreateFormValidationValues = {
    password?: ValidationFunction<string>;
    untitledfield?: ValidationFunction<string>;
    Acquisitiondate?: ValidationFunction<string>;
    QualificationsName?: ValidationFunction<string>;
    Point?: ValidationFunction<string>;
    EffectiveDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QualificationsCreateFormOverridesProps = {
    QualificationsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    untitledfield?: PrimitiveOverrideProps<TextFieldProps>;
    Acquisitiondate?: PrimitiveOverrideProps<TextFieldProps>;
    QualificationsName?: PrimitiveOverrideProps<TextFieldProps>;
    Point?: PrimitiveOverrideProps<TextFieldProps>;
    EffectiveDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QualificationsCreateFormProps = React.PropsWithChildren<{
    overrides?: QualificationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QualificationsCreateFormInputValues) => QualificationsCreateFormInputValues;
    onSuccess?: (fields: QualificationsCreateFormInputValues) => void;
    onError?: (fields: QualificationsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QualificationsCreateFormInputValues) => QualificationsCreateFormInputValues;
    onValidate?: QualificationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function QualificationsCreateForm(props: QualificationsCreateFormProps): React.ReactElement;
