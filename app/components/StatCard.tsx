import Image from "next/image";
import Container from "react-bootstrap/Container";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

type StatsCardProps = {
  imgUrl: string;
  value: number;
  title: string;
};

const StatCard = ({ imgUrl, value, title }: StatsCardProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document.getElementById(title)?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight) {
        setHasScrolled(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [title]);

  return (
    <Container className="d-flex align-items-center gap-3" data-aos="zoom-in" id={title}>
      <Image src={imgUrl} width={48} height={48} alt={title} />
      <div className="d-flex justify-content-start flex-column gap-0">
        <h2 className="fs-2 fw-bold text-gray-900">
          {hasScrolled ? <CountUp end={value} duration={2.5} separator="," /> : value.toLocaleString()}
        </h2>
        <p className="fs-6 fw-light text-gray-200">{title}</p>
      </div>
    </Container>
  );
};

export default StatCard;
