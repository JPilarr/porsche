import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import Accordion from "./components/accordion";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import FormLabel from "./components/formLabel";
import Heading from "./components/heading";
import Input from "./components/input";
import Link from "./components/link";
import Modal from "./components/modal";
import NumberInput from "./components/numberInput";
import Radio from "./components/radio";
import Select from "./components/select";
import Text from "./components/text";
import Table from "./components/table";
import Tag from "./components/tag";
import fonts from "./fonts";
import fontSizes from "./fontSizes";

const styles = {
  global: {
    body: { color: "font.black", fontSize: "16px" },
  },
};

const components = {
  Accordion,
  Button,
  Heading,
  FormLabel,
  Checkbox,
  Input,
  NumberInput,
  Link,
  Modal,
  Radio,
  Select,
  Table,
  Tag,
  Text,
};

const theme = {
  ...extendTheme({ components, colors, fonts, styles, fontSizes }),
};

export default theme;
