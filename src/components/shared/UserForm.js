import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Text,
  Link
} from "@chakra-ui/react";

export default function UserForm(props) {
  const {initialV, onSubmit, heading, code, buttonText } = props
  return (
    <>
      
      <Flex 
      align="center" 
      justify="center" h="100vh">
      <Box bg="gray:50" p={6} rounded="md" w={64}>
      <Text
          fontSize='4xl'
          textAlign={"center"}
          >{heading}</Text>
        <Formik
          initialValues={initialV}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
              {code === "change" ? 
              <FormControl>
                  <FormLabel textAlign={"center"}htmlFor="oldpassword">Old Password</FormLabel>
                  <Field
                    as={Input}
                    id="oldpassword"
                    name="oldpassword"
                    type="password"
                    variant="filled"
                  />
                </FormControl>
                :
                <FormControl>
                  <FormLabel textAlign={"center"}htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>}
                
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel textAlign={"center"}htmlFor="password">{code === "change" ? "New Password" : "Password"}</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 5) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="gray" width="full">
                  { buttonText }
                </Button>
                {(code === "signup") &&  <>
                <Text textAlign={"center"} fontSize='xs'>Already Have an Account? <Link href="/sign-in" color='blue'>Login</Link></Text> 
                </>}
                {(code === "login") &&  <>
                <Text textAlign={"center"} fontSize='xs'>Don't have an account? <Link href="/sign-up" color='blue'>Signup</Link></Text> 
                </>}
                

              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
    </>

  );
}
