import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

declare type InputTypes = {
  name: string;
  placeholder?: string;
  icon?: JSX.Element;
};

export const InputComponent = ({
  name,
  placeholder,
  icon,
  ...rest
}: InputTypes) => {
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
          borderRadius="0"
          background="background.700"
          isInvalid={!!error}
          ref={inputRef}
          errorBorderColor="red.300"
          defaultValue={defaultValue}
          {...rest}
        />
      </InputGroup>
      {!!error && <Text color="red.300">{error}</Text>}
    </Box>
  );
};
