import {
  Box,
  VStack,
  HStack,
  Text,
  Center,
  Input,
  FormControl,
  FormLabel,
  Link,
  Checkbox,
  Select,
  Button,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import RegisterIcon from "../assets/images/Register.png";
import CancelIcon from "../assets/images/cancel.png";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/react-date.css";
const Register = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Box h="1200px" w="1190px" bgColor={"white"}>
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
          <legend>
            <b style={{ color: "#d30126" }}>Thông tin tài khoản</b>
          </legend>
          <HStack w="100%" mb="10px" justifyContent={"space-evenly"}>
            <HStack w="100%">
              <FormControl>
                <Center>
                  <Box>
                    <FormLabel htmlFor="mst">
                      <b style={{ color: "#2c4897" }}>Mã số thuế </b>
                      <span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <Input
                      p="4px 11px"
                      h="30px"
                      w="502px"
                      border={"1px"}
                      borderColor={"#d9d9d9"}
                      id="mst"
                      type="mst"
                      placeholder="Nhập mã số thuế"
                      _placeholder={{ color: "#dedede" }}
                    />
                  </Box>
                </Center>
              </FormControl>
              <FormControl>
                <Center>
                  <Box>
                    <FormLabel htmlFor="email">
                      <b style={{ color: "#2c4897" }}>Email</b>{" "}
                      <span style={{ color: "red" }}>*</span>
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
                      placeholder="Nhập Email"
                      _placeholder={{ color: "#dedede" }}
                    />
                  </Box>
                </Center>
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
          <legend>
            <b style={{ color: "#d30126" }}>Người đại diện</b>
          </legend>
          <VStack w="100%" mb={"10px"} justifyContent={"space-between"}>
            <HStack w="100%" mt="10px" justifyContent={"space-between"}>
              <HStack w="100%" p="0 20px">
                <FormControl w="100%">
                  <Center>
                    <Box>
                      <FormLabel htmlFor="name">
                        <b style={{ color: "#2c4897" }}>Họ và tên</b>
                      </FormLabel>
                      <Input
                        p="4px 11px"
                        h="30px"
                        w="333px"
                        border={"1px"}
                        borderColor={"#d9d9d9"}
                        id="name"
                        type="name"
                        _placeholder={{ color: "#dedede" }}
                        placeholder="Nhập Họ và tên"
                      />
                    </Box>
                  </Center>
                </FormControl>
                <FormControl>
                  <Center>
                    <Box>
                      <FormLabel htmlFor="agent">
                        <b style={{ color: "#2c4897" }}>Chức vụ</b>
                      </FormLabel>
                      <Input
                        p="4px 11px"
                        h="30px"
                        w="333px"
                        color="gray"
                        border={"1px"}
                        borderColor={"#d9d9d9"}
                        id="agent"
                        type="agent"
                        placeholder="Nhập chức vụ"
                        _placeholder={{ color: "#dedede" }}
                      />
                    </Box>
                  </Center>
                </FormControl>
                <FormControl>
                  <Center>
                    <Box>
                      <FormLabel htmlFor="phone">
                        <b style={{ color: "#2c4897" }}>Điện thoại</b>{" "}
                        <span style={{ color: "red" }}>*</span>
                      </FormLabel>
                      <Input
                        p="4px 11px"
                        h="30px"
                        w="333px"
                        border={"1px"}
                        borderColor={"#d9d9d9"}
                        id="phone"
                        type="phone"
                        _placeholder={{ color: "#dedede" }}
                        placeholder="Nhập Số điện thoại"
                      />
                    </Box>
                  </Center>
                </FormControl>
              </HStack>
            </HStack>
            <HStack w="100%" mt="10px" justifyContent={"space-evenly"}>
              <HStack w="100%" p="0 20px">
                <FormControl>
                  <Center>
                    <Box>
                      <FormLabel htmlFor="CMND">
                        <b style={{ color: "#2c4897" }}>Số CMND/Hộ chiếu</b>
                        <span style={{ color: "red" }}>*</span>
                      </FormLabel>
                      <Input
                        p="4px 11px"
                        h="30px"
                        w="333px"
                        border={"1px"}
                        borderColor={"#d9d9d9"}
                        id="CMND"
                        type="CMND"
                        _placeholder={{ color: "#dedede" }}
                        placeholder="Nhập số CMND/Hộ chiếu"
                      />
                    </Box>
                  </Center>
                </FormControl>
                <FormControl>
                  <Center>
                    <Box>
                      <FormLabel htmlFor="date">
                        <b style={{ color: "#2c4897" }}>Ngày cấp</b>{" "}
                        <span style={{ color: "red" }}>*</span>
                      </FormLabel>
                      <DatePicker
                        style={{ border: "1px solid gray" }}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Nhập ngày cấp"
                        id="date"
                      />
                    </Box>
                  </Center>
                </FormControl>
                <FormControl>
                  <Center>
                    <Box>
                      <FormLabel htmlFor="address">
                        <b style={{ color: "#2c4897" }}>Nơi cấp</b>{" "}
                        <span style={{ color: "red" }}>*</span>
                      </FormLabel>
                      <Input
                        p="4px 11px"
                        h="30px"
                        w="333px"
                        border={"1px"}
                        borderColor={"#d9d9d9"}
                        id="address"
                        type="address"
                        _placeholder={{ color: "#dedede" }}
                        placeholder="Nhập nơi cấp"
                      />
                    </Box>
                  </Center>
                </FormControl>
              </HStack>
            </HStack>
          </VStack>
        </fieldset>
        <Box w="100%" mt={"40px"} h={"552px"}>
          <fieldset
            style={{
              border: "1px solid #2c4897",
              borderRadius: "8px",
              height: "552px",
              width: "100%",
              color: "black",
            }}
          >
            <legend>
              <b style={{ color: "#d30126" }}>Thông tin doanh nghiệp</b>
            </legend>
            <VStack width="100%">
              <Box width="100%" p="0 40px">
                <FormControl width="100%">
                  <FormLabel htmlFor="nameCompany">
                    <b style={{ color: "#2c4897" }}>Tên doanh nghiệp</b>{" "}
                    <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <Input
                    p="4px 11px"
                    h="30px"
                    w="100%"
                    border={"1px"}
                    borderColor={"#d9d9d9"}
                    id="nameCompany"
                    type="nameCompany"
                    _placeholder={{ color: "#dedede" }}
                    placeholder="Nhập tên doanh nghiệp"
                  />
                </FormControl>
              </Box>
              <Box width="100%" p="0 40px">
                <FormControl width="100%">
                  <FormLabel htmlFor="nameNational">
                    <b style={{ color: "#2c4897" }}>Tên giao dịch quốc tế</b>
                  </FormLabel>
                  <Input
                    p="4px 11px"
                    h="30px"
                    w="100%"
                    border={"1px"}
                    borderColor={"#d9d9d9"}
                    id="nameNational"
                    type="nameNational"
                    _placeholder={{ color: "#dedede" }}
                    placeholder="Nhập tên giao dịch quốc tế"
                  />
                </FormControl>
              </Box>
              <HStack width="100%" p="0 17px">
                <FormControl w="100%">
                  <Center>
                    <Box>
                      <FormLabel htmlFor="province">
                        <b style={{ color: "#2c4897" }}>Tỉnh / Thành</b>{" "}
                        <span style={{ color: "red" }}>*</span>
                      </FormLabel>
                      <Select
                        id="province"
                        w={"333px"}
                        h="30px"
                        border={"1px"}
                        borderColor={"#d9d9d9"}
                        color="#d9d9d9"
                        placeholder="-- Chọn tỉnh / thành --"
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </Box>
                  </Center>
                </FormControl>
                <FormControl w="100%">
                  <Center>
                    <Box>
                      <FormLabel htmlFor="district">
                        <b style={{ color: "#2c4897" }}>Quận / huyện</b>{" "}
                        <span style={{ color: "red" }}>*</span>
                      </FormLabel>
                      <Select
                        id="district"
                        w={"333px"}
                        h="30px"
                        border={"1px"}
                        borderColor={"#d9d9d9"}
                        color="#d9d9d9"
                        placeholder="-- Chọn quận / huyện --"
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </Box>
                  </Center>
                </FormControl>
                <FormControl w="100%">
                  <Center>
                    <Box>
                      <FormLabel htmlFor="ward">
                        <b style={{ color: "#2c4897" }}>Phường / xã</b>{" "}
                        <span style={{ color: "red" }}>*</span>
                      </FormLabel>
                      <Select
                        id="ward"
                        w={"333px"}
                        h="30px"
                        border={"1px"}
                        borderColor={"#d9d9d9"}
                        color="#d9d9d9"
                        placeholder="-- Chọn phường / xã --"
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </Box>
                  </Center>
                </FormControl>
              </HStack>
              <Box width="100%" p="0 40px">
                <FormControl width="100%">
                  <FormLabel htmlFor="addressDetail">
                    <b style={{ color: "#2c4897" }}>Địa chỉ chi tiết</b>
                  </FormLabel>
                  <Input
                    p="4px 11px"
                    h="30px"
                    w="100%"
                    border={"1px"}
                    borderColor={"#d9d9d9"}
                    id="addressDetail"
                    type="addressDetail"
                    _placeholder={{ color: "#dedede" }}
                    placeholder="Nhập địa chỉ chi tiết"
                  />
                </FormControl>
              </Box>
              <Box display="flex" flexDirection="row" w="100%">
                <FormControl w="370px" paddingLeft={"40px"}>
                  <FormLabel htmlFor="phoneNumber">
                    <b style={{ color: "#2c4897" }}>Điện thoại</b>
                  </FormLabel>
                  <Input
                    p="4px 11px"
                    h="30px"
                    w="100%"
                    border={"1px"}
                    borderColor={"#d9d9d9"}
                    id="phoneNumber"
                    type="phoneNumber"
                    _placeholder={{ color: "#dedede" }}
                    placeholder="Nhập điện thoại"
                  />
                </FormControl>
                <FormControl w="336px" ml={"45px"}>
                  <FormLabel htmlFor="fax">
                    <b style={{ color: "#2c4897" }}>Fax</b>
                  </FormLabel>
                  <Input
                    p="4px 11px"
                    h="30px"
                    w="100%"
                    border={"1px"}
                    borderColor={"#d9d9d9"}
                    id="fax"
                    type="fax"
                    _placeholder={{ color: "#dedede" }}
                    placeholder="Nhập Fax"
                  />
                </FormControl>
              </Box>
              <Box w="100%">
                <HStack w="100%" p="0 20px">
                  <FormControl w="100%">
                    <Center>
                      <Box fontSize={"14px"}>
                        <Center display={"flex"} flexDirection={"column"}>
                          <FormLabel htmlFor="certificate" paddingLeft={"20px"}>
                            <b style={{ color: "#2c4897", fontSize: "14px" }}>
                              Fax Nhập Fax Giấy chứng nhận đăng ký kinh doanh
                              (hoặc đăng ký doanh nghiệp) số:
                            </b>
                          </FormLabel>
                          <Input
                            p="4px 11px"
                            h="30px"
                            w="333px"
                            border={"1px"}
                            borderColor={"#d9d9d9"}
                            id="certificate"
                            type="certificate"
                            _placeholder={{ color: "#dedede" }}
                            placeholder="Giấy chứng nhận/ mã số doanh nghiệp"
                          />
                        </Center>
                      </Box>
                    </Center>
                  </FormControl>
                  <FormControl paddingTop={"23px"}>
                    <Center>
                      <Box>
                        <FormLabel htmlFor="agent">
                          <b style={{ color: "#2c4897" }}>Ngày cấp</b>
                        </FormLabel>
                        <DatePicker
                          style={{ border: "1px solid gray" }}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          placeholderText="Nhập ngày cấp"
                          id="date"
                        />
                      </Box>
                    </Center>
                  </FormControl>
                  <FormControl paddingTop={"23px"}>
                    <Center>
                      <Box>
                        <FormLabel htmlFor="phone">
                          <b style={{ color: "#2c4897" }}>Cơ quan cấp phép</b>
                        </FormLabel>
                        <Input
                          p="4px 11px"
                          h="30px"
                          w="333px"
                          border={"1px"}
                          borderColor={"#d9d9d9"}
                          id="phone"
                          type="phone"
                          _placeholder={{ color: "#dedede" }}
                          placeholder="Cơ quán cấp phép"
                        />
                      </Box>
                    </Center>
                  </FormControl>
                </HStack>
              </Box>
              <Box w="100%">
                <HStack w="100%">
                  <FormControl w="333px" paddingLeft={"40px"} mr="35px">
                    <Box>
                      <FormLabel htmlFor="TTBYT">
                        <b style={{ color: "#2c4897" }}>
                          Nhóm TTBYT công khai giá
                        </b>{" "}
                        <span style={{ color: "red" }}>*</span>
                      </FormLabel>
                      <Input
                        p="4px 11px"
                        h="30px"
                        w="333px"
                        border={"1px"}
                        borderColor={"#d9d9d9"}
                        id="TTBYT"
                        type="TTBYT"
                        _placeholder={{ color: "#dedede" }}
                        placeholder="Chọn nhóm TTBYT công khai giá"
                      />
                    </Box>
                  </FormControl>
                  <FormControl w="100%" p="0 40px">
                    <Box>
                      <FormLabel htmlFor="TTBYT">
                        <b style={{ color: "#2c4897" }}>
                          Cung cấp giấy ủy quyền hợp lệ
                        </b>
                      </FormLabel>
                      <Button
                        colorScheme={"gray.200"}
                        border={"1px solid #dedede"}
                        h="30px"
                        w="99px"
                        p="0 15px"
                        color="black !important"
                      >
                        Tải lên
                      </Button>
                    </Box>
                  </FormControl>
                </HStack>
              </Box>
            </VStack>
          </fieldset>
        </Box>
      </Box>
      <Box mt="715px">
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
          <Box mt={"5px"}>
            <Button
              bgColor={"#2c4897"}
              p="0 15px"
              borderRadius={"10px"}
              size="sm"
              mr={"10px"}
            >
              <Image src={RegisterIcon} alt="" boxSize={"20px"} mr="6px" />
              Đăng ký
            </Button>
            <Button
              bgColor={"white"}
              borderRadius={"10px"}
              border={"1px solid #dedede"}
              color="black !important"
              size="sm"
            >
              <Image src={CancelIcon} alt="" boxSize={"20px"} mr="6px" />
              Button
            </Button>
          </Box>
          <Text fontWeight={700} color={"black"} mt={"5px"}>
            Ghi chú: Những trường thông tin có dấu{" "}
            <span style={{ color: "red" }}>*</span> là bắt buộc
          </Text>
          <Text color={"red"}>
            Sau khi bộ phận Quản trị xác thực thông tin doanh nghiệp đăng ký tài
            khoản, hệ thống sẽ gửi mật khẩu vào tài khoản email và sử dụng mã số
            thuế làm tài khoản đăng nhập của bạn
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
