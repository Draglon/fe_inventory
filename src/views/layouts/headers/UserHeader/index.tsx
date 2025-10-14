"use client";
import { useTranslations, useLocale } from "next-intl";
import { Row, Col } from "react-bootstrap";
import { Clock } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

import {
  fullWeekdayName,
  timeDateFromISO,
  fullDateWithLocaleOtherTypeFromISO,
} from "@/utils/dateTime";
import socket from "@/lib/socket";
import Logo from "@/views/shared/Logo";
import Input from "@/views/shared/bootstrap/Input";

const UserHeader = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    socket.on("currentTime", (time) => {
      setCurrentTime(time);
    });

    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  return (
    <header className="header">
      <Row>
        <Col lg="2">
          <Logo />
        </Col>
        <Col lg="8">
          <Input
            id="search"
            size="sm"
            placeholder={t("shared.search")}
            className="input-search"
          />
        </Col>
        <Col lg="2">
          <div className="date-time">
            <Row>
              <Col className="date-time__day">
                {currentTime && fullWeekdayName(currentTime, locale)}
              </Col>
            </Row>
            <Row>
              <Col>
                {currentTime && (
                  <>
                    <span className="date-time__date mr-16">
                      {fullDateWithLocaleOtherTypeFromISO(currentTime, locale)}
                    </span>
                    <span className="date-time__time">
                      <Clock className="date-time__icon-clock" size="14" />
                      <span>{timeDateFromISO(currentTime)}</span>
                    </span>
                  </>
                )}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default UserHeader;
