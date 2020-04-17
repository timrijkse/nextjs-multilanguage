import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LanguageSelector from "../../components/LanguageSelector";

export default () => {
  const router = useRouter();

  return (
    <Container>
      <h1>Hello world! The language slug is: {router.query.lang}</h1>
      <LanguageSelector />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
