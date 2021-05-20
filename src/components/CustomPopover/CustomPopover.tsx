import {
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
} from "@chakra-ui/react";
import { ElementType } from "react";

interface CustomPopoverProps {
  header: string;
  body: string;
  icon: ElementType;
}

export function CustomPopover({ body, header, icon }: CustomPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <Icon as={icon}></Icon>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontSize="18px" fontWeight="semibold">
          {header}
        </PopoverHeader>
        <PopoverBody fontSize="14px" fontWeight="medium">
          {body}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
