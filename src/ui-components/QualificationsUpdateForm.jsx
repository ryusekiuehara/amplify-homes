/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Qualifications } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function QualificationsUpdateForm(props) {
  const {
    id: idProp,
    qualifications: qualificationsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    password: "",
    untitledfield: "",
    Acquisitiondate: "",
    QualificationsName: "",
    Point: "",
    EffectiveDate: "",
  };
  const [password, setPassword] = React.useState(initialValues.password);
  const [untitledfield, setUntitledfield] = React.useState(
    initialValues.untitledfield
  );
  const [Acquisitiondate, setAcquisitiondate] = React.useState(
    initialValues.Acquisitiondate
  );
  const [QualificationsName, setQualificationsName] = React.useState(
    initialValues.QualificationsName
  );
  const [Point, setPoint] = React.useState(initialValues.Point);
  const [EffectiveDate, setEffectiveDate] = React.useState(
    initialValues.EffectiveDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = qualificationsRecord
      ? { ...initialValues, ...qualificationsRecord }
      : initialValues;
    setPassword(cleanValues.password);
    setUntitledfield(cleanValues.untitledfield);
    setAcquisitiondate(cleanValues.Acquisitiondate);
    setQualificationsName(cleanValues.QualificationsName);
    setPoint(cleanValues.Point);
    setEffectiveDate(cleanValues.EffectiveDate);
    setErrors({});
  };
  const [qualificationsRecord, setQualificationsRecord] = React.useState(
    qualificationsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Qualifications, idProp)
        : qualificationsModelProp;
      setQualificationsRecord(record);
    };
    queryData();
  }, [idProp, qualificationsModelProp]);
  React.useEffect(resetStateValues, [qualificationsRecord]);
  const validations = {
    password: [],
    untitledfield: [],
    Acquisitiondate: [],
    QualificationsName: [],
    Point: [],
    EffectiveDate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          password,
          untitledfield,
          Acquisitiondate,
          QualificationsName,
          Point,
          EffectiveDate,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Qualifications.copyOf(qualificationsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "QualificationsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Password"
        isRequired={false}
        isReadOnly={false}
        value={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              password: value,
              untitledfield,
              Acquisitiondate,
              QualificationsName,
              Point,
              EffectiveDate,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <TextField
        label="Untitledfield"
        isRequired={false}
        isReadOnly={false}
        value={untitledfield}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              password,
              untitledfield: value,
              Acquisitiondate,
              QualificationsName,
              Point,
              EffectiveDate,
            };
            const result = onChange(modelFields);
            value = result?.untitledfield ?? value;
          }
          if (errors.untitledfield?.hasError) {
            runValidationTasks("untitledfield", value);
          }
          setUntitledfield(value);
        }}
        onBlur={() => runValidationTasks("untitledfield", untitledfield)}
        errorMessage={errors.untitledfield?.errorMessage}
        hasError={errors.untitledfield?.hasError}
        {...getOverrideProps(overrides, "untitledfield")}
      ></TextField>
      <TextField
        label="Acquisitiondate"
        isRequired={false}
        isReadOnly={false}
        value={Acquisitiondate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              password,
              untitledfield,
              Acquisitiondate: value,
              QualificationsName,
              Point,
              EffectiveDate,
            };
            const result = onChange(modelFields);
            value = result?.Acquisitiondate ?? value;
          }
          if (errors.Acquisitiondate?.hasError) {
            runValidationTasks("Acquisitiondate", value);
          }
          setAcquisitiondate(value);
        }}
        onBlur={() => runValidationTasks("Acquisitiondate", Acquisitiondate)}
        errorMessage={errors.Acquisitiondate?.errorMessage}
        hasError={errors.Acquisitiondate?.hasError}
        {...getOverrideProps(overrides, "Acquisitiondate")}
      ></TextField>
      <TextField
        label="Qualifications name"
        isRequired={false}
        isReadOnly={false}
        value={QualificationsName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              password,
              untitledfield,
              Acquisitiondate,
              QualificationsName: value,
              Point,
              EffectiveDate,
            };
            const result = onChange(modelFields);
            value = result?.QualificationsName ?? value;
          }
          if (errors.QualificationsName?.hasError) {
            runValidationTasks("QualificationsName", value);
          }
          setQualificationsName(value);
        }}
        onBlur={() =>
          runValidationTasks("QualificationsName", QualificationsName)
        }
        errorMessage={errors.QualificationsName?.errorMessage}
        hasError={errors.QualificationsName?.hasError}
        {...getOverrideProps(overrides, "QualificationsName")}
      ></TextField>
      <TextField
        label="Point"
        isRequired={false}
        isReadOnly={false}
        value={Point}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              password,
              untitledfield,
              Acquisitiondate,
              QualificationsName,
              Point: value,
              EffectiveDate,
            };
            const result = onChange(modelFields);
            value = result?.Point ?? value;
          }
          if (errors.Point?.hasError) {
            runValidationTasks("Point", value);
          }
          setPoint(value);
        }}
        onBlur={() => runValidationTasks("Point", Point)}
        errorMessage={errors.Point?.errorMessage}
        hasError={errors.Point?.hasError}
        {...getOverrideProps(overrides, "Point")}
      ></TextField>
      <TextField
        label="Effective date"
        isRequired={false}
        isReadOnly={false}
        value={EffectiveDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              password,
              untitledfield,
              Acquisitiondate,
              QualificationsName,
              Point,
              EffectiveDate: value,
            };
            const result = onChange(modelFields);
            value = result?.EffectiveDate ?? value;
          }
          if (errors.EffectiveDate?.hasError) {
            runValidationTasks("EffectiveDate", value);
          }
          setEffectiveDate(value);
        }}
        onBlur={() => runValidationTasks("EffectiveDate", EffectiveDate)}
        errorMessage={errors.EffectiveDate?.errorMessage}
        hasError={errors.EffectiveDate?.hasError}
        {...getOverrideProps(overrides, "EffectiveDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || qualificationsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || qualificationsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
