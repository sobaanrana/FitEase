import React, { useState } from "react";
import "./FAQs.css";
import "antd/dist/antd.css";

import { Collapse } from "antd";
const { Panel } = Collapse;
const FAQs = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="imgDiv">
      <div className=" imgDiv ">
        <div className="headerFaqs">
          <h1>FAQs</h1>
          <p>These are the most frequently asked questions</p>
        </div>

        <div className="container faqs">
          {" "}
          <Collapse defaultActiveKey={[]} className="panel">
            <Panel header="This is panel header 1" key="1">
              <p>lorem</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>lorem</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>lorem</p>
            </Panel>
            <Panel header="This is panel header 3" key="4">
              <p>lorem</p>
            </Panel>
            <Panel header="This is panel header 3" key="5">
              <p>lorem</p>
            </Panel>
            <Panel header="This is panel header 3" key="5">
              <p>lorem</p>
            </Panel>
            <Panel header="This is panel header 3" key="5">
              <p>lorem</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
