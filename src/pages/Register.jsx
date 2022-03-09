import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Center,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Link,
  Checkbox,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Register = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Box w="1190px" bgColor={"white"}>
      <HStack bg="#382e87" h="20px" maxW="1200px">
        <HStack>
          <Center>
            <Text cursor={"pointer"} onClick={() => console.log("Click")}>
              Trang chủ/
            </Text>
            <Text cursor={"pointer"} onClick={() => console.log("Click")}>
              Danh mục
            </Text>
          </Center>
        </HStack>
      </HStack>
      <Link color={"#003265"}>
        <b>Hướng dẫn</b>
      </Link>
      <Box h={"101px"} w="100%">
        <fieldset
          style={{
            border: "1px solid #2c4897",
            borderRadius: "8px",
            height: "130px",
            width: "100%",
            color: "black",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <legend>Thông tin tài khoản</legend>
          <HStack w="100%" mb="10px" justifyContent={"space-evenly"}>
            <HStack>
              <FormControl>
                <FormLabel htmlFor="Email">
                  Mã số thuế <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Input
                  p="4px 11px"
                  h="30px"
                  w="502px"
                  border={"1px"}
                  borderColor={"#d9d9d9"}
                  id="email"
                  type="email"
                  placeholder="Nhập mã số thuế"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">
                  Email <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Input
                  p="4px 11px"
                  h="30px"
                  w="502px"
                  color="gray"
                  border={"1px"}
                  borderColor={"#d9d9d9"}
                  id="email"
                  type="email"
                  placeholder="Nhập mã số thuế"
                />
              </FormControl>
            </HStack>
          </HStack>
        </fieldset>
      </Box>
      <Box h={"101px"} w="100%" mt={"40px"}>
        <fieldset
          style={{
            border: "1px solid #2c4897",
            borderRadius: "8px",
            height: "200px",
            width: "100%",
            color: "black",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <legend>Người đại diện</legend>
          <VStack w="100%" mb={"10px"} justifyContent={"space-evenly"}>
            <HStack w="100%" mt="10px" justifyContent={"space-evenly"}>
              <HStack>
                <FormControl>
                  <FormLabel htmlFor="Email">
                    Mã số thuế <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <Input
                    p="4px 11px"
                    h="30px"
                    w="333px"
                    border={"1px"}
                    borderColor={"#d9d9d9"}
                    id="email"
                    type="email"
                    placeholder="Nhập mã số thuế"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">
                    Email <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <Input
                    p="4px 11px"
                    h="30px"
                    w="333px"
                    color="gray"
                    border={"1px"}
                    borderColor={"#d9d9d9"}
                    id="email"
                    type="email"
                    placeholder="Nhập mã số thuế"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="Email">
                    Mã số thuế <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <Input
                    p="4px 11px"
                    h="30px"
                    w="333px"
                    border={"1px"}
                    borderColor={"#d9d9d9"}
                    id="email"
                    type="email"
                    placeholder="Nhập mã số thuế"
                  />
                </FormControl>
              </HStack>
            </HStack>
            <HStack w="100%" mt="10px" justifyContent={"space-evenly"}>
              <HStack>
                <FormControl>
                  <FormLabel htmlFor="Email">
                    Mã số thuế <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <Input
                    p="4px 11px"
                    h="30px"
                    w="333px"
                    border={"1px"}
                    borderColor={"#d9d9d9"}
                    id="email"
                    type="email"
                    placeholder="Nhập mã số thuế"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">
                    Email <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <DatePicker
                    style={{ border: "1px solid gray" }}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="Email">
                    Mã số thuế <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <Input
                    p="4px 11px"
                    h="30px"
                    w="333px"
                    border={"1px"}
                    borderColor={"#d9d9d9"}
                    id="email"
                    type="email"
                    placeholder="Nhập mã số thuế"
                  />
                </FormControl>
              </HStack>
            </HStack>
          </VStack>
        </fieldset>
      </Box>
      <Box mt="120px">
        <Box>
          <Text color="#333333" fontSize={"14px"}>
            <b>
              Tổ chức, cá nhân thực hiện công khai giá phải chịu trách nhiệm đảm
              bảo tính hợp lệ, chính xác của thông tin và phạm vi công khai theo
              đúng chỉ định của Chủ sở hữu trang thiết bị y tế hoặc Chủ sở hữu
              số lưu hành trang thiết bị y tế.
            </b>
          </Text>
          <Checkbox iconColor="gray" color="#333333" defaultChecked>
            Tôi đã đọc, hiểu rõ trách nhiệm và cam kết thực hiện.
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
