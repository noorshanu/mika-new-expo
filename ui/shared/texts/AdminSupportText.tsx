import { Box, Link, chakra } from '@chakra-ui/react';
import React from 'react';

interface Props {
  className?: string;
}

const AdminSupportText = ({ className }: Props) => {
  return (
    <Box className={ className }>
      <span>Need help? Contact admin team at </span>
      <Link href="mailto:info@Mikawa Inu.com">info@Mikawa Inu.com</Link>
      <span> for assistance!</span>
    </Box>
  );
};

export default chakra(AdminSupportText);
