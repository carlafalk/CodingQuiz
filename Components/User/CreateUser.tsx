import { Formik } from "formik";
import React, { useRef } from "react";
import { AvatarProps } from "react-native-bigheads";
import uuid from "react-native-uuid";
import styled from "styled-components/native";
import * as Yup from "yup";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { defaultAvatar } from "../../data/avatarData";
import { colorsModel } from "../../models/ColorsModel";
import StandardButton from "../Buttons/StandardButton";
import STMText from "../Texts/ShareTechMonoText";
import AvatarCreator from "./AvatarCreator";

interface Props {
  handleClose: () => void;
}

export const userNameSchema = Yup.object().shape({
  username: Yup.string()
    .required("username cant be empty")
    .min(2, "must contain atleast 2 characters")
    .matches(/^\S*$/, "username cannot contain spaces"),
});

const CreateUser = ({ handleClose }: Props) => {
  const { themeColors } = useTheme();
  const { createUser } = useUser();
  const avatarRef = useRef<AvatarProps>(defaultAvatar);

  return (
    <>
      <ContentContainer>
        <Formik
          validationSchema={userNameSchema}
          initialValues={{
            username: "",
          }}
          onSubmit={(values) => {
            createUser({
              id: uuid.v4() as string,
              username: values.username,
              avatar: avatarRef.current.valueOf(),
              gameSessions: [],
              achievements: [],
            });

            handleClose();
          }}
        >
          {({ handleChange, handleBlur, touched, handleSubmit, values, errors }) => {
            return (
              <>
                <Input
                  themeColors={themeColors}
                  label="username"
                  value={values.username}
                  error={errors.username}
                  touched={touched.username}
                  isValidating
                  onChangeText={handleChange("username")}
                  handleBlur={handleBlur("username")}
                />
                {errors.username && <STMText size={10}>{errors.username}</STMText>}
                <AvatarCreator avatarRef={avatarRef} />
                <StandardButton title="submit" color={themeColors.mustard} onPress={handleSubmit} />
              </>
            );
          }}
        </Formik>
      </ContentContainer>
    </>
  );
};

export default CreateUser;

const ContentContainer = styled.View`
  padding: 30px;
`;

const Input = styled.TextInput<{
  themeColors: colorsModel;
}>`
  color: ${(props) => props.themeColors.commons.white};
  height: 40px;
  border: 1px solid ${(props) => props.themeColors.commons.white};
  padding: 10px;
  margin: 10px 0;
`;
