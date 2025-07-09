"use client";
import { ListUl } from "react-bootstrap-icons";

import Button from "@/views/shared/bootstrap/Button";

const DropdownTitle = () => {
  return (
    <div className="groups__dropdown-content">
      <div className="groups__dropdown-list">
        <Button className="groups__dropdown-button-list" variant="outline-dark">
          <ListUl className="groups__dropdown-icon-list" size="24" />
        </Button>
      </div>
      <div className="groups__dropdown-count">
        <div className="groups__dropdown-quantity">23</div>
        <div className="groups__dropdown-description">Продукта</div>
      </div>
      <div className="groups__dropdown-date">
        <div className="groups__dropdown-date-short">10 / 12</div>
        <div className="groups__dropdown-date-long">06 / Окт / 2017</div>
      </div>
    </div>
  );
};

export default DropdownTitle;
