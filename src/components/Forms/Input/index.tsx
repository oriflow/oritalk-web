import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

interface InputTypes {
  name: string;
  placeholder?: string;
  icon?: JSX.Element;
  [rest: string]: any;
}

export const InputComponent: React.FC<InputTypes> = ({
  name,
  placeholder,
  icon,
  type,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Box>
      <InputGroup>
        {!!icon && (
          <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
        )}
        <Input
          placeholder={placeholder ?? ''}
          isInvalid={!!error}
          ref={inputRef}
          errorBorderColor="feedback_liquid.primary"
          defaultValue={defaultValue}
          type={type ?? 'text'}
          {...rest}
        />
      </InputGroup>
      {!!error && <Text color="red.300">{error}</Text>}
    </Box>
  );
};
