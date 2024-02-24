import styled from "styled-components";

const Wrapper = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

export default function CreateAccount() {
  return (
    <Wrapper>
      <Form>
        <Input name="name" placeholder="Name" type="text" />
        <Input name="email" placeholder="Email" type="email" />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <Input type="submit" value="Create Account" />
      </Form>
    </Wrapper>
  );
}
