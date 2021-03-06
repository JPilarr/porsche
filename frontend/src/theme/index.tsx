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
import Progress from "./components/progress";
import Radio from "./components/radio";
import Select from "./components/select";
import Table from "./components/table";
import Tag from "./components/tag";
import Text from "./components/text";
import fonts from "./fonts";
import fontSizes from "./fontSizes";
import textStyles from "./textStyles";

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
  Progress,
  Text,
};

const theme = {
  ...extendTheme({ components, colors, fonts, styles, fontSizes, textStyles }),
};

export default theme;
