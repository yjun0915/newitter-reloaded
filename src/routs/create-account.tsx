import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

export default function CreateAccount() {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name: value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <Wrapper>
      <Form>
        <Input
          onCahnge={onChange}
          name="name"
          value={name}
          placeholder="Name"
          type="text"
        />
        <Input
          onCahnge={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
        />
        <Input
          onCahnge={onChange}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          required
        />
        <Input type="submit" value="Create Account" />
      </Form>
    </Wrapper>
  );
}
