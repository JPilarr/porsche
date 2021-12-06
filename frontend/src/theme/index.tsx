import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Heading from "./components/heading";
import Input from "./components/input";
import Link from "./components/link";
import Modal from "./components/modal";
import NumberInput from "./components/numberInput";
import Radio from "./components/radio";
import Select from "./components/select";
import Text from "./components/text";
import fonts from "./fonts";
import fontSizes from "./fontSizes";

const styles = {
  global: {
    body: { color: "fonts.black", fontSize: "15px" },
  },
};

const components = {
  Button,
  Heading,
  Checkbox,
  Input,
  NumberInput,
  Link,
  Modal,
  Radio,
  Select,
  Text,
};

const theme = {
  ...extendTheme({ components, colors, fonts, styles, fontSizes }),
};

export default theme;
