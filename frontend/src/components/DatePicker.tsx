import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import { ReactComponent as IconCalendar } from "static/icons/calendar.svg";
import { format } from "date-fns";

export const DatePicker = () => {
  const [value, onChange] = useState<Date>();
  const [calendarVisible, setCalendarVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        wrapperRef.current &&
        !(wrapperRef.current as any)?.contains(event.target)
      ) {
        setCalendarVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleOpenCalendar = () => {
    setCalendarVisible(true);
  };

  const handleIconClick = (e: any) => {
    e.preventDefault();
    setCalendarVisible(!calendarVisible);
  };

  const handleChangeValue = (val: Date | undefined) => {
    if (val) {
      onChange(val);
      setCalendarVisible(false);
    }
  };

  return (
    <Box position="relative" ref={wrapperRef}>
      <InputGroup>
        <Input
          value={value ? format(value, "dd.MM.yyyy") : undefined}
          placeholder="Select date"
          onClick={handleOpenCalendar}
        />
        <InputRightElement onClick={handleIconClick} pr={2} cursor="pointer">
          <Icon width="24px" height="24px" as={IconCalendar} />
        </InputRightElement>
      </InputGroup>
      <Box
        display={calendarVisible ? "block" : "none"}
        position="absolute"
        mt="5px"
        right="0"
        w="100%"
        zIndex={2}
      >
        <Calendar onChange={handleChangeValue} className="custom-calendar" />
      </Box>
    </Box>
  );
};
