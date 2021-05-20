import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text
} from "@chakra-ui/react";
import { CustomPopover } from "../CustomPopover/CustomPopover";

interface TextBoxProps {
  heading: string;
  body: string;
  leading?: PopoverInfo;
}

interface PopoverInfo {
  header: string;
  body: string;
}

export function TextBox({ heading, body, leading }: TextBoxProps) {
  return (
    <Box w="98px" h="99px">
      <Text color="yellow.900" fontSize="48px" fontWeight="semibold">
        {heading}
      </Text>
      <HStack>
        <Text
          color="gray.400"
          fontSize="24px"
          fontWeight="semibold"
          whiteSpace="nowrap"
        >
          {body}
        </Text>
        {leading && (
          <CustomPopover
            body={leading.body}
            header={leading.header}
            icon={InfoOutlineIcon}
          />
        )}
      </HStack>
    </Box>
  );
}
