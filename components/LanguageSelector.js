import Link from "next/link";
import { useState } from "react";

export default () => {
  const [languages] = useState([
    {
      code: "en",
      name: "English",
    },
    {
      code: "nl",
      name: "Dutch",
    },
  ]);

  return (
    <ul>
      {languages.map((language) => {
        return (
          <li key={language.code}>
            <Link as={`/${language.code}/`} href={`/[lang]`}>
              <a>{language.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
