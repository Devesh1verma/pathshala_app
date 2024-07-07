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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Container className="d-flex align-items-center gap-3" data-aos="zoom-in">
      <Image src={imgUrl} width={48} height={48} alt={title} />
      <div className="d-flex justify-content-start flex-column gap-0">
        <h2 className="fs-2 fw-bold text-gray-900">
          {isClient ? (
            <CountUp start={0} end={value} duration={4} separator="," />
          ) : (
            "0"
          )}
        </h2>
        <p className="fs-6 fw-light text-gray-200">{title}</p>
      </div>
    </Container>
  );
};

export default StatCard;
