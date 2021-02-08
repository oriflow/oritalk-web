import { Box, Button } from '@chakra-ui/react';
import React, { FormEvent, useEffect, useRef, useState } from 'react';

interface DropDownProps {
  children: string;
  options: {
    name: string;
    value?: any;
  }[];
  variant?: string;
  rightIcon?: React.ReactElement;
  onChange?: ((event: FormEvent<HTMLButtonElement>) => void) | undefined;
}

const DropDown: React.FC<DropDownProps> = ({ children, options, ...rest }) => {
  const [show, setShow] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const documentEvent = document.addEventListener('click', (a: any) => {
      if (
        a.target.classList[1] === `drop-down${String(children).split(' ')[0]}`
      ) {
        a.preventDefault();
        a.stopPropagation();
      } else {
        setShow(false);
      }
    });
    return documentEvent;
  }, [children]);

  const [selected, setSelected] = useState(null);
  const handleSelect = (item: any) => {
    setSelected(item.name);
  };

  return (
    <Box>
      <Button
        ref={buttonRef}
        className={`drop-down${String(children).split(' ')[0]}`}
        onClick={() => setShow(m => !m)}
        {...rest}>
        {selected ?? children}
      </Button>

      {!!show && (
        <Box
          w={(buttonRef.current as any).offsetWidth}
          mt="5px"
          pos="absolute"
          bg="white"
          zIndex="1000"
          boxShadow="base">
          <Button
            onClick={() => setSelected(null)}
            w="full"
            display="block"
            variant="unstyled"
            color="text.primary"
            textAlign="left"
            p="0px 20px"
            _hover={{ bg: 'background.hover' }}
            _active={{ bg: 'background.light_secondary' }}>
            Nenhum
          </Button>

          {options.map((item, index) => (
            <Button
              onClick={() => handleSelect(item)}
              w="full"
              key={String(index)}
              display="block"
              variant="unstyled"
              color="text.primary"
              textAlign="left"
              p="0px 20px"
              _hover={{ bg: 'background.hover' }}
              _active={{ bg: 'background.light_secondary' }}>
              {item.name}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default DropDown;
