import React from "react";
import {
  SettingCheck,
  SettingOption,
  SettingRadio,
  SettingSelect,
} from "../components/SettingOption";
import { ListGroup } from "react-bootstrap";

const Setting = () => {
  const option = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className="p-3 p-lg-5 w-100">
      <h3 className="mb-5 mt-3">Setting</h3>
      <div className="bg-body p-3 p-lg-5">
        <ListGroup>
          <SettingOption
            information="Click the button for action"
            submitValue="Button"
          />
          <SettingCheck information={"On or off"} />
          <SettingRadio
            information={"Option title"}
            varID="varName"
            options={option}
          />
          <SettingSelect information="Select Options" options={option} />
        </ListGroup>
      </div>
    </div>
  );
};

export default Setting;
