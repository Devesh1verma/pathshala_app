import Container from "react-bootstrap/Container";
import Image from "next/image";
import { useEffect, useState } from "react";

const Clients = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Function to detect dark mode
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handler);

    return () => darkModeMediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Container className={`text-center py-5 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
      <div className="font-inter" data-aos="fade-down">
        <h1 className={`fs-1 fw-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Clients</h1>
        <p className={`fw-light fs-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-200'}`}>
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="d-flex align-items-center w-100 justify-content-between flex-wrap mt-5" data-aos="zoom-in">
        {[1, 2, 3, 4, 5, 6, 7].map((value) => (
          <Image
            src={`/Clients/client${value}.svg`}
            width={48}
            height={48}
            alt={`client-${value}`}
            key={value}
          />
        ))}
      </div>
    </Container>
  );
};

export default Clients;
